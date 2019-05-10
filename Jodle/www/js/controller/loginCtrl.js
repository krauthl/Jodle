function loginCtrl($scope) {

    //document.getElementById("idNav").style.display = "none"; // On ne laisse pas accès à la barre de navigation au client
    var mdp;
    var usr;

    //req.session.username à modifier
    //Mettre la page de connexion côté serveur

    $scope.demandeConnexion = function(){
        usr = document.getElementById("usrId").value;
        mdp = document.getElementById("mdpId").value;

        //faire une requête à la bdd

        //if succes
        document.getElementById("idNav").style.display = "block"; // on réaffiche la bar
    };
}


function envoyerUsrNameAutreJs(usr){

}
