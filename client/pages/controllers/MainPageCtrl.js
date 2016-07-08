'use strict';

export default class MainPageCtrl {
    constructor(metaDataService, menuService) {
        this.title = 'HR app';
        metaDataService.setPageTitle(this.title);
        menuService.setActiveItem('/');
    }
}

MainPageCtrl.$inject = ['metaDataService', 'menuService'];