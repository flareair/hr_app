'use strict';

/*
    Controller of root layout
*/


export default class RootCtrl {
    constructor(metaDataService, loadingService) {
        this.metaData = metaDataService;
        this.loading = loadingService;
    }
}

RootCtrl.$inject = ['metaDataService', 'loadingService'];