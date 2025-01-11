
gsap.registerPlugin(ScrollTrigger);


const translate = document.querySelectorAll(".translate");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const section = document.querySelector("#first-section");
const paperOverlay = document.querySelector(".paperOverlay");

translate.forEach((element) => {
    const speed = element.dataset.speed;

    gsap.to(element, {
        xPercent: () => {
            if (element.classList.contains("ice11")) return -100 * speed;
            if (element.classList.contains("ice12")) return 100 * speed;
            if (element.classList.contains("seabird")) return -800 * speed;
            return 0;
        },
        yPercent: () => {
            return 50 * speed;
        },
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false,
        },
    });
});

gsap.to(title, {
    yPercent: -150,
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
    },
});

gsap.to(subtitle, {
    yPercent: -500,
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
    },
});


gsap.to(section, {
    scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: true,
    },
});


function updateDepth() {
    const depthDisplay = document.getElementById('depthDisplay');
    const secondSection = document.querySelector('#second-section');
    const secondSectionTop = secondSection.offsetTop;
    const scrollY = window.scrollY; 
  
    if (scrollY >= secondSectionTop) {
      const depth = Math.max(0, Math.floor((scrollY - secondSectionTop) / 25)); 
      const pinnedSections = ScrollTrigger.getAll().filter(trigger => trigger.isActive);
      if (pinnedSections.length === 0) {
        depthDisplay.textContent = `Depth: ${depth}m`; 
      }
  
      gsap.to(depthDisplay, {
        opacity: 1,
        duration: 0.3, 
      });
    } else {

      gsap.to(depthDisplay, {
        opacity: 0,
        duration: 0.3, 
      });
    }
  }
  window.addEventListener('scroll', updateDepth);
  
  updateDepth();
  

const fadeElements = gsap.utils.toArray('.s1, .s2, .s3, .s4');

gsap.to(".section3", {
    scrollTrigger: {
        trigger: ".section3",
        start: "top top", 
        end: () => `+=${fadeElements.length * 200}`,
        pin: true, 
        scrub: true,
        markers: false,
    }
});

fadeElements.forEach((element, index) => {
    gsap.fromTo(element, {
        opacity: 0, 
    }, {
        opacity: 1, 
        duration: 0.5, 
        scrollTrigger: {
            trigger: element, 
            start: ".section3", 
            scrub: true,
            markers: false,
            toggleActions: "play none none reverse", 
            onEnter: () => {
               
                if (index === fadeElements.length - 1) {
                    
                    ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
                }
            }
        }
    });
});










const fishTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".fish-container", 
    start: "top 20%", 
    end: "+=1000", 
    pin: ".section4", 
    scrub: 1, 
    markers: false,
  },
});


fishTimeline.to(".head", {
  x: 500, 
  duration:2,
});


fishTimeline.to(".tail", {
  x: -500, 
  duration: 2,
}, "<"); 


fishTimeline.to(".dead-fish", {
    opacity: 1, 
    duration: 1, 
}, "<");





gsap.fromTo(
    ".f11 span",
    { opacity: 0, y: 20 }, 
    {
        opacity: 1,
        y: 0, 
        duration: 1.5, 
        stagger: {
            each: 0.1, 
        },
        scrollTrigger: {
            trigger: ".section5", 
            start: "top top", 
            end: "+=100%", 
            markers: false,
            scrub: true, 
        
        },
    }
);







function setInitialBurgerPositions() {
  gsap.set(".top", { y: -100 });    
  gsap.set(".middle", { y: -55 });   
  gsap.set(".bottom", { y: 0 });    
}


function animateBurgerOnScroll() {
  gsap.to(".top, .middle", {
    y: 0, 
    stagger: 0.2, 
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section5", 
      start: "top top", 
      pin: ".section5", 
      markers: false,
      scrub: true, 

    },
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setInitialBurgerPositions();
  animateBurgerOnScroll();
});





gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".f1 h2 span").forEach((span, index) => {
  gsap.to(span, {
    backgroundPositionX: "0%", 
    ease: "none", 
    scrollTrigger: {
      trigger: span, 
      scrub: 0.5, 
      start: "top center",  
      end: "bottom center", 
      delay: index * 0.1, 
    }
  });
});
