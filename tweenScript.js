
var container = document.getElementById('containerBlock');
var slogan = document.getElementById('slogan')
var section = document.getElementById('animationSection');
var tl = new TimelineLite();

tl.from(container, 1, {
	scale: 0
})
.to(container, 1,{
	top: "-40%"
});
tl.from(slogan, 1, {
	left: -500,
	opacity: 0
});

// In case we want to remove our block
/*tl.to(container, 1, {
	opacity: 0
})*/