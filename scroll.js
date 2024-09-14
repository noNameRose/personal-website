let projectTitleWords = document.querySelectorAll(".projects-title p");
let footerIndices = document.querySelectorAll(".index");
let cards = document.querySelectorAll(".card");
gsap.from(projectTitleWords, {
    y: "-100%",
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out",
    scrollTrigger: {
        trigger: projectTitleWords,
        start: "top center",
        toggleActions: "play none none reverse",
    }
})

cards.forEach(card => {
    gsap.to(card, {
        y: "-3rem",
        x: "-3rem",
        ease: "elastic.out",
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: "top center",
            toggleActions: "play none none reverse",
        }
    });
    gsap.to(card.nextElementSibling, {
        y: "-1.2rem",
        x: "-1.2rem",
        ease: "elastic.out",
        duration: 1,
        scrollTrigger: {
            trigger: card.nextElementSibling, 
            start: "top center",
            toggleActions: "play none none reverse",
        }
    })
})


// gsap.to(textToVoiceCard, {
//     y: "-3rem",
//     x: "-3rem",
//     ease: "elastic.out",
//     duration: 1,
//     scrollTrigger: {
//         trigger: textToVoiceCard,
//         start: "top center",
//         toggleActions: "play none none reverse",
//     }
// });

// gsap.to(textToVoiceCardShadow, {
//     y: "-1.2rem",
//     x: "-1.2rem",
//     ease: "elastic.out",
//     duration: 1,
//     scrollTrigger: {
//         trigger: textToVoiceCardShadow, 
//         start: "top center",
//         toggleActions: "play none none reverse",
//     }
// })




/* skills scroll */

gsap.from(document.querySelector(".skills-list .intro-text > p"), {
    y: "-100%",
    ease: "power4.inOut",
    duration: 1,
    scrollTrigger: {
        trigger: document.querySelector(".skills-list .intro-text > p") ,
        start: "top 70%",
        toggleActions: "play none none reverse",
        
    }
});

gsap.from(document.querySelectorAll(".skills-grid button"), {
    opacity: 0,
    stagger: {
        amount: 0.5,
        from: "random",
        grid: "auto"
    },
    scrollTrigger: {
        trigger:document.querySelectorAll(".skills-grid button"),
        start: "top 70%",
        toggleActions: "play none none reverse",
        
    }
})

/* footer section*/

let footerTopBackground = document.querySelectorAll(".footer-menu > .top-background");
let footerCategorizes = document.querySelectorAll(".categorize");
// gsap.from(footerTopBackground, {
//     width: 0,
//     ease: "power4.out",
//     stagger: {
//         amount: 0.5,
//     },
//     scrollTrigger: {
//         trigger: footerTopBackground,
//         toggleActions: "play none none reverse",
//     }
// });

gsap.from(footerCategorizes, {
    x: "100%",
    ease: "power1.out",
    stagger: {
        amount: 0.5,
    },
    scrollTrigger: {
        trigger: footerCategorizes,
        toggleActions: "play none none reverse",
    }
});

gsap.from(footerIndices, {
    x: "-100%",
    ease: "power1.out",
    stagger: {
        amount: 0.5,
    },
    scrollTrigger: {
        trigger: footerIndices,
        toggleActions: "play none none reverse",
    }
})



/* --------------- */



