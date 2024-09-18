// Initialize slide index
var slideIndex = 1;

function openLightbox(imgParams) {
    document.getElementById("lightbox").style.display = "block";
    // init slides
    var slidesContainer = document.getElementById("slides-container");
    var thumbnails = document.getElementById("thumbnails");
    var slidesImg = JSON.parse(decodeURIComponent(imgParams))
    // empty divs
    slidesContainer.innerHTML = "";
    thumbnails.innerHTML = "";
    var i = 0;
    for (const [key, values] of Object.entries(slidesImg)) {
        i++;
        // slides
        var divSlide = document.createElement("div");
        divSlide.classList.add("step-slides");
        var slide = document.createElement("img");
        slide.src = key;
        slide.alt = values.alt;
        divSlide.appendChild(slide);
        slidesContainer.appendChild(divSlide);
        // thumbnails
        var divThumbnail = document.createElement("div");
        var thumbnail = document.createElement("img");
        thumbnail.src = key;
        thumbnail.alt = values.alt;
        thumbnail.classList.add("gallery");
        thumbnail.classList.add("cursor");
        thumbnail.setAttribute("onclick", `currentSlide(${i});`);
        divThumbnail.appendChild(thumbnail);
        thumbnails.appendChild(divThumbnail);
    }
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Function to navigate to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to navigate to the next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("step-slides");
    var gallery = document.getElementsByClassName("gallery");
    var captionText = document.getElementById("caption");

    // Wrap around if index is out of bounds
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all thumbails of the gallery
    for (i = 0; i < gallery.length; i++) {
        gallery[i].className = gallery[i].className.replace(" active", "");
    }

    // Show the current slide and add active class to the current dot
    slides[slideIndex - 1].style.display = "block";
    gallery[slideIndex - 1].className += " active";
    captionText.innerHTML = gallery[slideIndex - 1].alt;
}

// Attach event listener to the lightbox
var lightbox = document.getElementById("lightbox");
lightbox.addEventListener("click", function (event) {
    // Check if the click target is the lightbox itself
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Prevent closing on content click
var lightboxContent = document.querySelector(".lightbox-content");
lightboxContent.addEventListener("click", function (event) {
    event.stopPropagation();
});