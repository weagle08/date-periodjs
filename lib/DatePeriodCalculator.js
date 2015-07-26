/**
 * Created by Ben on 7/25/2015.
 */
var SimpleDate = require('simple-datejs');

function calculatePeriodDates(start, end, frequency) {
    var startDate = new SimpleDate(start);
    var endDate = new SimpleDate(end);

    var diff = startDate.getDaysDifference(endDate);
    if(diff < 0){
        return [];
    }

    if(isNaN(frequency) || frequency < 0 || frequency > 4) {
        throw Error('unknown frequency, must be value between 0-4');
    }

    frequency = parseInt(frequency);

    if(frequency === 0){
        return calculateOneTimePeriod(startDate, endDate);
    } else if(frequency === 1) {
        return calculateDailyPeriod(startDate, endDate);
    } else if(frequency === 2) {
        return calculateWeeklyPeriod(startDate, endDate);
    } else if(frequency === 3) {
        return calculateBiWeeklyPeriod(startDate, endDate);
    } else if(frequency === 4) {
        return calculateMonthlyPeriod(startDate, endDate);
    }

    return [];
}

function calculateOneTimePeriod(start, end) {
    return [new SimpleDate(start.getYear(), start.getMonth(), start.getDate())];
}

function calculateDailyPeriod(start, end) {
    var diff = start.getDaysDifference(end);
    var dates = [];

    //add our initial start date
    dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));

    for(var i = 0; i < diff; i++){
        start.addDays(1);
        dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));
    }

    return dates;
}

function calculateWeeklyPeriod(start, end) {
    var diff = start.getDaysDifference(end);
    diff = parseInt(diff / 7);
    var dates = [];

    //add our initial start date
    dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));

    for(var i = 0; i < diff; i++) {
        start.addDays(7);
        dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));
    }

    return dates;
}

function calculateBiWeeklyPeriod(start, end) {
    var diff = start.getDaysDifference(end);
    diff = parseInt(diff / 14);
    var dates = [];

    //add our initial start date
    dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));

    for(var i = 0; i < diff; i++) {
        start.addDays(14);
        dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));
    }

    return dates;
}

function calculateMonthlyPeriod(start, end) {
    var numYears = (end.getYear() - start.getYear()) * 12;
    var numMonths = numYears + (end.getMonth() - start.getMonth());

    if(end.getDate() < start.getDate()) {
        numMonths -= 1;
    }

    var dates = [];

    //allows us to attempt to keep the date the same if the date is end of the month
    var origDate = start.getDate();

    //add our initial start date
    dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));

    for(var i = 0; i < numMonths; i++) {
        start.addMonths(1);
        start.setDate(origDate);
        dates.push(new SimpleDate(start.getYear(), start.getMonth(), start.getDate()));
    }

    return dates;
}

//for nodejs
if(typeof module !== 'undefined') {
    module.exports.calculatePeriodDates = calculatePeriodDates;
}