
var geodelta = geodelta || {};

// 座標系の投影を行うモジュール
geodelta.projector = geodelta.projector || {};

(function() {
  // 正規化Y座標を緯度に変換する
  geodelta.projector.nyToLat = function(ny) {
    return geodelta.projector.myToLat(geodelta.projector.nyToMy(ny));
  };

  // 正規化X座標を経度に変換する
  geodelta.projector.nxToLng = function(nx) {
    return geodelta.projector.mxToLng(geodelta.projector.nxToMx(nx));
  };

  // 緯度経度を正規化XY座標に変換する
  geodelta.projector.latLngToNxy = function(lat, lng) {
    return {
      nx: geodelta.projector.lngToNx(lng),
      ny: geodelta.projector.latToNy(lat)
    };
  };

  // 正規化XY座標を緯度経度に変換する
  geodelta.projector.nxyToLatLng = function(nx, ny) {
    return {
      lat: geodelta.projector.nyToLat(ny),
      lng: geodelta.projector.nxToLng(nx)
    };
  };
})();
