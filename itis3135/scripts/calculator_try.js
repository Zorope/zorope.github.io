var firstnum = 0;
var secondnum = 0;
var action = "";
//Updates calculator screen to correct numbers
function calcScreen()
{
    //Page keeps refreshing whenever button is pressed
    document.getElementById("screen").value = document.getElementById("screen").value + this.value;
}
//Adds numbers to screen
window.onload = function ()
{
    document.getElementById("button1").onclick = calcScreen;
    document.getElementById("button2").onclick = calcScreen;
    document.getElementById("button3").onclick = calcScreen;
    document.getElementById("button4").onclick = calcScreen;
    document.getElementById("button5").onclick = calcScreen;
    document.getElementById("button6").onclick = calcScreen;
    document.getElementById("button7").onclick = calcScreen;
    document.getElementById("button8").onclick = calcScreen;
    document.getElementById("button9").onclick = calcScreen;
    document.getElementById("button0").onclick = calcScreen;

    document.getElementById("buttonDecrement").onclick = decrement;
    document.getElementById("buttonDivide").onclick = divide;
    document.getElementById("buttonIncrement").onclick = increment;
    document.getElementById("buttonAdd").onclick = add;
    document.getElementById("buttonMinus").onclick = subtract;
    document.getElementById("buttonClear").onclick = clean;
    document.getElementById("buttonMultiply").onclick = multiply;
    document.getElementById("buttonCalc").onclick = calculate;
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
//Decrements the number
function decrement()
{
    var number = parseInt(document.getElementById("screen").value);
    firstnum = number;
    firstnum--;
    document.getElementById("screen").value = firstnum;
}
//Increments the number
function increment()
{
    var number = parseInt(document.getElementById("screen").value);
    firstnum = number;
    firstnum++;
    document.getElementById("screen").value = firstnum;
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
        document.getElementById("screen").value = result;
    }
    if(action == "subtract")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum - secondnum;
        document.getElementById("screen").value = result;
    }
    if(action == "multiply")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum * secondnum;
        document.getElementById("screen").value = result;
    }
    if(action == "divide")
    {
        secondnum = parseInt(number2);
        document.getElementById("screen").value = "";
        var result = firstnum / secondnum;
        document.getElementById("screen").value = result;
    }
}