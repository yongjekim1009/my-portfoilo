const ThumbnailCard = ({ item }) => {
  return (
    <div className="thumbnail-card">
      <img src={item.imageUrl} alt={item.title} />
      <h4>{item.title}</h4>
    </div>
  );
};

export default ThumbnailCard;
