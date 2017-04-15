angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: { videos: '<' },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {
      this.onClick = function(){};
    },

    templateUrl: "src/templates/videoList.html"

  }
});
