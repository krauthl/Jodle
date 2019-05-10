function sendMessageCtrl($scope){



    //fonction appelée lors de l'appui sur le bouton envoyer
    $scope.envoyer = function(){
        console.log("j'ai appuyé sur bouton");
        var textAEnvoyer = document.getElementById("messageAEnvoyer").value;
        console.log(textAEnvoyer);
        chat.emit('write', textAEnvoyer); //envoyer aussi le numéro de telephone
     };


    // A button will call this function
    //
    $scope.captureImage = function () {
        // Launch device camera application,
        // allowing user to capture up to 2 images
        var options = { limit: 1 };
        navigator.device.capture.captureImage(captureSuccess, captureError, options);
    };

    // Called when capture operation is finished
    //
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
    }

    // Called if something bad happens.
    //
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        alert(msg, null, 'Uh oh!');
    }

    // Upload files to server
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://my.domain.com/upload.php",
            function(result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function(error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileName: name });
    }






    $scope.ouvrirMenuGallerie = function(){
        //fonction qui ouvrira la gallerie photo
    };

    ouvrirMenuEnregistrementSon = function(){
        //fonction qui ouvrira le menu pour un enregistrement audio
    };

}
