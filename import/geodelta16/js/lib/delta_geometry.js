
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
  // 指定されたサブデルタIDの上位デルタからの距離を取得する
  self.getSubDeltaDistance = function(parentIsUpper, id) {
    return (parentIsUpper ? getUpperSubDeltaDistance(id) : getLowerSubDeltaDistance(id));
  };

  // FIXME: メソッド名を「getDeltaCenter」に変更する
  // デルタID列から中心座標を取得する
  self.getCenter = function(ids) {
    final List<Double> xs = new ArrayList<Double>();
    final List<Double> ys = new ArrayList<Double>();

    boolean upper = false;

    for ( int i = 0, len = ids.length; i < len; i++ )
    {
      if ( i == 0 )
      {
        final double[] xy = getWorldDeltaCenter(ids[0]);
        upper = isUpperWorldDelta(ids[0]);
        xs.add(xy[0]);
        ys.add(xy[1]);
      }
      else
      {
        final double[] xy = getSubDeltaDistance(upper, ids[i]);
        upper = isUpperSubDelta(upper, ids[i]);
        xs.add(xy[0] / Math.pow(2, (i - 1)));
        ys.add(xy[1] / Math.pow(2, (i - 1)));
      }
    }

    Collections.sort(xs);
    Collections.sort(ys);

    final double x = sum(xs);
    final double y = sum(ys);

    return new double[] {(x > 12.0 ? x - 24.0 : x), y};
  };

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
