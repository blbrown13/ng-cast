angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      name: '='
    }
    templateUrl: "src/templates/videoListEntry.html"
  }
});
