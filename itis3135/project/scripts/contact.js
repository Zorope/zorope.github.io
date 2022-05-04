function contact(){
    $.ajax({
        type: "get",
        url: "contact.json",
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data){
            $("#contact").html("");
            $.each(data, function()
                {
                    $.each(this, function(key, value){
                        $("#contact").append("<h2>" + value.title + "</h2>" + "<p>" + value.text + "</p>");
                    })
                }
            );
        }
    });
}