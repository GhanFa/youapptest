import {
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacLibra,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo,
} from "react-icons/tb";
import {
  GiBuffaloHead,
  GiGoat,
  GiHorseHead,
  GiMonkey,
  GiPig,
  GiRabbit,
  GiRat,
  GiRooster,
  GiSittingDog,
  GiSnake,
  GiSpikedDragonHead,
  GiTigerHead,
} from "react-icons/gi";
// Ekspor objek horoscopeIcon yang berisi komponen ikon langsung

export const horoscopeIcon = {
  Aries: <TbZodiacAries />,
  Taurus: <TbZodiacTaurus />,
  Gemini: <TbZodiacGemini />,
  Cancer: <TbZodiacCancer />,
  Leo: <TbZodiacLeo />,
  Virgo: <TbZodiacVirgo />,
  Libra: <TbZodiacLibra />,
  Scorpius: <TbZodiacScorpio />,
  Sagittarius: <TbZodiacSagittarius />,
  Capricorn: <TbZodiacCapricorn />,
  Aquarius: <TbZodiacAquarius />,
  Pisces: <TbZodiacPisces />,
};

export const ZodiacIcon = {
  Rat: <GiRat />,
  Ox: <GiBuffaloHead />,
  Tiger: <GiTigerHead />,
  Rabbit: <GiRabbit />,
  Dragon: <GiSpikedDragonHead />,
  Snake: <GiSnake />,
  Horse: <GiHorseHead />,
  Goat: <GiGoat />,
  Monkey: <GiMonkey />,
  Rooster: <GiRooster />,
  Dog: <GiSittingDog />,
  Pig: <GiPig />,
};
