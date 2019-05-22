
function addNewUser($scope, $location) {

    //document.getElementById("idNav").style.display = "none"; // On ne laisse pas accès à la barre de navigation au client

    //req.session.username à modifier
    //Mettre la page de connexion côté serveur

    $scope.demandeEnregistrement = function () {
        alert("booooon");
        var num = document.getElementById("numero").value;
        var nomClient = document.getElementById("usrName").value;
        var mdp = document.getElementById("mdp").value;
        alert(mdp + " " + nomClient + " " + num);

        console.log("le numero client est : "+ num);

        $.post("http://localhost:8080/register", {"username": nomClient, "numero":num, "mdp":mdp}, function (msg) {
            if (msg.message != "ok") {
                alert(msg.message);
            } else {
            
                $scope.$apply(function(){
                    $location.path('/loginPage'); //On redirige l'utilisateur vers la page d'envoi de message
                });
            }
            
           
        });



    };
}

// "nomClient":nomClient, "num":num, "mdp": mdp