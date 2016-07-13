'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
let expect = chai.expect;

describe('About page', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have right page title', () => {
        expect(browser.getTitle()).to.eventually.equal('HR app');
    });

    it('should have right h1 caption', () => {
        expect(element(by.tagName('h1')).getText()).to.eventually.equal('HR app');
    });

    it('should have right active menu item', () => {
        expect(element(by.css('.navbar .active')).getText()).to.eventually.equal('Home');
    });
});