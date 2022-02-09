let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -32.9283, lng: 151.7817 },
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: { lat: -32.92109, lng: 151.74795 },
    map: map,
    label: "A",
    title: "The Kent",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h1>The Kent</h1>",
  });
}
