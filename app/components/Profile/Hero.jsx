import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { calculateAge } from "@/helper/ageCalculation";
import { ZodiacIcon, horoscopeIcon } from "@/helper/zodiac";

const Hero = ({ data }) => {
  const profile = data.data;
  const IconHoroscope = horoscopeIcon[profile.horoscope];
  const IconZodiac = ZodiacIcon[profile.zodiac];
  if (profile.birthday) {
  }
  return (
    <div className="w-full h-48 mx-auto bg-[#162329] rounded-2xl flex flex-col justify-between p-3">
      <button className="icon self-end hover:opacity-50 ">
        <BiEditAlt color="white" size={25} className="hidden" />
      </button>
      <div className="flex flex-col gap-2 text-white">
        <div className="username font-bold text-white">
          @{profile.username},{" "}
          {profile.birthday ? calculateAge(profile.birthday) : null}
        </div>
        {profile.gender ? (
          <div className="text-sm">{profile.gender}</div>
        ) : null}
        {profile.birthday ? (
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-2 bg-white/5 w-fit px-3 py-1 rounded-lg text-sm">
              <div className="">{IconHoroscope}</div>

              <div>{profile.horoscope}</div>
            </div>

            <div className="flex items-center gap-2 bg-white/5 w-fit px-3 py-1 rounded-lg text-sm">
              <div>{IconZodiac}</div>

              <div>{profile.zodiac}</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
