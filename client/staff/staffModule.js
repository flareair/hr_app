'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';



import staffRouter from './staffRouter';

import pagination from 'angular-ui-bootstrap/src/pagination';

import departmentView from './directives/departmentView';
import departmentStaffView from './directives/departmentStaffView';

import staffService from './services/staffService';

import sliceFilter from './filters/sliceFilter';

import StaffCtrl from './controllers/StaffCtrl';

export default angular.module('app.staff', [ngRouter, pagination])
    .config(staffRouter)
    .service('staffService', staffService)
    .filter('sliceFilter', sliceFilter)
    .directive('departmentView', departmentView)
    .directive('departmentStaffView', departmentStaffView)
    .controller('StaffCtrl', StaffCtrl)
    .name;