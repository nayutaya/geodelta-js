
function test_namespace_delta_geometry() {
  assertNotUndefined(geodelta);
  assertNotUndefined(geodelta.delta_geometry);
}

/*
  function test_getCoordinates__level1()
  {
    final double[][] expected1 = {
        {+0.0,  +8.0},
        {+0.0,  +0.0}, // +0.0, -8.0
        {-6.0, +12.0}, // -6.0, +4.0
        {+6.0, +12.0}, // +6.0, +4.0
    };
    assertArrayArrayEquals(expected1, geodelta.delta_geometry.getCoordinates(new byte[] {0}), 1E-15);

    final double[][] expected2 = {
        { +6.0,  +4.0},
        { +6.0, +12.0}, // +0.0, +8.0
        {+12.0,  +0.0}, // +6.0, -4.0
        { +0.0,  +0.0}, // -6.0, -4.0
    };
    assertArrayArrayEquals(expected2, geodelta.delta_geometry.getCoordinates(new byte[] {1}), 1E-15);

    final double[][] expected3 = {
        {+0.0,  -8.0},
        {+0.0,  +0.0}, // +0.0, +8.0
        {+6.0, -12.0}, // +6.0, -4.0
        {-6.0, -12.0}, // -6.0, -4.0
    };
    assertArrayArrayEquals(expected3, geodelta.delta_geometry.getCoordinates(new byte[] {4}), 1E-15);

    final double[][] expected4 = {
        { +6.0,  -4.0},
        { +6.0, -12.0}, // +0.0, -8.0
        { +0.0,  +0.0}, // -6.0, +4.0
        {+12.0,  +0.0}, // +6.0, +4.0
    };
    assertArrayArrayEquals(expected4, geodelta.delta_geometry.getCoordinates(new byte[] {5}), 1E-15);
  }


  function test_getCoordinates__level2()
  {
    final double[][] expected1 = {
        { +0.0,  +8.0},
        { +0.0, +12.0}, // +0.0, +4.0
        { +3.0,  +6.0}, // +3.0, -2.0
        { -3.0,  +6.0}, // -3.0, -2.0
    };
    assertArrayArrayEquals(expected1, geodelta.delta_geometry.getCoordinates(new byte[] {0, 0}), 1E-15);

    final double[][] expected2 = {
        { +0.0, +4.0},
        { +0.0, +0.0}, // +0.0, -4.0
        { -3.0, +6.0}, // -3.0, +2.0
        { +3.0, +6.0}, // +3.0, +2.0
    };
    assertArrayArrayEquals(expected2, geodelta.delta_geometry.getCoordinates(new byte[] {0, 1}), 1E-15);

    final double[][] expected3 = {
        { -3.0, +10.0},
        { -3.0,  +6.0}, // +0.0, -4.0
        { -6.0, +12.0}, // -3.0, +2.0
        { +0.0, +12.0}, // +3.0, +2.0
    };
    assertArrayArrayEquals(expected3, geodelta.delta_geometry.getCoordinates(new byte[] {0, 2}), 1E-15);

    final double[][] expected4 = {
        { +3.0, +10.0},
        { +3.0,  +6.0}, // +0.0, -4.0
        { +0.0, +12.0}, // -3.0, +2.0
        { +6.0, +12.0}, // +3.0, +2.0
    };
    assertArrayArrayEquals(expected4, geodelta.delta_geometry.getCoordinates(new byte[] {0, 3}), 1E-15);

    final double[][] expected5 = {
        { +0.0,  -8.0},
        { +0.0, -12.0}, // +0.0, -4.0
        { -3.0,  -6.0}, // -3.0, +2.0
        { +3.0,  -6.0}, // +3.0, +2.0
    };
    assertArrayArrayEquals(expected5, geodelta.delta_geometry.getCoordinates(new byte[] {4, 0}), 1E-15);

    final double[][] expected6 = {
        { +0.0, -4.0},
        { +0.0, +0.0}, // +0.0, +4.0
        { +3.0, -6.0}, // +3.0, -2.0
        { -3.0, -6.0}, // -3.0, -2.0
    };
    assertArrayArrayEquals(expected6, geodelta.delta_geometry.getCoordinates(new byte[] {4, 1}), 1E-15);

    final double[][] expected7 = {
        { +3.0, -10.0},
        { +3.0,  -6.0}, // +0.0, +4.0
        { +6.0, -12.0}, // +3.0, -2.0
        { +0.0, -12.0}, // -3.0, -2.0
    };
    assertArrayArrayEquals(expected7, geodelta.delta_geometry.getCoordinates(new byte[] {4, 2}), 1E-15);

    final double[][] expected8 = {
        { -3.0, -10.0},
        { -3.0,  -6.0}, // +0.0, +4.0
        { +0.0, -12.0}, // +3.0, -2.0
        { -6.0, -12.0}, // -3.0, -2.0
    };
    assertArrayArrayEquals(expected8, geodelta.delta_geometry.getCoordinates(new byte[] {4, 3}), 1E-15);
  }

  function test_getCoordinates__level3()
  {
    final double[][] expected1 = {
        { +0.0, +8.0},
        { +0.0, +6.0}, // +0.0, -2.0
        { -1.5, +9.0}, // -1.5, +1.0
        { +1.5, +9.0}, // +1.5, +1.0
    };
    assertArrayArrayEquals(expected1, geodelta.delta_geometry.getCoordinates(new byte[] {0, 0, 0}), 1E-15);

    final double[][] expected = {
        { -1.5, +5.0},
        { -1.5, +3.0}, // +0.0, -2.0
        { -3.0, +6.0}, // -1.5, +1.0
        { +0.0, +6.0}, // +1.5, +1.0
    };
    assertArrayArrayEquals(expected, geodelta.delta_geometry.getCoordinates(new byte[] {0, 1, 2}), 1E-15);
  }

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
