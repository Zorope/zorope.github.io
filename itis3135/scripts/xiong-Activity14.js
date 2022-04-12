$(document).ready(function() {
	$("#nav_list li").click(function()
    {
        var section = $(this).children("a").attr("title");
        $.ajax({
            type: "get",
            url: "json_files/" + section + ".json",
            //I don't know what to do.
        });
    });
}); // end ready