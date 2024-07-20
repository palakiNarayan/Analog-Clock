setInterval(() => {
    d=new Date();
    houreTime=d.getHours()
    minuteTime=d.getMinutes()
    secondTime=d.getSeconds()
    hrotetion=30*houreTime+minuteTime/2;
    mrotetion=6*minuteTime;
    srotetion=6*secondTime;

    hour.style.transform = `rotate(${hrotetion}deg)`;
    minute.style.transform = `rotate(${mrotetion}deg)`;
    second.style.transform = `rotate(${srotetion}deg)`;
}, 1000);
