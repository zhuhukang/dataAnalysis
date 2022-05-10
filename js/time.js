//获取当前日期
function time(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var nowTime = year + "-" + month + "-" + day + " " + hour + ":" + minute+ ":" + seconds;
    var dateTime = document.getElementById("showTime");
    dateTime.innerHTML = nowTime;
    // alert(dateTime.innerHTML = "year + "-" + month")
}
setInterval("time()",1000);
