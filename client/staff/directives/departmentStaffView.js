'use strict';

export default function departmentStaffView() {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/departmentstaffview.html',
        scope: {
            caption: '=',
            data: '=',
            order: '=',
            orederdir: '=',
        },
        link:function(scope, elem, attrs){
            scope.currentPage = 1;
            scope.limit = 12;
            scope.showStaff = true;

            // toggle staff cards
            scope.toggleAccordeon = function toggle() {
                scope.showStaff = !scope.showStaff;
                return scope.showStaff;
            };
        }
    };
}