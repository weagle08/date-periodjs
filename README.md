# date-periodjs
calculates the dates between a start and end date with the given frequency of occurance

##valid frequencies
0 - one time
1 - daily
2 - weekly
3 - biweekly
4 - monthly

##usage
```javascript
var dpc = require('date-periodjs');

var frequency = 1;
var start = new Date(2015, 6, 20);
var end = new Date(2015, 6, 25);

var dates = dpc.calculatePeriodDates(start, end, frequency);

console.log(dates);
```