
var math = require("./math.js");

var projector = {};

// 度をラジアンに変換するための係数
var DEG2RAD = Math.PI / 180.0;
// ラジアンを度に変換するための係数
// var RAD2DEG = 180.0 / Math.PI;
// 一辺を1.0とする正三角形の高さ
// var DELTA_HEIGHT = Math.sqrt(0.75);

// 緯度をメルカトルY座標に変換する
projector.latToMy = function(lat) {
  return math.atanh(Math.sin(lat * DEG2RAD)) / Math.PI;
};

module.exports = projector;
