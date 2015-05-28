
var geodelta = geodelta || {};

(function() {
  geodelta.delta_geometry = geodelta.delta_geometry || {};
  var self = geodelta.delta_geometry;

  // 剰余を求める
  var _mod = function(a, b) {
    var val = a;
    while ( val >= b )
    {
      val -= b;
    }
    while ( val < 0.0 )
    {
      val += b;
    }
    return val;
  };
})();

/*
  // FIXME: メソッド名を「getDeltaCoordinates」に変更する
  // FIXME: 返り値を一次元配列に変更する
  // デルタID列からデルタの中心座標、頂点座標を取得する
  self.getCoordinates = function(ids) {
    final double[] cxy = getCenter(ids);
    final int level = ids.length;
    final int sign = (isUpperDelta(ids) ? +1 : -1);
    final double scale = 1.0 / Math.pow(2, level - 1) * sign;

    final double dx1 = 0.0;
    final double dy1 = 8.0 * scale;
    final double dx2 = 6.0 * scale;
    final double dy2 = 4.0 * scale;

    return new double[][] {
      {cxy[0], cxy[1]},
      {cxy[0] + dx1, cxy[1] + dy1},
      {cxy[0] + dx2, cxy[1] - dy2},
      {cxy[0] - dx2, cxy[1] - dy2},
    };
  };

  var _sum = function(list) {
    double total = 0.0;
    for ( final double value : list )
    {
      total += value;
    }
    return total;
  };
*/
