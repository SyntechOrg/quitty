import SynTransparent from "../../../public/assets/images/syn-transparent1.png";

const SynBackground = () => {
  return (
    <div
      className="fixed inset-0 z-[-1]"
      style={{ backgroundImage: `url(${SynTransparent.src})` }}
    />
  );
};

export default SynBackground;
