function loginCtrl($scope, $location) {

    //document.getElementById("idNav").style.display = "none"; // On ne laisse pas accès à la barre de navigation au client

    //req.session.username à modifier
    //Mettre la page de connexion côté serveur

    $scope.demandeConnexion = function () {
        numeroClient = document.getElementById("usrId").value;
        var mdp = document.getElementById("mdp").value;

        console.log("le numero client est : "+ numeroClient);
        $.post("http://localhost:8080/login", {"username": numeroClient, "mdp": mdp}, function (msg) {
            if (msg.message != "ok") {
                alert(msg.message);
            } else {
                console.log("youpi, je suis authentifié !");
                window.localStorage.setItem("user", $("#user").val());
                window.localStorage.setItem("pwd", $("#pwd").val());
                $scope.$apply(function(){
                    $location.path('/sendMessage'); //On redirige l'utilisateur vers la page d'envoi de message
                });
                document.getElementById("idNav").style.display = "block"; // on réaffiche la bar de navigation
                connectionSocket(numeroClient);
            }
        });

        //if succes

    };
}
