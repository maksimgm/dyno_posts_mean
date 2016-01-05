app.controller('MainController',["$scope","PostService","$location", function($scope, PostService, $location){

  PostService.getPosts().then(function(posts){
    $scope.posts = posts.data;
    // SEND  UPDATED VOTES TO DB
    // DOES THIS NEED TO BE INSIDE OF AN EDIT???


  });

  $scope.postToggle = false;
  // if(!$scope.data.title || $scope.data.title === '')return;

  $scope.formToggle = function(){
    $scope.postToggle = !$scope.postToggle;
  };

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
        $scope.post.link = '';
        $scope.post.title = '';
        $scope.formToggle();
      }


      $location.path('/posts');
    });
  };
//
//  console.log(data)
//
//  $scope.editPost = PostService.editPost(post).then(function(data) {
//
//    // logic for rendering on the frony
//    // ADD DELETE A POST INSIDE OF THIS CONTROLLER
//  })
}]);
//
//// 'Cancel toggle not working'
//// increm and decrem===NaN...
