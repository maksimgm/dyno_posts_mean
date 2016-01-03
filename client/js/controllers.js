// 'Cancel toggle not working'
// increm and decrem===NaN...

app.controller('MainController',["$scope","PostService","$location", function($scope, PostService, $location){
  
  PostService.getPosts().then(function(posts){
    $scope.posts = posts.data;
    // SEND  UPDATED VOTES TO DB
    // DOES THIS NEED TO BE INSIDE OF AN EDIT???
    $scope.incremVotes = function(post){
      post.votes++;
    };

    $scope.decremVotes = function(post){
      post.votes--;
    };
  });

  $scope.postToggle = false;
  // if(!$scope.data.title || $scope.data.title === '')return;

  $scope.formToggle = function(){
    $scope.postToggle = !$scope.postToggle;
  };  
  // $scope.posts.push({
  //   title: $scope.data.title,
  //   link: $scope.data.link,
  //   votes: 0
  // });
  //   $scope.post.link = '';
  //   $scope.post.title = '';
    
  $scope.addPost = function(post){
  //   // BREAKS ON LINE 22...
  $scope.post.votes = 0;
    PostService.addPost(post).then(function(data){
      console.log(data);
      if(data){
        $scope.posts.push({
          title: data.data.title,
          link: data.data.link,
          votes: 0
        });
      }
      
      $location.path('/posts');
    });
  };
  // ADD DELETE A POST INSIDE OF THIS CONTROLLER
}]);

app.controller('NewController',["$scope","PostService","$location", function($scope, PostService, $location){

  // $scope.postToggle = false;
  //     if(!$scope.data.title || $scope.data.title === '')return;
  
  //   $scope.posts.push({
  //     title: $scope.data.title,
  //     link: $scope.data.link,
  //     votes: 0
  //   });
      // $scope.post.link = '';
      // $scope.post.title = '';
      // $scope.formToggle = function(){
  //       $scope.postToggle = true;
  //     };  
  // $scope.addPost = function(post){
  // //   // BREAKS ON LINE 22...
  //   PostService.addPost(post).then(function(data){
  //     console.log(data);
  //     $location.path('/posts');
  //   });
  // };

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