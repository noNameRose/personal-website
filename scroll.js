let textScroll = document.querySelector(".project > p");

gsap.from(textScroll, {
    x: "-5rem",
    opacity: 0,
    scrollTrigger: {
        trigger: textScroll,
        start: "-200% 70%",
        markers: true
    }
})