
var delta_geometry = {};

var math = require("./math.js");

// 座標をワールドデルタIDに変換する
delta_geometry.getWorldDeltaId = function(x, y) {
  var xx = math.mod(x, 24.0);
  var yy = Math.abs(y);
  var base = (y >= 0.0 ? 0 : 4);
  if ( yy >= +2.0 * (xx - 0.0) ) {
    return base + 0;
  } else if ( yy <= -2.0 * (xx - 12.0) ) {
    return base + 1;
  } else if ( yy >= +2.0 * (xx - 12.0) ) {
    return base + 2;
  } else if ( yy <= -2.0 * (xx - 24.0) ) {
    return base + 3;
  }
  return base;
};

module.exports = delta_geometry;
