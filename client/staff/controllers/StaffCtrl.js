'use strict';

/*
    Controller of staff page
*/


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

        // init all staff and filtered staff lists
        this.staffList = [];
        this.filtered = [];

        // initialize filter properties
        this.initProps();

        // activate controllers logic
        this.activate();

    }

    activate() {
        // set loading variable to true before ajax
        this.loading = true;
        // get staff list from server or chache
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
                // set loading variable to false on success or error
                this.loading = false;
            });
    }

    // checks current view
    ifCurrentViewIs(name) {
        if (!name) {
            return false;
        }

        return name === this.filterProps.currentView;
    }

    // initialize filter props
    initProps() {
        // try to get props from cookies
        let storedProps = this.$cookies.getObject('filterProps');

        // set props from cookies, or set default props
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

    // save props to cookies
    saveProps() {

        // change orderBy if current view is departments
        if (this.ifCurrentViewIs('departments') && this.filterProps.orderBy === 'department') {
            this.filterProps.orderBy = 'name';
        }
        return this.$cookies.putObject('filterProps', this.filterProps);
    }


}

StaffCtrl.$inject = ['$cookies', '$location', 'metaDataService', 'menuService', 'staffService'];