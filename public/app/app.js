var FoorumApp = angular.module('FoorumApp', ['ngRoute']);

FoorumApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'TopicsListController',
      templateUrl: 'app/views/topics/index.html'
    })
    .when('/topics/:id', {
      controller: 'ShowTopicController',
      templateUrl: 'app/views/topics/show.html'
    })
    .when('/messages/:id', {
      controller: 'ShowMessageController',
      templateUrl: 'app/views/messages/show.html'
    })
    .when('/login', {
      controller: 'UserController',
      templateUrl: 'app/views/users/login.html'
    })
    .when('/register', {
      controller: 'UserController',
      templateUrl: 'app/views/users/register.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
