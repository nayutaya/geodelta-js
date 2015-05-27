
var assert = require("assert");
var projector = require("../projector.js");

describe("projector", function() {
  var assertRoughlyEquals = function(expected, actual, delta) {
    assert(Math.abs(expected - actual) < delta);
  };

  describe(".latToMy", function() {
    it("緯度をメルカトルY座標に変換できること", function() {
      assertRoughlyEquals(+1.0, projector.latToMy(+85.0511), 1e-05);
      assertRoughlyEquals( 0.0, projector.latToMy(  0.0000), 1e-05);
      assertRoughlyEquals(-1.0, projector.latToMy(-85.0511), 1e-05);
    });
  });

  describe(".lngToMx", function() {
    it("経度をメルカトルX座標に変換できること", function() {
      assertRoughlyEquals(+1.0, projector.lngToMx(+180.0), 1e-05);
      assertRoughlyEquals(+0.5, projector.lngToMx( +90.0), 1e-05);
      assertRoughlyEquals( 0.0, projector.lngToMx(   0.0), 1e-05);
      assertRoughlyEquals(-0.5, projector.lngToMx( -90.0), 1e-05);
      assertRoughlyEquals(-1.0, projector.lngToMx(-180.0), 1e-05);
    });
  });

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
