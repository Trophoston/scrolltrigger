gsap.registerPlugin(ScrollTrigger) 

console.log("Hello World");

let screenWidth = window.innerWidth*2.1;

gsap.to(".textopt",{
    scrollTrigger:{
        trigger:".textopt",
        start: "center center",
        end: "+=149%",
        scrub:1,
        pin:".textopt",
        // markers:true,
    },
})

gsap.to(".textopt p",{
    scrollTrigger:{
        trigger:".textopt p",
        start: "center center",
        end: "+=150%",
        scrub:1,
        // markers:true,
    },
})



gsap.to(".group1",{
    scrollTrigger:{
        trigger:".group1",
        start: "center center",
        end: "+=150%",
        scrub:1,
        // markers:true,
    },
    x:-1000,
})

gsap.to(".group2",{
    scrollTrigger:{
        trigger:".group2",
        start: "center center",
        end: "+=150%",
        scrub:1,
        // markers:true,
    },
    x:1000,
})

gsap.to(".img-holder", {
    rotation: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.inout",
        scrollTrigger: {
        start: "center center",
        end: "+=100%",
        scrub: 1,
        pin:".img-holder",
        snap: true,
        // markers:true,
    },
});

gsap.to(".img-holder img", {
    scale:1,
    ease: "power2.inout",
    scrollTrigger: {
        start: "top top",
        end: "+=100%",
        scrub: 1,        
    }
});

gsap.to(".h", {
    scrollTrigger: {
        trigger: ".h",
        start: "bottom 40%",
        end: "+=200%",
        scrub: 1,
        pin:".cus",
        // markers: true,
    },
    color: "#DEE3F5",
    x:-screenWidth,

});

gsap.to(".b", {
    scrollTrigger: {
        trigger: ".b",
        start: "bottom 35%",
        end: "+=200%",
        scrub: 1.3,
        // markers: true,
    },
    x:-screenWidth,
    color: "#D0D8F5",

});

gsap.to(".d", {
    scrollTrigger: {
        trigger: ".d",
        start: "bottom 40%",
        end: "+=200%",
        scrub: 1.6,
    },
    x:-screenWidth,
    color: "#B4C8F5",

});

gsap.to(".cardttd img", {
    scrollTrigger: {
        trigger: ".cardttd img",
        start: "bottom top",
        end: "+=100%",
        scrub: 1,
        // markers: true,
        snap: true,
    },
    left:"0px",
});