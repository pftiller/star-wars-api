swApp.service('MeanSWService', ['$http', function($http) {
    console.log('YO');
    const self = this;
    let config = {
        params: 
            {search: ''}
     };
    // should be an object
    self.swapi = {};
   
     self.callSWAPI = function() {
        // config.params.search = keyword;
        //  //$http.get('https://swapi.co/api/' + type + config)
        //  $http.get('swapi.co/api/starships/11')
        //  .then(function(response){
        //      console.log('SWAPI response: ', response);
        //      self.swapi.result = response;
        //      console.log(self.swapi.result);
        //  });
        console.log('callSWAPI ran');
     };
 
}]);