import { create } from "zustand";
import p001 from "../assets/images/portfolio/promotion/promotion-001.jpg";
import d001 from "../assets/images/portfolio/detail/detail-001.jpg";
import b001 from "../assets/images/portfolio/banner/banner-001.jpg";

const DATA = {
  promotion: [
    {
      id: "web-1",
      category: "프로모션",
      title: "웹디자인 1",
      alt: "웹디자인 1",
      thumb: p001,
      images: p001,
      description: "프로모션 웹디자인 1 설명.",
    },
    {
      id: "web-2",
      category: "프로모션",
      title: "웹디자인 2",
      alt: "웹디자인 2",
      thumb: p001,
      images: p001,
      description: "프로모션 웹디자인 2 설명.",
    },
    {
      id: "web-3",
      category: "프로모션",
      title: "웹디자인 3",
      alt: "웹디자인 3",
      thumb: p001,
      images: p001,
      description: "프로모션 웹디자인 3 설명.",
    },
    {
      id: "web-4",
      category: "프로모션",
      title: "웹디자인 4",
      alt: "웹디자인 4",
      thumb: p001,
      images: p001,
      description: "프로모션 웹디자인 4 설명.",
    },
    {
      id: "web-5",
      category: "프로모션",
      title: "웹디자인 5",
      alt: "웹디자인 5",
      thumb: p001,
      images: p001,
      description: "프로모션 웹디자인 5 설명.",
    },
    {
      id: "web-6",
      category: "프로모션",
      title: "웹디자인 6",
      alt: "웹디자인 6",
      thumb: p001,
      images: p001,
      description: "프로모션 웹디자인 6 설명.",
    },
  ],
  detail: [
    {
      id: "detail-1",
      category: "상세페이지",
      title: "상세페이지 1",
      alt: "상세페이지 1",
      thumb: d001,
      images: d001,
      description: "상세페이지 1 설명.",
    },
    {
      id: "detail-2",
      category: "상세페이지",
      title: "상세페이지 2",
      alt: "상세페이지 2",
      thumb: d001,
      images: d001,
      description: "상세페이지 2 설명.",
    },
    {
      id: "detail-3",
      category: "상세페이지",
      title: "상세페이지 3",
      alt: "상세페이지 3",
      thumb: d001,
      images: d001,
      description: "상세페이지 3 설명.",
    },
    {
      id: "detail-4",
      category: "상세페이지",
      title: "상세페이지 4",
      alt: "상세페이지 4",
      thumb: d001,
      images: d001,
      description: "상세페이지 4 설명.",
    },
    {
      id: "detail-5",
      category: "상세페이지",
      title: "상세페이지 5",
      alt: "상세페이지 5",
      thumb: d001,
      images: d001,
      description: "상세페이지 5 설명.",
    },
  ],
  banner: [
    {
      id: "banner-1",
      category: "배너",
      title: "배너 1",
      alt: "배너 1",
      thumb: b001,
      images: b001,
      description: "배너 1 설명.",
    },
    {
      id: "banner-2",
      category: "배너",
      title: "배너 2",
      alt: "배너 2",
      thumb: b001,
      images: b001,
      description: "배너 2 설명.",
    },
    {
      id: "banner-3",
      category: "배너",
      title: "배너 3",
      alt: "배너 3",
      thumb: b001,
      images: b001,
      description: "배너 3 설명.",
    },
    {
      id: "banner-4",
      category: "배너",
      title: "배너 4",
      alt: "배너 4",
      thumb: b001,
      images: b001,
      description: "배너 4 설명.",
    },
    {
      id: "banner-5",
      category: "배너",
      title: "배너 5",
      alt: "배너 5",
      thumb: b001,
      images: b001,
      description: "배너 5 설명.",
    },
    {
      id: "banner-6",
      category: "배너",
      title: "배너 6",
      alt: "배너 6",
      thumb: b001,
      images: b001,
      description: "배너 6 설명.",
    },
  ],
};

const FALLBACK = "promotion";

const usePortfolioStore = create((set, get) => ({
  data: DATA,

  // 카테고리별 전체 리스트
  getListByCategory: (category) => {
    const d = get().data;
    const key = Object.prototype.hasOwnProperty.call(d, category)
      ? category
      : FALLBACK;
    return d[key] ?? [];
  },

  // 썸네일 전용 리스트(기존 컴포넌트 호환을 위해 src 별칭 제공)
  getThumbnails: (category) => {
    const list = get().getListByCategory(category);
    return list.map((it) => ({
      id: it.id,
      alt: it.alt || it.title,
      title: it.title,
      category: it.category,
      src: it.thumb,
    }));
  },

  // id로 단일 항목 찾기
  findById: (id) => {
    const d = get().data;
    for (const key of Object.keys(d)) {
      const found = d[key].find((item) => item.id === id);
      if (found) return found;
    }
    return null;
  },
}));

export default usePortfolioStore;
