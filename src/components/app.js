angular.module('video-player', [])

.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.selectVideo = function() {};
      this.searchResults = function() {};
      this.currentVideo = window.exampleVideoData[0];
      console.log('app currentVideo: ', this.currentVideo);
      this.videos = window.exampleVideoData;
      console.log('app videos: ', this.videos);
    },
    templateUrl: "src/templates/app.html",
  }
});
