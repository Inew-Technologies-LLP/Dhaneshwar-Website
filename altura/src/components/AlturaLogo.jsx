import alturaLogo from "../images/altura_logo_transparent.png";

const AlturaLogo = ({ className = "w-[120px] sm:w-[160px] md:w-[200px] h-auto", style = {} }) => {
  return (
    <img
      src={alturaLogo}
      alt="Altura Logo"
      width={2534}
      height={440}
      className={`max-w-full object-contain ${className}`}
      style={style}
    />
  );
};

export default AlturaLogo;
