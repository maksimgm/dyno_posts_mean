app.service("PostService",["$http",function($http){
  return{
    getPosts: function(){
      return $http.get('/api/posts');
    },

    addPost: function(post){
      return $http.post('/api/posts', todo);
    }

  //   editPost: function(post){
  //     return $http.put('/api/posts/'+post._id,post);
  //   },

  //   getAPost: function(id){
  //     return $http.get('/api/posts/'+id);
  //   },

  //   deleteAPost: function(id){
  //     return $http.delete('/api/posts/'+ id);
  //   }
    
  };
}]);