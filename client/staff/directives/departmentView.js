'use strict';

/*
    This directive contain multiple departments
*/


export default function departmentView(staffService) {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/departmentview.html',
        scope: {
            data: '=',
            loading: '=',
            filterstr: '=',
            order: '=',
            orderdir: '=',
        },
        link:function(scope, elem, attrs) {

            // if results is empty
            scope.emptyResults = function emptyResults() {
                return staffService.emptyResults(scope.loading, scope.filtered);
            };
        }
    };
}

departmentView.$inject = ['staffService'];