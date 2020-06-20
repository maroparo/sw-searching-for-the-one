export const formatHugeNumbers = (presumedNumber) => {
  let number;
  if (isNaN(presumedNumber)) {
    return presumedNumber;
  } else {
    number =
      typeof presumedNumber === "string"
        ? parseInt(presumedNumber)
        : presumedNumber;
  }

  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, "") + "Billion";
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return number;
};

export const formatToRomanNumber = (number) => {
  if (number === 1) {
    return "I";
  }
  if (number === 2) {
    return "II";
  }
  if (number === 3) {
    return "III";
  }
  if (number === 4) {
    return "IV";
  }
  if (number === 5) {
    return "V";
  }
  if (number === 6) {
    return "VI";
  }
};
