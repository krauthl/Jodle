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
                th += '<tr>'
                th += '<th>'+name+' '+phone+'</th>';
                th += '</tr>'

                console.log(name, value);
            });
            $("#contactTable").html(th);

        }

        function contactfindError(message) {
            alert('Failed because: ' + message);
        }
    }
}
