
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

  describe(".myToLat", function() {
    it("メルカトルY座標を緯度に変換できること", function() {
      assertRoughlyEquals(+85.0511, projector.myToLat(+1.0), 1e-04);
      assertRoughlyEquals(  0.0,    projector.myToLat( 0.0), 1e-15);
      assertRoughlyEquals(-85.0511, projector.myToLat(-1.0), 1e-04);
    });
  });

  describe(".mxToLng", function() {
    it("メルカトルX座標を経度に変換できること", function() {
      assertRoughlyEquals( -90.0, projector.mxToLng(+1.5), 1e-15);
      assertRoughlyEquals(-180.0, projector.mxToLng(+1.0), 1e-15);
      assertRoughlyEquals( +90.0, projector.mxToLng(+0.5), 1e-15);
      assertRoughlyEquals(   0.0, projector.mxToLng( 0.0), 1e-15);
      assertRoughlyEquals( -90.0, projector.mxToLng(-0.5), 1e-15);
      assertRoughlyEquals(-180.0, projector.mxToLng(-1.0), 1e-15);
      assertRoughlyEquals( +90.0, projector.mxToLng(-1.5), 1e-15);
    });
  });

  describe(".myToNy", function() {
    it("メルカトルY座標を正規化Y座標に変換できること", function() {
      var max = projector.DELTA_HEIGHT();
      assertRoughlyEquals(+12.0, projector.myToNy(+max), 1e-15);
      assertRoughlyEquals(  0.0, projector.myToNy( 0.0), 1e-15);
      assertRoughlyEquals(-12.0, projector.myToNy(-max), 1e-15);
    });
  });

  describe(".mxToNx", function() {
    it("メルカトルX座標を正規化X座標に変換できること", function() {
      assertRoughlyEquals(+12.0, projector.mxToNx(+1.0), 1e-15);
      assertRoughlyEquals(  0.0, projector.mxToNx( 0.0), 1e-15);
      assertRoughlyEquals(-12.0, projector.mxToNx(-1.0), 1e-15);
    });
  });

  describe(".nyToMy", function() {
    it("正規化Y座標をメルカトルY座標に変換できること", function() {
      var max = projector.DELTA_HEIGHT();
      assertRoughlyEquals(+max, projector.nyToMy(+12.0), 1e-15);
      assertRoughlyEquals( 0.0, projector.nyToMy(  0.0), 1e-15);
      assertRoughlyEquals(-max, projector.nyToMy(-12.0), 1e-15);
    });
  });

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
