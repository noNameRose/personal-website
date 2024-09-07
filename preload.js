const preload = document.querySelector(".preload");
const introBorderLeft = document.querySelector(".border.left");
const introBorderRight = document.querySelector(".border.right");
const introBorderTop = document.querySelector(".border.top");
const introBorderBottom = document.querySelector(".border.bottom");
const helloText = document.querySelector(".hello-text");


async function creteGrid() {
    for (let i = 0; i < 400; i++) {
        const but = document.createElement("button");
        but.style.border = "none";
        but.style.backgroundColor = "black";
        preload.append(but);
    }
}

async function getGrid() {
    await creteGrid();
}

getGrid();



gsap.timeline({delay: 1}).to(preload.querySelectorAll("button"), {
    // scale: 0,
    opacity: 0,
    stagger: {
        amount: 1,
        from: "random",
        grid: "auto",
    },
    onComplete: () => {
        preload.style.display = "none";
    }
})
.from(helloText, {
    y: "-100%",
    ease: "power4.inOut",
    duration: 1,
}).from(document.querySelector(".intro-text.second-line > pre"), {
    y: "100%",
    ease: "power4.inOut",
    duration: 1,
}, "<").to(introBorderTop, {
    width: "100%",
}).to(introBorderLeft, {
    height: "100%",
}, "<").to(introBorderBottom, {
    width: "100%",
}).to(introBorderRight, {
    height: "100%",
}, "<");

