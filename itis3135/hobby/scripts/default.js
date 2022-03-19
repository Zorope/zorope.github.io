function esports(evt, content)
{
    var i;
    var contentpages;
    var nav;
    contentpages = document.getElementsByClassName("contentpage");
    for(i = 0; i < contentpages.length; i++){
        contentpages[i].style.display = "none";
    }
    nav = document.getElementsByClassName("contentbutton");
    for(i = 0; i < nav.length; i++){
        nav[i].className = nav[i].className.replace(" active", "");
    }
    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";
}