const title = document.querySelector(".about-title");
const essay = document.querySelector("article");
const homeBut = document.querySelector(".home-but");
const but = document.querySelector(".home");



/* Exit page */

const exitPage = document.querySelector(".exit-page");
for (let i = 0; i < 400; i++) {
    let but = document.createElement("button");
    but.className = "exit-page-items";
    exitPage.append(but);
}

/* --------------*/
gsap.timeline({delay: 1,}).from(title, {
    y: "-100%",
    ease: "power1.inOut",
}).from(essay, {
    y: "5rem",
    ease: "power1.inOut",
    opacity: 0,
}, "<").from(homeBut, {
    y: "-100%",
    opacity: 0,
    ease: "back.out",
}).to(but, {
    x: "-0.5rem",
    y: "-0.5rem",
    ease: "elastic.inOut",
    duration: 1,
});

let homeTl = gsap.timeline({paused: true}).to(but, {
    y: 0,
    x: 0,
    ease: "power4.out"
});

but.onpointerenter = () => {
    homeTl.play();
}

but.onpointerleave = () => {
    homeTl.reverse();
}

but.onclick = () => {
    exitPage.style.zIndex = 10000000;
    let a = document.createElement("a");
    a.href = "../index.html";
    const exitPageItems = document.querySelectorAll(".exit-page-items");
    gsap.to(exitPageItems, {
        opacity: 1,
        stagger: {
            amount: 1,
            from: "random",
            grid: "auto",
        },
        onComplete: () => {
            a.click();
            setTimeout(() => {
                exitPageItems.forEach(item => {
                    item.style.opacity = 0;
                });
                exitPage.style.zIndex = -1;
            }, 1500);
        }
    })
}

