
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

  // 指定された座標(x, y)に該当するワールドデルタIDを返す
  self.getWorldDeltaId = function(x, y) {
    var xx = _mod(x, 24.0);
    var yy = Math.abs(y);
    var base = (y >= 0.0 ? 0 : 4);
    if ( yy >= +2.0 * (xx - 0.0) )
    {
      return base + 0;
    }
    else if ( yy <= -2.0 * (xx - 12.0) )
    {
      return base + 1;
    }
    else if ( yy >= +2.0 * (xx - 12.0) )
    {
      return base + 2;
    }
    else if ( yy <= -2.0 * (xx - 24.0) )
    {
      return base + 3;
    }
    return base;
  };
})();

/*
  // 指定された座標(x, y)に該当する上向きのサブデルタIDを返す
  self.getUpperDeltaId = function(x, y) {
    if ( y < -2.0 * (x - 6.0) )
    {
      return 3;
    }
    else if ( y < +2.0 * (x - 6.0) )
    {
      return 2;
    }
    else if ( y > 6.0 )
    {
      return 1;
    }
    return 0;
  };

  // 指定された座標(x, y)に該当する下向きのサブデルタの番号を返す
  self.getLowerDeltaId = function(x, y) {
    if ( y > -2.0 * (x - 12.0) )
    {
      return 3;
    }
    else if ( y > +2.0 * x )
    {
      return 2;
    }
    else if ( y < 6.0 )
    {
      return 1;
    }
    return 0;
  };

  // 指定されたワールドデルタが上向きかどうか判定する
  self.isUpperWorldDelta = function(id) {
    return (id % 2 == (id < 4 ? 1 : 0));
  };

  // 指定されたサブデルタが上向きかどうか判定する
  self.isUpperSubDelta = function(parentIsUpper, id) {
    return (parentIsUpper ? (id != 0) : (id == 0));
  };

  // 指定されたデルタが上向きかどうか判定する
  self.isUpperDelta = function(ids) {
    boolean upper = false;
    for ( int i = 0, len = ids.length; i < len; i++ )
    {
      if ( i == 0 )
      {
        upper = isUpperWorldDelta(ids[i]);
      }
      else
      {
        upper = isUpperSubDelta(upper, ids[i]);
      }
    }
    return upper;
  };

  // 指定された座標(x, y)を指定されたワールドデルタID内における正規化座標系に平行移動する
  self.transformWorldDelta = function(id, x, y) {
    final double[] xs = {+6.0, +0.0, -6.0, -12.0, +6.0, +0.0, -6.0, -12.0};
    final double[] ys = {+0.0, +0.0, +0.0, +0.0, +12.0, +12.0, +12.0, +12.0};
    final double xx = Utility.mod((x + xs[id]), 12.0);
    final double yy = Utility.mod((y + ys[id]), 12.0);
    return new double[] {xx, yy};
  };

  // 指定された座標(x, y)を指定されたサブデルタID内における正規化座標系に平行移動する
  self.transformUpperDelta = function(id, x, y) {
    final double[] xs = {-3.0, -3.0, -6.0, -0.0};
    final double[] ys = {-0.0, -6.0, -0.0, -0.0};
    final double xx = (x + xs[id]) * 2;
    final double yy = (y + ys[id]) * 2;
    return new double[] {xx, yy};
  };

  // 指定された座標(x, y)を指定されたサブデルタID内における正規化座標系に平行移動する
  self.transformLowerDelta = function(id, x, y) {
    final double[] xs = {-3.0, -3.0, -0.0, -6.0};
    final double[] ys = {-6.0, -0.0, -6.0, -6.0};
    final double xx = (x + xs[id]) * 2;
    final double yy = (y + ys[id]) * 2;
    return new double[] {xx, yy};
  };

  // FIXME: メソッド名を「getDeltaId」に変更する
  // 指定された座標(x, y)に該当するデルタのデルタID列を取得する
  self.getDeltaIds = function(x, y, level) {
    final byte[] ids = new byte[level];

    ids[0] = (byte)getWorldDeltaId(x, y);
    double[] xxyy = transformWorldDelta(ids[0], x, y);
    boolean upper = isUpperWorldDelta(ids[0]);

    for ( int i = 1; i < level; i++ )
    {
      ids[i] = (byte)(upper ? getUpperDeltaId(xxyy[0], xxyy[1]) : getLowerDeltaId(xxyy[0], xxyy[1]));
      xxyy = (upper ? transformUpperDelta(ids[i], xxyy[0], xxyy[1]) : transformLowerDelta(ids[i], xxyy[0], xxyy[1]));
      upper = isUpperSubDelta(upper, ids[i]);
    }

    return ids;
  };

  // 指定されたワールドデルタIDの中心座標を取得する
  self.getWorldDeltaCenter = function(id) {
    final double[] xs = {+0.0, +6.0, +12.0, +18.0, +0.0, +6.0, +12.0, +18.0};
    final double[] ys = {+8.0, +4.0, +8.0, +4.0, -8.0, -4.0, -8.0, -4.0};
    final double x = xs[id];
    final double y = ys[id];
    return new double[] {x, y};
  };

  // 指定されたサブデルタIDの上向き上位デルタからの距離を取得する
  self.getUpperSubDeltaDistance = function(id) {
    final double[] xs = {+0.0, +0.0, +3.0, -3.0};
    final double[] ys = {+0.0, +4.0, -2.0, -2.0};
    final double dx = xs[id];
    final double dy = ys[id];
    return new double[] {dx, dy};
  };

  // 指定されたサブデルタIDの下向き上位デルタからの距離を取得する
  self.getLowerSubDeltaDistance = function(id) {
    final double[] xs = {+0.0, +0.0, -3.0, +3.0};
    final double[] ys = {+0.0, -4.0, +2.0, +2.0};
    final double dx = xs[id];
    final double dy = ys[id];
    return new double[] {dx, dy};
  };

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