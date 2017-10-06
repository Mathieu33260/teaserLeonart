var mc = document.getElementById("a3h");

TweenMax.to('#a1t', 2, {
  scale:.1, 
  delay:.5, 
  transformOrigin:'center bottom', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.5,
  yoyo:true
})

TweenMax.to('#a2r', 2, {
  y:"-50px", 
  delay:.75, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.75,
  yoyo:true
})
TweenMax.to('#a2c', 2, {
  scale:.5, 
  delay:.5, 
  transformOrigin:'center center', 
  ease:Expo.easeInOut, 
  repeat:-1, 
  repeatDelay:.5,
  yoyo:true
})

TweenMax.fromTo(mc, 2, {
  scaleX:0,
  transformOrigin:'center center', 
},
  {scaleX: 1,
  delay: .5,
transformOrigin: 'center center',
ease:Bounce.easeInOut,
yoyo:true})

TweenMax.to('#a3v', 2, {
  rotation:360, 
  delay:.5, 
  transformOrigin:'center center', 
  ease:Expo.easeInOut, 
  repeatDelay:1,
  yoyo:true
})

TweenMax.to('#a4s', 1, {
  x:"+50px", 
  delay:.1, 
  transformOrigin:'center center', 
  ease:Expo.easeInOut, 
  repeat:-1, 
  repeatDelay:0,
  yoyo:true
})
TweenMax.to('#a4b', 1, {
  scale:1.2, 
  delay:.5, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:0,
  yoyo:true
})
TweenMax.to('#a5r', 1, {
  x:"+50px", 
  scaleX:1.5,
  delay:.3, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:0,
  yoyo:true
})


TweenMax.to('#b1r', 1, {
  scaleX:0,
  delay:.5, 
  transformOrigin:'right center', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.5,
  yoyo:true
})
TweenMax.to('#b1l', 1, {
  scaleX:0,
  delay:.75, 
  transformOrigin:'left center', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.2,
  yoyo:true
})

TweenMax.to('#b2t', 1.5, {
  scale:.1, 
  delay:.4, 
  transformOrigin:'center top', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.3,
  yoyo:true
})

TweenMax.to('#b3v', 1, {
  scale:0, 
  delay:.4, 
  transformOrigin:'center bottom', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.5,
  yoyo:true
})
TweenMax.to('#b3h', 1.5, {
  y:"+40px", 
  delay:.2, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeatDelay:1,
  yoyo:true
})
TweenMax.to('#b4h', 1.5, {
  y:"+80px", 
  delay:.4, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeatDelay:1,
  yoyo:true
})


TweenMax.to('#b4r', 1.5, {
  rotation:40, 
  scaleY:1.5, 
  delay:.4, 
  transformOrigin:'right bottom', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.5,
  yoyo:true
})

TweenMax.to('#b5s', 1.5, {
  scale:1.5, 
  delay:1,
  opacity: 1, 
  transformOrigin:'center center', 
  ease:Expo.easeInOut, 
  repeat:-1,
  repeatDelay:1,
  yoyo:true
})
TweenMax.fromTo('#b5b', 1, {
  scale:0, 
},
{
  scale: 1.3,
  delay:1, 
  transformOrigin:'center center', 
  ease:Expo.easeInOut, 
  repeatDelay:1,
  yoyo:true
})


TweenMax.to('#b6l', 1, {
  scaleX:0,
  delay:.75, 
  transformOrigin:'right center', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.2,
  yoyo:true
})
TweenMax.to('#b6r', .9, {
  scaleY:3,
  delay:.6, 
  transformOrigin:'center bottom', 
  ease:Elastic.easeInOut, 
  repeat:-1, 
  repeatDelay:.2,
  yoyo:true
})