export const formatBirthday = (birthday) => {
  if (!birthday) return null;
  const parts = birthday.split(" "); // Pisahkan tanggal berdasarkan spasi
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return `${month} ${day} ${year}`; // Ubah urutan menjadi MM DD YYYY
  }
  return birthday; // Jika format tidak sesuai, kembalikan apa adanya
};
