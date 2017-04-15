angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      name: '='
    },
    templateURL: "src/templates/search.html"
  }
});
