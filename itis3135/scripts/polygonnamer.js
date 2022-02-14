/**Loads polygon naming function on page load*/
document.onload = polygonNamer();
/**Checks to make sure sides inputted are valid to the requirements*/
function validateEntry(sides)
{
    if (typeof sides == 'number') 
    {
        if (sides >= -10 && sides <= 10) 
        {
            return true;
        }
        else
        {
            return false
        }
    }
}
/**Rounds inputted number and checks what shape they inputted*/
function getShape(sides)
{
    sides = Math.round(Math.abs(sides));
    switch(sides)
    {
        case 0:
            return "There is no such polygon with this many sides.";
            break;
        case 1:
            return "One side means that it is a monogon!";
            break;
        case 2:
            return "Two sides means that we have a bigon!";
            break;
        case 3:
            return "Three sides means that we have a trigon!";
            break;
        case 4:
            return "Four sides means that we have a tetragon!";
            break;
        case 5:
            return "Five sides means that we have a Pentagon!";
            break;
        case 6:
            return "Six sides means that we have a Hexagon!";
            break;
        case 7:
            return "Seven sides means that we have a heptagon!";
            break;
        case 8:
            return "Eight sides means that we have a octagon!";
            break;
        case 9:
            return "Nine sides means that we have a enneagon!";
            break;
        case 10:
            return "Ten sides means that we have a decagon!";
            break;
    }
}
/**Function will prompt user, check sides if valid, and alert the user what shape they wanted*/
function polygonNamer()
{
    var sides = prompt("Bergundy Xeruses is happy to see you! Please type in a number between 1-10 and we will name that polygon for you!");
    var input = parseFloat(sides);
    var i = 0;
    /**Loops until user enters a valid number*/
    while(i == 0)
    {
        if(validateEntry(input) == true)
        {
            var shape = getShape(input);
            alert(shape);
            i = 1;
        }
        if(validateEntry(input) == false)
        {
            input = parseFloat(prompt("Looks like you entered an invalid input! Please enter a number 1-10."));
        }
    }
}

