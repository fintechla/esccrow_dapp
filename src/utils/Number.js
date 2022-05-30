// eslint-disable-next-line no-extend-native
Number.prototype.toTruncate = function (digits) {
  const numS = this.toString();
  const decPos = numS.indexOf(".");
  const substrLength = decPos === "-1" ? numS.length : 1 + decPos + digits;
  const trimmedResult = numS.substr(0, substrLength);
  const finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

  return parseFloat(finalResult).toFixed(2);
};
