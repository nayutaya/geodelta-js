
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

// 座標を上向きのサブデルタIDに変換する
delta_geometry.getUpperDeltaId = function(x, y) {
  if ( y < -2.0 * (x - 6.0) ) {
    return 3;
  } else if ( y < +2.0 * (x - 6.0) ) {
    return 2;
  } else if ( y > 6.0 ) {
    return 1;
  }
  return 0;
};

// 座標を下向きのサブデルタIDに変換する
delta_geometry.getLowerDeltaId = function(x, y) {
  if ( y > -2.0 * (x - 12.0) ) {
    return 3;
  } else if ( y > +2.0 * x ) {
    return 2;
  } else if ( y < 6.0 ) {
    return 1;
  }
  return 0;
};

// 指定されたワールドデルタIDが上向きかどうか判定する
delta_geometry.isUpperWorldDelta = function(id) {
  return (id % 2 == (id < 4 ? 1 : 0));
};

// 指定されたサブデルタIDが上向きかどうか判定する
delta_geometry.isUpperSubDelta = function(parentIsUpper, id) {
  return (parentIsUpper ? (id != 0) : (id == 0));
};

// 指定されたデルタID列が上向きかどうか判定する
delta_geometry.isUpperDelta = function(ids) {
  upper = false;
  for ( var i = 0, len = ids.length; i < len; i++ ) {
    if ( i == 0 ) {
      upper = this.isUpperWorldDelta(ids[i]);
    } else {
      upper = this.isUpperSubDelta(upper, ids[i]);
    }
  }
  return upper;
};

module.exports = delta_geometry;
