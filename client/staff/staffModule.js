'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';



import staffRouter from './staffRouter';
import pagination from 'angular-ui-bootstrap/src/pagination';

// import angularMock from 'angular-mocks';

import staffService from './services/staffService';

import sliceFilter from './filters/sliceFilter';
import groupStaff from './filters/groupStaff';

import StaffCtrl from './controllers/StaffCtrl';

export default angular.module('app.staff', [ngRouter, pagination])
    .config(staffRouter)
    .service('staffService', staffService)
    .filter('sliceFilter', sliceFilter)
    .filter('groupStaff', groupStaff)
    .controller('StaffCtrl', StaffCtrl)
    .name;