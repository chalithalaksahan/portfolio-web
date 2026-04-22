console.log("js loaded");
AOS.init();

 // Initialize AOS animations
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // Back to top functionality
        window.onscroll = function() {
            var backToTopBtn = document.getElementById("backToTop");
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- Dark Mode Logic ---
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const htmlElement = document.documentElement;

        // Check local storage for saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            htmlElement.setAttribute('data-bs-theme', savedTheme);
            updateIcon(savedTheme);
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        function updateIcon(theme) {
            if (theme === 'dark') {
                themeIcon.classList.remove('bi-moon-stars-fill');
                themeIcon.classList.add('bi-sun-fill');
                themeToggle.classList.add('text-warning');
            } else {
                themeIcon.classList.remove('bi-sun-fill');
                themeIcon.classList.add('bi-moon-stars-fill');
                themeToggle.classList.remove('text-warning');
            }
        }
        
        // Ensure you have initialized particles.js in your app.js or place config here.
        // Example fallback if app.js is missing:
        if(window.particlesJS) {
            particlesJS("particles-js", {
                "particles": {
                    "number": {"value": 40, "density": {"enable": true, "value_area": 800}},
                    "color": {"value": "#667eea"},
                    "shape": {"type": "circle"},
                    "opacity": {"value": 0.3, "random": false},
                    "size": {"value": 3, "random": true},
                    "line_linked": {"enable": true, "distance": 150, "color": "#667eea", "opacity": 0.2, "width": 1},
                    "move": {"enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false}
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {"enable": true, "mode": "grab"},
                        "onclick": {"enable": true, "mode": "push"},
                        "resize": true
                    }
                },
                "retina_detect": true
            });
        }