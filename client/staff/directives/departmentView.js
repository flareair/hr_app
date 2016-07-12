'use strict';

export default function departmentView() {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/departmentview.html',
        scope: {
            data: '=',
            filterstr: '=',
            order: '=',
            orederdir: '=',
        },
        link:function(scope, elem, attrs){

        }
    };
}