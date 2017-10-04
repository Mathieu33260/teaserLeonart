
var nom = document.getElementById('pictureNameAnimation');
var logo = document.getElementById('pictureLogoAnimation');
var tl = new TimelineLite();

tl.add(TweenLite.to(nom, 1.5, {width:400, height:300}));
tl.add(TweenLite.to(logo, 1.5, {width:200, height:170}));
tl.add(TweenLite.to(nom, 1.8, {opacity:0}));
TweenLite.to(logo, 1.8, {opacity:0, delay:3});
tl.call(displayContainer);

function displayContainer() {
  document.getElementById('wallpaperSection').removeChild(document.getElementById('animationSection'));

  delete containerDelete;
}
