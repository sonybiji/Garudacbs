document.addEventListener('DOMContentLoaded', function () {
    // Anime.js timeline for navigation links
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
    })
    .add({
        targets: 'nav u1 li',
        translateY: [-30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
    })
    .add({
        targets: '.btn',
        scale: [0, 1],
        opacity: [0, 1],
    });

    // Anime.js timeline for content animation
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
    })
    .add({
        targets: '.content h4',
        translateY: [-50, 0],
        opacity: [0, 1],
    })
    .add({
        targets: '.content h3',
        translateY: [-30, 0],
        opacity: [0, 1],
    });

    // Anime.js timeline for section animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000,
        })
        .add({
            targets: section,
            translateY: [-50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Anime.js timeline for navigation links
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
    })
    .add({
        targets: 'nav u1 li',
        translateY: [-30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
    })
    .add({
        targets: '.btn',
        scale: [0, 1],
        opacity: [0, 1],
    });

    // Anime.js timeline for content animation
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
    })
    .add({
        targets: '.content h4',
        translateY: [-50, 0],
        opacity: [0, 1],
    })
    .add({
        targets: '.content h3',
        translateY: [-30, 0],
        opacity: [0, 1],
    });

    // Function to handle scroll-triggered animations for sections
    function handleScrollAnimations() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (isInViewport(section)) {
                anime.timeline({
                    easing: 'easeOutExpo',
                    duration: 1000,
                })
                .add({
                    targets: section,
                    translateY: [-50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                });
            }
        });
    }

    // Initial check for scroll-triggered animations
    handleScrollAnimations();

    // Event listener for scroll
    window.addEventListener('scroll', function () {
        handleScrollAnimations();
    });
});
