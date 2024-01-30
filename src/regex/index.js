export const PincodeRegex = new RegExp(/^\d+$/);
export const onlyAlphabetRegex = new RegExp(/^[a-zA-Z ]*$/);
export const onlyNumericRegex = new RegExp(/^[0-9]*$/);
export const onlyAlphabetRegexWithDot = new RegExp(/^[a-zA-Z. ]*$/);
export const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);
export const mobileNumberRegex = new RegExp(/^[6-9]{1}[0-9]{9}$/);
export const panNumberRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
export const aadharNumberRegex = /^[2-9]{1}[0-9]{11}$/;
export const aadharNumberRegexNew =
  /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
//export const matchAll = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/;
export const matchAll = /^[0-9xX ]*$/;
export const minimum3chars = /(.*[a-z]){2}/;
export const PincodeRegexNew = /^[0-9]{6}$/;
export const AadharRegex = /^.{12,14}$/;
export const isNumericOrSymbol = new RegExp(/[0-9]$/);
export const alphaNumericWithSpaceRegex = /^[a-zA-Z0-9 ]*$/;
export const accountNumberRegex = /^[0-9]{8,18}$/;
export const ifscRegex = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
