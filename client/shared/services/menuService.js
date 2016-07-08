'use strict';

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

    getActiveItem() {
        return this.activeItem;
    }

    setActiveItem(newActiveItem) {
        this.activeItem = newActiveItem;
    }
}