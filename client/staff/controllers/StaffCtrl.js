'use strict';

export default class BoardCtrl {
    constructor($location, metaDataService, menuService, staffService) {
        this.title = 'Staff list';
        metaDataService.setPageTitle(this.title);
        menuService.setActiveItem('/staff');

        this.$location = $location;
        this.staffService = staffService;

        this.staff = [];
        this.loading = false;

        this.activate();

    }

    activate() {

        this.loading = true;
        return this.staffService.getAllScammers()
            .then((res) => {
                this.staff = res.data;
                return this.staff;
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