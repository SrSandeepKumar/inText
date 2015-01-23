(function(){
    
    angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
        console.log("AppCtrl : hi from app ctrl");
    })

    .controller('chatScreenCtrl', function($scope) { 
       console.log("chatScreenCtrl : hi from chat screen");
    })

    .controller('listScreenCtrl', ['$cordovaContacts', '$scope', function($cordovaContacts, $scope) {
        console.log("lists controller : responding");

        $scope.getContactList = function() {

            console.log("responding = getContactList");

            var options = {};
            options.filter = "";
            options.multiple = true;
            options.fields = ['displayName', 'name', 'phoneNumbers', 'emails', 'photos'];
            
            $cordovaContacts.find(options).then(function(result) {
                console.log(result.photos);
                $scope.contacts = result;
            }, function(error) {
                console.log("ERROR: " + error);
            });
        }

        $scope.createContact = function() {

            console.log("create contacts");

            $cordovaContacts.save({"displayName": "Steve Jobs"}).then(function(result) {
                console.log(JSON.stringify(result));
            }, function(error) {
                console.log(error);
            });
        }

        $scope.removeContact = function() {
            $cordovaContacts.remove({"displayName": "Steve Jobs"}).then(function(result) {
                console.log(JSON.stringify(result));
            }, function(error) {
                console.log(error);
            });
        }


        $scope.name = "sandeep kumar";
        // $scope.internalFunction = externalFunction();
        $scope.playlists = [
            { title: 'Sandeep', id: 1, num: 8904565779, status:"Bright sunny day :-)"},
            { title: 'Nithesh', id: 2, num: 9741600013, status:"Feeling good" },
            { title: 'Haricharan', id: 3, num: 9739803593, status:"Being a doctor" },
            { title: 'Pramod', id: 4, num: 9535187766, status:"Life feels awesome" },
            { title: 'Prasad', id: 5, num: 9916579471, status:"With the great friend" },
            { title: 'Sanjay', id: 6, num: 919035484841, status:"Rock on!!" }
        ];
    }])

    .controller('chatPageCtrl', function($scope){
      console.log("chat controller : reponding");
    })

    .controller('settingsCtrl', function($scope){
        console.log("setings : reponding");
    })

    .controller('profileCtrl', function($scope){
        console.log("profile inside settings : responding");
    })

    .controller('settingsScreenCtrl', function($scope){
      console.log("settings page : responding");
    });

})();