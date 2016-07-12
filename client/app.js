'use strict';

import './main.less';


import 'file!./favicon.ico';
import 'file!./favicon-32.ico';
import 'file!./favicon-152.png';

// 123

import angular from 'angular';
import ngRouter from 'angular-route';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import angularFilter from 'angular-filter/dist/angular-filter.js';


import shared from './shared/sharedModule';
import pages from './pages/pagesModule';
import staff from './staff/staffModule';


export default angular.module('app', [
    ngRouter,
    ngSanitize,
    ngCookies,
    'angular.filter',
    shared,
    pages,
    staff,
]).name;
