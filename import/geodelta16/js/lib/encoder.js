
var geodelta = geodelta || {};

// デルタID列とGeoDeltaコードを相互変換するモジュール
geodelta.encoder = geodelta.encoder || {};

(function() {
  // デルタID列をエンコードする
  geodelta.encoder.encode = function(ids)
  {
    if ( ids == null || ids.length == 0 )
    {
      // TODO: throw new IllegalArgumentException();
      return null;
    }

    var code = "";
    code += geodelta.encoder.encodeWorldDelta(ids[0]);
    code += _encodeSubDelta(ids, 1);
    return code;
  };

  // GeoDeltaコードをデコードする
  geodelta.encoder.decode = function(code) {
    if ( code == null || code.length == 0 )
    {
      // TODO: throw new IllegalArgumentException();
      return null;
    }
    else if ( code.length == 1 )
    {
      return [geodelta.encoder.decodeWorldDelta(code.charAt(0))];
    }
    else
    {
      var worldId = geodelta.encoder.decodeWorldDelta(code.charAt(0));
      var subIds  = geodelta.encoder.decodeSubDelta(code.substring(1));
      return [worldId].concat(subIds);
    }
  };
})();
