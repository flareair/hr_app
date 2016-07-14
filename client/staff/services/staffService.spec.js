'use strict';
import app from '../../app';


/*
    e2e for staffService
*/


describe('Board service', () => {
    let sandbox;
    let $httpBackend;
    let staffService;
    let allStaffUrl = '/api/staff/all';
    let requestMade = false;
    let staffMock = [{
        id: '123123',
        name: 'John Dow',
        email: 'mail@mail.ru',
        phone: '77704412',
    }];


    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        angular.mock.module(app);
        angular.mock.inject((_staffService_, _$httpBackend_) => {
            staffService = _staffService_;
            $httpBackend = _$httpBackend_;

            // stub request to partial
            $httpBackend
                .when('GET', '/staff/partials/staff.html')
                .respond(200);
            $httpBackend
                .when('GET', allStaffUrl)
                .respond(() => {
                    requestMade = true;
                    return [200, ''];
                });
        });
    });


    afterEach(function() {
        sandbox.restore();
    });

    it('should have API url ${allStaffUrl}', () => {
        expect(staffService.url).to.equal(allStaffUrl);
    });

    it('should have empty staff array prop on init', () => {
        expect(staffService.staff).to.be.an('array');
        expect(staffService.staff.length).to.equal(0);
    });


    describe('getAllStaff() method', (done) => {
        it('should make request to API url if staff not cached in memory', () => {

            $httpBackend.expectGET(allStaffUrl);

            staffService.getAllStaff();
            $httpBackend.flush();
        });

        it('should not make request to API url if staff cached', () => {
            requestMade = false;
            staffService.staff = staffMock;
            staffService.getAllStaff();

            try {
                $httpBackend.flush();
            } catch(err) {
                expect(err.message).to.equal('No pending request to flush !');
            }

            expect(requestMade).to.be.false;
        });

        it('should return not resolved promise if staff not cached in memory', () => {

            $httpBackend.expectGET(allStaffUrl);
            expect(staffService.getAllStaff()).to.be.an('object');
            expect(staffService.getAllStaff().$$state.status).to.equal(0);
            $httpBackend.flush();
        });

        it('should return resolved promise if staff cached in memory', () => {
            staffService.staff = staffMock;

            expect(staffService.getAllStaff()).to.be.an('object');
            expect(staffService.getAllStaff().$$state.status).to.equal(1);
            expect(staffService.getAllStaff().$$state.value.data).to.deep.equal(staffMock);

        });
    });

    describe('emptyResults() method', () => {
        it('should return true if promise is already loaded and filtered results is empty', () => {

            expect(staffService.emptyResults(false, [])).to.be.true;

            expect(staffService.emptyResults(false, undefined)).to.be.true;
        });

        it('should return false if promise is loadeding or filtered results not empty', () => {

            expect(staffService.emptyResults(true, [])).to.be.false;

            expect(staffService.emptyResults(false, ['foo', 'bar', 'baz'])).to.be.false;

            expect(staffService.emptyResults(true, ['foo', 'bar', 'baz'])).to.be.false;
        });
    });

});