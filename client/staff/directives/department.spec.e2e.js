'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
let expect = chai.expect;


/* test both departmentView and departmentStaffView directives*/

describe('Staff departments view', () => {

    let searchField;

    beforeEach(() => {
        browser.get('/staff');
        element(by.cssContainingText('option', 'departments')).click();
    });

    afterEach(() => {
        browser.manage().deleteAllCookies();
    });

    describe('without filters', () => {
        it('should show 5 departmens and total 60 persons in it', () => {
            expect(element.all(by.css('.department-staff-accordeon')).count()).to.eventually.equal(5);
            expect(element.all(by.css('.staff-card')).count()).to.eventually.equal(60);
        });

        it('should show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
             expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 200');
        });

        it('should show 5 paginations total', () => {
            expect(element.all(by.css('.pagination')).count()).to.eventually.equal(5);
        });
    });

    describe('text search filter', () => {

        beforeEach(() => {
            element(by.css('.filter-word')).sendKeys('abe');
        });

        it('should show 3 departmens and total 5 persons in it', () => {
            expect(element.all(by.css('.department-staff-accordeon')).count()).to.eventually.equal(3);
            expect(element.all(by.css('.staff-card')).count()).to.eventually.equal(5);
        });

        it('should show proper first person', () => {
            expect(element.all(by.css('.staff-card')).get(0).getText()).to.eventually.contain('Abe Heaney');
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

        it('should show 5 departmens and total 60 persons in it sorted by emails', () => {
            expect(element.all(by.css('.department-staff-accordeon')).count()).to.eventually.equal(5);
            expect(element.all(by.css('.staff-card')).count()).to.eventually.equal(60);
        });

        it('should show proper first person', () => {
            expect(element.all(by.css('.staff-card')).get(0).getText()).to.eventually.contain('Alejandrin54@gmail.com');
        });

        it('should show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
             expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 200');
        });

        it('should show 5 paginations total', () => {
            expect(element.all(by.css('.pagination')).count()).to.eventually.equal(5);
        });

    });


    describe('sort direction', () => {

        beforeEach(() => {
            element(by.cssContainingText('.filter-sort option', 'name')).click();
            element(by.cssContainingText('option', 'desc')).click();
        });

        it('should show 5 departmens and total 60 persons in it sorted by name descreased', () => {
            expect(element.all(by.css('.department-staff-accordeon')).count()).to.eventually.equal(5);
            expect(element.all(by.css('.staff-card')).count()).to.eventually.equal(60);
        });

        it('should show proper first person', () => {
            expect(element.all(by.css('.staff-card')).get(0).getText()).to.eventually.contain('Zita Stoltenberg');
        });

        it('should show total count 200', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.true;
            expect(element(by.css('.staff-count')).getText()).to.eventually.equal('Total count: 200');
        });

        it('should show 5 paginations total', () => {
            expect(element.all(by.css('.pagination')).count()).to.eventually.equal(5);
        });

    });

    describe('if results is empty', () => {

        beforeEach(() => {
            element(by.css('.filter-word')).sendKeys('blabaasdad');
        });

        it('should not show any departments or persons', () => {
            expect(element.all(by.css('.department-staff-accordeon')).count()).to.eventually.equal(0);
            expect(element.all(by.css('.staff-card')).count()).to.eventually.equal(0);
        });

        it('should not show total count', () => {
             expect(element(by.css('.staff-count')).isDisplayed()).to.eventually.be.false;
        });

        it('should show right messase', () => {
            expect(element(by.css('.staff-not-found')).isDisplayed()).to.eventually.be.true;
            expect(element(by.css('.staff-not-found')).getText()).to.eventually.equal('Sorry, we can\'t find anyone');
        });

    });

});