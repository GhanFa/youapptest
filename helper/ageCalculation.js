export function calculateAge(birthday) {
  const [day, month, year] = birthday.split(" ").map(Number);

  const birthDate = new Date(year, month - 1, day); // month - 1 karena bulan di JavaScript dimulai dari 0

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
