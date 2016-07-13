'use strict';

export default function tableView(staffService) {
    return {
        restrict:'E',
        templateUrl:'staff/partials/directives/tableview.html',
        scope: {
            data: '=',
            loading: '=',
            filterstr: '=',
            order: '=',
            orderdir: '=',
        },
        link:function(scope, elem, attrs){
            scope.emptyResults = function emptyResults() {
                return staffService.emptyResults(scope.loading, scope.filtered);
            };

            scope.currentPage = 1;
            scope.limit = 20;
        }
    };
}

tableView.$inject = ['staffService'];