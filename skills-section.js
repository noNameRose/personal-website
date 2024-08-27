const skillsGridItems = document.querySelectorAll(".grid-items");
const representLogo = document.querySelector(".representative > .virtual");

skillsGridItems.forEach(item => {
    let source = "/icon/";
    switch(item.id) {
        case "html":
            source += "html.svg";
            break;
        case "css":
            source += "css.svg";
            break;
        case "js":
            source += "js.svg";
            break;
        case "react":
            source += "react.png";
            break;
        case "c":
            source += "c.svg";
            break;
        case "java":
            source += "java.png";
            break;
        case "python":
            source += "python.png";
            break;
        case "gsap":
            source += "gsap.svg";
            break;
    }
    let but = document.createElement("button");
    but.style.backgroundImage = `url(${source})`;
    let itemTl = gsap.timeline({paused: true}).to(item, {
        x: "-1rem",
        y: "-1rem",
        border: "0.2em solid var(--grids-items-border)",
        duration: 0.3,
        ease: "power3.out",
    });
    item.onpointerenter = () => {
        itemTl.play();
        representLogo.after(but);
        gsap.fromTo(but, {
            opacity: 0,
            y: "5rem",
        }, {
            opacity: 1,
            y: 0,
        })
    }
    item.onpointerleave = () => {
        itemTl.reverse();
        representLogo.nextElementSibling.remove();
    }
})