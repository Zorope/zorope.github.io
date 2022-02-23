var firstnum = 0;
var secondnum = 0;
var action = "";
//Updates calculator screen to correct numbers
function calcScreen(character)
{
    //Page keeps refreshing whenever button is pressed
    document.getElementById("screen").value = document.getElementById("screen").value + character;
}
//Adds numbers to screen
function calculator(character)
{
    var thing = parseInt(character);
    switch(thing)
    {
        case 0:
            calcScreen("0");
            break;
        case 1:
            calcScreen("1");
            break;
        case 2:
            calcScreen("2");
            break;
        case 3:
            calcScreen("3");
            break;
        case 4:
            calcScreen("4");
            break;
        case 5:
            calcScreen("5");
            break;
        case 6:
            calcScreen("6");
            break;
        case 7:
            calcScreen("7");
            break;
        case 8:
            calcScreen("8");
            break;
        case 9:
            calcScreen("9");
            break;
    }
}
//function to add
function add()
{
    var number = parseInt(document.getElementById("screen").value);
    firstnum = number;
    document.getElementById("screen").value = "";
    action = "add";
}
//function to subtract
function subtract()
{
    var number = parseInt(document.getElementById("screen").value);
    firstnum = number;
    document.getElementById("screen").value = "";
    action = "subtract";
}
//Function to multiply
function multiply()
{
    var number = parseInt(document.getElementById("screen").value);
    firstnum = number;
    document.getElementById("screen").value = "";
    action = "multiply";
}
//Function to divide
function divide()
{
    var number = parseInt(document.getElementById("screen").value);
    firstnum = number;
    document.getElementById("screen").value = "";
    action = "divide";
}
//clears calculator
function clean()
{
    document.getElementById("screen").value = "";
    firstnum = 0;
    secondnum = 0;
    action = "";
}
//Executes whatever action was selected
function calculate()
{
    var number2 = parseInt(document.getElementById("screen").value);
    if(action == "add")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum + secondnum;
        calcScreen(result);
    }
    if(action == "subtract")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum - secondnum;
        calcScreen(result);
    }
    if(action == "multiply")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum * secondnum;
        calcScreen(result);
    }
    if(action == "divide")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum / secondnum;
        calcScreen(result);
    }
}