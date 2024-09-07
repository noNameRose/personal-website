let textScroll = document.querySelector(".project > p");
let dsaProject = document.querySelector(".project-cards");


gsap.from(textScroll, {
    y: "-5rem",
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
        trigger: textScroll,
        start: "-70% center",
        toggleActions: "play none none reverse",
    }
});

gsap.from(dsaProject, {
    y: "7rem",
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
        trigger: dsaProject,
        start: "-70% center",
        toggleActions: "play none none reverse",
    }
});


/* skills scroll */

gsap.from(document.querySelector(".skills-list .intro-text > p"), {
    y: "-100%",
    ease: "power4.inOut",
    duration: 1,
    scrollTrigger: {
        trigger: document.querySelector(".skills-list .intro-text > p") ,
        start: "top 70%",
        toggleActions: "play none none reverse",
        
    }
});


