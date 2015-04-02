var FoorumApp = angular.module('FoorumApp', ['ngRoute']);

FoorumApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/topics/index.html'
      // Lisää oikea kontrolleri tähän
    })
    .when('/topics/:id', {
      templateUrl: 'app/views/topics/show.html'
      // Lisää oikea kontrolleri tähän
    })
    .when('/messages/:id', {
      templateUrl: 'app/views/messages/show.html'
      // Lisää oikea kontrolleri tähän
    })
    .when('/login', {
      templateUrl: 'app/views/users/login.html'
      // Lisää oikea kontrolleri tähän
    })
    .when('/register', {
      templateUrl: 'app/views/users/register.html'
      // Lisää oikea kontrolleri tähän
    })
    .otherwise({
      redirectTo: '/'
    });
});
