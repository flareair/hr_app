'use strict';


/*
    Table view directive

*/

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

            // start page
            scope.currentPage = 1;
            // staff per page limit
            scope.limit = 20;
        }
    };
}

tableView.$inject = ['staffService'];