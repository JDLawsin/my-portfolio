import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
}

const fallbackImage = "/fallback/placeholder.png";

const ImageWithFallback = ({ src, alt, className, width, height }: Props) => {
  const [isError, setIsError] = useState(false);

  return (
    <Image
      src={isError ? fallbackImage : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setIsError(true)}
    />
  );
};

export default ImageWithFallback;
