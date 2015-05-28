
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
  var _sum = function(list) {
    double total = 0.0;
    for ( final double value : list )
    {
      total += value;
    }
    return total;
  };
*/
