function Video({ source }) {
  return (
    <video autoPlay loop muted className="video video--projects">
      <source src={`video/${source?.video}`} type="video/mp4" />
    </video>
  );
}

export default Video;
