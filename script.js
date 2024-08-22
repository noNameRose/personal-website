const mainTitle = document.querySelector(".main-title");
const menuBut = document.querySelector(".icon");
const bars = document.querySelectorAll(".bar");

let mainTitleTl = gsap.timeline({paused: true}).to(mainTitle, {
    x: "-1rem",
    y: "-1rem",
    ease: "power4.out",
});

let menuButTl = gsap.timeline({paused: true}).to(menuBut, {
    x: "-1rem",
    y: "-1rem",
    ease: "power4.out",
});

menuBut.onpointerenter = () => {
    menuButTl.play();
};
menuBut.onpointerleave = () => {
    menuButTl.reverse();
};
mainTitle.onpointerenter = () => {
    mainTitleTl.play();
}

mainTitle.onpointerleave = () => {
    mainTitleTl.reverse();
};

menuBut.onclick = () => {
    gsap.to(bars, {
        y: "100%",
        stagger: 0.1,
    })
}
