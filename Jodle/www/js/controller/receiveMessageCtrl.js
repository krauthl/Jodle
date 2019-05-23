function receiveMessageCtrl($scope){

    //Executer une fonction pour récupérer les messages stockées dans le telephone
    afficherMessageServeur();
    console.log(window.location.hash);
}



function afficherMessageServeur(){
    //Si nom ou num différent du mien, afficher ça sinon autre chose
    /*var idMess = 0;
    var message_json = sessionStorage.getItem(idMess);
    var message = JSON.parse(message_json);
    while(idMess < idMessage || message != null){
        console.log("message  : " + message);
        afficherMessage(message.expediteur, message.message, message.date);
        idMess++;
        message_json = sessionStorage.getItem(idMess);
        message = JSON.parse(message_json);
    }*/ //A deommenter si node hébergé sur serveur


    if(listeMessage.length > 0){
        console.log(listeMessage.length);

        for(var i=0; i < listeMessage.length; i++){
            afficherMessage(listeMessage[i].expediteur, listeMessage[i].message, listeMessage[i].date);
//            listeMessage.splice(i, 1); //on retire un élément à la position i
        }
    }
    else{
        console.log("pas de message à afficher");
    }

}

var monobjet_json = sessionStorage.getItem("objet");
var monobjet = JSON.parse(monobjet_json);
