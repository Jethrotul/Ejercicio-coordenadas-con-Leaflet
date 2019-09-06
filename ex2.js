let map = L.map("catalunya", {
  center: [41.386719, 2.1704386],
  zoom: 16
});

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamV0aHJvdHVsIiwiYSI6ImNrMDZraWZpbzByemgzaHBjeXB4dHBqMWMifQ.6pT4XuZkXX34JtLaG6-eXA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "your.mapbox.access.token"
  }
).addTo(map);

var marker = null;

map.on("click", function(e) {
  if (marker !== null) {
    map.removeLayer(marker);
  }

  marker = L.marker(e.latlng)
    .addTo(map)
    .bindPopup(`Mis coordenadas son:<br><br> <b>${e.latlng.toString()}</b>`)
    .openPopup();
});
