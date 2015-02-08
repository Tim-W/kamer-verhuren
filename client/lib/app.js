//Module instantiation
angular.module('kamerApp', [
    'angular-meteor', 'ui.router', 'ionic']
);

function onReady() {
  angular.bootstrap(document, ['kamerApp']);
}

if (Meteor.isCordova) {
  angular.element(document).on("deviceready", onReady);
}
else {
  angular.element(document).ready(onReady);
}

