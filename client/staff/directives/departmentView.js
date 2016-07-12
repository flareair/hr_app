'use strict';

export default function departmentView() {
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
        link:function(scope, elem, attrs){
            scope.emptyResults = function emptyResults() {
                return !scope.loading && scope.filtered.length <= 0;
            };
        }
    };
}