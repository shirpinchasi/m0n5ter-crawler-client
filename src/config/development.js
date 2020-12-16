var date =new Date();
var firstDay =  new Date(date.getFullYear(), date.getMonth(), 1).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().replace(/T.*/,'').split('-').reverse().join('-');

var first = date.getDate()  // First day is the day of the month - the day of the week
var last = first -7 ; // last day is the first day + 6

var firstDayofWeek = new Date(date.setDate(first)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
var lastdayOfWeek = new Date(date.setDate(last)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
console.log(firstDay,lastDay);
console.log(firstDayofWeek); 
console.log(lastdayOfWeek);


export default{
    env: process.env.NODE_ENV,
    apiUrl: 'https://m0n5ter-crawler.herokuapp.com/api/articles',
    articleSort: '?sort=date,desc',
    apiSortName : "https://m0n5ter-crawler.herokuapp.com/api/groups?sort=name",   
    apiWeekSort : "https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate=" + lastdayOfWeek + "&endDate=" + firstDayofWeek


    
};

