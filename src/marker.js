const mapboxgl = require("mapbox-gl");

function buildMarker(type,coords){
  let mark = document.createElement("div");

  mark.style.width = "32px";
  mark.style.height = "39px";

  switch (type){
    default:
    case "activity":
      mark.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
      break;
    case "hotel":
      mark.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
      break;
    case "restaurant":
      mark.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
  }

  const marker = new mapboxgl.Marker({
    element: mark
  }).setLngLat(coords)
  return marker
}

module.exports = buildMarker;
