'use strict';

/*
    Directive, that shows loading on route change
*/


export default function viewLoading($rootScope, loadingService) {
    return {
        restrict:'E',
        template:'<h2 class="text-center loading" ng-if="root.loading.isViewLoading">Loading...</h2>',
        link:function(scope, elem, attrs){
            // when route start to load
            $rootScope.$on('$routeChangeStart', function(){
                loadingService.isViewLoading = true;
            });
            // when route successfully loaded
            $rootScope.$on('$routeChangeSuccess', function(){
                loadingService.isViewLoading = false;
            });
        }
    };
}

viewLoading.$inject = ['$rootScope', 'loadingService'];