var app = angular.module('dynoPosts',['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
  $routeProvider.
  when('/posts',{
    templateUrl: './templates/allPosts.html',
    controller: 'MainController'
  }).
  when('/post/:id/edit',{
    templateUrl: './templates/editPost.html',
    controller: 'EditController',
    resolve:{
      logincheck: checkLoggedin
    }
  }).
  when('/login',{
    templateUrl: './templates/login.html',
    controller: 'LoginController'
  }).
  when('/signup',{
    templateUrl: './templates/signup.html',
    controller: 'SignUpController'
  }).
  when('/profile',{
      templateUrl: './templates/profile.html'
  }).
  otherwise({redirectTo: '/posts'});

  //$locationProvider.html5Mode(true);
}]);

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}