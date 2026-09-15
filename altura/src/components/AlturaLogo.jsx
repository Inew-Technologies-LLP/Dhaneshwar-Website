import alturaLogo from "../images/altura_logo.webp";

const AlturaLogo = ({ className = "w-[130px] sm:w-[180px] md:w-[232px] h-auto", style = {} }) => {
  return (
    <img
      src={alturaLogo}
      alt="Altura Logo"
      width={232}
      height={41}
      className={`max-w-full object-contain ${className}`}
      style={style}
    />
  );
};

export default AlturaLogo;

