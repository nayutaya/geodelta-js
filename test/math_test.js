
var assert = require("assert");
var math = require("../math.js");

describe("math", function() {
  describe(".sinh", function() {
    it("", function() {
      assert(Math.abs(math.sinh(-2.0) - -3.6268604078470186) < 1e-15);
      assert(Math.abs(math.sinh(-1.0) - -1.1752011936438014) < 1e-15);
      assert.equal(0.0, math.sinh(0.0));
      assert(Math.abs(math.sinh(+1.0) - +1.1752011936438014) < 1e-15);
      assert(Math.abs(math.sinh(+2.0) - +3.6268604078470186) < 1e-15);
    });
  });

  describe(".cosh", function() {
    it("", function() {
      assert(Math.abs(math.cosh(-2.0) - +3.7621956910836314) < 1e-15);
      assert(Math.abs(math.cosh(-1.0) - +1.5430806348152437) < 1e-15);
      assert.equal(1.0, math.cosh(0.0));
      assert(Math.abs(math.cosh(+1.0) - +1.5430806348152437) < 1e-15);
      assert(Math.abs(math.cosh(+2.0) - +3.7621956910836314) < 1e-15);
    });
  });

  describe(".tanh", function() {
    it("", function() {
      assert(Math.abs(math.tanh(-2.0) - -0.9640275800758169) < 1e-15);
      assert(Math.abs(math.tanh(-1.0) - -0.7615941559557649) < 1e-15);
      assert.equal(0.0, math.tanh(0.0));
      assert(Math.abs(math.tanh(+1.0) - +0.7615941559557649) < 1e-15);
      assert(Math.abs(math.tanh(+2.0) - +0.9640275800758169) < 1e-15);
    });
  });

  describe(".atanh", function() {
    it("", function() {
      assert(Math.abs(math.atanh(-0.2) - -0.2027325540540822) < 1e-15);
      assert(Math.abs(math.atanh(-0.1) - -0.1003353477310756) < 1e-15);
      assert.equal(0.0, math.atanh(0.0));
      assert(Math.abs(math.atanh(+0.1) - +0.1003353477310756) < 1e-15);
      assert(Math.abs(math.atanh(+0.2) - +0.2027325540540822) < 1e-15);
    });
  });

  describe(".mod", function() {
    it("", function() {
      assert.equal(0, math.mod(0, 1));
      assert.equal(0, math.mod(1, 1));

      assert.equal(1, math.mod(+10, +3));
      assert.equal(2, math.mod(+10, +4));
      assert.equal(0, math.mod(+10, +5));

      // TODO: 無限ループしてしまう。実装を修正すること。
      // assert.equal(-2, math.mod(+10, -3));
      // assert.equal(-2, math.mod(+10, -4));
      // assert.equal( 0, math.mod(+10, -5));

      assert.equal(2, math.mod(-10, +3));
      assert.equal(2, math.mod(-10, +4));
      assert.equal(0, math.mod(-10, +5));

      // TODO: 無限ループしてしまう。実装を修正すること。
      // assert.equal(-1, math.mod(-10, -3));
      // assert.equal(-2, math.mod(-10, -4));
      // assert.equal( 0, math.mod(-10, -5));
    });
  });
});
