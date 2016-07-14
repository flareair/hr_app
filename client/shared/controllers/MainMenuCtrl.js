'use strict';

/*

    Controller of main menu

*/


export default class MainMenuCtrl {
    constructor(menuService) {
        this.menuService = menuService;
        this.menuItems = menuService.menuItems;
        this.isCollapsed = false;
    }

    // if given url is active in menu now
    isActive(url) {
        // need to improve
        return this.menuService.getActiveItem() === url ? 'active' : '';
    }

    // toggles menu in mpbile view
    toggle() {
        this.isCollapsed = !this.isCollapsed;
    }


    // hide menu on link follow in mobile view
    followLink() {
        this.isCollapsed = false;
    }
}

MainMenuCtrl.$inject = ['menuService'];