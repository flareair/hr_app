'use strict';

export default class boardService {
    constructor($http, $q)  {
        this.$http = $http;
        this.$q = $q;
        // basic twitch api url
        this.url = '/api/staff/all';
        this.staff = [];
    }

    getAllScammers() {

        // very simple inmemory caching

        if (this.staff.length > 0) {
            console.log('from cache!');

            let deferred = this.$q.defer();

            deferred.resolve({
                data: this.staff
            });

            return deferred.promise;
        }

        return this.$http.get(this.url)
            .then((res) => {
                this.staff = res.data;
                return res;
            });
    }
}

boardService.$inject = ['$http', '$q'];