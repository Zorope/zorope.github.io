let slideIndex = 1;
showslides(slideIndex);
//Controls prev and next buttons
function plusSlides(n)
{
    showslides(slideIndex += n);
}
//Controls which image is showing
function currentSlide(n)
{
    showslides(slideIndex = n);
}
function showslides(n)
{
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length)
    {
        slideIndex = 1;
    }
    if(n < 1)
    {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].getElementsByClassName.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}