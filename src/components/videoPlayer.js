angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controller: function() {
      this.video = video;
    },
    templateUrl: "src/templates/videoPlayer.html"
  }
});
