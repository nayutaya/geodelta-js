
var expect = require("expect.js");
var delta_geometry = require("../lib/delta_geometry.js");

describe("delta_geometry", function() {
  var assertEquals = function(expected, actual) { expect(actual).to.eql(expected); };
  describe(".getWorldDeltaId", function() {
    it("座標をワールドデルタIDに変換できること", function() {
      assertEquals(2, delta_geometry.getWorldDeltaId( -6.0, +12.0));
      assertEquals(3, delta_geometry.getWorldDeltaId( -6.0,  +6.0));
      assertEquals(3, delta_geometry.getWorldDeltaId( -6.0,   0.0));
      assertEquals(3, delta_geometry.getWorldDeltaId( -3.0,  +6.0));
      assertEquals(0, delta_geometry.getWorldDeltaId(  0.0, +12.0));
      assertEquals(0, delta_geometry.getWorldDeltaId(  0.0,  +6.0));
      assertEquals(0, delta_geometry.getWorldDeltaId(  0.0,   0.0));
      assertEquals(0, delta_geometry.getWorldDeltaId( +3.0,  +6.0));
      assertEquals(0, delta_geometry.getWorldDeltaId( +6.0, +12.0));
      assertEquals(1, delta_geometry.getWorldDeltaId( +6.0,  +6.0));
      assertEquals(1, delta_geometry.getWorldDeltaId( +6.0,   0.0));
      assertEquals(1, delta_geometry.getWorldDeltaId( +9.0,  +6.0));
      assertEquals(1, delta_geometry.getWorldDeltaId(+12.0,   0.0));
      assertEquals(2, delta_geometry.getWorldDeltaId(+12.0, +12.0));
      assertEquals(2, delta_geometry.getWorldDeltaId(+12.0,  +6.0));
      assertEquals(2, delta_geometry.getWorldDeltaId(+15.0,  +6.0));
      assertEquals(2, delta_geometry.getWorldDeltaId(+18.0, +12.0));
      assertEquals(3, delta_geometry.getWorldDeltaId(+18.0,  +6.0));
      assertEquals(3, delta_geometry.getWorldDeltaId(+18.0,   0.0));
      assertEquals(3, delta_geometry.getWorldDeltaId(+21.0,  +6.0));
      assertEquals(0, delta_geometry.getWorldDeltaId(+24.0, +12.0));
      assertEquals(0, delta_geometry.getWorldDeltaId(+24.0,  +6.0));
      assertEquals(0, delta_geometry.getWorldDeltaId(+24.0,   0.0));

      assertEquals(6, delta_geometry.getWorldDeltaId( -6.0, -12.0));
      assertEquals(7, delta_geometry.getWorldDeltaId( -6.0,  -6.0));
      assertEquals(7, delta_geometry.getWorldDeltaId( -3.0,  -6.0));
      assertEquals(4, delta_geometry.getWorldDeltaId(  0.0,  -6.0));
      assertEquals(4, delta_geometry.getWorldDeltaId(  0.0, -12.0));
      assertEquals(4, delta_geometry.getWorldDeltaId( +3.0,  -6.0));
      assertEquals(4, delta_geometry.getWorldDeltaId( +6.0, -12.0));
      assertEquals(5, delta_geometry.getWorldDeltaId( +6.0,  -6.0));
      assertEquals(5, delta_geometry.getWorldDeltaId( +9.0,  -6.0));
      assertEquals(6, delta_geometry.getWorldDeltaId(+12.0,  -6.0));
      assertEquals(6, delta_geometry.getWorldDeltaId(+12.0, -12.0));
      assertEquals(6, delta_geometry.getWorldDeltaId(+15.0,  -6.0));
      assertEquals(6, delta_geometry.getWorldDeltaId(+18.0, -12.0));
      assertEquals(7, delta_geometry.getWorldDeltaId(+18.0,  -6.0));
      assertEquals(7, delta_geometry.getWorldDeltaId(+21.0,  -6.0));
      assertEquals(4, delta_geometry.getWorldDeltaId(+24.0,  -6.0));
      assertEquals(4, delta_geometry.getWorldDeltaId(+24.0, -12.0));
    });
  });

  describe(".getUpperDeltaId", function() {
    it("座標を上向きのサブデルタIDに変換できること", function() {
      assertEquals(3, delta_geometry.getUpperDeltaId( 0.0,  0.0));
      assertEquals(3, delta_geometry.getUpperDeltaId( 1.5,  3.0));
      assertEquals(3, delta_geometry.getUpperDeltaId( 3.0,  3.0));
      assertEquals(3, delta_geometry.getUpperDeltaId( 3.0,  0.0));
      assertEquals(2, delta_geometry.getUpperDeltaId( 9.0,  3.0));
      assertEquals(2, delta_geometry.getUpperDeltaId( 9.0,  0.0));
      assertEquals(2, delta_geometry.getUpperDeltaId(10.5,  3.0));
      assertEquals(2, delta_geometry.getUpperDeltaId(12.0,  0.0));
      assertEquals(1, delta_geometry.getUpperDeltaId( 4.5,  9.0));
      assertEquals(1, delta_geometry.getUpperDeltaId( 6.0, 12.0));
      assertEquals(1, delta_geometry.getUpperDeltaId( 6.0,  9.0));
      assertEquals(1, delta_geometry.getUpperDeltaId( 7.5,  9.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 3.0,  6.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 4.5,  3.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 6.0,  6.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 6.0,  3.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 6.0,  0.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 7.5,  3.0));
      assertEquals(0, delta_geometry.getUpperDeltaId( 9.0,  6.0));
    });
  });

  describe(".getLowerDeltaId", function() {
    it("座標を下向きのサブデルタIDに変換できること", function() {
      assertEquals(3, delta_geometry.getLowerDeltaId( 9.0, 12.0));
      assertEquals(3, delta_geometry.getLowerDeltaId( 9.0,  9.0));
      assertEquals(3, delta_geometry.getLowerDeltaId(10.5,  9.0));
      assertEquals(3, delta_geometry.getLowerDeltaId(12.0, 12.0));
      assertEquals(2, delta_geometry.getLowerDeltaId( 0.0, 12.0));
      assertEquals(2, delta_geometry.getLowerDeltaId( 1.5,  9.0));
      assertEquals(2, delta_geometry.getLowerDeltaId( 3.0, 12.0));
      assertEquals(2, delta_geometry.getLowerDeltaId( 3.0,  9.0));
      assertEquals(1, delta_geometry.getLowerDeltaId( 4.5,  3.0));
      assertEquals(1, delta_geometry.getLowerDeltaId( 6.0,  3.0));
      assertEquals(1, delta_geometry.getLowerDeltaId( 6.0,  0.0));
      assertEquals(1, delta_geometry.getLowerDeltaId( 7.5,  3.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 3.0,  6.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 4.5,  9.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 6.0, 12.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 6.0,  9.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 6.0,  6.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 7.5,  9.0));
      assertEquals(0, delta_geometry.getLowerDeltaId( 9.0,  6.0));
    });
  });

  describe(".isUpperWorldDelta", function() {
    it("指定されたワールドデルタIDが上向きかどうか判定できること", function() {
      assertEquals(false, delta_geometry.isUpperWorldDelta(0));
      assertEquals(true,  delta_geometry.isUpperWorldDelta(1));
      assertEquals(false, delta_geometry.isUpperWorldDelta(2));
      assertEquals(true,  delta_geometry.isUpperWorldDelta(3));
      assertEquals(true,  delta_geometry.isUpperWorldDelta(4));
      assertEquals(false, delta_geometry.isUpperWorldDelta(5));
      assertEquals(true,  delta_geometry.isUpperWorldDelta(6));
      assertEquals(false, delta_geometry.isUpperWorldDelta(7));
    });
  });

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
