const moment = require('moment');
const a = new Date(moment().format('MM-DD-YYYY')).getTime();
const b = new Date(moment(new Date('4-1-2020')).format('MM-DD-YYYY')).getTime();
console.log(a - b <= 604800000);
