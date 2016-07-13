'use strict';
import app from '../../app';

describe('Staff controller', () => {
    // let StaffCtrl;
    let stubStaffService;
    let stubMetaDataService;
    let stubMenuService;
    let stubCookies;
    let sandbox;
    let deferred;
    let StaffCtrl;
    let $scope;
    let res = {
        data: [{
            id: '123123',
            name: 'John Dow',
            email: 'mail@mail.ru',
            phone: '77704412',
        }]
    };

    let defaultProps = {
        currentView: 'table',
        orderBy: 'name',
        orderReverse: ''
    };

    let pageTitle = 'Staff list';


    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        angular.mock.module(app);
        angular.mock.inject(($controller, $q, _$rootScope_, _$location_) => {
            deferred = $q.defer();

            stubStaffService = sandbox.stub({
                getAllStaff: () => {
                }
            });

            stubStaffService.getAllStaff.returns(deferred.promise);


            stubMetaDataService = sandbox.stub({
                setPageTitle: () => {
                }
            });

            stubMenuService = sandbox.stub({
                setActiveItem: () => {
                }
            });

            stubCookies = sandbox.stub({
                putObject: () => {
                },
                getObject: () => {
                },
            });

            $scope = _$rootScope_.$new();

            StaffCtrl = $controller('StaffCtrl', {
                $location: _$location_,
                metaDataService: stubMetaDataService,
                menuService: stubMenuService,
                staffService: stubStaffService,
                $cookies: stubCookies,
            });
        });
    });




    afterEach(function() {
        sandbox.restore();
    });

    it('should have right title', () => {
        expect(StaffCtrl).to.be.an('object');
        expect(StaffCtrl.title).to.be.a('string');
        expect(StaffCtrl.title).to.equal(pageTitle);
    });


    it('should use menuService and send proper args to it', (done) => {

        expect(stubMenuService.setActiveItem.calledWith('/staff')).to.be.true;
        done();

    });

    it('should use metaDataService and send proper args to it', (done) => {

        expect(stubMetaDataService.setPageTitle.calledWith(pageTitle)).to.be.true;
        done();

    });

    describe('activate() method', () => {

        it('should use staffService', (done) => {

            StaffCtrl.activate();
            expect(stubStaffService.getAllStaff.called).to.be.true;
            done();

        });


        it('should return staff data if promise successful', (done) => {

            StaffCtrl.activate().then((data) => {
                expect(data).to.deep.equal(res.data);
                done();
            });

            deferred.resolve(res);
            $scope.$apply();
        });

        it('should return false data if promise rejected', (done) => {

            StaffCtrl.activate().then((data) => {
                expect(data).to.be.false;
                done();
            });

            deferred.reject(res);
            $scope.$apply();
        });

        it('should call console.error if promise rejected', (done) => {

            sandbox.spy(console, 'error');

            StaffCtrl.activate().then((data) => {
                expect(console.error.called).to.be.true;
                done();
            });

            deferred.reject(res);
            $scope.$apply();
        });

        it('should set loading variable to true while promise is pending', () => {

            deferred.resolve(res);
            StaffCtrl.activate();
            return expect(StaffCtrl.loading).to.be.true;
        });

        it('should set loading variable to false then promise is completed', (done) => {
            StaffCtrl.activate().then((data) => {
                expect(StaffCtrl.loading).to.be.false;
                done();
            });

            deferred.resolve(res);
            $scope.$apply();
        });
    });

    describe('emptyResults() method', () => {
        it('should return true if promise is already loaded and filtered results is empty', () => {
            StaffCtrl.loading = false;
            StaffCtrl.filtered = [];

            expect(StaffCtrl.emptyResults()).to.be.true;

            StaffCtrl.loading = false;
            StaffCtrl.filtered = undefined;

            expect(StaffCtrl.emptyResults()).to.be.true;
        });

        it('should return false if promise is loadeding or filtered results not empty', () => {
            StaffCtrl.loading = true;
            StaffCtrl.filtered = [];

            expect(StaffCtrl.emptyResults()).to.be.false;

            StaffCtrl.loading = false;
            StaffCtrl.filtered = ['foo', 'bar', 'baz'];

            expect(StaffCtrl.emptyResults()).to.be.false;

            StaffCtrl.loading = true;
            StaffCtrl.filtered = ['foo', 'bar', 'baz'];

            expect(StaffCtrl.emptyResults()).to.be.false;
        });
    });

    describe('ifCurrentViewIs() method', () => {
        it('should return true if current view name is the same, that passed to method', () => {

            StaffCtrl.filterProps.currentView = 'table';
            expect(StaffCtrl.ifCurrentViewIs('table')).to.be.true;

            StaffCtrl.filterProps.currentView = 'blabla';
            expect(StaffCtrl.ifCurrentViewIs('blabla')).to.be.true;

        });

        it('should return false if current view name is not the same, that passed to method or empty', () => {

            StaffCtrl.filterProps.currentView = '';
            expect(StaffCtrl.ifCurrentViewIs('table')).to.be.false;

            StaffCtrl.filterProps.currentView = 'table';
            expect(StaffCtrl.ifCurrentViewIs()).to.be.false;

            StaffCtrl.filterProps.currentView = 'table';
            expect(StaffCtrl.ifCurrentViewIs('table1')).to.be.false;

        });
    });

    describe('initProps() method', () => {
        it('should use $cookies.getObject() method', () => {
            StaffCtrl.initProps();

            expect(stubCookies.getObject.calledWith('filterProps')).to.be.true;
        });

        it('should return props, stored in cookies, if they are present', () => {

            let props = {
                foo: 'bar',
                bar: 'baz',
            };

            stubCookies.getObject.returns(props);
            StaffCtrl.initProps();

            expect(StaffCtrl.initProps()).to.deep.equal(props);
        });

        it('should return default props, if nothing stored in cookies', () => {

            stubCookies.getObject.returns(undefined);
            StaffCtrl.initProps();

            expect(StaffCtrl.initProps()).to.deep.equal(defaultProps);
        });
    });

    describe('saveProps() method', () => {
        it('should run $cookies.putObject method with proper args', () => {
            StaffCtrl.saveProps();
            expect(stubCookies.putObject.args[0][0]).to.equal('filterProps');
            expect(stubCookies.putObject.args[0][1]).to.deep.equal(defaultProps);
        });

        it('should change StaffCtrl.filterProps.orderBy on some conditions', () => {

            // depends on StaffCtrl.ifCurrentViewIs method tested before

            StaffCtrl.filterProps = {
                currentView: 'departments',
                orderBy: 'department',
                orderReverse: ''
            };


            StaffCtrl.saveProps();

            expect(stubCookies.putObject.args[0][0]).to.equal('filterProps');
            expect(stubCookies.putObject.args[0][1]).to.deep.equal({
                currentView: 'departments',
                orderBy: 'name',
                orderReverse: ''
            });
        });
    });


});