'use strict';

/*
    List of people inside single department, part of departmentView
    directive
*/


export default function departmentStaffView() {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/departmentstaffview.html',
        scope: {
            caption: '=',
            data: '=',
            order: '=',
            orderdir: '=',
        },
        link:function(scope, elem, attrs) {
            // start page
            scope.currentPage = 1;
            // limit of people per page
            scope.limit = 12;
            // accodreon expanded on init
            scope.showStaff = true;

            // toggle staff cards
            scope.toggleAccordeon = function toggle() {
                scope.showStaff = !scope.showStaff;
                return scope.showStaff;
            };
        }
    };
}