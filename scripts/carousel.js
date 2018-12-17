//Carasoul inspiration by: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var counter = document.getElementsByClassName("counter");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}    

    for (i = 0; i < counter.length; i++) {
        counter[i].className = counter[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    counter[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
