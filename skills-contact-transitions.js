const homePageNavButs = document.querySelectorAll(".sec > button");


homePageNavButs.forEach(but => {
    let secName = but.innerHTML.toLowerCase();
    but.onclick = () => {
        createTransitionAnimation(secName, "black");
    }
})

export function createTransitionAnimation(secName, color, isAbout, isMenuPage) {
    let transitionPage = document.createElement("div");
    transitionPage.className = "skills-contact-transitions";
    for (let i = 0; i < 400; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = color;
        square.style.opacity = 0;
        transitionPage.append(square);
    }
    document.body.append(transitionPage);
    let tl = gsap.timeline();
    tl.to(Array.from(transitionPage.querySelectorAll("div")), {
        opacity: 1,
        stagger: {
            amount: 0.5,
            from: "random",
            grid: "auto",
        },
        onComplete: () => {
            if (!isAbout) {
                document.querySelector(`.${secName}-title`).scrollIntoView(true);
                if (isMenuPage) {
                    removeMenuPage();
                }
            }
            else {
                let link_to_about = document.createElement("a");
                link_to_about.href = "./about-page/index.html";
                link_to_about.click();
                setTimeout(() => {
                    transitionPage.remove();
                    removeMenuPage();
                    }, 2000);
            }
        }
    });
    if (!isAbout) {
        tl.to(Array.from(transitionPage.querySelectorAll("div")), {
            opacity: 0,
            stagger: {
                amount: 0.5,
                from: "random",
                grid: "auto",
            },
            onComplete: () => {
                transitionPage.remove();
            }
        });
    }
}

function removeMenuPage() {
    gsap.set(document.querySelectorAll(".menu-link > a"), {
        opacity: 0,
    });
    gsap.set(document.querySelectorAll(".bar"), {
        y: "200%",
        onComplete: () => {
            document.body.firstChild.remove();
        }
    }, "<");
}
