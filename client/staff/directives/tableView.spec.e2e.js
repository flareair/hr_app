'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
let expect = chai.expect;

describe('Staff table view', () => {

    beforeEach(() => {
        browser.get('/staff');
        element(by.cssContainingText('option', 'table')).click();
    });

    describe('Staff list', () => {
        it('should show list of 20 persons in table view', () => {
            expect(element.all(by.css('.table-view-element')).count()).to.eventually.equal(20);
        });
    });

    describe('Total count', () => {
        it('should show total count 200', () => {
             expect(element(by.css('.board-footer')).getText()).to.eventually.equal('Total count: 200');
        });
    });

});