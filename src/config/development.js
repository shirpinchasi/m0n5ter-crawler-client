import moment from "moment";

var startOfWeek = moment();
startOfWeek = startOfWeek.startOf("week");
startOfWeek = startOfWeek.format("DD-MM-YYYY");



var endOfWeek = moment();
endOfWeek = endOfWeek.endOf("week");
endOfWeek = endOfWeek.format("DD-MM-YYYY");


var startOfMonth = moment();
startOfMonth = startOfMonth.startOf("M");
startOfMonth = startOfMonth.format("DD-MM-YYYY");


var endOfMonth = moment();
endOfMonth = endOfMonth.endOf("M");
endOfMonth = endOfMonth.format("DD-MM-YYYY");


export default{
    env: process.env.NODE_ENV,
    apiUrl: 'https://m0n5ter-crawler.herokuapp.com/api/articles',
    articleSort: '?sort=date,desc',
    apiSortName : "https://m0n5ter-crawler.herokuapp.com/api/groups?sort=name",   
    apiWeekSort : "https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate="+startOfWeek +"&endDate=" + endOfWeek,
    apiMonthSort : "https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate="+ startOfMonth +"&endDate=" + endOfMonth,
    

   
};


