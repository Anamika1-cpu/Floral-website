
const scroller = new LocomotiveScroll({
    el: document.querySelector('#home'),
    smooth: true
})

gsap.registerPlugin(ScrollTrigger)
scroller.on("scroll", ScrollTrigger.update);

// $('.brand').textillate({
//     ScrollTrigger:{
//         markers:true
//     },
//      in: 
//      {
//       effect: 'fadeInUp' } ,
//       stagger:.3,
//       duration:12,
//       opacity:1
//     }
// );




// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even t#home at all! So to get brand correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform ap#home (brand LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
//   });
  

// // each time brand window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => scroller.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#home"),
   smooth: true,
   smoothMobile: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for brand "#home" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#home", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even t#home at all! So to get brand correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform ap#home (brand LocomotiveScroll-controlled element).
   pinType: document.querySelector("#home").style.transform ? "transform" : "fixed"
 });


  let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".brand",
    scroller: "#home",
    // markers: true,                                                        
    // stagger:0.3,
    start: "top 60%"
  }
});

tl.to(".brand", {
  onStart: function(){
    $('.brand').textillate({ 
      in: { 
        effect: 'fadeInUp' }
       });
  }
})


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();










//Skew photo

var photo = document.querySelector("#photos");
var ph  = document.querySelectorAll(".ph");
photo.style.width=ph[0].getBoundingClientRect().width*[ph.length+1] + ph[0].getBoundingClientRect().left*[ph.length-6] + 'px'  ;

var curr = document.querySelector("#photos").getBoundingClientRect().left;
console.log(curr);

document.querySelector("#parent").addEventListener("scroll",function(){
var newp = document.querySelector("#photos").getBoundingClientRect().left;
    var diff = newp-curr;
    var speed = Math.floor(diff*0.2);
    console.log(newp);
    curr = newp;
    ph.forEach(function(ph){
      ph.style.transform = `skewX(${speed}deg)`
    })
})




//full nav ki chizeer


document.querySelector("#close").addEventListener("click",function(){
  document.querySelector("#fullnav").style.left = "-100%";
  // alert("hey")
})

document.querySelector("#menu").addEventListener("click",function(){
  document.querySelector("#fullnav").style.left = "0%";
  // alert("hey")
})

var arr = ["https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1912&q=80",
            "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
            "https://images.unsplash.com/photo-1542966336-22953b5f7404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            "https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          ]


var link = document.querySelectorAll(".link");
link.forEach(function(elem){



elem.addEventListener("mousemove",function(dets){
  elem.children[2].style.opacity = "1";
  elem.children[2].style.transform =`translate(${dets.clientX - 100}px,${dets.clientY/2 -200}px) rotate(${dets.clientX/60}deg)`;
  document.querySelector("#center").style.backgroundImage = `url(${arr[elem.dataset.index]})`;
  
  console.log(arr[elem.dataset.index])
})

elem.addEventListener("mouseout",function(){
  elem.children[2].style.opacity = "0";
})
})











