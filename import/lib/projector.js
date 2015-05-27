
var geodelta = geodelta || {};

// 座標系の投影を行うモジュール
geodelta.projector = geodelta.projector || {};

(function() {
  geodelta.projector.DELTA_HEIGHT = function() { return DELTA_HEIGHT };

  // メルカトルY座標を正規化Y座標に変換する
  geodelta.projector.myToNy = function(my) {
    return my / DELTA_HEIGHT * 12.0;
  };

  // メルカトルX座標を正規化X座標に変換する
  geodelta.projector.mxToNx = function(mx) {
    return mx * 12.0;
  };

  // 正規化Y座標をメルカトルY座標に変換する
  geodelta.projector.nyToMy = function(ny) {
    return ny / 12.0 * DELTA_HEIGHT;
  };

  // 正規化X座標をメルカトルX座標に変換する
  geodelta.projector.nxToMx = function(nx) {
    return nx / 12.0;
  };

  // 緯度を正規化Y座標系に変換する
  geodelta.projector.latToNy = function(lat) {
    return geodelta.projector.myToNy(geodelta.projector.latToMy(lat));
  };

  // 経度を正規化X座標に変換する
  geodelta.projector.lngToNx = function(lng) {
    return geodelta.projector.mxToNx(geodelta.projector.lngToMx(lng));
  };

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
