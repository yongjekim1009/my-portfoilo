// import ThumbnailCard from "./ThumbnailCard";

// const ThumbnailList = ({ items }) => {
//   return (
//     <div className="thumbnail-list">
//       {items.map((item) => (
//         <ThumbnailCard key={item.id} item={item} />
//       ))}
//     </div>
//   );
// };

// export default ThumbnailList;

import styles from "./ThumbnailList.module.css";
import ThumbnailCard from "./ThumbnailCard";

const ThumbnailList = ({ items }) => {
  return (
    <div className={styles["thumbnail-list"]}>
      {items.map((item) => (
        <ThumbnailCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ThumbnailList;
