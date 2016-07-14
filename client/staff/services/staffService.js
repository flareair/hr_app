'use strict';

/*
    Get staff and checks if filter results is empty
*/


export default class boardService {
    constructor($http, $q)  {
        this.$http = $http;
        this.$q = $q;
        // api url
        this.url = '/api/staff/all';
        // init staff chache array
        this.staff = [];
    }

    getAllStaff() {

        // very simple inmemory caching
        // works untill page not reloaded
        // if inmemory array have elements
        if (this.staff.length > 0) {
            console.log('from cache!');

            let deferred = this.$q.defer();
            // resolve with cached array
            deferred.resolve({
                data: this.staff
            });

            return deferred.promise;
        }
        // else return $http promise
        return this.$http.get(this.url)
            .then((res) => {
                this.staff = res.data;
                return res;
            });
    }

    // checks if results is empty
    emptyResults(loading, filtered) {
        if (!filtered) {
            return true;
        }

        return !loading && filtered.length <= 0;
    }
}

boardService.$inject = ['$http', '$q'];