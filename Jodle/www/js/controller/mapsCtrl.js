const GOOGLE = {"lat": 37.422476, "lng": -122.08425};

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

    // Add a marker
    map.addMarker({
        'position': GOOGLE,
        'title': "Wesh mon gros"
    }, function(marker) {

        // Show the infoWindow
        marker.showInfoWindow();

    });
}
