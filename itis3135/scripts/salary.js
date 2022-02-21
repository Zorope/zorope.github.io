//Array for people in the system
var people = ["Lily", "Bryan", "Jeff"];
//Array for each person salary
var money = [50000, 80000, 100000];
//Function that displays the average salary and who has the highest salary
function displayResult()
{
    var average = 0;
    var sum = 0;
    var position;
    var highest = 0;
    //Loops through money array to add up all salaries
    for(i = 0; i < money.length; i++)
    {
        sum = sum + money[i];
    }
    //Calculates average
    average = sum/money.length;
    //Rounds average
    average = Math.round(average);
    //Loops through money array to find highest salary
    for(k = 0; k < money.length; k++)
    {
        if(money[k] > highest)
        {
            highest = money[k];
            position = k;
        }
    }
    //Writes information onto the page
    document.getElementById("results").innerHTML = "<h4>Results</h4>" + "The average Salary is $" + average
    + ". The highest salary held was by " + people[position] + " with a salary of $" + highest;
}
//Function to display everyones salary in a table
function displaySalary()
{
    //Variable to hold in the start of table and text
    var table = "<h3>Salary</h3>" + "<table><tr><th>Name</th> <th>Salary</th></tr>";
    //Loops through array to add each person into table
    for(i = 0; i < money.length; i++)
    {
        table = table + "<tr><td>" + people[i] + "</td><td> $" + money[i] + "</td></tr>";
    }
    //Closes table
    table = table + "</table>"
    //Displays table
    document.getElementById("result_table").innerHTML = table;
}
//Function to add a peron and their salary into the system
function addSalary()
{
    //Grabs value of inputted name and salary from the page
    var name = document.getElementById("name").value;
    var salary = parseInt(document.getElementById("salary").value);
    //Makes sure the salary is a number and above 1000
    if(salary == "" || salary < 1000 || typeof salary != 'number')
    {
        alert("Please enter a valid salary for your user.");
    }
    //Checks to make sure that name is a string and not empty
    else if(name == "" || typeof name != 'string')
    {
        alert("Please enter a valid name for your user.");
    }
    //When both inputs are valid it is put into the system
    else
    {
        people.push(name);
        money.push(salary);
    }
}