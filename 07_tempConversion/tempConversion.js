const ftoc = function(far) {
  let cel;
  cel = (far - 32) * 5 / 9
  return Number.isInteger(cel) ? cel : Number(cel.toFixed(1));
};

const ctof = function(cel) {
  let far;
  far = (cel * 9 / 5) + 32;
  return Number.isInteger(far) ? far : Number(far.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
