gsap.registerPlugin(ScrollTrigger) 

console.log("Hello World");

let screenWidth = window.innerWidth;

// let tl = gsap.timeline({

//     scrollTrigger: {
//         trigger: ".a",
//         start: "-300px center",
//         end: "300px 30%",
//         pin:true,
//         scrub: 1,
//         markers: true,
//     },

// });


// gsap.to(".h", {
//     scrollTrigger: {
//         trigger: ".h",
//         start: "center center",
//         end: "+=200%",
//         scrub: 1,
//         markers: true,
//         pin:true,       
//     },
//     x:-screenWidth,

// });

// gsap.to(".b", {
//     scrollTrigger: {
//         trigger: ".b",
//         start: "center center",
//         end: "+=200%",
//         scrub: 1.3,
//         // markers: true,
//     },
//     x:-screenWidth,

// });

// gsap.to(".d", {
//     scrollTrigger: {
//         trigger: ".d",
//         start: "center center",
//         end: "+=200%",
//         scrub: 1.6,
//     },
//     x:-screenWidth,

// });



gsap.to(".img-holder", {
    rotation: 0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.inout",
    scrollTrigger: {
        start: "center center",
        end: "+=200%",
        scrub: 1,
        snap: true,
        pin:".img-holder",
    }
});

gsap.to(".img-holder img", {
    scale:1,
    ease: "power2.inout",
    scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
    }
});
