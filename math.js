
var math = {};

// 双曲線正弦を求める
math.sinh = function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2.0;
};

// 双曲線余弦を求める
math.cosh = function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2.0;
};

module.exports = math;
