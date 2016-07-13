'use strict';

export default class StaffCtrl {
    constructor(
        $cookies,
        $location,
        metaDataService,
        menuService,
        staffService
    ) {
        this.title = 'Staff list';
        metaDataService.setPageTitle(this.title);
        menuService.setActiveItem('/staff');

        this.$location = $location;
        this.$cookies = $cookies;
        this.staffService = staffService;

        this.staffList = [];
        this.filtered = [];

        this.initProps();

        this.activate();

    }

    activate() {

        this.loading = true;
        return this.staffService.getAllStaff()
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
        if (!this.filtered) {
            return true;
        }

        return !this.loading && this.filtered.length <= 0;
    }

    ifCurrentViewIs(name) {
        if (!name) {
            return false;
        }

        return name === this.filterProps.currentView;
    }


    initProps() {
        let storedProps = this.$cookies.getObject('filterProps');

        if (storedProps) {
            this.filterProps = storedProps;
        } else {
            this.filterProps = {
                currentView: 'table',
                orderBy: 'name',
                orderReverse: ''
            };
        }

        return this.filterProps;
    }


    saveProps() {
        if (this.ifCurrentViewIs('departments') && this.filterProps.orderBy === 'department') {
            this.filterProps.orderBy = 'name';
        }
        return this.$cookies.putObject('filterProps', this.filterProps);
    }


}

StaffCtrl.$inject = ['$cookies', '$location', 'metaDataService', 'menuService', 'staffService'];