import { data } from "./data.js";
const skillsGridItems = document.querySelectorAll(".grid-items");
const representLogo = document.querySelector(".representative > .virtual");
const experienceBar = document.querySelector(".experience-time > .amount");
const confidentBar = document.querySelector(".confident-level > .amount");
const experienceText = document.querySelector(".experience-time > .amount-text");
const confidentText = document.querySelector(".confident-level > .amount-text");
gsap.to(document.querySelector(".come-in-logo > button"), {
    repeat: -1,
    yoyo: true,
    keyframes: {
        y: [0, "2rem", 0]
    },
    duration: 1,
   
})
skillsGridItems.forEach(item => {
    let experience_Amount = data[item.id].experienceTimes;
    let confident_Level = data[item.id].confidentLevel;
    let confident_amount = confident_Level === "Very Confident" ? 
                            15 : 
                            (confident_Level === "Confident" ?
                            10 : 5
                            )
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
    let div = document.createElement("div");
    div.className = "come-in-logo";
    let but = document.createElement("button");
    but.style.backgroundImage = `url(${source})`;
    let p = document.createElement("p");
    p.innerHTML = `${item.id[0].toUpperCase() + item.id.slice(1)}`;
    div.append(but);
    div.append(p);
    let itemTl = gsap.timeline({paused: true}).to(item, {
        x: "-1rem",
        y: "-1rem",
        border: "0.2rem solid var(--grids-items-border)",
        duration: 0.3,
        ease: "power3.out",
    });
    item.onpointerenter = () => {
        if (representLogo.nextElementSibling.className === "come-in-logo")
            representLogo.nextElementSibling.remove();
        experienceText.innerHTML = experience_Amount > 9 ? "1 year" : experience_Amount + " months";
        confidentText.innerHTML = confident_Level;
        itemTl.play();
        representLogo.after(div); 
        gsap.to(but, {
            repeat: -1,
            yoyo: true,
            keyframes: {
                y: [0, "2rem", 0]
            },
            duration: 1,
           
        });
        gsap.timeline().fromTo(div, {
            opacity: 0,
            y: "-5rem",
        }, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1,
        }).fromTo(experienceBar, {
            width: 0
        }, {
            width: experience_Amount + 5 + "rem",
        }, "<").fromTo(confidentBar, {
            width: 0,
        }, {
            width: confident_amount + "rem",
        }, "<");
    }
    item.onpointerleave = () => {
        itemTl.reverse();
    }
})