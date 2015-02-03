//Route configuration using angular-ui
angular.module("kamerApp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('switch-board', {
                url: '/home',
                templateUrl: 'client/rooms/views/switch-board.tpl',
                controller: 'SwitchBoardCtrl'
            })
            .state('search-room', {
                url: '/zoek-kamer',
                templateUrl: 'client/rooms/views/search-room.tpl',
                controller: 'SearchRoomCtrl'
            })
            .state('rent-room', {
                url: '/verhuur-kamer',
                templateUrl: 'client/rooms/views/rent-room.tpl',
                controller: 'RentRoomCtrl'
            })
            .state('room-is-searched', {
                url: '/kamer-gezocht',
                templateUrl: 'client/rooms/views/room-is-searched.tpl'
            })
            .state('room-is-rent', {
                url: '/kamer-verhuurd',
                templateUrl: 'client/rooms/views/room-is-rent.tpl'
            });

        $urlRouterProvider.otherwise("/home");
    }]);