import SynTransparent from "../../../public/syn-transparent.png";

const SynBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{backgroundImage: `url(${SynTransparent.src})`}}
    />
  );
};

export default SynBackground;
