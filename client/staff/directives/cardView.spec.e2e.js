'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
let expect = chai.expect;


/*
    Card view directive e2e tests
*/


/* really equal table view, need to improve*/

describe('Staff card view', () => {

    let searchField;

    beforeEach(() => {
        browser.get('/staff');
        element(by.cssContainingText('option', 'cards')).click();
    });

    afterEach(() => {
        browser.manage().deleteAllCookies();
    });

    describe('without filters', () => {
        it('should show list of 12 persons in table view', () => {
            expect(element.all(by.css('.card-item')).count()).to.eventually.equal(12);
        });

        it('should show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
             expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 200');
        });

        it('should show 7 buttons in pagination', () => {
            expect(element(by.css('.pagination')).isDisplayed()).to.eventually.be.true;
            expect(element.all(by.css('.pagination li')).count()).to.eventually.equal(7);
        });
    });

    describe('text search filter', () => {

        beforeEach(() => {
            element(by.css('.filter-word')).sendKeys('abe');
        });

        it('should show list of 5 persons', () => {
            expect(element.all(by.css('.card-item')).count()).to.eventually.equal(5);
        });

        it('should show proper first person', () => {
            expect(element.all(by.css('.card-item')).get(0).getText()).to.eventually.contain('Abe Heaney');
        });

        it('should show total count 5', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
             expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 5');
        });

        it('should not show pagination', () => {
            expect(element(by.css('.pagination')).isDisplayed()).to.eventually.be.false;
        });
    });

    describe('sort filter', () => {

        beforeEach(() => {
            element(by.cssContainingText('option', 'email')).click();
        });

        it('should show list of first 12 persons sorted by email', () => {
            expect(element.all(by.css('.card-item')).count()).to.eventually.equal(12);
        });

        it('should show proper first person', () => {
            expect(element.all(by.css('.card-item')).get(0).getText()).to.eventually.contain('Ada.Hintz37@gmail.com');
        });

        it('should show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
             expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 200');
        });

        it('should show 7 buttons in pagination', () => {
            expect(element(by.css('.pagination')).isDisplayed()).to.eventually.be.true;
            expect(element.all(by.css('.pagination li')).count()).to.eventually.equal(7);
        });

    });


    describe('sort direction', () => {

        beforeEach(() => {
            element(by.cssContainingText('.filter-sort option', 'department')).click();
            element(by.cssContainingText('option', 'desc')).click();
        });

        it('should show list of first 12 persons sorted by department descreased', () => {
            expect(element.all(by.css('.card-item')).count()).to.eventually.equal(12);
        });

        it('should show proper first person', () => {
            expect(element.all(by.css('.card-item')).get(0).getText()).to.eventually.contain('Santina Windler');
        });

        it('should show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
            expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 200');
        });

        it('should show 7 buttons in pagination', () => {
            expect(element(by.css('.pagination')).isDisplayed()).to.eventually.be.true;
            expect(element.all(by.css('.pagination li')).count()).to.eventually.equal(7);
        });

    });

    describe('if results is empty', () => {

        beforeEach(() => {
            element(by.css('.filter-word')).sendKeys('blabaasdad');
        });

        it('should not show any person', () => {
            expect(element.all(by.css('.card-item')).count()).to.eventually.equal(0);
        });

        it('should not show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.false;
        });

        it('should not show pagination', () => {
            expect(element(by.css('.pagination')).isDisplayed()).to.eventually.be.false;
        });

        it('should show right messase', () => {
            expect(element(by.css('.staff-not-found')).isDisplayed()).to.eventually.be.true;
            expect(element(by.css('.staff-not-found')).getText()).to.eventually.equal('Sorry, we can\'t find anyone');
        });

    });

});