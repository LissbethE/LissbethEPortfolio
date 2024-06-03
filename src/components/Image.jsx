function Image({ source }) {
  return (
    <img
      src={`img/${source?.img}`}
      alt={source?.name}
      className="image image--projects"
    />
  );
}

export default Image;
