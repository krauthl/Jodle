function receiveMessageCtrl($scope){



    socket.on('message', function(usrName, message, date){
        alert(message);
        console.log("je suis rentré dans afficheMessageServeur");
        afficherMessageServeur(message, "Louise", "18h");
    });


    function afficherMessageServeur(message, nom, heure){
        //Si nom ou num différent du mien, afficher ça sinon autre chose
        console.log(messageTable);
        var messageHtml = '<div class="received-chats">';
        messageHtml += '<div class="received-chats-img">';
        messageHtml +=  '<img src="">';
        messageHtml +=  '</div>';
        messageHtml +=  '<div class="received-msg">';
        messageHtml +=  '<div class="received-msg-inbox">';
        messageHtml +=  '<span class="name">'+ nom +'</span>';
        messageHtml +=  '<p>'+message+'</p>';
        messageHtml +=  '<span class="time">'+ heure +'</span>';
        messageHtml +=  '</div>';
        messageHtml +=  '</div>';
        messageHtml +=  '</div>';
        console.log(messageHtml);

        document.getElementById('messageTable').innerHTML += messageHtml;

    }
}
