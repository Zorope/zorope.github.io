//Loads function onto page automatically
$(document).ready(function()
{
    //Variable to hold link for image
    var slide;
    //When button is clicked runs a function
    $("button").click(function()
    {
        //Makes slide equal to image that button is holding
        slide = $(this).attr("href");
        //Displays image to the page
        $("#my_image").attr("src", slide);
    });
});