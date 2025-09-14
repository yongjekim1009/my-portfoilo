import styles from "./AboutPage.module.css";
import { BackgroundSection } from "./../common/BackgroundSection";

const AboutPage = () => {
  return (
    <div className={styles["about-page-section"]}>
      <section className={styles["about-header"]}>
        <div className={styles["about-container"]}>
          <p>About Me</p>
          <h1>브랜드의 핵심 가치를 담은 비주얼 아이덴티티 설계</h1>
          <p>
            브랜드의 가치를 시각화하
            <br />
            기술과 창의성을 연결해 완성도 높은 결과물을 지향합니다.
          </p>
        </div>
      </section>

      <div className={styles["about-divider"]}></div>

      <section className={styles["about-intorduce"]}>
        <div className={styles["about-container"]}>
          <div className={styles["about-label"]}>Introduce</div>
          <div className={styles["about-title"]}>
            <h2>
              안녕하세요,
              <br />웹 디자이너 김용제입니다.
            </h2>
            <p>
              브랜드의 핵심 가치를 담은 비주얼 아이덴티티 설계와
              <br />
              고객에게 다가갈 수 있는 창의적을 만드는 것에 집중하고 있습니다.
            </p>
          </div>

          <div className={styles["about-card-wrapper"]}>
            <div className={`${styles["about-card"]} ${styles["card1"]}`}>
              <div className={styles["about-card-img"]}></div>
              <div className={styles["about-card-content"]}>
                <h3 className={styles["about-card-title"]}>
                  감각과 논리의 균형
                </h3>
                <p className={styles["about-card-description"]}>
                  감성적인 비주얼과 직관적인
                  <br />
                  사용자 경험을 함께 고려합니다.
                </p>
              </div>
            </div>

            <div className={`${styles["about-card"]} ${styles["card2"]}`}>
              <div className={styles["about-card-img"]}></div>
              <div className={styles["about-card-content"]}>
                <h3 className={styles["about-card-title"]}>
                  브랜드와 사용자의 연결
                </h3>
                <p className={styles["about-card-description"]}>
                  브랜드 메시지를 정확히 전달하는
                  <br />
                  디자인을 추구합니다.
                </p>
              </div>
            </div>

            <div className={`${styles["about-card"]} ${styles["card3"]}`}>
              <div className={styles["about-card-img"]}></div>
              <div className={styles["about-card-content"]}>
                <h3 className={styles["about-card-title"]}>지속적인 성장</h3>
                <p className={styles["about-card-description"]}>
                  새로운 기술과 디자인 트렌드를
                  <br />
                  빠르게 흡수하고 실무에 반영합니다.
                </p>
              </div>
            </div>

            <div className={`${styles["about-card"]} ${styles["card4"]}`}>
              <div className={styles["about-card-img"]}></div>
              <div className={styles["about-card-content"]}>
                <h3 className={styles["about-card-title"]}>협업과 소통</h3>
                <p className={styles["about-card-description"]}>
                  다양한 관점을 존중하고 팀워크 속에서
                  <br />더 나은 결과를 지향합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackgroundSection />

      <section className={styles["about-mind"]}>
        <div className={styles["about-container"]}>
          <div className={styles["about-label"]}>Mind</div>
          <div className={styles["about-title"]}>
            <h2>
              신뢰할 수 있는 <br />
              크리에이티브 파트너가 되겠습니다.
            </h2>
          </div>
          <div className={styles["about-mind-card-wrapper"]}>
            <div className={styles["about-mind-card"]}>
              <div className={styles["about-mind-card-title"]}>
                <span className={styles["about-mind-card-no"]}>01. </span>
                Who I Am
              </div>

              <div className={styles["about-mind-quote"]}>
                '픽셀을 디자인하는 것을 넘어 가치를 만듭니다.'
              </div>
              <div className={styles["about-mind-description"]}>
                <p>
                  새로운 것을 배우는 걸 좋아하며 트렌드를 읽고 성장을 즐깁니다.
                  <br />
                  문제를 해결하는 데 주저하지 않고 팀원들과 아이디어를 나누며
                  <br />더 나은 방향을 찾는 것을 좋아합니다.
                </p>
              </div>
            </div>

            <div className={styles["about-mind-card"]}>
              <div className={styles["about-mind-card-title"]}>
                <span className={styles["about-mind-card-no"]}>02. </span>
                How I Work
              </div>
              <div className={styles["about-mind-quote"]}>
                ‘좋은 디자인은 혼자가 아닌 함께 만들어가는 것이라고 믿습니다.’
              </div>
              <div className={styles["about-mind-description"]}>
                <p>
                  시각적 완성도뿐만 아니라 사용자 경험과 팀워크를 중요하게
                  생각합니다.
                  <br />
                  동료들의 의견을 경청하고 새로운 아이디어를 빠르게 시도하며
                  <br />
                  협업 속에서 더 나은 결과물을 만들어 내는 것에 즐거움을
                  느낍니다.
                </p>
              </div>
            </div>

            <div className={styles["about-mind-card"]}>
              <div className={styles["about-mind-card-title"]}>
                <span className={styles["about-mind-card-no"]}>03. </span>
                What I Do Best
              </div>

              <div className={styles["about-mind-quote"]}>
                ‘감각과 논리를 통해 브랜드의 가치를 시각적으로 구현합니다.’
              </div>
              <div className={styles["about-mind-description"]}>
                <p>
                  디자인과 개발을 모두 경험하며 얻게 된 가장 큰 강점은
                  <br />
                  사용자의 시선과 기술적 가능성을 함께 고려할 수 있다는
                  것입니다.
                </p>
              </div>
            </div>

            <div className={styles["about-mind-card"]}>
              <div className={styles["about-mind-card-title"]}>
                <span className={styles["about-mind-card-no"]}>04. </span>
                Where I’m Going
              </div>

              <div className={styles["about-mind-quote"]}>
                ‘혼자 잘하는 사람보다, 함께 성장하는 사람이 되고자 합니다.’
              </div>
              <div className={styles["about-mind-description"]}>
                <p>
                  혼자만의 성과보다 팀 전체의 성장에 기여한 역할에 더 큰 보람을
                  느낍니다.
                  <br />
                  새로운 기술과 디자인 트렌드를 빠르게 흡수해 팀원들과 공유하며
                  <br />
                  다양한 관점을 존중하고 열린 마음으로 협력하는 것을 중요하게
                  생각합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackgroundSection />
    </div>
  );
};

export default AboutPage;
