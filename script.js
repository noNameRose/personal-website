const mainTitle = document.querySelector(".main-title");
const menuBut = document.querySelector(".icon");
const bars = document.querySelectorAll(".bar");
const sections = document.querySelectorAll(".sec button");
const footer = document.querySelector("footer");
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

/* menu but section*/

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
        gsap.timeline().to(bars, {
            y: "100%",
            stagger: 0.025,
        }).fromTo(document.querySelectorAll(".menu-link > a"), {
            y: "5rem",
            stagger: 0.1,
            opacity: 0,
        }, {
            y: "0",
            stagger: 0.1,
            opacity: 1,
        }, "<");
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
                let nameSec = (menuLink.querySelector("p").innerHTML).toLowerCase();
                if (nameSec === "about") {
                    const a = document.createElement("a");
                    a.href = "/about-page";
                    a.click();
                }
                else {
                    let section = document.querySelector(`.${nameSec}-title`);
                    section.scrollIntoView(true);
                    gsap.timeline().to(document.querySelectorAll(".menu-link > a"), {
                        y: "5rem",
                        stagger: 0.1,
                        opacity: 0,
                    }).to(bars, {
                        y: "200%",
                        stagger: 0.025,
                        onComplete: () => {
                            document.body.firstChild.remove();
                        }
                    });
                }
                isClicked = false;   
            }
        })
    }
    else {
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
        }, "<");
        isClicked = false;   
    }
}


function createMenuPage() {
    let menuPage = document.createElement("div");
    menuPage.className = "menu-page";
    menuPage.innerHTML = `
            <div class = "menu-link">
                <a href="./index.html" style="text-decoration: none">
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
footerMenus.forEach(footerMenu => {
    let footerTl = gsap.timeline({paused: true}).to(footerMenu.querySelector(".top-background"), {
        height: "100%",
    }).to([footerMenu.querySelector("a"), footerMenu.querySelector(".index")], {
        color: "black",
    }, "<").to(footerMenu.querySelector(".view"), {
        opacity: 1,
    }, "<");
    footerMenu.onpointerenter = () => {
        footerTl.play();
    }
    footerMenu.onpointerleave = () => {
        footerTl.reverse();
    }
})



