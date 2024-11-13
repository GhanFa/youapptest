import React from "react";
import { BiEditAlt } from "react-icons/bi";

const About = (props) => {
  const { birthday, horoscope, zodiac, height, weight } = props;
  return (
    <div className="w-full min-h-[120px] mx-auto bg-[#0e191f] rounded-2xl flex flex-col gap-3 ps-7 pe-3 py-3">
      <div className="flex justify-between">
        <div className="title font-bold text-white text-sm">About</div>
        <button className="icon self-end hover:opacity-50">
          <BiEditAlt color="white" size={25} />
        </button>
      </div>

      <div className=" font-medium text-sm text-white text-opacity-50 space-y-2">
        <p>
          Birthday: <span className="text-white">28/08/1995 (age 25)</span>
        </p>
        <p>
          Horoscope: <span className="text-white">Virgo</span>
        </p>
        <p>
          Zodiac: <span className="text-white">Pig</span>
        </p>
        <p>
          Height: <span className="text-white">175 cm</span>
        </p>
        <p>
          Weight: <span className="text-white">69 kg</span>
        </p>
      </div>

      {/* <div className="desc font-medium text-sm text-white text-opacity-50">
        add in your your to help other know you better
      </div> */}
    </div>
  );
};

export default About;
