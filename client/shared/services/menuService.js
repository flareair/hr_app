'use strict';

/*
    Stores active menu item and menu items list
*/


export default class menuService {
    constructor() {
        this.activeItem = '';
        this.menuItems = [
            {
                link: '/',
                name: 'Home',
            },
            {
                link: '/staff',
                name: 'Staff',
            },
        ];
    }

    // return current active item
    getActiveItem() {
        return this.activeItem;
    }

    // sets active item
    setActiveItem(newActiveItem) {
        this.activeItem = newActiveItem;
    }
}