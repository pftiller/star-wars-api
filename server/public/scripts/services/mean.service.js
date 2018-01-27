myApp.service('MeanService', ['$http', function($http){
    console.log('YO');
    const self = this;
     const config = {
        params: {search: ""}
    }
    // should be an object
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
 
}]);