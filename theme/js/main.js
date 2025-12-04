// ============================================
// Christmas Theme - ML Researcher
// ============================================

// ============================================
// Falling Snow Animation
// ============================================
(function () {
    // Create snow container
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    document.body.appendChild(snowContainer);

    // Snowflake characters
    const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉'];

    // Create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];

        // Random position
        snowflake.style.left = Math.random() * 100 + '%';

        // Random size
        const size = Math.random() * 0.5 + 0.5;
        snowflake.style.fontSize = size + 'em';

        // Random animation duration (slower = more realistic)
        const duration = Math.random() * 10 + 10;
        snowflake.style.animationDuration = duration + 's';

        // Random delay
        snowflake.style.animationDelay = Math.random() * 5 + 's';

        // Random opacity
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;

        snowContainer.appendChild(snowflake);

        // Remove snowflake after animation
        setTimeout(() => {
            snowflake.remove();
        }, (duration + 5) * 1000);
    }

    // Create initial snowflakes
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }

    // Continuously create new snowflakes
    setInterval(createSnowflake, 300);
})();

// ============================================
// Christmas Lights Animation
// ============================================
(function () {
    const lightsContainer = document.createElement('div');
    lightsContainer.id = 'christmas-lights';
    document.body.appendChild(lightsContainer);

    // Create lights
    for (let i = 0; i < 30; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        lightsContainer.appendChild(light);
    }
})();

// ============================================
// Dark Mode Toggle
// ============================================
(function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    // Check for saved theme preference or default to DARK mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', function () {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
})();

// ============================================
// Neural Network Background Animation (Christmas themed)
// ============================================
(function () {
    const canvas = document.getElementById('neural-bg');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            // Christmas colors
            this.colorIndex = Math.floor(Math.random() * 3);
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = getNodeColor(this.colorIndex);
            ctx.fill();
        }
    }

    // Get color based on theme and index
    function getNodeColor(index) {
        const theme = document.documentElement.getAttribute('data-theme');
        const colors = theme === 'dark'
            ? ['rgba(196, 30, 58, 0.6)', 'rgba(45, 110, 45, 0.6)', 'rgba(212, 175, 55, 0.6)']
            : ['rgba(196, 30, 58, 0.4)', 'rgba(45, 110, 45, 0.4)', 'rgba(212, 175, 55, 0.4)'];
        return colors[index];
    }

    function getConnectionColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        return theme === 'dark'
            ? 'rgba(212, 175, 55, 0.3)'
            : 'rgba(212, 175, 55, 0.2)';
    }

    // Create nodes
    const nodeCount = Math.min(50, Math.floor(canvas.width * canvas.height / 15000));
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }

    // Draw connections between nearby nodes
    function drawConnections() {
        const maxDistance = 150;

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = getConnectionColor();
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        // Draw connections
        drawConnections();

        requestAnimationFrame(animate);
    }

    animate();
})();

// ============================================
// Copy BibTeX to Clipboard
// ============================================
(function () {
    // Add copy buttons to BibTeX code blocks
    document.addEventListener('DOMContentLoaded', function () {
        const bibtexBlocks = document.querySelectorAll('pre code');

        bibtexBlocks.forEach(block => {
            const text = block.textContent;

            // Check if it's a BibTeX block
            if (text.includes('@article') || text.includes('@inproceedings') || text.includes('@book')) {
                const pre = block.parentElement;
                const wrapper = document.createElement('div');
                wrapper.style.position = 'relative';

                const copyButton = document.createElement('button');
                copyButton.textContent = '📋 Copy BibTeX';
                copyButton.className = 'copy-bibtex-btn';
                copyButton.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    padding: 6px 12px;
                    background: #c41e3a;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.875rem;
                    font-weight: 500;
                    transition: all 0.2s ease;
                `;

                copyButton.addEventListener('mouseenter', function () {
                    this.style.background = '#a01729';
                    this.style.transform = 'translateY(-2px)';
                });

                copyButton.addEventListener('mouseleave', function () {
                    this.style.background = '#c41e3a';
                    this.style.transform = 'translateY(0)';
                });

                copyButton.addEventListener('click', function () {
                    navigator.clipboard.writeText(text).then(() => {
                        const originalText = this.textContent;
                        this.textContent = '✅ Copied!';
                        this.style.background = '#2d6e2d';

                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.background = '#c41e3a';
                        }, 2000);
                    });
                });

                pre.parentNode.insertBefore(wrapper, pre);
                wrapper.appendChild(pre);
                wrapper.appendChild(copyButton);
            }
        });
    });
})();

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
})();

// ============================================
// Add Hover Effects to Links
// ============================================
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.page-body a');

        links.forEach(link => {
            // Skip if it's already styled (like profile links)
            if (!link.classList.contains('profile-link')) {
                link.addEventListener('mouseenter', function () {
                    this.style.textDecoration = 'underline';
                });

                link.addEventListener('mouseleave', function () {
                    this.style.textDecoration = 'none';
                });
            }
        });
    });
})();

// ============================================
// Animate Elements on Scroll (Optional)
// ============================================
(function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', function () {
        const animatedElements = document.querySelectorAll('.page-content, .profile-section');

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    });
})();

// ============================================
// Profile Image Toggle
// ============================================
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const profileToggle = document.getElementById('profile-toggle');
        const profileImg = document.getElementById('profile-img');
        const profileEmoji = document.getElementById('profile-emoji');

        if (profileToggle && profileImg && profileEmoji) {
            let showingImage = true;

            profileToggle.addEventListener('click', function () {
                if (showingImage) {
                    profileImg.style.display = 'none';
                    profileEmoji.style.display = 'flex';
                } else {
                    profileImg.style.display = 'block';
                    profileEmoji.style.display = 'none';
                }
                showingImage = !showingImage;
            });

            // Add cursor pointer to indicate clickability
            profileToggle.style.cursor = 'pointer';
        }
    });
})();

console.log('🎄 Christmas Theme loaded! Happy Holidays! ✨❄️');
