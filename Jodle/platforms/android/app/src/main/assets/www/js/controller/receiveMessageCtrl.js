function receiveMessageCtrl($scope){
    var chat = io.connect( 'http://localhost:8080' );

    chat.on('renvoyer', function(message){
        alert(message);
        console.log("je suis rentré dans afficheMessageServeur");
        afficherMessageServeur(message, "Louise", "18h");
    });


    function afficherMessageServeur(message, nom, heure){
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
