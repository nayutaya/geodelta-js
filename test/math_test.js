
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
});
