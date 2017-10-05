
var container = document.getElementById('containerBlock');
var slogan = document.getElementById('slogan')
var section = document.getElementById('animationSection');
var logoAnimation = document.getElementById('logoAnimation');
var tl = new TimelineLite();

tl.from(container, 1.5, {
	autoAlpha:0,
	"margin-top" : "10%",
	scale: 0
})
.to(container, 1,{
	top: "-40%"
}, "az");
tl.from(slogan, 1, {opacity: 0});
/*tl.from(logoAnimation, 1, {
	opacity: 0,
	"margin-top": "1%"
}, "az")*/



// In case we want to remove our block
/*tl.to(container, 1, {
	opacity: 0
})*/