
function test_namespace() {
  assertNotUndefined(geodelta);
  assertNotUndefined(geodelta.projector);
}

function test_nyToLat()
{
  assertRoughlyEquals(0.0, geodelta.projector.nyToLat(0.0), 1E-15);
  assertRoughlyEquals(geodelta.projector.myToLat(geodelta.projector.nyToMy(+12.0)), geodelta.projector.nyToLat(+12.0), 1E-15);
  assertRoughlyEquals(geodelta.projector.myToLat(geodelta.projector.nyToMy(-12.0)), geodelta.projector.nyToLat(-12.0), 1E-15);
}

function test_nxToLng()
{
  assertRoughlyEquals(0.0, geodelta.projector.nxToLng(0.0), 1E-15);
  assertRoughlyEquals(geodelta.projector.mxToLng(geodelta.projector.nxToMx(+12.0)), geodelta.projector.nxToLng(+12.0), 1E-15);
  assertRoughlyEquals(geodelta.projector.mxToLng(geodelta.projector.nxToMx(-12.0)), geodelta.projector.nxToLng(-12.0), 1E-15);
}

function test_latLngToNxy()
{
  assertRoughlyEquals(0.0, geodelta.projector.latLngToNxy(0.0, 0.0).nx, 1E-15);
  assertRoughlyEquals(0.0, geodelta.projector.latLngToNxy(0.0, 0.0).ny, 1E-15);
  assertRoughlyEquals(geodelta.projector.lngToNx(+180.0000), geodelta.projector.latLngToNxy(+82.4674, +180.0).nx, 1E-15);
  assertRoughlyEquals(geodelta.projector.latToNy( +82.4674), geodelta.projector.latLngToNxy(+82.4674, +180.0).ny, 1E-15);
  assertRoughlyEquals(geodelta.projector.lngToNx(-180.0000), geodelta.projector.latLngToNxy(-82.4674, -180.0).nx, 1E-15);
  assertRoughlyEquals(geodelta.projector.latToNy( -82.4674), geodelta.projector.latLngToNxy(-82.4674, -180.0).ny, 1E-15);
}

function test_nxyToLatLng()
{
  assertRoughlyEquals(0.0, geodelta.projector.nxyToLatLng(0.0, 0.0).lat, 1E-15);
  assertRoughlyEquals(0.0, geodelta.projector.nxyToLatLng(0.0, 0.0).lng, 1E-15);
  assertRoughlyEquals(geodelta.projector.nyToLat(+12.0), geodelta.projector.nxyToLatLng(+12.0, +12.0).lat, 1E-15);
  assertRoughlyEquals(geodelta.projector.nxToLng(+12.0), geodelta.projector.nxyToLatLng(+12.0, +12.0).lng, 1E-15);
  assertRoughlyEquals(geodelta.projector.nyToLat(-12.0), geodelta.projector.nxyToLatLng(-12.0, -12.0).lat, 1E-15);
  assertRoughlyEquals(geodelta.projector.nxToLng(-12.0), geodelta.projector.nxyToLatLng(-12.0, -12.0).lng, 1E-15);
}

/*
TODO: function test_randomLatLngAndNxy()
{
  final double latMax = geodelta.projector.nyToLat(+12.0);
  final double lngMax = 180.0;
  final Random r = new Random();

  for ( int i = 0; i < 1000; i++ )
  {
    final double lat1 = r.nextDouble() * latMax * 2 - latMax;
    final double lng1 = r.nextDouble() * lngMax * 2 - lngMax;
    final double nx = geodelta.projector.lngToNx(lng1);
    final double ny = geodelta.projector.latToNy(lat1);
    final double lat2 = geodelta.projector.nyToLat(ny);
    final double lng2 = geodelta.projector.nxToLng(nx);
    assertRoughlyEquals(lat1, lat2, 1E-13);
    assertRoughlyEquals(lng1, lng2, 1E-13);
  }
}
*/
