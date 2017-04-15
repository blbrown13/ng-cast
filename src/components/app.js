angular.module('video-player')

.directive('app', function() {
  return {
    scope: {
      name: "="
    },
    templateUrl: "src/templates/app.html"
  }
});
