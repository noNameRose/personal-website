const circleTop = document.querySelector(".circle.top");
const circleBottom = document.querySelector(".circle.bottom");
const introBorderLeft = document.querySelector(".border.left");
const introBorderRight = document.querySelector(".border.right");
const introBorderTop = document.querySelector(".border.top");
const introBorderBottom = document.querySelector(".border.bottom");
const helloText = document.querySelector(".hello-text");

gsap.timeline()
//.from(circleTop, {
//     y: "-200%",
//     opacity: 0,
// }).from(circleBottom, {
//     y: "200%",
//     opacity: 0,
// }).to(circleBottom, {
//     top: "50%",
//     duration: .4,
// }).to(circleTop, {
//     top: "50%",
//     duration: .4
// }, "<").to(".container", {
//     scale: 1,
//     onComplete: () => {
//         document.querySelector(".preload").remove();
//     }
// })
.from(helloText, {
    y: "-100%",
    ease: "power4.inOut",
    duration: 1,
}, "<").from(document.querySelector(".intro-text.bottom-line > p"), {
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

