var app = angular.module('dynoPosts',[]);

app.controller('MainController',["$scope",function($scope){
  $scope.postToggle= false;

  $scope.formToggle = function(){
    $scope.postToggle = true;
  };  

  $scope.posts = [
    {title: 'post 1', votes: 5},
    {title: 'post 2', votes: 2},
    {title: 'post 3', votes: 15},
    {title: 'post 4', votes: 9},
    {title: 'post 5', votes: 4}
  ];
  $scope.addPost = function(){
    $scope.postToggle = false;
  };

  $scope.addPost = function(){
    $scope.postToggle = false;
    if(!$scope.data.title || $scope.data.title === '')return;
    
    $scope.posts.push({
      title: $scope.data.title,
      link: $scope.data.link,
      votes: 0
    });
      $scope.data.link = '';
      $scope.data.title = '';
  };

  $scope.incremVotes = function(post){
    post.votes++;
  };

  $scope.decremVotes = function(post){
    post.votes--;
  };
}]);

