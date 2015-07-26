/**
 * Created by Ben on 7/25/2015.
 */
var chai = require('./chai');
var PeriodCalculator = require('../lib/DatePeriodCalculator');
var SimpleDate = require('simple-datejs');

describe('PERIOD CALCULATOR TEST ->', function() {
    var start = new SimpleDate(2015, 2, 1);
    var end = new SimpleDate(2015, 6, 31);

    it('get one time periods', function(){
        var results = PeriodCalculator.calculatePeriodDates(start, end, 0);
        assert(results.length === 1);
    });

    it('get daily periods', function(){
        var results = PeriodCalculator.calculatePeriodDates(start, end, 1);
        assert(results.length === 153);
    });

    it('get weekly periods', function(){
        var results = PeriodCalculator.calculatePeriodDates(start, end, 2);
        assert(results.length === 22);
    });

    it('get bi-weekly periods', function(){
        var results = PeriodCalculator.calculatePeriodDates(start, end, 3);
        assert(results.length === 11);
    });

    it('get monthly periods', function(){
        var results = PeriodCalculator.calculatePeriodDates(start, end, 4);
        assert(results.length === 5);

        results = PeriodCalculator.calculatePeriodDates(start, start, 4);
        assert(results.length ===1);
    });
});