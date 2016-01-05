var app = angular.module('dynoPosts',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
  $routeProvider.
  when('/posts',{
    templateUrl: './templates/allPosts.html',
    controller: 'MainController'
  }).
  //    would the url for editing a vote still be /posts,since I am not redirecting
  when('/posts/:id/edit',{
    templateUrl: './editPost.html',
    controller: 'EditVotesController'
  }).
  otherwise({redirectTo: '/posts'});

  $locationProvider.html5Mode(true);
}]);