'use strict';

routing.$inject = ['$routeProvider', '$locationProvider'];


/*
    Router of shared content
*/

export default function routing($routeProvider, $locationProvider) {
    $routeProvider
        .when('/404', {
            templateUrl: '/shared/partials/404',
            controller: 'NotFoundPageCtrl',
            controllerAs: 'notfound',
        })
        .otherwise({
            redirectTo: '/404'
        });

    $locationProvider.html5Mode(true);
}