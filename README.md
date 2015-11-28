**deprecated**
functionality has been rolled into [simple-datejs](https://www.npmjs.com/package/simple-datejs)

# date-periodjs
calculates the dates between a start and end date with the given frequency of occurance

##install

$ npm install date-periodjs

$ bower install simple-datejs

##usage

###valid frequencies

0 - one time<br/>
1 - daily<br/>
2 - weekly<br/>
3 - biweekly<br/>
4 - monthly<br/>

```javascript
var dpc = require('date-periodjs');

var frequency = 1;
var start = new Date(2015, 6, 20);
var end = new Date(2015, 6, 25);

var dates = dpc.calculatePeriodDates(start, end, frequency);

console.log(dates);
```
