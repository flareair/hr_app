'use strict';

boardRouter.$inject = ['$routeProvider'];

/*
    Staff router
*/

export default function boardRouter($routeProvider) {
    $routeProvider
        .when('/staff', {
            templateUrl: '/staff/partials/staff.html',
            controller: 'StaffCtrl',
            controllerAs: 'staff',
        });
}