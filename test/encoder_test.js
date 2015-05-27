
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

/* TODO:
function test_encodeWorldDelta__invalidArg1()
{
  try
  {
    geodelta.encoder.encodeWorldDelta(-1);
  }
  catch ( e )
  {
    return;
  }
  fail("exception not raised");
}
*/

/* TODO:
function test_encodeWorldDelta__invalidArg2()
{
  try
  {
    geodelta.encoder.encodeWorldDelta(8);
  }
  catch ( e )
  {
    return;
  }
  fail("exception not raised");
}
*/

  describe(".decodeWorldDelta", function() {
    it("ワールドデルタコードをデコードする", function() {
      assert.equal(0, encoder.decodeWorldDelta("Z"));
      assert.equal(1, encoder.decodeWorldDelta("Y"));
      assert.equal(2, encoder.decodeWorldDelta("X"));
      assert.equal(3, encoder.decodeWorldDelta("W"));
      assert.equal(4, encoder.decodeWorldDelta("V"));
      assert.equal(5, encoder.decodeWorldDelta("T"));
      assert.equal(6, encoder.decodeWorldDelta("S"));
      assert.equal(7, encoder.decodeWorldDelta("R"));
    });
  });

/* TODO:
    @Test(expected = IllegalArgumentException.class)
    public void decodeWorldDelta__invalidArg1()
    {
        geodelta.encoder.decodeWorldDelta("z");
    }

    @Test(expected = IllegalArgumentException.class)
    public void decodeWorldDelta__invalidArg2()
    {
        geodelta.encoder.decodeWorldDelta("A");
    }

    @Test
    public void allEncodeAndDecodeWorldDelta()
    {
        for ( int id = 0; id <= 7; id++ )
        {
            final char encoded1 = geodelta.encoder.encodeWorldDelta((byte)id);
            final byte decoded1 = geodelta.encoder.decodeWorldDelta(encoded1);
            final char encoded2 = geodelta.encoder.encodeWorldDelta(decoded1);
            assertEquals(encoded1, encoded2);
        }
    }
*/

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
