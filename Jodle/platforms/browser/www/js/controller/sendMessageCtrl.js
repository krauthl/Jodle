var imageDataGlobal;
var pictureSource;   // picture source
var destinationType; // sets the format of returned value

function sendMessageCtrl($scope, $location){

    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;

    //fonction appelée lors de l'appui sur le bouton envoyer
    $scope.envoyer = function(){
        var textAEnvoyer = document.getElementById("messageAEnvoyer").value;
        socket.emit('write', textAEnvoyer, numeroCourant); //envoyer aussi le numéro de telephone

            //$location.path('/receiveMessage');
     };


    // A button will call this function
    //
    $scope.captureImage = function () {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI});

        function onPhotoURISuccess(imageData) {
            imageDataGlobal = imageData;
            $location.path('/sendMessage/takenPicture');
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    };




    function uploadPhoto(imageURI) {
        var options = new FileUploadOptions();
        options.fileKey="file";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = {};
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;

        var ft = new FileTransfer();
        ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    }



}
