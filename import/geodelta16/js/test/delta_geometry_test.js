
function test_namespace_delta_geometry() {
  assertNotUndefined(geodelta);
  assertNotUndefined(geodelta.delta_geometry);
}

/*
  function test_randomCenter()
  {
    final Random r = new Random();

    for ( int i = 0; i < 1000; i++ )
    {
      final int level = r.nextInt(20) + 1;
      final double x1 = (r.nextDouble() * 24.0) - 12.0;
      final double y1 = (r.nextDouble() * 24.0) - 12.0;

      final byte[] ids1 = geodelta.delta_geometry.getDeltaIds(x1, y1, level);
      final double[] xy2 = geodelta.delta_geometry.getCenter(ids1);
      final byte[] ids2 = geodelta.delta_geometry.getDeltaIds(xy2[0], xy2[1], level);
      final double[] xy3 = geodelta.delta_geometry.getCenter(ids2);
      assertArrayEquals(ids1, ids2);
      assertArrayEquals(xy2, xy3, 1E-15);
    }
  }
*/
