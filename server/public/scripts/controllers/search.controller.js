myApp.controller('SearchController', ['MeanService', function (MeanService){
    console.log('loading search controller');
    const self = this;
    self.swapi = MeanService.swapi;
    self.callSWAPI = function(type, query) {
        type = type.toLowerCase();
        console.log(type);
        MeanService.callSWAPI(type, query);
    }  

        self.types = [
         'Films',
         'People',
         'Planets',
         'Species',
         'Starships',
         'Vehicles'
        ]


        self.disabled = false;
        self.addFavorite = function(url) {
            self.disabled = true;
            console.log('here is what I am sending:', url);
            MeanService.addFavorite(url);
        }
    }]);