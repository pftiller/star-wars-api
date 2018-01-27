myApp.controller('SearchController', ['MeanService', function (MeanService){
    console.log('loading search controller');
    const self = this;
    self.swapi = MeanService.swapi;
    self.callSWAPI = function(type, query) {
        type = type.toLowerCase();
        console.log(type);
        MeanService.callSWAPI(type, query);
    }  
}]);

self.showProperCardSet = function(){
    console.log('function triggered');
    self.showFilms = !self.showFilms;
    self.showPeople = !self.showPeople;
    self.showPlanets = !self.showPlanets;
    self.showSpecies = !self.showSpecies;
    self.showStarships = !self.showStarships;
    self.showVehicles = !self.showVehciles;
  }
});