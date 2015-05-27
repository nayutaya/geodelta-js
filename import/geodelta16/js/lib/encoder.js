
var geodelta = geodelta || {};

// デルタID列とGeoDeltaコードを相互変換するモジュール
geodelta.encoder = geodelta.encoder || {};

(function() {
  // サブデルタコードをデコードする
  geodelta.encoder.decodeSubDelta = function(code) {
    if ( code == null || code == "" )
    {
      // TODO: throw new IllegalArgumentException();
      return null;
    }

    var ids = [];
    for ( var i = 0, len = code.length; i < len; i++ )
    {
      var ch = code.charAt(i);

      switch ( ch )
      {
        case "2": ids.push(0); ids.push(0); break;
        case "3": ids.push(0); ids.push(1); break;
        case "4": ids.push(0); ids.push(2); break;
        case "5": ids.push(0); ids.push(3); break;
        case "6": ids.push(1); ids.push(0); break;
        case "7": ids.push(1); ids.push(1); break;
        case "8": ids.push(1); ids.push(2); break;
        case "A": ids.push(1); ids.push(3); break;
        case "B": ids.push(2); ids.push(0); break;
        case "C": ids.push(2); ids.push(1); break;
        case "D": ids.push(2); ids.push(2); break;
        case "E": ids.push(2); ids.push(3); break;
        case "F": ids.push(3); ids.push(0); break;
        case "G": ids.push(3); ids.push(1); break;
        case "H": ids.push(3); ids.push(2); break;
        case "J": ids.push(3); ids.push(3); break;
        case "K": ids.push(0); break;
        case "M": ids.push(1); break;
        case "N": ids.push(2); break;
        case "P": ids.push(3); break;
        default: return null; // TODO: throw new IllegalArgumentException();
      }
    }
    return ids;
  };

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
