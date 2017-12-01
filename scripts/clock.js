
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

    var today = new Date();
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();
    var todayHour = today.getHours();
    var todayMinutes = today.getMinutes();
    var todaySeconds = today.getSeconds();

function getMonthsLeft(){

    if((todayMonth===10) && (todayDay>17)){
        return 90;
    }
    if((todayMonth===11) && (todayDay>17)){
       return 59;
    }
    if((todayMonth===11) && (todayDay<17)){
        return 90;
    }
    if((todayMonth===0) && (todayDay<17)){
        return 59;
    }
    if((todayMonth===0) && (todayDay>17)){
        return 31;
    }
    if((todayMonth===1) && (todayDay<17)){
        return 28;
    }
    if((todayMonth===1) && (todayDay>17)){
        return 0;
    }
    if((todayMonth===2) && (todayDay<17)){
        return 0;
    }
    else{
        return 0;
    }
    
}

function getDaysLeft(){ 
    if(todayDay<17){
        var smallDay = 16-todayDay;
        return smallDay;
    }
    if(todayDay>17){
        if(todayMonth===11 || todayMonth===0 || todayMonth===2){
            var smallDay = 31- todayDay + 16;
            return smallDay;
        }
        if(todayMonth=== 10){
            var smallDay = 30 - todayDay +16;
            return smallDay;
        }
        if(todayMonth===1){
            var smallDay = 28- todayDay + 16;
            return smallDay;
        }

    }
}
function getHoursLeft(){ 
    if(todayHour < 9){
        var smallHour = 8 - todayHour;
        return smallHour;
    }
    if(todayHour>9){
        var smallHour = 24 - todayHour + 8;
        return smallHour; 
    }
}

function getMinutesLeft(){
    if(todayMinutes==00){
        return 0;
    }
    if(todayMinutes>0){
        var smallMinutes = 59-todayMinutes;  
        return smallMinutes;
    }
}

function getSecondsLeft(){
    if(todaySeconds==00){
        return 0;
    }
    if(todaySeconds>0){
        var smallSeconds= 60-todaySeconds;  
        return smallSeconds;
    }
}


function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}




var daysUntil = getDaysLeft() + getMonthsLeft();
var hoursUntil = getHoursLeft();
var minutesUntil = getMinutesLeft();
var secondsUntil = getSecondsLeft();

var deadline = new Date(Date.parse(new Date()) + daysUntil * 24 * 60 * 60 * 1000 + hoursUntil * 60 * 60 * 1000 + minutesUntil * 60 * 1000 + secondsUntil*1000);
initializeClock('clockdiv', deadline);
