var currentImage = document.getElementById("current-image");

var imageThumbs = document.getElementById("image-thumbs");

for (var i = 1; i <= 8; i++) {
  var thumb = document.createElement("img");
  thumb.addEventListener(
  "click", function() {
    currentImage.src = this.src;
    currentImage.alt = this.alt;

  }
);
  

}
thumb.src = "img/image" + i + ".jpg";
thumb.alt = "Image " + i;
thumb.classList.add("thumb");
imageThumbs.appendChild(thumb);


