'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';

import pagesRouter from './pagesRouter';

import MainPageCtrl from './controllers/MainPageCtrl';


export default angular.module('app.pages', [ngRouter])
    .config(pagesRouter)
    .controller('MainPageCtrl', MainPageCtrl)
    .name;