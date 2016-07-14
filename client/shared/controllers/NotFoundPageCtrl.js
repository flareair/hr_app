'use strict';

/*
    Controller of 404 page
*/


export default class NotFoundPageCtrl {
    constructor(metaDataService, menuService) {
        this.title = '404 Not found';
        metaDataService.setPageTitle(this.title);
    }
}

NotFoundPageCtrl.$inject = ['metaDataService', 'menuService'];