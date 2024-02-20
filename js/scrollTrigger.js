/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/


/* Match Media */
const mm = gsap.matchMedia();

/* Pre Loader */
/*
function preLoader() {
    const tlPreLoader = gsap.timeline();
    const counter = document.querySelector(".counter");

    tlPreLoader.fromTo(counter,
        { 
            innerHTML: 0 
        }, {
            innerHTML: 100,
            duration: 1,
            onUpdate: () => {
            counter.innerHTML = Math.round(counter.innerHTML);
            }
    });

    tlPreLoader.to(".loading p", {opacity: 0});
    tlPreLoader.to(".number h1", {y: "-100%", opacity: 0});

    tlPreLoader.to(".pre-loader", {display: "none", duration: 0.5});

    tlPreLoader.to(".content", {display: "block"});
}
preLoader();
/* Pre Loader End*/

/* Header */
function menuButton() {

    const content = document.querySelector(".content");

    const menuButton = document.querySelector(".menu-container");
    const menuButtonClosed = document.querySelector(".closed-menu");

    menuButton.addEventListener("click", () => {
        const tl = gsap.timeline();

        tl.to(content, {
            y: "20vh",
            scale: 0.9,
            duration: 1,
            ease: "power2.inOut",
        });


        tl.set(".home-li, .about-li, .manufacturing-li, .creations-li", {
            y: "100%",
            opacity: 0,
        }, "-= 1");

        tl.to(".home-li, .about-li, .manufacturing-li, .creations-li", {
            stagger: 0.2,
            y: 0,
            opacity: 1,
            duration: 1,
        }, "-= 0.2");
        
        document.body.style.overflow = 'hidden';   
    });

    
    menuButtonClosed.addEventListener("click", () => {    
        gsap.to(content, {
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
        });

        document.body.style.overflow = '';
    });
}
menuButton();

function firstEffectHeader() {
    gsap.set(".logo-container, .menu-container", {
        opacity: 0,
    });
    gsap.to(".logo-container, .menu-container", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    });
}
firstEffectHeader();
/* Header End*/

/* Content Container1 */
function firstEffectContainer1() {
    gsap.set(".title1, .title2, .title3", {
        opacity: 0,
        y: "100%",
    });
    gsap.to(".title1, .title2, .title3", {
        opacity: 1,
        duration: 0.5,
        y: 0,
        stagger: 0.1,
        delay: 0.5,
    });
}
firstEffectContainer1();

function imgEffectContainer1() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".images-container",
                start: "0 center",
                end: "center center",
                scrub: true,
            }
    });

    tl.set(".img-container1", {y: "100%"}, "-=1");
    tl.set(".img-container2-a", {x: "100%"}, "-=1");
    tl.set(".img-container2-b", {x: "-100%"}, "-=1");
    tl.set(".img-container3-a", {x: "100%", y: "-100%"}, "-=1");
    tl.set(".img-container3-b", {x: "-15%",y: "-100%"}, "-=1");

    tl.to(".img-container1, .img-container2-a, .img-container2-b, .img-container3-a, .img-container3-b", {x: 0, y:0, duration: 1});

    mm.add("(max-width: 479px)", () => {

        gsap.set(".images-container", {opacity: 0});

        gsap.to(".images-container", {opacity: 1, delay: 0.5, duration: 1,});
    });    
}
imgEffectContainer1();

function videoEffectContainer1() {

    if (matchMedia("(min-width: 480px)").matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".images-container",
                start: "center center",
                end: "bottom center",
                scrub: true,
            }
        }); 
    
    
        tl.to(".video-container2", {width: "100vw", height: "100vh", pin: true, pinSpacing: true});
        
        tl.to(".img-container1", {y: "-100vh", duration: 1, opacity: 0});
    
        tl.to(".img-container2-a", {x: "-100vw", duration: 1, opacity: 0},"-=1");
    
        tl.to(".img-container2-b", {x: "100vw", duration: 1, opacity: 0},"-=1");
    
        tl.to(".img-container3-a", {x: "-100vw", y: "100vh", duration: 1, opacity: 0},"-=1");
    
        tl.to(".img-container3-b", {y: "100vh", duration: 1, opacity: 0},"-=1");
    } else {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".images-container",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pinSpacing: true,
                markers: true
            }
        }); 
    
    
        tl.to(".video-container2", {width: "100vw", height: "120vh", pin: true, pinSpacing: true, duration: 1});
        
        tl.to(".img-container1", {y: "-100vh", duration: 1, opacity: 0});
    
        tl.to(".img-container2-a", {x: "-100vw", duration: 1, opacity: 0},"-=1");
    
        tl.to(".img-container2-b", {x: "100vw", duration: 1, opacity: 0},"-=1");
    
        tl.to(".img-container3-a", {x: "-100vw", y: "100vh", duration: 1, opacity: 0},"-=1");
    
        tl.to(".img-container3-b", {y: "100vh", duration: 1, opacity: 0},"-=1");
    }
}
videoEffectContainer1();
/* Content Container1 End */

/* Content Container2 */
function titleContainer2() {
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".title-container2",
            start: "500 600",
            end: "500 400",
            toggleActions: "play completed",
        }
    });
    
    gsap.set(".title-container2", {opacity: 0,}, "-=1");

    tl.to(".title-container2", {
        y: "-50%",
        opacity: 1,
        duration: 1,
        stagger: true,
    });
}
titleContainer2();

function contentContainer2() {

    if (matchMedia("(min-width: 480px)").matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".par-content",
                start: "200 600",
                end: "200 400",
                toggleActions: "play completed",
            }
        });
        
        gsap.set(".par-content", {opacity: 0,}, "-=1");
    
        tl.to(".par-content", {
            y: "-40vh",
            opacity: 1,
            duration: 1,
            ease: "power3.in",
            stagger: true,
        });
    
        gsap.set(".button-container2", {opacity: 0});
        gsap.set(".image-container2", {opacity: 0}, "-=1");
    
        tl.to(".button-container2", {y: "-40vh", opacity: 1, delay: 0.5});
        tl.to(".image-container2", {y: "-40vh", opacity: 1,  delay: 0.5}, "-=1");
    
        gsap.set(".video-container3", {opacity: 0}, "-=1");
        tl.to(".video-container3", {y: "-40vh", opacity: 1, delay: 0.5});
    } else {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".par-content",
                start: "top center",
                end: "top 200",
                toggleActions: "play completed",
                pinSpacing: true,
                markers: true
            }
        });
        
        gsap.set(".par-content", {opacity: 0, y: "20vh"});
    
        tl1.to(".par-content", {
            y: "-10vh",
            opacity: 1,
            duration: 1,
        });
        

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".button-container2",
                start: "top center",
                end: "top 200",
                toggleActions: "play completed",
                pinSpacing: true,
                markers: true
            }
        });
        gsap.set(".button-container2", {opacity: 0, y: "10vh"});
        tl2.to(".button-container2", {y: "-15vh", opacity: 1, delay: 1});


        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".image-container2",
                start: "top 300",
                end: "top 200",
                toggleActions: "play completed",
                pinSpacing: true,
                markers: true
            }
        });
        gsap.set(".image-container2", {opacity: 0});
        gsap.set(".video-container3", {opacity: 0});
        
        tl3.to(".image-container2", {y: "-20vh", opacity: 1, delay: 1});

        tl3.to(".video-container3", {y: "-20vh", opacity: 1});
    }
} 
contentContainer2();
/* Content Container2 End */

/* Content Container3 */
function titleContainer3() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".title-container3 h1",
            start: "top center",
            end: "bottom center",
            toggleActions: "play completed",
        }
    });

    gsap.set(".title-container3 h1", {opacity: 0, y: "100%"});

    tl.to(".title-container3 h1", {y: 0, opacity:1, duration: 1});
}
titleContainer3();

function parContent() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".par-content-container3",
            start: "top 150",
            end: "bottom 150",
            toggleActions: "play completed",
        },
    });

    gsap.set(".par-content-container3 p", {opacity: 0, y: "100%"});
    gsap.set(".button-container3", {opacity: 0, y: "100%"});

    tl.to(".par-content-container3 p", {y: 0, opacity:1, duration: 1});

    tl.to(".button-container3", {y: 0, opacity:1, duration: 1,});
}
parContent();
/* Content Container3 End */

/* Content Container4 */
function contentContainer4() {

    if (matchMedia("(min-width: 480px)").matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".images-container4",
                start: "top 50",
                end: "bottom 50",
                toggleActions: "play completed",
            }
        });

        gsap.set(".image1-container4, .image2-container4, .image3-container4, .image4-container4, .image5-container4, .image6-container4", {
            height: "0%",
        });
    
        tl.to(".image1-container4, .image3-container4, .image5-container4", {
            height: "60%",
            duration: 1,
            stagger: 0.2
        });
    
        tl.to(".image2-container4, .image4-container4, .image6-container4", {
            height: "30%",
            duration: 1,
            stagger: 0.2
        }, "-= 0.5");
    } else {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".images-container4",
                start: "top 700",
                end: "bottom 700",
                toggleActions: "play completed",
                pinSpacing: true,
                markers: true
            },
        });
    
        gsap.set(".image2-container4, .image3-container4, .image4-container4, .image5-container4", {
            height: "0%",
        });
    
        tl.to(".image4-container4, .image5-container4", {
            height: "60%",
            duration: 1,
            stagger: 0.2
        });
    
        tl.to(".image2-container4, .image3-container4", {
            height: "30%",
            duration: 1,
            stagger: 0.2
        }, "-= 0.5");
    }

}
contentContainer4();
/* Content Container4 End */

/* Footer */
function footerContainer() {
    
    if (matchMedia("(min-width: 480px)").matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".content-footer",
                start: "top 150",
                end: "bottom 150",
                toggleActions: "play completed",
            },
        });
    
        gsap.set(".title-footer h1", {
            opacity: 0,
            y: "100%",
        });
    
        gsap.set(".social-media, .privacy-policy p", {
            opacity: 0,
            y: "100%",
        });
    
        tl.to(".title-footer h1", {
            opacity: 1,
            duration: 0.5,
            y: 0,
        });
    
        tl.to(".social-media, .privacy-policy p", {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
        });
    } else {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".content-footer",
                start: "top 700",
                end: "bottom 700",
                toggleActions: "play completed",
                pinSpacing: true,
                markers: true
            },
        });
    
        gsap.set(".title-footer h1", {
            opacity: 0,
            y: "100%",
        });
    
        gsap.set(".social-media, .privacy-policy p", {
            opacity: 0,
            y: "100%",
        });
    
        tl.to(".title-footer h1", {
            opacity: 1,
            duration: 0.5,
            y: 0,
        });
    
        tl.to(".social-media, .privacy-policy p", {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
        });
    }
}
footerContainer();
/* Footer End */

