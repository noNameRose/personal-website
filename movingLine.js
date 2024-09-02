document.addEventListener("DOMContentLoaded", () => {
    // intro border anime section 

    //---------------------------
    let movingLineTop = document.querySelector(".moving-line-horizontal.top");
    let movingLineBottom = document.querySelector(".moving-line-horizontal.bottom");
    let movingLineVerticalLefts = document.querySelectorAll(".moving-line-vertical.left");
    let movingLineVerticalRights = document.querySelectorAll(".moving-line-vertical.right");
    gsap.timeline({repeat: -1, yoyo: true})
    .to(movingLineTop, {
        keyframes: {
            left: ["0", "85%"],
        },
        duration: 4,
        ease: "power1"
    });
    gsap.timeline({repeat: -1, yoyo: true})
    .to(movingLineBottom, {
        keyframes: {
            right: ["0", "85%"],
        },
        duration: 4,
        ease: "power1",
    });
    gsap.timeline({repeat: -1, yoyo: true})
    .to(movingLineVerticalLefts, {
        top: "85%",
        duration: 3,
        ease: "power1",
    });
    gsap.timeline({repeat: -1, yoyo: true})
    .to(movingLineVerticalRights, {
        bottom: "85%",
        duration: 3,
        ease: "power1",
    })
})