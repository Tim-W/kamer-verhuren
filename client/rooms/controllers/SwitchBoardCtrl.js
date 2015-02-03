(function () {
    'use strict';

    angular
        .module('kamerApp')
        .controller('SwitchBoardCtrl', SwitchBoardCtrl);

    SwitchBoardCtrl.$inject = ['$scope'];

    /* @ngInject */
    function SwitchBoardCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'SwitchBoardCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();