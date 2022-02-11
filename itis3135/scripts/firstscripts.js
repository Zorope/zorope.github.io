var fullName;
var emotions;

function setFullName(name)
{
    this.fullName = name;
}

function setEmotion(emotion)
{
    this.emotions = emotion;
}

function getFullName()
{
    return fullName;
}

function getEmotion()
{
    return emotions;
}

function getTodaysDate()
{
    var date = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var time = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    return time;
}

function getTime()
{
    var today = new Date();
    var time = today.getHours()%12 + ":" + today.getMinutes();
    var hour = today.getHours();
    var ampm;
    if(hour >= 12)
    {
        ampm = " pm"
    }
    else
    {
        ampm = " am"
    }
    return time + ampm;
}

function questions()
{
    setFullName(document.getElementById("fullName").value);
    setEmotion(document.getElementById("feeling").value);

    document.getElementById("todaysDate").innerHTML = "Today is: " + getTodaysDate() + ", and the current time is: " + getTime();
    document.getElementById("welcome").innerHTML = "Bergundy Xeruses are happy to see you, " + getFullName() + " Also we see that you are feeling " + getEmotion() + ".";
}