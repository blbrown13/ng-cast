angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {},
    // restrict: 'E',
    controllerAs: 'ctrl',
    // bindToController: true,
    controller: function() {
      this.videos = exampleVideoData[0];
        console.log('this is? ', this.videos);
    },
    templateUrl: "src/templates/videoListEntry.html"
  }
});
