import { useEffect, useState } from "react";
import { formatBirthday } from "@/helper/birthday";

const useProfileForm = (data) => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    gender: "",
    birthday: "",
    horoscope: "",
    zodiac: "",
    height: "",
    weight: "",
  });

  const [profileExists, setProfileExists] = useState(false);

  useEffect(() => {
    if (data && data.data) {
      setFormData((prev) => ({
        ...prev,
        image: data.data.image || null,
        name: data.data.name || "",
        gender: data.data.gender || "",
        birthday: formatBirthday(data.data.birthday) || "",
        horoscope: data.data.horoscope || "",
        zodiac: data.data.zodiac || "",
        height: data.data.height || "",
        weight: data.data.weight || "",
      }));

      setProfileExists(true);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "height" || name === "weight" ? Number(value) : value;
    setFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  return { formData, handleChange, profileExists };
};

export default useProfileForm;
