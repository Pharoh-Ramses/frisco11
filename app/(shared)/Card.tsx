import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3 ${imageHeight}`}></div>
      </Link>
      <div className="basis-full">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green
          ${isSmallCard ? "text-base" : "text-lg"}
          ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            Title
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">Author</h5>
          <h6 className="text-wh-300 text-xs">date</h6>
        </div>
        <p
          className={`text-wh-100 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
          tincidunt montes in eu condimentum, vel bibendum semper lobortis porta
          praesent egestas magnis primis varius mauris.
        </p>
      </div>
    </div>
  );
};

export default Card;
