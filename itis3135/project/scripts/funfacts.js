$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "funfact.json",
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data){
            $("#facts").html("");
            $.each(data, function()
                {
                    $.each(this, function(key, value){
                        $("#facts").append("<h2>" + value.title + "</h2>" + "<p>" + value.text + "</p>");
                    })
                }
            );
        }
    });
});