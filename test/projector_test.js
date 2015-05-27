
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
});
