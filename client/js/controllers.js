app.controller('MainController',["$scope","PostService","$location", function($scope, PostService, $location){
  
  PostService.getPosts().then(function(posts){
    $scope.posts = [
      {title: 'post 1', votes: 5},
      {title: 'post 2', votes: 2},
      {title: 'post 3', votes: 15},
      {title: 'post 4', votes: 9},
      {title: 'post 5', votes: 4}
    ];

    $scope.incremVotes = function(post){
      post.votes++;
    };

    $scope.decremVotes = function(post){
      post.votes--;
    };

  });
}]);

app.controller('NewController',['$scope','TodoService','$location',function($scope,TodoService,$location){
  $scope.postToggle= false;

  $scope.formToggle = function(){
    $scope.postToggle = true;
  };  

  // $scope.addPost = function(){
  //   $scope.postToggle = false;
  // };

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
}]);