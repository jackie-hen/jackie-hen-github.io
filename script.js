// image thumb logic

var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

// calling each image 
for (var i = 1; i <= 8; i++) {
  var thumb = document.createElement("img");
  thumb.src = "img/image" + i + ".jpg";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  // when clicked, change current image
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}

// create the sticky scroll button

var scrollToTopBtn = document.getElementById("scrollToTopBtn")
// variable that returns the root, needed for offset values
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop)


// hover logic for scroll to top button

function changeImage(element) {
    if (element.getAttribute('data-hovered') === 'true') {
        element.querySelector('img').src = 'img/back_to_top.png';
        element.setAttribute('data-hovered', 'false');
    } else {
        element.querySelector('img').src = 'img/back_to_top_after.png';
        element.setAttribute('data-hovered', 'true');
    }
}
