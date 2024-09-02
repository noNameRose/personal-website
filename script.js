const mainTitle = document.querySelector(".main-title");
const menuBut = document.querySelector(".icon");
const bars = document.querySelectorAll(".bar");
const sections = document.querySelectorAll(".sec button");
 
sections.forEach(section => {
    let tl = gsap.timeline({paused: true}).to(section, {
        x: "-1rem",
        y: "-1rem",
        ease: "power4.out",
        duration: 0.2,
    });
    section.onpointerenter = () => {
        tl.play();
    };
    section.onpointerleave = () => {
        tl.reverse();
    }

})

let mainTitleTl = gsap.timeline({paused: true}).to(mainTitle, {
    x: "0",
    y: "0",
    ease: "power4.out",
    duration: 0.2,
});

let menuButTl = gsap.timeline({paused: true}).to(menuBut, {
    x: "0",
    y: "0",
    ease: "power4.out",
    duration: 0.2,
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

let menuTlStart = gsap.timeline({paused: true}).to(bars, {
    y: "100%",
    stagger: 0.025,
});

let menuTlEnd = gsap.timeline({paused: true}).to(bars, {
    y: "200%",
    stagger: 0.025,
    onComplete: () => {
        gsap.set(bars, {
            y: "0",
        })
    }
});
let isClicked = false;
menuBut.onclick = () => {
    if (!isClicked) {
        menuTlStart.play();
        isClicked = true;
    }
    else {
        isClicked = false;
        menuTlStart.reverse();
    }
}



/* resume hover section */
const resumeBut = document.querySelector(".resume");
let resumeBars = document.querySelectorAll(".resume > .resume-bar")
let resumeBarTl = gsap.timeline({paused: true}).to(resumeBars, {
    height: "100%",
    stagger: 0.1,
}).to(resumeBut.querySelector("p"), {
    color: "black",
}, "<");

resumeBut.onpointerenter = () => {
    resumeBarTl.play();
}

resumeBut.onpointerleave = () => {
    resumeBarTl.reverse();
}

/* dsa project animation section */

let dsaCard = document.querySelector(".card.dsa");
let firstShadow = document.querySelector(".dsa-project .shadow-one");

let dsaCardTl = gsap.timeline({paused: true}).to(dsaCard, {
    x: "-5rem",
    y: "-5rem",
    ease: "power4.out",
}).to(firstShadow, {
    x: "-2.5rem",
    y: "-2.5rem",
    ease: "power4.out",
}, "<");

dsaCard.onpointerenter = () => {
    dsaCardTl.play();
};

dsaCard.onpointerleave = () => {
    dsaCardTl.reverse();
}

/* visit site animation */

const smoothBackground = document.querySelector(".smooth-change-background");
const visitBut = document.querySelector(".details > button");
let vistButTl = gsap.timeline({paused: true}).to(smoothBackground, {
    width: "100%",
}).to(visitBut.querySelector("p"), {
    color: "var(--bar-theme)",
}, "<")
visitBut.onpointerenter = () => {
    vistButTl.play();
};

visitBut.onpointerleave = () => {
    vistButTl.reverse();
}

