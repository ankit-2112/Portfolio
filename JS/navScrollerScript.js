gsap.to("#nav-bar", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "200px top",
        // scrub: "true"
        scrub: 1
    },
    top: "0.9rem",
    height: "2rem",
    backgroundColor: "rgba(222, 220, 220, 0.815)",
    duration: 1
});

gsap.to("#profile-image",{
    scrollTrigger: {
        trigger: "#name-container",
        start: "top top",
        end: "100px top",
        scrub: true
    },
    borderRadius: "200px",
    position: "fixed",
    top: "2rem",
    left: "5rem",
    width: "60px",
    height: "60px",
    duration: 1
});

gsap.to("aside",{
    scrollTrigger: {
        trigger: "#name-container",
        start: "top top",
        end: "100px top",
        scrub: true
    },
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    duration: 1
});