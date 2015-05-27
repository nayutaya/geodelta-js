
var math = require("./math.js");

var projector = {};

// 度をラジアンに変換するための係数
var DEG2RAD = Math.PI / 180.0;
// ラジアンを度に変換するための係数
var RAD2DEG = 180.0 / Math.PI;
// 一辺を1.0とする正三角形の高さ
// var DELTA_HEIGHT = Math.sqrt(0.75);

// 緯度をメルカトルY座標に変換する
projector.latToMy = function(lat) {
  return math.atanh(Math.sin(lat * DEG2RAD)) / Math.PI;
};

// 経度をメルカトルX座標に変換する
projector.lngToMx = function(lng) {
  return lng / 180.0;
};

// メルカトルY座標を緯度に変換する
projector.myToLat = function(my) {
  return Math.asin(math.tanh(my * Math.PI)) * RAD2DEG;
};

// メルカトルX座標を経度に変換する
projector.mxToLng = function(mx) {
  var x = math.mod(mx, 2.0) - 2.0;
  if ( x < -1.0 ) {
    x += 2.0;
  }
  return x * 180.0;
};

module.exports = projector;
