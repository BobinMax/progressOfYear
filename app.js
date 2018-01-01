require('round10').polyfill();
var clui = require('clui');

var Progress = clui.Progress;
var thisPercentBar = new Progress(20);

let year = (new Date()).getFullYear();
let nextYear = year + 1;

year = year.toString();
nextYear = nextYear.toString();

let sdate = new Date(year);
let edate = new Date(nextYear);
let microsecondsInYear = edate.getTime() - sdate.getTime();

console.log('Hello, now you are in ' + year + ' year');
console.log('Here is progress from start of the current year in percent');

setInterval(function () {
	process.stdout.clearLine();
	process.stdout.write(thisPercentBar.update((Date.now() - sdate), microsecondsInYear));
	process.stdout.cursorTo(0);
}, 1000);