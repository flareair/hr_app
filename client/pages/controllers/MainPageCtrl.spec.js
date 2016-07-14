'use strict';
import app from '../../app';

/*
    Tests of main page controller
*/


describe('MainPage controller', () => {
    let MainPageCtrl;

    beforeEach(() => {
        angular.mock.module(app);
        angular.mock.inject(($controller) => {
            MainPageCtrl = $controller('MainPageCtrl');
        });
    });

    it('should have right title', () => {
        MainPageCtrl.should.exist;
        MainPageCtrl.title.should.be.a('string');
        MainPageCtrl.title.should.equal('HR app');
    });
});