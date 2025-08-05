const portfolioData = {
  웹디자인: [
    /* ... */
  ],
  상세페이지: [
    /* ... */
  ],
  배너: [
    /* ... */
  ],
};

const PortfolioList = ({ category }) => (
  <div>
    {portfolioData[category].map((item, idx) => (
      <div key={idx}>{/* 포트폴리오 카드 등 */}</div>
    ))}
  </div>
);

export default PortfolioList;
