// const ThumbnailCard = ({ item }) => {
//   return (
//     <div className="thumbnail-card">
//       <img src={item.imageUrl} alt={item.title} />
//       <h4>{item.title}</h4>
//     </div>
//   );
// };

// export default ThumbnailCard;

import styles from "./ThumbnailCard.module.css";

const ThumbnailCard = ({ item }) => {
  return (
    <div className={styles["thumbnail-card"]}>{/* 이미지 자리만 확보 */}</div>
  );
};

export default ThumbnailCard;
