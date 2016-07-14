'use strict';

import './main.less';

// favicons
import 'file!./favicon.ico';
import 'file!./favicon-32.ico';
import 'file!./favicon-152.png';


// main angular module
import angular from 'angular';
// router
import ngRouter from 'angular-route';
// sanitize module
import ngSanitize from 'angular-sanitize';
// cookies module
import ngCookies from 'angular-cookies';
// angularFilter custom module
import angularFilter from 'angular-filter/dist/angular-filter.js';

// my modules
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
