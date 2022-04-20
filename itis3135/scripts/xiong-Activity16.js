$(document).ready(function(){
    //Got from chapter 12 slides
    var url = "https://api.flickr.com/services/feed/photos_public.gne?" + "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorp";
    $.getJSON(url, function(data){
        var html = "";
        $.each(data.items, function(i, item){
            html += '<img src="' + item.media.m + '">';
        });
        $("#new_building").html(html);
    })
});