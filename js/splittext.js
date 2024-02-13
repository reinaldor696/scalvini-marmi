// Effect1 
const splittext1 = document.querySelectorAll(".splittext1");

function splitText1() {
    splittext1.forEach(quote => {
        // Reset if needed
        if(quote.anim) {
            quote.anim.progress(1).kill();
            quote.split.revert();
        }

        quote.split = new SplitText(quote, { 
            type: "lines,words,chars",
            linesClass: "split-line"
        });

        // Set up the anim
        quote.anim = gsap.from(quote.split.chars, {
            scrollTrigger: {
                trigger: quote,
                toggleActions: "restart pause resume reverse",
                start: "top 50%",
                scrub: true,
                id: "scrub",
            },
            duration: 0.6, 
            ease: "circ.out", 
            y: 80, 
            stagger: 0.02,
        });
    });
}

ScrollTrigger.addEventListener("refresh", splitText1);
splitText1();
// Fin effect1