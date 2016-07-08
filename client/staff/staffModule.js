'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';

import staffRouter from './staffRouter';


import staffService from './services/staffService';

import StaffCtrl from './controllers/StaffCtrl';

export default angular.module('app.staff', [ngRouter])
    .config(staffRouter)
    .service('staffService', staffService)
    .controller('StaffCtrl', StaffCtrl)
    .name;