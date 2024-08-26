let textScroll = document.querySelector(".project > p");
let dsaProject = document.querySelector(".dsa-project");

gsap.from(textScroll, {
    y: "-5rem",
    opacity: 0,
    scrollTrigger: {
        trigger: textScroll,
        start: "-100% 70%",
    }
});

gsap.from(dsaProject, {
    y: "5rem",
    opacity: 0,
    scrollTrigger: {
        trigger: dsaProject,
        start: "-70% center",
    }
})

