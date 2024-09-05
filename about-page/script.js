const title = document.querySelector(".about-title");
const essay = document.querySelector("article");
gsap.timeline().from(title, {
    y: "-100%",
    ease: "power1.inOut",
}).from(essay, {
    y: "5rem",
    ease: "power1.inOut",
    opacity: 0,
}, "<")
