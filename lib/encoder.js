
var encoder = {};

var WORLD_DELTA_TABLE = ["Z", "Y", "X", "W", "V", "T", "S", "R"];

// ワールドデルタIDをエンコードする
encoder.encodeWorldDelta = function(id) {
  if ( id < 0 || id > 7 ) {
    throw "invalid argument (id)";
  }
  return WORLD_DELTA_TABLE[id];
};

// ワールドデルタコードをデコードする
encoder.decodeWorldDelta = function(code) {
  // FIXME: indexOf
  for ( var i = 0, len = WORLD_DELTA_TABLE.length; i < len; i++ ) {
    if ( WORLD_DELTA_TABLE[i] == code ) {
      return i;
    }
  }
  // TODO: throw new IllegalArgumentException();
  return null;
};

module.exports = encoder;
