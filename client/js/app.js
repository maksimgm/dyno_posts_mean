var app = angular.module('dynoPosts',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
  $routeProvider.
  when('/posts',{
    templateUrl: './templates.allPosts.html',
    controller: 'MainController'
  }).
  when('posts/new',{
    templateUrl: './templates.newPosts.html',
    controller: 'MainController'
  }).
  when('/posts/:id/edit',{
    templateUrl: './templates.editPosts.html',
    controller: 'MainController'
  }).
  otherwise({redirectTo: '/posts'});

  $locationProvider.html5Mode(true);
}]);