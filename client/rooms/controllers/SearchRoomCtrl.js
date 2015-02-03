(function () {
    'use strict';

    angular
        .module('kamerApp')
        .controller('SearchRoomCtrl', SearchRoomCtrl);

    SearchRoomCtrl.$inject = ['$scope'];

    /* @ngInject */
    function SearchRoomCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'SearchRoomCtrl';

        activate();

        ////////////////

        function activate() {
            /**
             * Search a room -> sends push notification to renters with same category
             * @param firstName
             * @param lastName
             * @param category
             */
            $scope.searchRoom = function (firstName, lastName, category) {
                if(firstName && lastName && category) {
                    Push.send({
                        from: firstName + ' ' + lastName,
                        title: firstName + ' ' + lastName,
                        text: 'wil uw kamer verhuren',
                        badge: 1,
                        query: {
                            //TODO: Check whether category is configured right on remote client
                        }
                    });
                }
            }
        }
    }
})();