// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Slider Interaction
let slider = document.querySelector('.service-slider');
let slides = document.querySelectorAll('.service-slide');
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 320}px)`;
}, 3000);

// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        item.querySelector('p').classList.toggle('hidden');
    });
});

// Stats Animation
const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats');
let statsStarted = false;

window.addEventListener('scroll', () => {
    const sectionTop = statsSection.getBoundingClientRect().top;
    if (!statsStarted && sectionTop < window.innerHeight) {
        stats.forEach(stat => {
            const target = +stat.dataset.target;
            let count = 0;
            const increment = Math.ceil(target / 100);

            const updateCounter = setInterval(() => {
                count += increment;
                if (count > target) {
                    count = target;
                    clearInterval(updateCounter);
                }
                stat.textContent = count;
            }, 30);
        });
        statsStarted = true;
    }
});
// Utilisation d'EmailJS pour envoyer le formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        document.getElementById('formMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        console.error('Error sending email:', error);
    });
});
// Carte interactive avec Leaflet.js
const map = L.map('mapid').setView([48.8566, 2.3522], 13); // Coordonnées de Paris par défaut

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.8566, 2.3522]).addTo(map) // Coordonnées de la localisation
    .bindPopup('Nous sommes ici!')
    .openPopup();
    const blogData = [
        { title: "L'importance de la cybersécurité", date: "2024-11-20", summary: "Pourquoi la cybersécurité est essentielle pour les entreprises." },
        { title: "Migrer vers le Cloud en toute sécurité", date: "2024-11-18", summary: "Les meilleures pratiques pour migrer vos données." },
        { title: "Optimiser la gestion des serveurs", date: "2024-11-15", summary: "Comment gérer efficacement vos serveurs pour réduire les coûts." }
    ];
    
    const blogContainer = document.getElementById('blogPosts');
    blogData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>${post.date}</strong></p>
            <p>${post.summary}</p>
        `;
        blogContainer.appendChild(postElement);
    });
    