var app = angular.module('dynoPosts',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
  $routeProvider.
  when('/posts',{
    templateUrl: './templates/allPosts.html',
    controller: 'MainController'
  }).
  when('/posts/new',{
    templateUrl: './templates/newPost.html',
    controller: 'NewController'
  }).
  when('/posts/:id/edit',{
    templateUrl: './editPost.html',
    controller: 'MainController'
  }).
  otherwise({redirectTo: '/posts'});

  $locationProvider.html5Mode(true);
}]);