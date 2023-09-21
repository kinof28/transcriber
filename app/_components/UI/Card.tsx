import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
  title,
  reversed = false,
  image,
  alt,
}: {
  children: ReactNode;
  className?: string;
  title: string;
  reversed?: boolean;
  image: StaticImageData;
  alt: string;
}) => {
  return (
    <div
      className={`${className} flex gap-16 justify-center items-center px-10 my-10 ${
        reversed ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex-1 pr-5">
        <h2 className="font-bold text-2xl text-violet-800 mb-5">{title}</h2>
        <div className="text-xl text-indigo-900 tracking-wide leading-7">
          {children}
        </div>
      </div>
      <Image
        src={image}
        alt={alt}
        className="flex-1 object-contain h-full w-px rounded-2xl"
      />
    </div>
  );
};

export default Card;
