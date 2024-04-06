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


gsap.to(".h", {
    scrollTrigger: {
        trigger: ".h",
        start: "center 85%",
        end: "bottom -20%",
        scrub: 1,
        // markers: true,
    },
    x:-screenWidth,

});

gsap.to(".b", {
    scrollTrigger: {
        trigger: ".b",
        start: "center 90%",
        end: "bottom -20%",
        scrub: 1.3,
        // markers: true,
    },
    x:-screenWidth,

});

gsap.to(".d", {
    scrollTrigger: {
        trigger: ".d",
        start: "center 95%",
        end: "bottom -20%",
        scrub: 1.6,
        // markers: true,
    },
    x:-screenWidth,

});
