import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";

const AboutForm = ({ data, onChange, onSave }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman

    onSave(); // Memanggil fungsi onSave yang diterima dari props
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      setLoading(true);
      reader.onloadend = () => {
        onChange({ target: { name: "image", value: reader.result } });
        setLoading(false);
      };
      reader.readAsDataURL(file); // Pastikan gambar sudah ada di state sebagai base64
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4 items-center mb-5 group">
          <div className="w-[57px] h-[57px] bg-white/10 text-white flex justify-center items-center rounded-lg relative overflow-hidden">
            {data.image ? (
              <Image
                src={data.image}
                alt="profile"
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <span className="text-xl">+</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="imageUpload"
          />

          <label htmlFor="imageUpload">
            <button
              type="button"
              className="text-sm text-white group-hover:underline"
              onClick={() => document.getElementById("imageUpload").click()} // Memicu input file saat tombol diklik
            >
              {loading ? "Loading..." : "Add Image"}
            </button>
          </label>
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="name" className="flex-1 text-sm">
            Display Name :
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-3/5 px-5 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            value={data.name}
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="gender" className="flex-1 text-sm">
            Gender
          </label>
          <Select
            value={data.gender}
            onValueChange={(value) => {
              console.log("Selected Gender:", value);

              onChange({ target: { name: "gender", value } });
            }}
          >
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
            type="text"
            name="birthday"
            placeholder="DD MM YYYY"
            className="w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            value={data.birthday}
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
            value={data.horoscope}
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
            value={data.zodiac}
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="height" className="flex-1 text-sm">
            Height :
          </label>
          <input
            type="number"
            name="height"
            placeholder="Add height"
            className=" w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            value={data.height}
            step="1"
          />
        </div>
        <div className="flex text-white text-opacity-35 items-center">
          <label htmlFor="weight" className="flex-1 text-sm">
            Weight :
          </label>
          <input
            type="number"
            name="weight"
            placeholder="Add weight"
            className=" w-3/5 px-4 py-[10px] text-sm text-white font-medium text-right bg-white/10 rounded-lg outline outline-1 outline-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            value={data.weight}
            step="1"
          />
        </div>
      </form>
    </>
  );
};

export default AboutForm;
