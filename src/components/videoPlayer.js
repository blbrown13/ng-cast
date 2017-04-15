angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      name: "="
    }
    templateUrl: "src/templates/videoPlayer.html"
  }
});
