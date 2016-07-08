'use strict';

boardRouter.$inject = ['$routeProvider'];

export default function boardRouter($routeProvider) {
    $routeProvider
        .when('/staff', {
            templateUrl: '/staff/partials/staff.html',
            controller: 'StaffCtrl',
            controllerAs: 'staff',
        });
}