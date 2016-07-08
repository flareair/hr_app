'use strict';

export default function sliceFilter() {
    return function(arr, current, limit) {
        return arr.slice((current - 1) * limit , current * limit);
    };
}
