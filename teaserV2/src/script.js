var mc = document.getElementById("a3h");

var scene = document.getElementById('containerAnim');

var parallax = new Parallax(scene);


TweenMax.fromTo('#a1t', 2, {
  scale:0,
    transformOrigin:'center bottom', 
 
},
{
  transformOrigin:'center bottom', 
  scale:1,
  delay:.5, 
  ease:Elastic.easeInOut, 
  repeatDelay:.5,
  yoyo:true
}
)

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

TweenMax.fromTo('#a3v', 2, {
  width:"0",
  height:"0",
  transformOrigin:'center center'
},
  {width:39.365,
  height:109.706,
  rotation:360, 
  delay:.5, 
  ease:Expo.easeInOut, 
  repeatDelay:1,
  yoyo:true})



TweenMax.fromTo('#b6r', 2, {
  width:"0px"
},
{
  width:"30.365px",
  delay:.5,
  ease:Expo.easeInOut,
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
TweenMax.fromTo('#b1l', 1, {
  scaleX:0,
  
},
{
  scaleX: 1,
    delay:.75, 
    transformOrigin:'left center', 
  ease:Elastic.easeInOut, 
  repeatDelay:.2,
  yoyo:true
}
  )

TweenMax.fromTo('#a3y', 2, {
  scale:0,
  delay:.5,
  ease:Elastic.easeInOut,
  yoyo:true
},
{
  scale:1,
  delay:.5,
  yoyo: true,
  ease:Elastic.easeInOut})

TweenMax.fromTo('#a3z', 2, {
  scale:0,
  delay:.5,
  transformOrigin: 'center center',
  ease:Elastic.easeInOut,
  yoyo:true
},
{
  scale:1,
  rotation:360,
  delay:.5,
  yoyo: true,
  ease:Elastic.easeInOut})

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
TweenMax.fromTo('#b3h', 1.5, {
  y:"-60px"
},
{
  y:"+40px", 
  delay:.2, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeatDelay:1,
  yoyo:true

})
TweenMax.fromTo('#b4h', 1.5, {
  y:"-40px"
},
{
   y:"+80px", 
  delay:.4, 
  transformOrigin:'center center', 
  ease:Elastic.easeInOut, 
  repeatDelay:1,
  yoyo:true
})

TweenMax.fromTo('#b5h', 1.5, {
  y:-100, 

},
{
  y:0.9,
  delay:.5, 
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

TweenMax.fromTo('#h2title', 2, {
  opacity:0,
  yoyo:true
},
{
  opacity: 1,
  delay:4
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

TweenMax.fromTo('#b6b', 1, {
  scale:0, 
},
{
  scale: 1,
  delay:1, 
  ease:Expo.easeInOut, 
  repeatDelay:1,
  yoyo:true
})


TweenMax.fromTo('#containerAnim', 2, {
  width:"100%",
  "margin-top": 300
},
{
  "margin-top": 50,
  "margin-left": "10%",
  width: "60%",
  delay:2, 
  ease:Expo.easeInOut, 
  repeatDelay:1,
  yoyo:true
})

TweenMax.fromTo('#b2l', 2, {
  scale:0
},
{
  scale:1,
  rotation: 360,
  delay:.5, 
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

