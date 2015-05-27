
function test_namespace_encoder() {
  assertNotUndefined(geodelta);
  assertNotUndefined(geodelta.encoder);
}

function test_encode()
{
  assertEquals("Z",   geodelta.encoder.encode([0]));
  assertEquals("ZM",  geodelta.encoder.encode([0, 1]));
  assertEquals("Z8",  geodelta.encoder.encode([0, 1, 2]));
  assertEquals("Z8P", geodelta.encoder.encode([0, 1, 2, 3]));
  assertEquals("R",   geodelta.encoder.encode([7]));
  assertEquals("RP",  geodelta.encoder.encode([7, 3]));
  assertEquals("RH",  geodelta.encoder.encode([7, 3, 2]));
  assertEquals("RHM", geodelta.encoder.encode([7, 3, 2, 1]));
}

/*
    @Test(expected = IllegalArgumentException.class)
    public void encode__invalidArg1()
    {
        geodelta.encoder.encode(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void encode__invalidArg2()
    {
        geodelta.encoder.encode(new byte[0]);
    }
*/

function test_decode()
{
  assertArrayEquals([0],          geodelta.encoder.decode("Z"));
  assertArrayEquals([0, 1],       geodelta.encoder.decode("ZM"));
  assertArrayEquals([0, 1, 2],    geodelta.encoder.decode("Z8"));
  assertArrayEquals([0, 1, 2, 3], geodelta.encoder.decode("Z8P"));
  assertArrayEquals([7],          geodelta.encoder.decode("R"));
  assertArrayEquals([7, 3],       geodelta.encoder.decode("RP"));
  assertArrayEquals([7, 3, 2],    geodelta.encoder.decode("RH"));
  assertArrayEquals([7, 3, 2, 1], geodelta.encoder.decode("RHM"));
}

/*
    @Test(expected = IllegalArgumentException.class)
    public void decode__invalidArg1()
    {
        geodelta.encoder.decode(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void decode__invalidArg2()
    {
        geodelta.encoder.decode("");
    }

    @Test
    public void randomEncodeAndDecode()
    {
        final Random r = new Random();

        for ( int i = 0; i < 1000; i++ )
        {
            final byte[] ids = createRandomDeltaIds(r, 20);
            final String encoded1 = geodelta.encoder.encode(ids);
            final byte[] decoded1 = geodelta.encoder.decode(encoded1);
            final String encoded2 = geodelta.encoder.encode(decoded1);
            assertArrayEquals(ids, decoded1);
            assertEquals(encoded1, encoded2);
        }
    }

    // FIXME: refactoring
    private byte[] createRandomDeltaIds(final Random random, final int level)
    {
        final byte[] ids = new byte[random.nextInt(level) + 1];
        ids[0] = (byte)random.nextInt(8);
        for ( int i = 1; i < ids.length; i++ )
        {
            ids[i] = (byte)random.nextInt(4);
        }
        return ids;
    }
*/
