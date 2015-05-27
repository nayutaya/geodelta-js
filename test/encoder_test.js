
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
  describe(".encodeSubDelta", function() {
    it("サブデルタID列をエンコードできること", function() {
      assert.equal("2", encoder.encodeSubDelta([0, 0]));
      assert.equal("3", encoder.encodeSubDelta([0, 1]));
      assert.equal("4", encoder.encodeSubDelta([0, 2]));
      assert.equal("5", encoder.encodeSubDelta([0, 3]));
      assert.equal("6", encoder.encodeSubDelta([1, 0]));
      assert.equal("7", encoder.encodeSubDelta([1, 1]));
      assert.equal("8", encoder.encodeSubDelta([1, 2]));
      assert.equal("A", encoder.encodeSubDelta([1, 3]));
      assert.equal("B", encoder.encodeSubDelta([2, 0]));
      assert.equal("C", encoder.encodeSubDelta([2, 1]));
      assert.equal("D", encoder.encodeSubDelta([2, 2]));
      assert.equal("E", encoder.encodeSubDelta([2, 3]));
      assert.equal("F", encoder.encodeSubDelta([3, 0]));
      assert.equal("G", encoder.encodeSubDelta([3, 1]));
      assert.equal("H", encoder.encodeSubDelta([3, 2]));
      assert.equal("J", encoder.encodeSubDelta([3, 3]));
    });
    it("サブデルタID列をエンコードできること", function() {
      assert.equal("K", encoder.encodeSubDelta([0]));
      assert.equal("M", encoder.encodeSubDelta([1]));
      assert.equal("N", encoder.encodeSubDelta([2]));
      assert.equal("P", encoder.encodeSubDelta([3]));
    });
    it("サブデルタID列をエンコードできること", function() {
      assert.equal("2K", encoder.encodeSubDelta([0, 0, 0]));
      assert.equal("22", encoder.encodeSubDelta([0, 0, 0, 0]));
      assert.equal("3N", encoder.encodeSubDelta([0, 1, 2]));
      assert.equal("3E", encoder.encodeSubDelta([0, 1, 2, 3]));
    });
  });

/*
    @Test(expected = IllegalArgumentException.class)
    public void encodeSubDelta__invalidArg1()
    {
        geodelta.encoder.encodeSubDelta(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void encodeSubDelta__invalidArg2()
    {
        geodelta.encoder.encodeSubDelta(new byte[0]);
    }

    @Test(expected = IllegalArgumentException.class)
    public void encodeSubDelta__invalidArg3()
    {
        geodelta.encoder.encodeSubDelta(new byte[] {-1});
    }

    @Test(expected = IllegalArgumentException.class)
    public void encodeSubDelta__invalidArg4()
    {
        geodelta.encoder.encodeSubDelta(new byte[] {4});
    }
*/

/*
  describe(".TODO", function() {
    it("TODO", function() {
    });
  });
*/
});
