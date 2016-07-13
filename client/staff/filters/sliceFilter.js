'use strict';

export default function sliceFilter() {
    return function(arr, current = 1, limit = 10) {
        if (!Array.isArray(arr) || current < 1 || limit < 1) {
            console.error('sliceFilter: wrong input');
            return arr;
        }

        return arr.slice((current - 1) * limit , current * limit);
    };
}
