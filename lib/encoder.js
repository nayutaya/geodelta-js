
var encoder = {};

var WORLD_DELTA_TABLE = ["Z", "Y", "X", "W", "V", "T", "S", "R"];
var SUB_DELTA_TABLE1  = ["K", "M", "N", "P"];
var SUB_DELTA_TABLE2  = [["2", "3", "4", "5"], ["6", "7", "8", "A"], ["B", "C", "D", "E"], ["F", "G", "H", "J"]];

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

// サブデルタID列をエンコードする
var _encodeSubDelta = function(ids, start) {
  var result = "";
  for ( var i = start, len = ids.length; i < len; i += 2 )
  {
    var rest = len - i;
    if ( rest == 1 )
    {
      result += SUB_DELTA_TABLE1[ids[i]];
    }
    else
    {
      result += SUB_DELTA_TABLE2[ids[i]][ids[i + 1]]
    }
  }
  // TODO: throw new IllegalArgumentException();
  return result;
};

// サブデルタID列をエンコードする
encoder.encodeSubDelta = function(ids) {
  if ( ids == null || ids.length == 0 )
  {
    // TODO: throw new IllegalArgumentException();
    return null;
  }
  return _encodeSubDelta(ids, 0);
};

module.exports = encoder;
