var date =new Date();
var firstDay =  new Date(date.getFullYear(), date.getMonth(), 1).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().replace(/T.*/,'').split('-').reverse().join('-');

var first = date.getDate();
var last = first -7 ; 

var firstDayM = date.getDate() ;
var lastDayM = first -30 ;

var firstDayY = date.getDate() ;
var lastDayY = first -365 ;


var firstDayofWeek = new Date(date.setDate(first)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
var lastdayOfWeek = new Date(date.setDate(last)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');

var firstDayofMonth = new Date(date.setDate(firstDayM)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
var lastdayOfMonth = new Date(date.setDate(lastDayM)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');

var firstDayofYear = new Date(date.setDate(firstDayY)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
var lastdayOfYear = new Date(date.setDate(lastDayY)).toISOString().replace(/T.*/,'').split('-').reverse().join('-');


export default{
    env: process.env.NODE_ENV,
    apiUrl: 'https://m0n5ter-crawler.herokuapp.com/api/articles',
    articleSort: '?sort=date,desc',
    apiSortName : "https://m0n5ter-crawler.herokuapp.com/api/groups?sort=name",   
    apiWeekSort : "https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate=" + lastdayOfWeek + "&endDate=" + firstDayofWeek,
    apiMonthSort : "https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate=" + lastdayOfMonth + "&endDate=" + firstDayofMonth,
    apiYearSort : "https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate=" + lastdayOfYear + "&endDate=" + firstDayofYear


    
};

