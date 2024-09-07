const homePageNavButs = document.querySelectorAll(".sec > button");


homePageNavButs.forEach(but => {
    let secName = but.innerHTML.toLowerCase();
    but.onclick = () => {
        createTransitionAnimation(secName, "black");
    }
})

export function createTransitionAnimation(secName, color, isAbout) {
    let transitionPage = document.createElement("div");
    transitionPage.className = "skills-contact-transitions";
    for (let i = 0; i < 400; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = color;
        square.style.opacity = 0;
        transitionPage.append(square);
    }
    document.body.append(transitionPage);
    gsap.timeline().to(Array.from(transitionPage.querySelectorAll("div")), {
        opacity: 1,
        stagger: {
            amount: 0.5,
            from: "random",
            grid: "auto",
        },
        onComplete: () => {
            document.querySelector(`.${secName}-title`).scrollIntoView(true);
        }
    }).to(Array.from(transitionPage.querySelectorAll("div")), {
        opacity: 0,
        stagger: {
            amount: 0.5,
            from: "random",
            grid: "auto",
        },
        onComplete: () => {
            transitionPage.remove();
        }
    })
}
