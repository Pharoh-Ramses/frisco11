import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-slate-500">image</div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          Category
        </h4>
        <div className="text-white mt-2"></div>
      </div>
    </Link>
  );
};

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-black py-2 px-8 text-white text-sm font-bold font-open">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipiscing elit tellus
          ullamcorper litora, ultrices ligula commodo imperdiet.
        </p>
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="col-span-2 row-span-2 bg-slate-500" />
        <TrendingCard className="col-span-2 row-span-1 bg-slate-500" />
        <TrendingCard className="col-span-1 row-span-1 bg-slate-500" />
        <TrendingCard className="col-span-1 row-span-1 bg-slate-500" />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus at, arcu
        accumsan nam per hendrerit conubia eget bibendum elementum, a aptent sem
        pulvinar non iaculis viverra ultrices. Lacinia torquent class fringilla
        ullamcorper facilisis dui, justo pharetra sociosqu suspendisse integer
        dignissim, ridiculus quisque taciti nostra lectus.
      </p>
    </section>
  );
};

export default Trending;
