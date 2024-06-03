import Image from "./Image";
import Video from "./Video";

function Display({ data }) {
  const isVideo = Object.prototype.hasOwnProperty.call(data, "video");

  return isVideo ? <Video source={data} /> : <Image source={data} />;
}

export default Display;
