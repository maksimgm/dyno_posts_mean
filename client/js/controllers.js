app.controller('MainController',["$scope","PostService","$location", function($scope, PostService, $location){
  PostService.getPosts().then(function(posts){
    $scope.posts = posts.data;
  });

  $scope.postToggle = false;

  $scope.formToggle = function(){
    $scope.postToggle = !$scope.postToggle;
  };
  //add a post to the DB and the array on the front end
  $scope.addPost = function(post){
    //   // BREAKS ON LINE 22...
    $scope.post.votes = 0;
    PostService.addPost(post).then(function(data){
      console.log(data);
      //if(data.data.title !== '' || data.data.title) return;
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
  //incremment and decrement votes on front end and send update to the DB
  $scope.incremVotes = function(post){
    post.votes++;
    PostService.editPost(post).then(function(data) {

    })
  };

  $scope.decremVotes = function(post){
    post.votes--;
    PostService.editPost(post).then(function(data) {

    });
  }
}]);

app.controller('EditController',["$scope","PostService","$location","$routeParams",function($scope, PostService, $location, $routeParams){
  PostService.editPost($routeParams.id).then(function(post){
    $scope.post = post.data;
  });

    $scope.editPost = function(post){
      PostService.editPost(post).then(function(data){

      });
    }

}]);
