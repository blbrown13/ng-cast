angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      name: '='
    },
    templateUrl: "src/templates/videoList.html"
  }
});
