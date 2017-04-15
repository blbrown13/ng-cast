angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      video: "<"
    },
    controllerAs: 'ctrl',
    controller: function () {
      this.result = function () {
      };
    },

    templateURL: "src/templates/search.html"
  }
});
