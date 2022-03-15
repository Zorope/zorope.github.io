//Loads function onto page automatically
$(document).ready(function()
{
    //Variable to hold link for image
    var slide;
    //Variable to hold text for a caption
    var caption;
    //When button is clicked runs a function
    $("button").click(function()
    {
        //Makes slide equal to image that button is holding
        slide = $(this).attr("href");
        caption = $(this).attr("id");
        //Displays image to the page
        $("#my_image").attr("src", slide);
        $("#my_caption").text(caption);
    });
});