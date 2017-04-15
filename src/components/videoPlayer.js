angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    controller: function() {
      // this.video = video;
    },
    templateUrl: "src/templates/videoPlayer.html"
  }
});
