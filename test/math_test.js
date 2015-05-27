
var assert = require("assert");
var math = require("../math.js");

describe("math", function() {
  describe(".sinh", function() {
    it("", function() {
      assert(Math.abs(math.sinh(-2.0) - -3.6268604078470186) < 1e-10);
      assert(Math.abs(math.sinh(-1.0) - -1.1752011936438014) < 1e-10);
      assert.equal(0.0, math.sinh(0.0));
      assert(Math.abs(math.sinh(+1.0) - +1.1752011936438014) < 1e-10);
      assert(Math.abs(math.sinh(+2.0) - +3.6268604078470186) < 1e-10);
    });
  });
});
