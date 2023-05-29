import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text text-white py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Frisco 11 Ward</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit curae
            fermentum enim sed litora libero, sapien laoreet dignissim donec
            sem. Sagittis quisque ligula in netus posuere augue, integer class
            mollis semper.
          </p>
          <p>Copyright Frisco 11 All Rights Reserved</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">About</p>
          <p className="my-5">Contact</p>
          <p>Directions</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">6037 Attucks Dr, Aubrey TX, 76227</p>
          <p>(214)-471-8138</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
