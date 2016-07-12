'use strict';

export default class BoardCtrl {
    constructor($location, metaDataService, menuService, staffService) {
        this.title = 'Staff list';
        metaDataService.setPageTitle(this.title);
        menuService.setActiveItem('/staff');

        this.$location = $location;
        this.staffService = staffService;


        this.currentView = 'table';

        // pagination
        this.currentPage = 1;

        this.staffList = [];
        this.filtered = [];
        this.loading = false;
        this.limit = 10;

        this.orderBy = 'name';

        this.orderReverse = '';

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

    emptyResults() {
        return !this.loading && this.filtered.length <= 0;
    }

    ifCurrentViewIs(name) {
        return name === this.currentView;
    }



}

BoardCtrl.$inject = ['$location', 'metaDataService', 'menuService', 'staffService'];