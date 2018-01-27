myApp.service('MeanService', ['$http', function($http){
    console.log('service is loaded');
    const self = this;
    
    // For searches
    const config = {
        params: {search: ""}
    }

    self.swapi = {
       
    };

    self.experiment = function(){
        console.log('hello there!')
    }
   
     self.callSWAPI = function(type, query) {
        console.log('type is:', type);
        console.log('query is:', query);
        config.params.search = query;
        console.log('callSWAPI ran');
         $http.get('https://swapi.co/api/' + type + '/', config)
         .then(function(response){
             console.log('SWAPI response: ', response);
             self.swapi.result = response.data.results;
             console.log(self.swapi.result);
         });
       
     };
 
    // For favorites

     self.addFavorite = {};
     self.favorites = {
            list:[]
        };
 
     self.addFavorite = function(url) {
         $http.post('/router', router)
             .then(function(response) {
                 console.log('post success. this is repsonse:', response);
                 self.getFavorites();
             })
             .catch(function (response) {
                 console.log('post error. this is response:', response);
             });
     }
 
     self.getFavorites = function() {
         $http.get('/router')
             .then(function (response) {
                console.log('get success. this is repsonse:', response);
                 self.favorites.result = response.data;
             })
             .catch(function (response) {
                 console.log('get error. this is response:', response);
             });
     }
 
    //  self.deleteFavorite = function(gameId) {
    //      $http.delete(`/games/${gameId}`)
    //          .then(function (response) {
    //              console.log('delete success. this is response:', response);
    //              self.getGames();
    //          })
    //          .catch(function (response) {
    //              console.log('delete error. this is response:', response);
    //          });
    //  };
 
    //  self.updateFavorite = function(game) {
    //      console.log('updated game: ', game);
         
    //      $http.put(`/games/${game._id}`, game)
    //          .then(function (response) {
    //              console.log('put success. this is response:', response);
    //              self.getGames();
    //          })
    //          .catch(function (response) {
    //              console.log('put error. this is response:', response);
    //          });
    //  };
 
self.getFavorites();
}]);