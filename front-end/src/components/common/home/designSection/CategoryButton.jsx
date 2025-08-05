const CategoryButton = ({ categories, selected, onSelect }) => (
  <div>
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        style={{ fontWeight: selected === cat ? "bold" : "normal" }}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryButton;
