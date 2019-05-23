function takenPictureCtrl($scope) {

    var largeImage = document.getElementById('largeImage');
    var idNav = document.getElementById('idNav');
    idNav.style.display = "none";
    largeImage.src = imageDataGlobal;

    $scope.uploadServer = function(){

    }

}
