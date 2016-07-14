'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
let expect = chai.expect;


/*
    e2e static content of staff page
*/

describe('Staff page', () => {

    beforeEach(() => {
        browser.get('/staff');
    });

    describe('static content', () => {
        it('should have right page title', () => {
            expect(browser.getTitle()).to.eventually.equal('Staff list');
        });

        it('should have right h1 caption', () => {
            expect(element(by.css('h1')).getText()).to.eventually.equal('Staff list');
        });

        it('should have right active menu item', () => {
            expect(element(by.css('.navbar .active')).getText()).to.eventually.equal('Staff');
        });
    });

});