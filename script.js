import {createTransitionAnimation} from "./skills-contact-transitions.js";

const mainTitle = document.querySelector(".home-title");
const menuBut = document.querySelector(".icon");
const bars = document.querySelectorAll(".bar");
const sections = document.querySelectorAll(".sec button");

sections.forEach(section => {
    let tl = gsap.timeline({paused: true}).to(section, {
        x: "0",
        y: "0",
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

/* menu but section*/

const closeButShadow = document.querySelector(".close-but-shadow");
for (let i = 0; i < 25; i++) {
    let square = document.createElement("div");
    square.className = "close-but-shadow-items";
    closeButShadow.append(square);
    
}

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

let isClicked = false;
menuBut.onclick = () => {
    if (!isClicked) {
        document.body.prepend(createMenuPage());
        document.querySelector("html").style.overflow = "hidden";
        gsap.timeline().to(bars, {
            y: "100%",
            stagger: 0.025,
            onComplete: () => {
            }
        }).fromTo(document.querySelectorAll(".menu-link > a"), {
            y: "5rem",
            stagger: 0.1,
            opacity: 0,
        }, {
            y: "0",
            stagger: 0.1,
            opacity: 1,
        }, "<").to(document.querySelectorAll(".close-but-shadow-items"), {
            opacity: 1,
            stagger: {
                amount: 0.5,
                from: "ends",
            }
        }, "<").fromTo(document.querySelector(".close-but"), {
            scale: 0,
        }, {
            scale: 1,
        }, "-=0.5");
        isClicked = true;
        const menuLinks  = document.querySelectorAll(".menu-link > a");
        menuLinks.forEach(menuLink => {
            let menuLinkesTl = gsap.timeline({paused: true}).to(menuLink.querySelector(".top-background-menu"), {
                height: "100%",
            }).to(menuLink.querySelector("p"), {
                color: "black",
            }, "<");
            menuLink.onpointerenter = () => {
                menuLinkesTl.play();
            };
            menuLink.onpointerleave = () => {
                menuLinkesTl.reverse();
            };
            menuLink.onclick = () => {
                document.querySelector("html").style.overflow = "auto";
                let nameSec = (menuLink.querySelector("p").innerHTML).toLowerCase();
                let isAbout = nameSec === "about";
                if (isAbout) {
                    createTransitionAnimation(nameSec, "white", true);
                }
                else {
                    createTransitionAnimation(nameSec, "white", isAbout, true);
                }
                isClicked = false;   
            }
        })
    }
    else {
        document.querySelector("html").style.overflow = "auto";
        gsap.timeline().to(document.querySelectorAll(".menu-link > a"), {
            y: "5rem",
            opacity: 0,
            duration: 0.2,
        }).to(bars, {
            y: "200%",
            stagger: 0.025,
            onComplete: () => {
                document.body.firstChild.remove();
            }
        }, "<").fromTo(document.querySelector(".close-but"), {
            scale: 1,
        }, {
            scale: 0,
        }, "<").to(document.querySelectorAll(".close-but-shadow-items"), {
            opacity: 0,
            stagger: {
                amount: 0.5,
                from: "end",
            }
        }, "-=0.5");
        isClicked = false;   
    }
}


function createMenuPage() {
    let menuPage = document.createElement("div");
    menuPage.className = "menu-page";
    menuPage.innerHTML = `
            <div class = "menu-link">
                <a>
                    <p>HOME</p>
                    <div class = "top-background-menu"></div>
                </a>
                <a>
                    <p>ABOUT</p>
                    <div class = "top-background-menu"></div>
                </a>
                <a>
                    <p>PROJECTS</p>
                    <div class = "top-background-menu"></div>
                </a>
                <a>
                    <p>SKILLS</p>
                    <div class = "top-background-menu"></div>
                </a>
                <a>
                    <p>CONTACT</p>
                    <div class = "top-background-menu"></div>
                </a>
            </div>
    `;
    return menuPage;
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
    x: "0rem",
    y: "0rem",
    ease: "power4.out",
}).to(firstShadow, {
    x: "0rem",
    y: "0rem",
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

visitBut.onclick = () => {
    let a = document.createElement("a");
    a.href = "https://startling-torte-da44f3.netlify.app/";
    a.target = "black";
    a.click();
}

/* react icon */

const reactIcon = document.querySelector(".react-icon > button");
gsap.to(reactIcon, {
    rotate: 360,
    duration: 3,
    repeat: -1,
    transformOrigin: "center center"
})

/* ---------------*/

/* footer section */

const footerMenus = document.querySelectorAll(".footer-menu");
const footerMovingThings = document.querySelectorAll(".footer-moving-thing");
footerMovingThings.forEach(footerMovingThing => {
    if (footerMovingThing.classList.contains("first")) {
        gsap.to(footerMovingThing, {
            repeat: -1,
            yoyo: true,
            duration: 4,
            keyframes: {
                left: ["0", "30%", "50%", "90%", "30%"],
            }
        });
    }
    else if (footerMovingThing.classList.contains("second")) {
        gsap.to(footerMovingThing, {
            repeat: -1,
            yoyo: true,
            duration: 4,
            keyframes: {
                right: ["0", "20%", "70%", "80%", "50%"],
            }
        });
    }
    else {
        gsap.to(footerMovingThing, {
            repeat: -1,
            yoyo: true,
            duration: 4,
            keyframes: {
                left: ["50%", "20%", "70%", "80%", "50%"],
            }
        });
    }
})
footerMenus.forEach(footerMenu => {
    let footerTl = gsap.timeline({paused: true}).to(footerMenu.querySelector(".top-background"), {
        height: "100%",
    }).to([footerMenu.querySelector(".categorize"), footerMenu.querySelector(".index")], {
        color: "black",
    }, "<").to(footerMenu.querySelector(".view"), {
        opacity: 1,
    }, "<").set(footerMenu.querySelector(".categorize-shadow"), {
        opacity: 0,
    }, "<").set(footerMenu.querySelector(".index-shadow"), {
        opacity: 0,
    }, "<");
    footerMenu.onpointerenter = () => {
        footerTl.play();
    };
    footerMenu.onpointerleave = () => {
        footerTl.reverse();
    };
    footerMenu.onclick = () => {
        let secName = footerMenu.querySelector(".categorize").innerHTML.toLowerCase();
        if (secName === "about")
            createTransitionAnimation(secName, "white", true);
        else
            createTransitionAnimation(secName, "white");
    }
})



