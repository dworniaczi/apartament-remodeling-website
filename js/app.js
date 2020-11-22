var slideIndex = 1;
var timer;
var timer2;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-container__slide");
    var dots = document.getElementsByClassName("dots-container__dot");
    if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.transition = "2.0s";
            slides[i].style.opacity = "0";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    slides[slideIndex-1].style.transition  = "2.0s";
    slides[slideIndex-1].style.opacity = "1";
    dots[slideIndex-1].className += " active";

    clearTimeout(timer);
    timer = setTimeout(() => plusSlides(1), 7000);

}
