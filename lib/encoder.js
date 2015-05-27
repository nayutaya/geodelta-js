
var encoder = {};

var WORLD_DELTA_TABLE = ["Z", "Y", "X", "W", "V", "T", "S", "R"];

// ワールドデルタIDをエンコードする
encoder.encodeWorldDelta = function(id) {
  if ( id < 0 || id > 7 ) {
    throw "invalid argument (id)";
  }
  return WORLD_DELTA_TABLE[id];
};

module.exports = encoder;
