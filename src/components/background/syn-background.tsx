import SynTransparent from "../../../public/assets/images/syn-transparent1.png";

const SynBackground = () => {
  return (
    <div
      className="absolute inset-0 z-[-1]"
      style={{ backgroundImage: `url(${SynTransparent.src})` }}
    />
  );
};

export default SynBackground;
