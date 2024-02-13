/*------------------------------
Init ScrollTo
------------------------------*/
document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1, 
        scrollTo:{
            y:"#section" + (index + 1), 
            offsetY:70
        },
        ease: "power2"
    });
})});