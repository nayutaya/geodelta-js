
var geodelta = geodelta || {};

// 座標系の投影を行うモジュール
geodelta.projector = geodelta.projector || {};

(function() {
  // 正規化XY座標を緯度経度に変換する
  geodelta.projector.nxyToLatLng = function(nx, ny) {
    return {
      lat: geodelta.projector.nyToLat(ny),
      lng: geodelta.projector.nxToLng(nx)
    };
  };
})();
