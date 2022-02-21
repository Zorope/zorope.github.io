var people = ["Lily", "Bryan", "Jeff"];
var money = [50000, 80000, 100000];

function displayResult()
{
    var average = 0;
    var sum = 0;
    var position;
    var highest = 0;

    for(i = 0; i < money.length; i++)
    {
        sum = sum + money[i];
    }
    average = sum/money.length;
    average = Math.round(average);
    for(k = 0; k < money.length; k++)
    {
        if(money[k] > highest)
        {
            highest = money[k];
            position = k;
        }
    }

    document.getElementById("results").innerHTML = "<h4>Results</h4>" + "The average Salary is $" + average
    + ". The highest salary held was by " + people[position] + " with a salary of $" + highest;
}

function displaySalary()
{
    var table = "<h3>Salary</h3>" + "<table><tr><th>Name</th> <th>Salary</th></tr>";
    
    for(i = 0; i < money.length; i++)
    {
        table = table + "<tr><td>" + people[i] + "</td><td> $" + money[i] + "</td></tr>";
    }
    table = table + "</table>"
    document.getElementById("result_table").innerHTML = table;
}

function addSalary()
{
    var name = document.getElementById("name").value;
    var salary = parseInt(document.getElementById("salary").value);

    if(salary == "" || salary < 1000 || typeof salary != 'number')
    {
        alert("Please enter a valid salary for your user.");
    }
    else if(name == "" || typeof name != 'string')
    {
        alert("Please enter a valid name for your user.");
    }
    else
    {
        people.push(name);
        money.push(salary);
    }
}