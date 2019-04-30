function contactCtrl($scope){


    function listContacts(){
        var options = new ContactFindOptions();
        options.filter = "";
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

        function contactfindSuccess(contacts) {

            var table = document.getElementById("contactTable");

            for (var i = 0; i < contacts.length; i++) {
                alert("Display Name = " + contacts[i].displayName);
                var newBRcontact = document.createElement('th');
                newBRcontact.innerHTML = contacts[i].name.formatted;
                newBRcontact.wrap('<tr></tr>');
                table.appendChild(newBRcontact);
            }
        }

        function contactfindError(message) {
            alert('Failed because: ' + message);
        }
    }

    $scope.createContact = function() {
        console.log("dans create");
        var myContact = navigator.contacts.create({"displayName": "Test User"});
        console.log(myContact.displayName);
        myContact.save(contactSuccess, contactError);

        function contactSuccess() {
            console.log("coucou");
            alert("Contact is saved!");
        }

        function contactError(message) {
            alert('Failed because: ' + message);
        }

    }

    $scope.deleteContact = function() {
        var options = new ContactFindOptions();
        options.filter = "Test User";
        options.multiple = false;
        fields = ["displayName"];
        navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

        function contactfindSuccess(contacts) {
            var contact = contacts[0];
            contact.remove(contactRemoveSuccess, contactRemoveError);

            function contactRemoveSuccess(contact) {
                alert("Contact Deleted");
            }

            function contactRemoveError(message) {
                alert('Failed because: ' + message);
            }
        }

        function contactfindError(message) {
            alert('Failed because: ' + message);
        }

    }
}
