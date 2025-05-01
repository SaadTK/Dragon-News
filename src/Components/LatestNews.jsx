import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <>
      <div className="flex items-center gap-4 bg-base-200">
        <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

        <Marquee pauseOnHover={true}>
          <p className="font-bold mr-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            dolore assumenda.
          </p>
          <p className="font-bold mr-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            dolore assumenda.
          </p>
          <p className="font-bold mr-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            dolore assumenda.
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default LatestNews;
