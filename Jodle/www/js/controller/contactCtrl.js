function contactCtrl($scope){
    $scope.afficherContacts = function(){
        // find all contacts with 'Bob' in any name field
        var options = new ContactFindOptions();
        options.filter = "";
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

    $scope.creerContact = function () {
        var myContact = navigator.contacts.create({"displayName": "Test User"});
        myContact.note = "This contact has a note.";
        console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
    }


    // onSuccess: Get a snapshot of the current contacts

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }

// onError: Failed to get the contacts

    function onError(contactError) {
        alert('onError!');
    }
}
