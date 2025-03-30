interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
}

const Logo = ({ src, alt = "Logo", className = "w-52 md:w-60" }: LogoProps) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default Logo;
