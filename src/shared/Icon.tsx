interface IconProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Icon = ({
  src,
  alt = "icon",
  width = 16,
  height = 16,
  className = "",
}: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
};

export default Icon;
