export const commaSeperator = (x = "") => {
  if (x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x;
  }
};

export const maskAccNo = (accountNumber = "") => {
  if (accountNumber) {
    return accountNumber?.replace(/\b[\dX][-. \dX]+(\d{4})\b/g, "XXXXXXXXX$1");
  } else {
    return accountNumber;
  }
};

export const commaSeperatorWithRupee = (x = "") => {
  if (x) {
    return x?.toString()?.split(".")?.[0]?.length > 3
      ? "₹ " +
          x
            ?.toString()
            ?.substring(0, x?.toString()?.split(".")?.[0]?.length - 3)
            ?.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
          "," +
          x.toString().substring(x.toString().split(".")[0].length - 3)
      : "₹ " + x.toString();
  } else {
    return "₹ " + x;
  }
};

export const convertToLakhs = (number) => {
  if (number >= 100000) {
    const lakhs = Math.floor(number / 100000);
    return "₹ " + lakhs + " Lakhs";
  } else {
    return "₹ " + number.toString();
  }
};
