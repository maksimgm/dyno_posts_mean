app.controller('MainController',["$scope","PostService","$location", function($scope, PostService, $location){
  
  PostService.getPosts().then(function(posts){
    $scope.posts = posts.data;

    $scope.incremVotes = function(post){
      post.votes++;
    };

    $scope.decremVotes = function(post){
      post.votes--;
    };
  });

  // ADD DELETE A POST INSIDE OF THIS CONTROLLER
}]);

app.controller('NewController',["$scope","PostService","$location", function($scope, PostService, $location){
console.log("IT IS WORKING!!!!!");
  $scope.addPost = function(post){
    // BREAKS ON LINE 22...
    PostService.addPost().then(function(post){
      $scope.postToggle = false;
        if(!$scope.data.title || $scope.data.title === '')return;
    
      $scope.posts.push({
        title: $scope.data.title,
        link: $scope.data.link,
        votes: 0
      });
        $scope.data.link = '';
        $scope.data.title = '';
        $scope.formToggle = function(){
          $scope.postToggle = true;
        };  
    });
  };

// PostService.addPost().then(function(post){
  // $scope.postToggle= false;

  // $scope.formToggle = function(){
  //   $scope.postToggle = true;
  // };  

  // $scope.addPost = function(){
  //   $scope.postToggle = false;
  // };

  
// });
  
}]);