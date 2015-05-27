
var math = {};

// 双曲線正弦を求める
math.sinh = function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2.0;
};

// 双曲線余弦を求める
math.cosh = function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2.0;
};

// 双曲線正接を求める
math.tanh = function(x) {
  return this.sinh(x) / this.cosh(x);
};

// 双曲線逆正接を求める
math.atanh = function(x) {
  return Math.log((1 + x) / (1 - x)) / 2;
};

// 剰余を求める
math.mod = function(a, b) {
  return a % b;
/*
  var val = a;
  while ( val >= b ) {
    val -= b;
  }
  while ( val < 0.0 ) {
    val += b;
  }
  return val;
*/
};

module.exports = math;
