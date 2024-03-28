//container animation
gsap.from('.logo span', 1, {
    scale: 0,
    else: 'ease.out'
})
gsap.from('nav ul li', 1.4, {
    y: -250,
    stagger : .8
})
gsap.from('.h1 h1 ', 1.4, {
    y: 250,
    skewY: 20,
    stagger : .8
})
gsap.from('.content p ', 1, {
    y: -30,
    opacity: 0
   
})
gsap.from('.content a ', 1, {
    x:innerWidth * -1,
   opacity:0
   
})
gsap.from('.content ul li a ', 1, {
    y: 250,
    stagger: 0.5
   
   
})
gsap.from('.one', 1,{
    delay : 1.5,
    x: innerWidth * 1,
 
})
gsap.from('.two', 1,{
    delay : 1.7,
    y: -300,
    opacity:0
   
})
gsap.from('.three', 1,{
    delay : 1.9,
    y: -100,
    opacity:0
   
})


gsap.to('.one .bg', 1, {
    delay: 2.5,
   height: '0%'
   
   
})
gsap.from('.one img', 1, {
    delay: 2.9,
    scale: 1.5
})
gsap.to('.two .bg2', 1, {
    delay: 2.5,
    height: '0%'
    
    
 })
 gsap.from('.two img', 1, {
    delay: 2.9,
    scale: 1.5
})
 gsap.to('.three .bg3', 1, {
    delay: 2.5,
    height: '0%'
    
    
 })
 gsap.from('.three img', 1, {
    delay: 2.9,
    scale: 1.5
})

gsap.from('#page2 h5 , #page2 h1, #page2 .about-us' ,{
    opacity: 0,
    stagger: .4,
    scrollTrigger: {
        trigger: ".page2 h5",
        scroller: "body",
        start: "top 60%",
        markers: false
    }
});



gsap.from('.hero_gallery_frame .gone , .hero_gallery_frame .gtwo, .hero_gallery_frame .gthree, .hero_gallery_frame .gfour, .hero_gallery_frame .gfive', 1.4,{
    y: -300,
    stagger: .5,
    
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        scoller: "body",
        start:" top 50%",
        markers: false
    }
});
gsap.from('.hero_title h1',{
    y: -30,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".hero",
        scroller: "body",
        start: "top 55%",
    }
})

const timeline = gsap.timeline();
timeline.from(".popular_container h1",1.5 ,{
    delay: .5,
    skewX: -10,
    skewY: 10,
    stagger: .4,
    y:50,
    x: -20,
    opacity:0
});
timeline.from('.img',1,{
    y: -100,
    opacity: 0,
    stagger: .2
});
gsap.timeline({
    scrollTrigger:{
        trigger: '.popular_container',
        start: 'top top',
        scrub: 1
    }
})
.to('.overlay',{
    height:"100%",
    ease: Expo.easeOut

}, 'start')
.to('.img',{
    boxShadow:"0px 0px 0px #000",
    ease: Expo.ease

}, 'start')
gsap.timeline({
    scrollTrigger:{
        trigger: '.wrap',
        
        scrub: 8
    }
})
.to('.slider',1,{
    x:innerWidth * -1
})

let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear"
}).totalProgress(0.5);
gsap.set(".marquee_inner", {
    xPercent: -50
});

window.addEventListener("scroll", function() {
    if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }
    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
    });
    arrows.forEach((arrow) => {
        if (isScrollingDown) {
            arrow.classList.remove("active");
        } else {
            arrow.classList.add("active");
        }
    });
    currentScroll = window.pageYOffset;
});

gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".reviews",
        start: "top 60%",
        end : "bottom top",
        scrub: 1,markers: false
    }
});
t1.fromTo(".rl",{
    y: '350%'
},{y: '-150%'},0);
t1.fromTo(".rr",{
    y: '300%'
},{y: '-50%'},0);

gsap.fromTo(".rtitle", {x: '100%'}, {x: '-120%' , scrollTrigger: {
    trigger: ".rtitle",
    start: "center center",
    end: "bottom center",
    endTrigger: ".reviews",
    pin: true,
    scrub: 1,
    markers: false



}},0

)


