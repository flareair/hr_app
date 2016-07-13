
'use strict';
import app from '../../app';

describe('Slice filter', () => {
    let sandbox;
    let $filter;


    let array = [1, 7, 3, 4, 2, 4, 123, 44, 1];

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        angular.mock.module(app);
        angular.mock.inject((_$filter_) => {
            $filter = _$filter_;
        });
    });


    afterEach(function() {
        sandbox.restore();
    });

    it('should slice input array', () => {
        let result = $filter('sliceFilter')(array, 1, 3);

        expect(result).to.be.an('array');
        expect(result).to.deep.equal([1, 7, 3]);

        result = $filter('sliceFilter')(array, 5, 2);

        expect(result).to.be.an('array');
        expect(result).to.deep.equal([1]);
    });

    it('should return input array if something goes wrong and call console.error', () => {
        sandbox.spy(console, 'error');

        let result = $filter('sliceFilter')('bla', 1, 3);

        expect(result).to.be.a('string');
        expect(result).to.equal('bla');

        result = $filter('sliceFilter')(array, 0, 5);

        expect(result).to.be.a('array');
        expect(result).to.equal(array);


        result = $filter('sliceFilter')(array, 10, 0);

        expect(result).to.be.a('array');
        expect(result).to.equal(array);

        expect(console.error.calledThrice).to.be.true;
    });




});