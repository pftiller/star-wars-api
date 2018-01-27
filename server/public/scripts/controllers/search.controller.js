myApp.controller('SearchController', ['MeanService', function (MeanService){
    console.log('loading search controller');
    const self = this;
    self.search = MeanService.search;
    self.callSWAPI = function() {
        MeanService.callSWAPI();
    }  
}]);