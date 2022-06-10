var blurry = document.body;
var bigImage = document.createElement('img');
bigImage.onload = function() {
    blurry.style.backgroundImage = `url(${bigImage.src})`;
}
setTimeout(function() {
    bigImage.src = "./resources/olten.jpg";
}, 1000)