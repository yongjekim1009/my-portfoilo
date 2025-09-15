import { useEffect, useMemo, useRef } from "react";
import styles from "./PortfolioList.module.css";
import usePortfolioStore from "../../../store/portfolioStore";

const FALLBACK = "promotion";
const TARGET = 8;

export default function PortfolioList({
  category,
  pxPerSec = 80, // 속도: 초당 몇 px 이동할지
}) {
  const railRef = useRef(null);
  const frameRef = useRef(0);
  const offsetRef = useRef(0);
  const lastTsRef = useRef(0);
  const pausedRef = useRef(false);

  const getThumbnails = usePortfolioStore((s) => s.getThumbnails);

  // 원본 (비면 FALLBACK)
  const raw = useMemo(() => {
    const d = getThumbnails(category);
    return d.length ? d : getThumbnails(FALLBACK);
  }, [category, getThumbnails]);

  // 최신 우선 정렬
  const sorted = useMemo(() => {
    if (!raw.length) return [];
    const hasCreatedAt = raw.some((it) => it?.createdAt);
    return hasCreatedAt
      ? [...raw].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      : raw;
  }, [raw]);

  // 8개 채우기
  const base = useMemo(() => {
    if (!sorted.length) return [];
    const picked = sorted.slice(0, TARGET);
    if (picked.length < TARGET) {
      const fill = [];
      while (fill.length < TARGET) fill.push(...picked);
      return fill.slice(0, TARGET);
    }
    return picked;
  }, [sorted]);

  // 렌더: 최소 2세트 이상이 화면을 넘도록 충분히 붙여줌(초기 구성)
  const renderList = useMemo(() => {
    // 3세트 정도 붙여 시작하면 초기 재배치 빈도 줄어듭니다.
    return [...base, ...base, ...base];
  }, [base]);

  // hover 일시정지 관리
  const onEnter = () => {
    pausedRef.current = true;
  };
  const onLeave = () => {
    pausedRef.current = false;
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let rafId = 0;

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // s
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        // 1) 이동
        offsetRef.current -= pxPerSec * dt;
        rail.style.transform = `translate3d(${offsetRef.current}px,0,0)`;

        // 2) 왼쪽으로 사라진 카드들을 뒤로 보냄
        //    (gap과 width를 합쳐서, 완전히 벗어난 만큼만 순서 재배치)
        const gap = getComputedStyle(rail).gap || "0px";
        const gapPx = parseFloat(gap) || 0;

        // 첫 자식이 화면 왼쪽을 완전히 벗어났다면 뒤로 이동
        // 여러 개가 한 번에 벗어날 수 있으므로 while 사용
        let first = rail.firstElementChild;
        while (first) {
          const firstRect = first.getBoundingClientRect();
          const railRect = rail.parentElement.getBoundingClientRect();

          // 첫 카드의 오른쪽 끝이 뷰포트 왼쪽보다 왼쪽이면(완전히 벗어남)
          if (firstRect.right < railRect.left) {
            const w = first.offsetWidth; // 고정폭/반응형 상관없이 현재 렌더 폭
            rail.appendChild(first); // 뒤로 보냄
            // 우리가 왼쪽으로 당겨 놓은 만큼을 되돌려 연속성 유지
            offsetRef.current += w + gapPx;
            rail.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
            first = rail.firstElementChild; // 갱신 후 다시 검사
          } else {
            break;
          }
        }
      }

      rafId = requestAnimationFrame(step);
      frameRef.current = rafId;
    };

    rafId = requestAnimationFrame(step);
    frameRef.current = rafId;

    // 리사이즈 시 위치 살짝 보정(강제 reflow 억제용으로 최소화)
    const onResize = () => {
      // 아무것도 안 해도 되지만, 급격한 레이아웃 변경 시 살짝 초기화
      // offsetRef.current 값을 0~(-첫 아이템 폭) 사이로 clamp 해도 OK
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      lastTsRef.current = 0;
    };
  }, [pxPerSec, base]);

  if (!base.length) return null;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.viewport}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        aria-label="끊김 없는 무한 트랙"
      >
        <ul ref={railRef} className={styles.rail}>
          {renderList.map((item, idx) => (
            <li className={styles.item} key={`${item.id ?? item.src}-${idx}`}>
              <img
                src={item.src}
                alt={item.alt ?? ""}
                loading="lazy"
                className={styles["card-img"]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
