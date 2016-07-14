'use strict';

/*
    Card view directive
*/

export default function cardView(staffService) {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/cardview.html',
        scope: {
            data: '=',
            loading: '=',
            filterstr: '=',
            order: '=',
            orderdir: '=',
        },
        link:function(scope, elem, attrs) {
            // if filtered results is empty return true
            scope.emptyResults = function emptyResults() {
                return staffService.emptyResults(scope.loading, scope.filtered);
            };

            // start page for pagination
            scope.currentPage = 1;
            // number of items
            scope.limit = 12;
        }
    };
}

cardView.$inject = ['staffService'];