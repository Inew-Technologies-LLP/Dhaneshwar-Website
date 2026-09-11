import alturaLogo from "../images/altura_logo.png";

const AlturaLogo = ({ className = "", style = {} }) => {
  return (
    <img
      src={alturaLogo}
      alt="Altura Logo"
      width={232}
      height={41}
      className={`w-[232px] h-[41px] max-w-full object-contain ${className}`}
      style={style}
    />
  );
};

export default AlturaLogo;

