
gsap.registerPlugin(ScrollTrigger);

// Select all elements
const translate = document.querySelectorAll(".translate");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const section = document.querySelector("#first-section");
const paperOverlay = document.querySelector(".paperOverlay");

// Parallax Effect for the translate elements
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
        },
    });
});

// Title and Subtitle movement
gsap.to(title, {
    yPercent: -150,
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

gsap.to(subtitle, {
    yPercent: -500,
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

// Section pinning
gsap.to(section, {
    scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});


function updateDepth() {
    const depthDisplay = document.getElementById('depthDisplay');
    const secondSection = document.querySelector('#second-section');
    const secondSectionTop = secondSection.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= secondSectionTop) {
        // Calculate depth based on scroll position relative to the second section
        const depth = Math.max(0, Math.floor((scrollY - secondSectionTop) / 40));
        depthDisplay.textContent = `Depth: ${depth}m`;
        depthDisplay.style.opacity = '1'; // Show depth display
    } else {
        depthDisplay.style.opacity = '0'; // Hide depth display before second section
    }
}

window.addEventListener('scroll', updateDepth);









gsap.registerPlugin(ScrollTrigger);

const fadeElements = gsap.utils.toArray('.s1, .s2, .s3, .s4');

gsap.to(".section3", {
    scrollTrigger: {
        trigger: ".section3",
        start: "top top", // When the section hits the top of the viewport
        end: () => `+=${fadeElements.length * 200}`, // Pin until all elements have been faded in (based on number of elements)
        pin: true, // Pin the section
        scrub: true, // Smooth scrolling
        markers: false, // Turn off markers
    }
});

fadeElements.forEach((element, index) => {
    gsap.fromTo(element, {
        opacity: 0, // Start with invisible
    }, {
        opacity: 1, // Fade to visible
        duration: 0.5, // Duration of fade-in
        scrollTrigger: {
            trigger: element, // Trigger the animation when the element enters the viewport
            start: ".section3", // Start fading in when the element enters 80% of the viewport height
            scrub: true,
            toggleActions: "play none none reverse", // Play when entering the viewport, reverse when scrolling out
            markers: false, // Remove markers for production
            onEnter: () => {
                // When each element enters the viewport, prevent scrolling further if it's not the last one
                if (index === fadeElements.length - 1) {
                    // Last element fade in, allow scroll down
                    ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
                }
            }
        }
    });
});






gsap.registerPlugin(ScrollTrigger);



// Create a timeline for the animations
const fishTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".fish-container", // The section to trigger animations     
    start: "top 20%", // Start when the section hits the top of the viewport
    end: "+=1000", // Extend the scrollable area
    pin: ".section4", // Pin the section while animations play
    scrub: 1, // Smooth scrubbing
    markers: true, // Debug markers (remove in production)
  },
});

// Animate the head moving right
fishTimeline.to(".head", {
  x: 500, // Move right
  duration:2,
});

// Animate the tail moving left
fishTimeline.to(".tail", {
  x: -500, // Move left
  duration: 2,
}, "<"); // "<" means start this animation at the same time as the previous one

// Fade in the dead fish after head and tail animations
fishTimeline.to(".dead-fish", {
    opacity: 1, // Fade in after the head and tail start moving
    duration: 1, // Fade in duration
}, "<");



gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".f11 span",
    { opacity: 0, y: 20 }, // Initial state: invisible and offset
    {
        opacity: 1,
        y: 0, // Final state: fully visible and in position
        duration: 1.5, // Duration of each animation
        
        stagger: {
            each: 0.1, // Stagger each line's animation slightly
        },
        scrollTrigger: {
            trigger: ".section5", // Start animation when .f1 enters the viewport
            start: "top top", // Begin animation when .f1 is near the viewport
            end: "+=100%", // Keep pinned while the animation plays

            scrub: true, // Bind animation progress to scroll progress
        
        },
    }
);




gsap.registerPlugin(ScrollTrigger);


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
      scrub: true, 

    },
  });
}

// Funktionen beim Laden der Seite aufrufen
document.addEventListener("DOMContentLoaded", function () {
  setInitialBurgerPositions();
  animateBurgerOnScroll();
});
