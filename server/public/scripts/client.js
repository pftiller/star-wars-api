const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
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