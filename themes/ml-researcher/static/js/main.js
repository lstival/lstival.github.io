// ============================================
// ML Researcher Theme - Interactive Features
// ============================================

// ============================================
// Dark Mode Toggle
// ============================================
(function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
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
// Neural Network Background Animation
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
            ctx.fillStyle = getNodeColor();
            ctx.fill();
        }
    }

    // Get color based on theme
    function getNodeColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        return theme === 'dark'
            ? 'rgba(99, 102, 241, 0.6)'
            : 'rgba(99, 102, 241, 0.4)';
    }

    function getConnectionColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        return theme === 'dark'
            ? 'rgba(236, 72, 153, 0.3)'
            : 'rgba(236, 72, 153, 0.2)';
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
                    background: #6366f1;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.875rem;
                    font-weight: 500;
                    transition: all 0.2s ease;
                `;

                copyButton.addEventListener('mouseenter', function () {
                    this.style.background = '#4f46e5';
                    this.style.transform = 'translateY(-2px)';
                });

                copyButton.addEventListener('mouseleave', function () {
                    this.style.background = '#6366f1';
                    this.style.transform = 'translateY(0)';
                });

                copyButton.addEventListener('click', function () {
                    navigator.clipboard.writeText(text).then(() => {
                        const originalText = this.textContent;
                        this.textContent = '✅ Copied!';
                        this.style.background = '#14b8a6';

                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.background = '#6366f1';
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

console.log('🤖 ML Researcher Theme loaded! Built with Python & ML magic ✨');
