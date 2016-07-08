'use strict';

export default class BoardCtrl {
    constructor($location, metaDataService, menuService, staffService) {
        this.title = 'Staff list';
        metaDataService.setPageTitle(this.title);
        menuService.setActiveItem('/staff');

        this.$location = $location;
        this.staffService = staffService;


        // pagination

        this.currentPage = 1;

        this.staffList = [];
        this.loading = false;
        this.limit = 20;
        this.activate();

    }

    activate() {

        this.loading = true;
        return this.staffService.getAllScammers()
            .then((res) => {
                this.staffList = res.data;
                return this.staffList;
            })
            .catch((err) => {
                console.error(err.statusText);
                return false;
            })
            .finally(() => {
                this.loading = false;
            });
    }

}

BoardCtrl.$inject = ['$location', 'metaDataService', 'menuService', 'staffService'];