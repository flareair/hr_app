'use strict';

/*
    Stores page metadata (title, description, etc)
*/

export default class metaDataService {
    constructor($location) {
        this.pageTitle = '';
        // current page host name
        this.address = `http://${$location.host()}/`;
    }

    // return pagetitle of current page
    getPageTitle() {
        return this.pageTitle;
    }

    // sets pagetitle of current page
    setPageTitle(newTitle) {
        this.pageTitle = newTitle;
    }
}

metaDataService.$inject = ['$location'];