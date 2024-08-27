let textScroll = document.querySelector(".project > p");
let dsaProject = document.querySelector(".dsa-project");

gsap.from(textScroll, {
    y: "-5rem",
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
        trigger: textScroll,
        start: "-100% center",
    }
});

gsap.from(dsaProject, {
    y: "7rem",
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
        trigger: dsaProject,
        start: "top center",
    }
})

