(function () {
    'use strict';

    angular
        .module('kamerApp')
        .controller('RentRoomCtrl', RentRoomCtrl);

    RentRoomCtrl.$inject = ['$scope'];

    /* @ngInject */
    function RentRoomCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'RentRoomCtrl';

        activate();

        ////////////////

        function activate() {
            /**
             * Configure localStorage to read push notifications with same category
             * @param email
             * @param password
             * @param category
             */
            $scope.rentRoom = function (email, password, category) {
                localStorage.set('email', email);
                localStorage.set('password', password);
                localStorage.set('category', category);
            }
        }
    }
})();