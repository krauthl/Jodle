function mapsCtrl($scope){
    initMap();
}

function initMap() {
    var mapDiv = document.getElementById("map");

    var map = plugin.google.maps.Map.getMap(mapDiv, {
        'camera': {
            'latLng': GOOGLE,
            'zoom': 17
        }
    });
    map.one(plugin.google.maps.event.MAP_READY, onMapInit);
}

function onMapInit(map) {

    // Add markers
    for(var i = 0; i<listeLocalisationAmis.length;i++){
        map.addMarker({
            'position': {lng: listeLocalisationAmis[i].longitude, lat: listeLocalisationAmis[i].latitude},
            'title': listeLocalisationAmis[i].nom
        }, function(marker) {
            // Show the infoWindow
            marker.showInfoWindow();

        });
    }
}
