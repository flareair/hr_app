'use strict';

export default function departmentView() {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/cardview.html',
        scope: {
            data: '=',
            loading: '=',
            filterstr: '=',
            order: '=',
            orederdir: '=',
        },
        link:function(scope, elem, attrs){
            scope.emptyResults = function emptyResults() {
                return !scope.loading && scope.filtered.length <= 0;
            };

            scope.currentPage = 1;
            scope.limit = 12;
        }
    };
}