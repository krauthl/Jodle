function receiveMessageCtrl($scope){

    //Executer une fonction pour récupérer les messages stockées dans le telephone
    afficherDernierMessageServeur();
    console.log(window.location.hash);
}



function afficherDernierMessageServeur(){
    //Si nom ou num différent du mien, afficher ça sinon autre chose
    if(listeMessage.length > 0){

        for(var i=0; i < listeMessage.length; i++){
            afficherMessage(listeMessage[i].expediteur, listeMessage[i].message, listeMessage[i].data);
//            listeMessage.splice(i, 1); //on retire un élément à la position i
        }
    }
    else{
        console.log("pas de message à afficher");
    }

}
