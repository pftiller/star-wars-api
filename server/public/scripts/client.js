console.log('client.js sourced');
const myApp = angular.module('swApp', ['ngRoute']);

swApp.config(function ($routeProvider) {
    console.log('config good to go');
   $routeProvider
                .when('/search', {
                    templateUrl: '/views/search.html',
                    controller: 'SearchController as vm',
                })
                .when('/favorites', {
                    templateUrl: '/views/favorites.html',
                    controller: 'FavoritesController as vm',
                })
                .otherwise(
                    {redirectTo: '/search'}
                );
        });