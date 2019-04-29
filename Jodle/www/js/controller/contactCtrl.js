function contactCtrl($scope){

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

    $scope.findContacts = function() {
        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;
        fields = ["displayName"];
        navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

        function contactfindSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                alert("Display Name = " + contacts[i].displayName);
            }
        }

        function contactfindError(message) {
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
