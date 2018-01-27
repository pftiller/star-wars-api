myApp.service('MeanService', ['$http', function($http){
    console.log('YO');
    const self = this;
    let config = {
        params: 
            {search: ''}
     };
    // should be an object
    self.swapi = {};

    self.experiment = function(){
        console.log('hello there!')
    }
   
     self.callSWAPI = function() {
        console.log('callSWAPI ran');
        // config.params.search = keyword;
        //  //$http.get('https://swapi.co/api/' + type + config)
        //  $http.get('swapi.co/api/starships/11')
        //  .then(function(response){
        //      console.log('SWAPI response: ', response);
        //      self.swapi.result = response;
        //      console.log(self.swapi.result);
        //  });
       
     };
 
}]);