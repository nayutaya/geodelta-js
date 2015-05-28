
var expect = require("expect.js");
var delta_geometry = require("../lib/delta_geometry.js");

describe("delta_geometry", function() {
  var assertEquals = function(expected, actual) { expect(actual).to.eql(expected); };
  // TODO: 許容誤差を考慮する。
  var assertArrayEquals = function(expected, actual, delta) { expect(actual).to.eql(expected); };

  describe(".getWorldDeltaId", function() {
    it("座標をワールドデルタIDに変換する", function() {
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
    it("座標を上向きのサブデルタIDに変換する", function() {
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
    it("座標を下向きのサブデルタIDに変換する", function() {
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
    it("指定されたワールドデルタIDが上向きかどうか判定する", function() {
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

  describe(".isUpperSubDelta", function() {
    it("指定されたサブデルタIDが上向きかどうか判定する", function() {
      assertEquals(false, delta_geometry.isUpperSubDelta(true,  0));
      assertEquals(true,  delta_geometry.isUpperSubDelta(true,  1));
      assertEquals(true,  delta_geometry.isUpperSubDelta(true,  2));
      assertEquals(true,  delta_geometry.isUpperSubDelta(true,  3));
      assertEquals(true,  delta_geometry.isUpperSubDelta(false, 0));
      assertEquals(false, delta_geometry.isUpperSubDelta(false, 1));
      assertEquals(false, delta_geometry.isUpperSubDelta(false, 2));
      assertEquals(false, delta_geometry.isUpperSubDelta(false, 3));
    });
  });

  describe(".isUpperDelta", function() {
    it("指定されたデルタID列が上向きかどうか判定する", function() {
      assertEquals(false, delta_geometry.isUpperDelta([0]));
      assertEquals(true,  delta_geometry.isUpperDelta([1]));
      assertEquals(true,  delta_geometry.isUpperDelta([4]));
      assertEquals(false, delta_geometry.isUpperDelta([5]));

      assertEquals(true,  delta_geometry.isUpperDelta([0, 0]));
      assertEquals(false, delta_geometry.isUpperDelta([0, 1]));
      assertEquals(false, delta_geometry.isUpperDelta([0, 2]));
      assertEquals(false, delta_geometry.isUpperDelta([0, 3]));

      assertEquals(false, delta_geometry.isUpperDelta([4, 0]));
      assertEquals(true,  delta_geometry.isUpperDelta([4, 1]));
      assertEquals(true,  delta_geometry.isUpperDelta([4, 2]));
      assertEquals(true,  delta_geometry.isUpperDelta([4, 3]));

      assertEquals(false, delta_geometry.isUpperDelta([0, 0, 0]));
      assertEquals(true,  delta_geometry.isUpperDelta([0, 0, 0, 0]));
      assertEquals(false, delta_geometry.isUpperDelta([0, 0, 0, 0, 0]));
    });
  });

  describe(".transformWorldDelta", function() {
    it("指定された座標を指定されたワールドデルタID内における正規化座標系に平行移動する", function() {
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(0,  +0.0, +4.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(1,  +6.0, +4.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(2, +12.0, +4.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(3, +18.0, +4.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(4,  +0.0, -8.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(5,  +6.0, -8.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(6, +12.0, -8.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformWorldDelta(7, +18.0, -8.0), 1e-15);
    });
  });

  describe(".transformUpperDelta", function() {
    it("指定された座標を指定された上向きのサブデルタID内における正規化座標系に平行移動する", function() {
      assertArrayEquals([+6.0, +8.0], delta_geometry.transformUpperDelta(0, +6.0, +4.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformUpperDelta(1, +6.0, +8.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformUpperDelta(2, +9.0, +2.0), 1e-15);
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformUpperDelta(3, +3.0, +2.0), 1e-15);
    });
  });

  describe(".transformLowerDelta", function() {
    it("指定された座標を指定された下向きのサブデルタID内における正規化座標系に平行移動する", function() {
      assertArrayEquals([+6.0, +4.0], delta_geometry.transformLowerDelta(0, +6.0,  +8.0), 1e-15);
      assertArrayEquals([+6.0, +8.0], delta_geometry.transformLowerDelta(1, +6.0,  +4.0), 1e-15);
      assertArrayEquals([+6.0, +8.0], delta_geometry.transformLowerDelta(2, +3.0, +10.0), 1e-15);
      assertArrayEquals([+6.0, +8.0], delta_geometry.transformLowerDelta(3, +9.0, +10.0), 1e-15);
    });
  });

  describe(".getDeltaIds", function() {
    it("指定された座標を指定されたレベルのデルタID列に変換する（レベル1）", function() {
      assertArrayEquals([0], delta_geometry.getDeltaIds( 0.0, +6.0, 1));
      assertArrayEquals([1], delta_geometry.getDeltaIds( 6.0, +6.0, 1));
      assertArrayEquals([2], delta_geometry.getDeltaIds(12.0, +6.0, 1));
      assertArrayEquals([3], delta_geometry.getDeltaIds(18.0, +6.0, 1));
      assertArrayEquals([4], delta_geometry.getDeltaIds( 0.0, -6.0, 1));
      assertArrayEquals([5], delta_geometry.getDeltaIds( 6.0, -6.0, 1));
      assertArrayEquals([6], delta_geometry.getDeltaIds(12.0, -6.0, 1));
      assertArrayEquals([7], delta_geometry.getDeltaIds(18.0, -6.0, 1));
    });
    it("指定された座標を指定されたレベルのデルタID列に変換する（レベル2）", function() {
      assertArrayEquals([0, 0], delta_geometry.getDeltaIds( +0.0,  +8.0, 2));
      assertArrayEquals([0, 1], delta_geometry.getDeltaIds( +0.0,  +4.0, 2));
      assertArrayEquals([0, 2], delta_geometry.getDeltaIds( -3.0, +10.0, 2));
      assertArrayEquals([0, 3], delta_geometry.getDeltaIds( +3.0, +10.0, 2));
      assertArrayEquals([1, 0], delta_geometry.getDeltaIds( +6.0,  +4.0, 2));
      assertArrayEquals([1, 1], delta_geometry.getDeltaIds( +6.0,  +8.0, 2));
      assertArrayEquals([1, 2], delta_geometry.getDeltaIds( +9.0,  +2.0, 2));
      assertArrayEquals([1, 3], delta_geometry.getDeltaIds( +3.0,  +2.0, 2));
      assertArrayEquals([2, 2], delta_geometry.getDeltaIds( +9.0, +10.0, 2));
      assertArrayEquals([3, 3], delta_geometry.getDeltaIds(+15.0,  +2.0, 2));

      assertArrayEquals([4, 0], delta_geometry.getDeltaIds( +0.0,  -8.0, 2));
      assertArrayEquals([4, 1], delta_geometry.getDeltaIds( +0.0,  -4.0, 2));
      assertArrayEquals([4, 2], delta_geometry.getDeltaIds( +3.0, -10.0, 2));
      assertArrayEquals([4, 3], delta_geometry.getDeltaIds( -3.0, -10.0, 2));
      assertArrayEquals([5, 0], delta_geometry.getDeltaIds( +6.0,  -4.0, 2));
      assertArrayEquals([5, 1], delta_geometry.getDeltaIds( +6.0,  -8.0, 2));
      assertArrayEquals([5, 2], delta_geometry.getDeltaIds( +3.0,  -2.0, 2));
      assertArrayEquals([5, 3], delta_geometry.getDeltaIds( +9.0,  -2.0, 2));
      assertArrayEquals([6, 2], delta_geometry.getDeltaIds(+15.0, -10.0, 2));
      assertArrayEquals([7, 3], delta_geometry.getDeltaIds(+21.0,  -2.0, 2));
    });
    it("指定された座標を指定されたレベルのデルタID列に変換する（レベル3）", function() {
      assertArrayEquals([0, 0, 0], delta_geometry.getDeltaIds(+0.0, +8.0, 3));
      assertArrayEquals([1, 0, 0], delta_geometry.getDeltaIds(+6.0, +4.0, 3));
    });
    it("指定された座標を指定されたレベルのデルタID列に変換する（レベル4）", function() {
      assertArrayEquals([0, 0, 0, 0], delta_geometry.getDeltaIds(+0.0, +8.0, 4));
      assertArrayEquals([1, 0, 0, 0], delta_geometry.getDeltaIds(+6.0, +4.0, 4));
    });
  });

  describe(".getWorldDeltaCenter", function() {
    it("指定されたワールドデルタIDの中心座標を取得する", function() {
      assertArrayEquals([ +0.0, +8.0], delta_geometry.getWorldDeltaCenter(0), 1e-15);
      assertArrayEquals([ +6.0, +4.0], delta_geometry.getWorldDeltaCenter(1), 1e-15);
      assertArrayEquals([+12.0, +8.0], delta_geometry.getWorldDeltaCenter(2), 1e-15);
      assertArrayEquals([+18.0, +4.0], delta_geometry.getWorldDeltaCenter(3), 1e-15);
      assertArrayEquals([ +0.0, -8.0], delta_geometry.getWorldDeltaCenter(4), 1e-15);
      assertArrayEquals([ +6.0, -4.0], delta_geometry.getWorldDeltaCenter(5), 1e-15);
      assertArrayEquals([+12.0, -8.0], delta_geometry.getWorldDeltaCenter(6), 1e-15);
      assertArrayEquals([+18.0, -4.0], delta_geometry.getWorldDeltaCenter(7), 1e-15);
    });
  });

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
