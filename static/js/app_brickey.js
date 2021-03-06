var viewer = new Cesium.Viewer('cesiumContainer',{
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  homeButton: false,
  navigationHelpButton: false,
  geocoder: false,
  sceneModePicker: false,
  timeline: false,
});

var scene = viewer.scene;
var clock = viewer.clock;
var referenceFramePrimitive;

viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../static/data/gz_2010_us_040_00_500k.json', {
stroke: Cesium.Color.BLACK,
fill: Cesium.Color.TRANSPARENT,
strokeWidth: 2,
markerSymbol: '?'
}));

var pinBuilder = new Cesium.PinBuilder();
// var Location = "KY";
function flyToLocation(Location) {
  if (Location == "TX") {
    var lon = -99.683617;
    var lat = 31.169621;
    var zoom = 1850000.0
    var adjustLatitude = 4.95;
  } else if (Location == "IL") {
    var lon = -89.30131;
    var lat = 39.84215;
    var zoom = 1440000.0
    var adjustLatitude = 2.65;
  } else if (Location == "KY") {
    var lon = -85.7700;
    var lat = 37.8393;
    var zoom = 800000.0
    var adjustLatitude = 1.75;
  } else {
    var lon = -98.5795;
    var lat = 39.8283;
    var zoom = 10000000.0
  }
  viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(lon,lat-adjustLatitude,zoom),
      orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-75.0),
        roll : 0.0
      }
  });
}

// var Location = "TX";
flyToLocation(Location);

Cesium.Resource.fetchJson('/api/v1.0/plantData').then(function(jsonData) {
  jsonData.forEach(function(item) {
    if (item.State == Location) {
      // console.log(item);
      var lat = +item.Latitude;
      var lon = +item.Longitude;
      var kV = +item.Grid_Voltage_kV;
      // console.log(lat, lon, kV);
      var yellowCone = viewer.entities.add({
        name : item.Plant_Name,
        position: Cesium.Cartesian3.fromDegrees(lon, lat, kV*100),
        cylinder : {
            length : kV*1250,
            topRadius : 0.0,
            bottomRadius : kV*100,
            material : Cesium.Color.YELLOW.withAlpha(0.25)
        }
    });
    };
    })
  });

