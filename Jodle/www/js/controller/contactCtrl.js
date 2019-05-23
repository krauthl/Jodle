function contactCtrl($scope){

    afficherlistContacts();

    function afficherlistContacts(){
            var th = '';
            for(var i=0; i< listeContact.length; i++){
                th += '<span class="inline-block">' + listeContact[i].nom + ' ' + listeContact[i].numero + '</span>';
                th += '<hr>';
            }
            console.log(name, value);
            $("#contactTable").html(th);
    }
}
