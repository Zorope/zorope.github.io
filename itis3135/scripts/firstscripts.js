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
    
    var hour = today.getHours();
    var ampm;
    if(today.getMinutes() < 10)
    {
        var time = today.getHours()%12 + ":" + "0" + today.getMinutes();
    }
    if(today.getMinutes() >= 10)
    {
        var time = today.getHours()%12 + ":" + today.getMinutes();
    }
    if(hour >= 12)
    {
        ampm = " pm"
    }
    if(hour <= 12)
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

function insult()
{
    document.getElementById("insult").innerHTML = "You don't look as pretty today!"
}

function sum()
{
    document.getElementById("sum").innerHTML = 10+10;
}



function birthMonth()
{
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var guess = Math.floor(Math.random()*12);
    document.getElementById("guess").innerHTML = "Is it " + months[guess] + "?";
    document.getElementById("yes").style.display = 'block';
    document.getElementById("no").style.display = "block";
}

function wrong()
{
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var guess = Math.floor(Math.random()*12);
    document.getElementById("guess").innerHTML = "Then is it " + months[guess] + "?";
}

function right()
{
    document.getElementById("guess").innerHTML = "Yes, lets go!";
}

function luck()
{
    var fortunes = ["Extremely Unlucky", "Neutral Luck", "Above Average Luck", "Super Lucky"];
    var result = Math.floor(Math.random()*4);
    document.getElementById("luck").innerHTML = "Your luck today is: " + fortunes[result] + ".";
}

function facts()
{
    var fortunes = ["Hot water freezes faster then cold", "Coca-Cola was originally green", "Women blind nearly twice as much as men", "Crocodiles can't stick their tongues out"];
    var result = Math.floor(Math.random()*4);
    document.getElementById("facts").innerHTML = fortunes[result];
}