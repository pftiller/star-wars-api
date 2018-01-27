myApp.controller('FavoritesController', ['MeanService', function (MeanService){
    console.log('loading favorites controller');
    const self = this;
    self.favorites = MeanService.favorites;
    self.getFavorites() = function() {
        MeanService.getFavorites();
    }
}]);