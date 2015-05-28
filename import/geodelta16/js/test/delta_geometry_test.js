
function test_namespace_delta_geometry() {
  assertNotUndefined(geodelta);
  assertNotUndefined(geodelta.delta_geometry);
}

/*
  function test_getLowerDeltaId()
  {
    assertEquals(3, geodelta.delta_geometry.getLowerDeltaId( 9.0, 12.0));
    assertEquals(3, geodelta.delta_geometry.getLowerDeltaId( 9.0,  9.0));
    assertEquals(3, geodelta.delta_geometry.getLowerDeltaId(10.5,  9.0));
    assertEquals(3, geodelta.delta_geometry.getLowerDeltaId(12.0, 12.0));
    assertEquals(2, geodelta.delta_geometry.getLowerDeltaId( 0.0, 12.0));
    assertEquals(2, geodelta.delta_geometry.getLowerDeltaId( 1.5,  9.0));
    assertEquals(2, geodelta.delta_geometry.getLowerDeltaId( 3.0, 12.0));
    assertEquals(2, geodelta.delta_geometry.getLowerDeltaId( 3.0,  9.0));
    assertEquals(1, geodelta.delta_geometry.getLowerDeltaId( 4.5,  3.0));
    assertEquals(1, geodelta.delta_geometry.getLowerDeltaId( 6.0,  3.0));
    assertEquals(1, geodelta.delta_geometry.getLowerDeltaId( 6.0,  0.0));
    assertEquals(1, geodelta.delta_geometry.getLowerDeltaId( 7.5,  3.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 3.0,  6.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 4.5,  9.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 6.0, 12.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 6.0,  9.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 6.0,  6.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 7.5,  9.0));
    assertEquals(0, geodelta.delta_geometry.getLowerDeltaId( 9.0,  6.0));
  }

  function test_isUpperWorldDelta()
  {
    assertEquals(false, geodelta.delta_geometry.isUpperWorldDelta(0));
    assertEquals(true,  geodelta.delta_geometry.isUpperWorldDelta(1));
    assertEquals(false, geodelta.delta_geometry.isUpperWorldDelta(2));
    assertEquals(true,  geodelta.delta_geometry.isUpperWorldDelta(3));
    assertEquals(true,  geodelta.delta_geometry.isUpperWorldDelta(4));
    assertEquals(false, geodelta.delta_geometry.isUpperWorldDelta(5));
    assertEquals(true,  geodelta.delta_geometry.isUpperWorldDelta(6));
    assertEquals(false, geodelta.delta_geometry.isUpperWorldDelta(7));
  }

  function test_isUpperSubDelta()
  {
    assertEquals(false, geodelta.delta_geometry.isUpperSubDelta(true,  0));
    assertEquals(true,  geodelta.delta_geometry.isUpperSubDelta(true,  1));
    assertEquals(true,  geodelta.delta_geometry.isUpperSubDelta(true,  2));
    assertEquals(true,  geodelta.delta_geometry.isUpperSubDelta(true,  3));
    assertEquals(true,  geodelta.delta_geometry.isUpperSubDelta(false, 0));
    assertEquals(false, geodelta.delta_geometry.isUpperSubDelta(false, 1));
    assertEquals(false, geodelta.delta_geometry.isUpperSubDelta(false, 2));
    assertEquals(false, geodelta.delta_geometry.isUpperSubDelta(false, 3));
  }

  function test_isUpperDelta()
  {
    assertEquals(false, geodelta.delta_geometry.isUpperDelta([0]));
    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([1]));
    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([4]));
    assertEquals(false, geodelta.delta_geometry.isUpperDelta([5]));

    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([0, 0]));
    assertEquals(false, geodelta.delta_geometry.isUpperDelta([0, 1]));
    assertEquals(false, geodelta.delta_geometry.isUpperDelta([0, 2]));
    assertEquals(false, geodelta.delta_geometry.isUpperDelta([0, 3]));

    assertEquals(false, geodelta.delta_geometry.isUpperDelta([4, 0]));
    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([4, 1]));
    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([4, 2]));
    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([4, 3]));

    assertEquals(false, geodelta.delta_geometry.isUpperDelta([0, 0, 0]));
    assertEquals(true,  geodelta.delta_geometry.isUpperDelta([0, 0, 0, 0]));
    assertEquals(false, geodelta.delta_geometry.isUpperDelta([0, 0, 0, 0, 0]));
  }

  function test_transformWorldDelta()
  {
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(0,  +0.0, +4.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(1,  +6.0, +4.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(2, +12.0, +4.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(3, +18.0, +4.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(4,  +0.0, -8.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(5,  +6.0, -8.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(6, +12.0, -8.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformWorldDelta(7, +18.0, -8.0), 1E-15);
  }

  function test_transformUpperDelta()
  {
    assertArrayEquals([+6.0, +8.0], geodelta.delta_geometry.transformUpperDelta(0, +6.0, +4.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformUpperDelta(1, +6.0, +8.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformUpperDelta(2, +9.0, +2.0), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformUpperDelta(3, +3.0, +2.0), 1E-15);
  }

  function test_transformLowerDelta()
  {
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.transformLowerDelta(0, +6.0,  +8.0), 1E-15);
    assertArrayEquals([+6.0, +8.0], geodelta.delta_geometry.transformLowerDelta(1, +6.0,  +4.0), 1E-15);
    assertArrayEquals([+6.0, +8.0], geodelta.delta_geometry.transformLowerDelta(2, +3.0, +10.0), 1E-15);
    assertArrayEquals([+6.0, +8.0], geodelta.delta_geometry.transformLowerDelta(3, +9.0, +10.0), 1E-15);
  }

  function test_getDeltaIds__level1()
  {
    assertArrayEquals([0], geodelta.delta_geometry.getDeltaIds( 0.0, +6.0, 1));
    assertArrayEquals([1], geodelta.delta_geometry.getDeltaIds( 6.0, +6.0, 1));
    assertArrayEquals([2], geodelta.delta_geometry.getDeltaIds(12.0, +6.0, 1));
    assertArrayEquals([3], geodelta.delta_geometry.getDeltaIds(18.0, +6.0, 1));
    assertArrayEquals([4], geodelta.delta_geometry.getDeltaIds( 0.0, -6.0, 1));
    assertArrayEquals([5], geodelta.delta_geometry.getDeltaIds( 6.0, -6.0, 1));
    assertArrayEquals([6], geodelta.delta_geometry.getDeltaIds(12.0, -6.0, 1));
    assertArrayEquals([7], geodelta.delta_geometry.getDeltaIds(18.0, -6.0, 1));
  }

  function test_getDeltaIds__level2()
  {
    assertArrayEquals([0, 0], geodelta.delta_geometry.getDeltaIds( +0.0,  +8.0, 2));
    assertArrayEquals([0, 1], geodelta.delta_geometry.getDeltaIds( +0.0,  +4.0, 2));
    assertArrayEquals([0, 2], geodelta.delta_geometry.getDeltaIds( -3.0, +10.0, 2));
    assertArrayEquals([0, 3], geodelta.delta_geometry.getDeltaIds( +3.0, +10.0, 2));
    assertArrayEquals([1, 0], geodelta.delta_geometry.getDeltaIds( +6.0,  +4.0, 2));
    assertArrayEquals([1, 1], geodelta.delta_geometry.getDeltaIds( +6.0,  +8.0, 2));
    assertArrayEquals([1, 2], geodelta.delta_geometry.getDeltaIds( +9.0,  +2.0, 2));
    assertArrayEquals([1, 3], geodelta.delta_geometry.getDeltaIds( +3.0,  +2.0, 2));
    assertArrayEquals([2, 2], geodelta.delta_geometry.getDeltaIds( +9.0, +10.0, 2));
    assertArrayEquals([3, 3], geodelta.delta_geometry.getDeltaIds(+15.0,  +2.0, 2));

    assertArrayEquals([4, 0], geodelta.delta_geometry.getDeltaIds( +0.0,  -8.0, 2));
    assertArrayEquals([4, 1], geodelta.delta_geometry.getDeltaIds( +0.0,  -4.0, 2));
    assertArrayEquals([4, 2], geodelta.delta_geometry.getDeltaIds( +3.0, -10.0, 2));
    assertArrayEquals([4, 3], geodelta.delta_geometry.getDeltaIds( -3.0, -10.0, 2));
    assertArrayEquals([5, 0], geodelta.delta_geometry.getDeltaIds( +6.0,  -4.0, 2));
    assertArrayEquals([5, 1], geodelta.delta_geometry.getDeltaIds( +6.0,  -8.0, 2));
    assertArrayEquals([5, 2], geodelta.delta_geometry.getDeltaIds( +3.0,  -2.0, 2));
    assertArrayEquals([5, 3], geodelta.delta_geometry.getDeltaIds( +9.0,  -2.0, 2));
    assertArrayEquals([6, 2], geodelta.delta_geometry.getDeltaIds(+15.0, -10.0, 2));
    assertArrayEquals([7, 3], geodelta.delta_geometry.getDeltaIds(+21.0,  -2.0, 2));
  }

  function test_getDeltaIds__level3()
  {
    assertArrayEquals([0, 0, 0], geodelta.delta_geometry.getDeltaIds(+0.0, +8.0, 3));
    assertArrayEquals([1, 0, 0], geodelta.delta_geometry.getDeltaIds(+6.0, +4.0, 3));
  }

  function test_getDeltaIds__level4()
  {
    assertArrayEquals([0, 0, 0, 0], geodelta.delta_geometry.getDeltaIds(+0.0, +8.0, 4));
    assertArrayEquals([1, 0, 0, 0], geodelta.delta_geometry.getDeltaIds(+6.0, +4.0, 4));
  }

  function test_getWorldDeltaCenter()
  {
    assertArrayEquals([ +0.0, +8.0], geodelta.delta_geometry.getWorldDeltaCenter(0), 1E-15);
    assertArrayEquals([ +6.0, +4.0], geodelta.delta_geometry.getWorldDeltaCenter(1), 1E-15);
    assertArrayEquals([+12.0, +8.0], geodelta.delta_geometry.getWorldDeltaCenter(2), 1E-15);
    assertArrayEquals([+18.0, +4.0], geodelta.delta_geometry.getWorldDeltaCenter(3), 1E-15);
    assertArrayEquals([ +0.0, -8.0], geodelta.delta_geometry.getWorldDeltaCenter(4), 1E-15);
    assertArrayEquals([ +6.0, -4.0], geodelta.delta_geometry.getWorldDeltaCenter(5), 1E-15);
    assertArrayEquals([+12.0, -8.0], geodelta.delta_geometry.getWorldDeltaCenter(6), 1E-15);
    assertArrayEquals([+18.0, -4.0], geodelta.delta_geometry.getWorldDeltaCenter(7), 1E-15);
  }

  function test_getUpperSubDeltaDistance()
  {
    assertArrayEquals([+0.0, +0.0], geodelta.delta_geometry.getUpperSubDeltaDistance(0), 1E-15);
    assertArrayEquals([+0.0, +4.0], geodelta.delta_geometry.getUpperSubDeltaDistance(1), 1E-15);
    assertArrayEquals([+3.0, -2.0], geodelta.delta_geometry.getUpperSubDeltaDistance(2), 1E-15);
    assertArrayEquals([-3.0, -2.0], geodelta.delta_geometry.getUpperSubDeltaDistance(3), 1E-15);
  }

  function test_getLowerSubDeltaDistance()
  {
    assertArrayEquals([+0.0, +0.0], geodelta.delta_geometry.getLowerSubDeltaDistance(0), 1E-15);
    assertArrayEquals([+0.0, -4.0], geodelta.delta_geometry.getLowerSubDeltaDistance(1), 1E-15);
    assertArrayEquals([-3.0, +2.0], geodelta.delta_geometry.getLowerSubDeltaDistance(2), 1E-15);
    assertArrayEquals([+3.0, +2.0], geodelta.delta_geometry.getLowerSubDeltaDistance(3), 1E-15);
  }

  function test_getSubDeltaDistance()
  {
    assertArrayEquals([+0.0, +4.0], geodelta.delta_geometry.getSubDeltaDistance(true,  1), 1E-15);
    assertArrayEquals([+3.0, -2.0], geodelta.delta_geometry.getSubDeltaDistance(true,  2), 1E-15);
    assertArrayEquals([+0.0, -4.0], geodelta.delta_geometry.getSubDeltaDistance(false, 1), 1E-15);
    assertArrayEquals([-3.0, +2.0], geodelta.delta_geometry.getSubDeltaDistance(false, 2), 1E-15);
  }

  function test_getCenter__level1()
  {
    assertArrayEquals([+0.0, +8.0], geodelta.delta_geometry.getCenter([0]), 1E-15);
    assertArrayEquals([+6.0, +4.0], geodelta.delta_geometry.getCenter([1]), 1E-15);
    assertArrayEquals([+0.0, -8.0], geodelta.delta_geometry.getCenter([4]), 1E-15);
    assertArrayEquals([+6.0, -4.0], geodelta.delta_geometry.getCenter([5]), 1E-15);
  }

  function test_getCenter__level2()
  {
    assertArrayEquals([+0.0,  +8.0], geodelta.delta_geometry.getCenter([0, 0]), 1E-15);
    assertArrayEquals([+0.0,  +4.0], geodelta.delta_geometry.getCenter([0, 1]), 1E-15);
    assertArrayEquals([-3.0, +10.0], geodelta.delta_geometry.getCenter([0, 2]), 1E-15);
    assertArrayEquals([+3.0, +10.0], geodelta.delta_geometry.getCenter([0, 3]), 1E-15);
    assertArrayEquals([+6.0,  +4.0], geodelta.delta_geometry.getCenter([1, 0]), 1E-15);
    assertArrayEquals([+6.0,  +8.0], geodelta.delta_geometry.getCenter([1, 1]), 1E-15);
    assertArrayEquals([+9.0,  +2.0], geodelta.delta_geometry.getCenter([1, 2]), 1E-15);
    assertArrayEquals([+3.0,  +2.0], geodelta.delta_geometry.getCenter([1, 3]), 1E-15);
    assertArrayEquals([+9.0, +10.0], geodelta.delta_geometry.getCenter([2, 2]), 1E-15);
    assertArrayEquals([-9.0,  +2.0], geodelta.delta_geometry.getCenter([3, 3]), 1E-15);

    assertArrayEquals([+0.0,  -8.0], geodelta.delta_geometry.getCenter([4, 0]), 1E-15);
    assertArrayEquals([+0.0,  -4.0], geodelta.delta_geometry.getCenter([4, 1]), 1E-15);
    assertArrayEquals([+3.0, -10.0], geodelta.delta_geometry.getCenter([4, 2]), 1E-15);
    assertArrayEquals([-3.0, -10.0], geodelta.delta_geometry.getCenter([4, 3]), 1E-15);
    assertArrayEquals([+6.0,  -4.0], geodelta.delta_geometry.getCenter([5, 0]), 1E-15);
    assertArrayEquals([+6.0,  -8.0], geodelta.delta_geometry.getCenter([5, 1]), 1E-15);
    assertArrayEquals([+3.0,  -2.0], geodelta.delta_geometry.getCenter([5, 2]), 1E-15);
    assertArrayEquals([+9.0,  -2.0], geodelta.delta_geometry.getCenter([5, 3]), 1E-15);
    assertArrayEquals([-9.0, -10.0], geodelta.delta_geometry.getCenter([6, 2]), 1E-15);
    assertArrayEquals([-3.0,  -2.0], geodelta.delta_geometry.getCenter([7, 3]), 1E-15);
  }

  function test_getCenter__level3()
  {
    assertArrayEquals([+0.0,  +8.0], geodelta.delta_geometry.getCenter([0, 0, 0]), 1E-15);
    assertArrayEquals([+0.0, +10.0], geodelta.delta_geometry.getCenter([0, 0, 1]), 1E-15);
    assertArrayEquals([-1.5,  +5.0], geodelta.delta_geometry.getCenter([0, 1, 2]), 1E-15);
    assertArrayEquals([-1.5, +11.0], geodelta.delta_geometry.getCenter([0, 2, 3]), 1E-15);
    assertArrayEquals([+3.0, +10.0], geodelta.delta_geometry.getCenter([0, 3, 0]), 1E-15);
  }

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
