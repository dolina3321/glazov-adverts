console.log("Glazov-Adverts v.0.1: OK");

ymaps.ready(init);

function init() {

  console.log("Function init(): OK");
  var map1 = new ymaps.Map("map", {
      center: [58.1409, 52.6743],
      zoom: 14
  });
  console.log("Map");
}