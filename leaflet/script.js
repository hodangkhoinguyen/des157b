(function(){
    'use strict';

    const map = L.map('map').setView([37.352390, -121.953079], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // marker on the map
    const marker = L.marker([37.390660, -121.972480]).addTo(map);

    var polygonArea = L.polygon ([
        [37.552429, -122.004083],
        [37.551340, -121.995838],
        [37.426028, -121.908576],
        [37.390660, -121.972480],
        [37.390660, -121.972480],
        [37.426573, -121.902392]
    ]).addTo(map);

    const circleArea = L.circle([37.328903, -121.895521], {
        color: '#f03',
        fillColor: '#f03',
        fillOpacity: '0.5',
        radius: 500
    }).addTo(map);
    marker.bindPopup("Mission College that I went to");
    polygonArea.bindPopup("The bus route that I took everyday");
    circleArea.bindPopup("Vietnamese community with lots of my hometown food");
}());
