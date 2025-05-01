import React from "react";
import swimming from "../../assets/swimming.png";
import class1 from "../../assets/class.png";
import playground from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>

      <div className="space-y-5">
        <img src={swimming} alt="Swimming" />
        <img src={class1} alt="Swimming" />
        <img src={playground} alt="Swimming" />
      </div>
    </div>
  );
};

export default Qzone;
