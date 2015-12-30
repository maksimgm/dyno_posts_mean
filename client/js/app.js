var app = angular.module('dynoPosts',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
  $routeProvider.
  when('/posts',{
    templateUrl: './templates/allPosts.html',
    controller: 'MainController'
  }).
  when('posts/new',{
    templateUrl: './client/js/templates/newPost.html',
    controller: 'MainController'
  }).
  when('/posts/:id/edit',{
    templateUrl: './client/js/templates/editPost.html',
    controller: 'MainController'
  }).
  otherwise({redirectTo: '/posts'});

  $locationProvider.html5Mode(true);
}]);