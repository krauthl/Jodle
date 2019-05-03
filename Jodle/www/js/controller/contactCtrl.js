function contactCtrl($scope){

    listContacts();

    function listContacts(){
        var options = new ContactFindOptions();
        options.filter="";
        options.filter="";
        options.multiple=true;
        var fields = ["*"];  //"*" will return all contact fields
        navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

        function contactfindSuccess(contacts) {

            var th = '';
            $.each(contacts, function(key, value) {
                if(value.name){
                    $.each(value.name, function(key, value) {
                        if(key == 'formatted'){
                            name = value;
                        }
                    });
                }
                if(value.phoneNumbers){
                    $.each(value.phoneNumbers, function(key, value) {
                        phone = value.value;
                    });
                }
                //if connected alors:

                th += '<span class="inline-block">' + name + ' ' + phone + '</span>';
                th += '<div id="connectedCircle" class="inline-block"></div>';
                th += '<hr>';
                //else: ...

                console.log(name, value);
            });
            $("#contactTable").html(th);
        }

        function contactfindError(message) {
            alert('Failed because: ' + message);
        }
    }

    function isConnected(phone){
        //mise en forme du numéro de telephone (enlever le +33)
        //requete api pour savoir si le contact est connecté
    }
}
