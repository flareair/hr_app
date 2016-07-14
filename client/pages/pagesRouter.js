'use strict';

/*

    Router of static pages without complex logics

*/

pagesRouter.$inject = ['$routeProvider'];

export default function pagesRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/pages/partials/mainpage.html',
            controller: 'MainPageCtrl',
            controllerAs: 'mainpage',
        });
}