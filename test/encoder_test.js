
var assert = require("assert");
var encoder = require("../lib/encoder.js");

describe("encoder", function() {
  describe(".encodeWorldDelta", function() {
    it("ワールドデルタIDをエンコードできること", function() {
      assert.equal("Z", encoder.encodeWorldDelta(0));
      assert.equal("Y", encoder.encodeWorldDelta(1));
      assert.equal("X", encoder.encodeWorldDelta(2));
      assert.equal("W", encoder.encodeWorldDelta(3));
      assert.equal("V", encoder.encodeWorldDelta(4));
      assert.equal("T", encoder.encodeWorldDelta(5));
      assert.equal("S", encoder.encodeWorldDelta(6));
      assert.equal("R", encoder.encodeWorldDelta(7));
    });
  });

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
