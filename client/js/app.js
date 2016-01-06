var app = angular.module('dynoPosts',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
  $routeProvider.
  when('/posts',{
    templateUrl: './templates/allPosts.html',
    controller: 'MainController'
  }).
  when('/posts/:id/edit',{
    templateUrl: './templates/editPost.html',
    controller: 'EditController'
  }).
  when('/login',{
    templateUrl: './templates/login.html',
    controller: 'UserController'
  }).
  when('/signup',{
    templateUrl: './templates/signup.html',
    controller: 'UserController'
  });
  otherwise({redirectTo: '/posts'});

  $locationProvider.html5Mode(true);
}]);