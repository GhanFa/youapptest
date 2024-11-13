import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import "./style.css";

const AboutForm = () => {
  return (
    <div className="w-full min-h-[120px] mx-auto bg-[#0e191f] rounded-2xl flex flex-col gap-3 ps-7 pe-3 py-3">
      <div className="flex justify-between">
        <div className="title font-bold text-white text-sm">About</div>
        <button className="icon self-end hover:opacity-50 bg-link-gradient bg-clip-text text-transparent">
          Save & Update
        </button>
      </div>
      <div className="flex gap-4 items-center mb-5 group">
        <div className="w-[57px] h-[57px] bg-white/10 text-white flex justify-center items-center rounded-lg">
          +
        </div>
        <div className="text-sm text-white">Add Image</div>
      </div>
      <form action="" className="flex flex-col gap-4">
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="name" className="flex-1 text-sm">
            Display Name :
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-3/5 px-5 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="gender" className="flex-1 text-sm">
            Gender
          </label>
          <Select>
            <SelectTrigger className="w-3/5 rounded-lg text-white outline outline-1 outline-gray-600">
              <SelectValue
                placeholder="Select Gender"
                className="text-gray-600"
                name="gender"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="birthday" className="flex-1 text-sm">
            Birthday :
          </label>

          <input
            type="date"
            name="birthday"
            placeholder="DD-MM-YYYY"
            className="w-3/5 px-4 py-[10px] text-sm text-white/50 font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="horoscope" className="flex-1 text-sm">
            Horoscope :
          </label>
          <input
            type="text"
            placeholder="--"
            name="horoscope"
            disabled
            className="w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="zodiac" className="flex-1 text-sm">
            Zodiac :
          </label>
          <input
            type="text"
            placeholder="--"
            disabled
            name="zodiac"
            className="w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-xl outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="height" className="flex-1 text-sm">
            Height :
          </label>
          <input
            type="text"
            name="height"
            placeholder="Add height"
            className=" w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="weight" className="flex-1 text-sm">
            Weight :
          </label>
          <input
            type="text"
            name="weight"
            placeholder="Add weight"
            className=" w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
      {/* <div className="desc font-medium text-sm text-white text-opacity-50">
        add in your your to help other know you better
      </div> */}
    </div>
  );
};

export default AboutForm;
