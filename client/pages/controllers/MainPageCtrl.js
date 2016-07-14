'use strict';

/*
    Controller of main page at site root
*/


export default class MainPageCtrl {
    constructor(metaDataService, menuService) {
        this.title = 'HR app';
        metaDataService.setPageTitle(this.title);
        menuService.setActiveItem('/');
    }
}

MainPageCtrl.$inject = ['metaDataService', 'menuService'];