
var namePicture = document.getElementById('pictureNameAnimation');
var logo = document.getElementById('pictureLogoAnimation');
var title = document.getElementById('pictureTitle');

window.onload = function opening() {
  var tl = new TimelineLite();

  tl.add(TweenLite.from(namePicture, 1.5, {autoAlpha:0, scale:0.5}));
  TweenLite.from(logo, 1.5, {autoAlpha:0, scale:0.5}, 0);
  tl.add(TweenLite.to(namePicture, 1.8, {opacity:0}));
  TweenLite.to(logo, 1.8, {opacity:0, delay:1.5});
  tl.call(deleteAnimation);

  displayContainer();
}

function displayContainer() {
  var tlContainer = new TimelineLite();
}

function deleteAnimation() {
  document.getElementById('wallpaperSection').removeChild(document.getElementById('animationSection'));
  delete containerDelete;
}
