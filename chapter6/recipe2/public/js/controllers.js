app.factory("Post", function($resource) {
  return $resource("/api/posts/:id");
});

app.controller("PostIndexCtrl", function($scope, Post) {
  Post.query(function(data) {
    $scope.posts = data;
  });

  $scope.remove = function(post) {
    Post.remove({ id: post.id }, function() {
      $scope.posts.forEach(function(p, index) {
        if (p.id == post.id) $scope.posts.splice(index, 1);
      });
    });
  };
});

app.controller("PostShowCtrl", function($scope, Post) {
  Post.get({ id: 1 }, function(data) {
    $scope.post = data;
  });
});