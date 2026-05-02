const destinations = [
    {
        id: 'kodagu',
        name: 'Kodagu',
        image: 'https://images.unsplash.com/photo-1694927908265-5e0d38690873?auto=format&fit=crop&q=100&w=3840',
        color: '#4C3BCF',
        famousPlaces: [
            {
                name: 'Abbey Falls',
                image: 'https://images.unsplash.com/photo-1584516150909-c4330b60eb3e?auto=format&fit=crop&q=100&w=3840',
                description: 'A stunning waterfall surrounded by lush greenery and coffee plantations.'
            },
            {
                name: 'Raja’s Seat',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=100&w=3840',
                description: 'A beautiful garden with a panoramic view of the hills and sunset.'
            },
            {
                name: 'Dubare Elephant Camp',
                image: 'https://images.unsplash.com/photo-1581791534721-e599df4408bc?auto=format&fit=crop&q=100&w=3840',
                description: 'Experience elephants up close in their natural habitat along the Kaveri river.'
            },
            {
                name: 'Talakaveri',
                image: 'https://images.unsplash.com/photo-1590480394626-821152686e18?auto=format&fit=crop&q=100&w=3840',
                description: 'The origin of the Kaveri river, located on the Brahmagiri hills.'
            }
        ]
    },
    {
        id: 'chikkamagaluru',
        name: 'Chikkamagaluru',
        image: 'https://media.istockphoto.com/id/1225793683/photo/mountain-gap-with-river-flowing-and-green-forests.jpg?s=612x612&w=is&k=20&c=0eyP2-c8U2zDgUTpIriIDhFPIT_UxrukgbJO4sT5XHQ=',
        color: '#2D9596',
        famousPlaces: [
            {
                name: 'Mullayanagiri Peak',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=100&w=3840',
                description: 'The highest peak in Karnataka, offering breathtaking panoramic views.'
            },
            {
                name: 'Baba Budangiri',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=100&w=3840',
                description: 'A sacred mountain range known for its unique trekking trails.'
            },
            {
                name: 'Hebbe Falls',
                image: 'https://images.unsplash.com/photo-1584516150909-c4330b60eb3e?auto=format&fit=crop&q=100&w=3840',
                description: 'A magnificent two-staged waterfall accessible via an adventurous jeep ride.'
            },
            {
                name: 'Coffee Plantations',
                image: 'https://images.unsplash.com/photo-1590480394626-821152686e18?auto=format&fit=crop&q=100&w=3840',
                description: 'Explore the sprawling coffee estates and learn about coffee processing.'
            }
        ]
    },
    {
        id: 'mangaluru',
        name: 'Mangaluru',
        image: 'assets/destinations/mangaluru_custom.png',
        color: '#FF6B6B',
        famousPlaces: [
            {
                name: 'Panambur Beach',
                image: 'https://images.unsplash.com/photo-1589136140230-26f5999081e6?auto=format&fit=crop&q=100&w=3840',
                description: 'A clean and popular beach known for its golden sands and water sports.'
            },
            {
                name: 'Tannirbhavi Beach',
                image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=100&w=3840',
                description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.'
            },
            {
                name: 'Kadri Temple',
                image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=100&w=3840',
                description: 'An ancient Hindu temple with unique architecture and historical significance.'
            },
            {
                name: 'St. Aloysius Chapel',
                image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=100&w=3840',
                description: 'Famous for its exquisite ceiling paintings that rival the Sistine Chapel.'
            }
        ]
    },
    {
        id: 'mysuru',
        name: 'Mysuru',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=100&w=3840',
        color: '#FFD93D',
        famousPlaces: [
            {
                name: 'Mysore Palace',
                image: 'https://images.unsplash.com/photo-1588665805566-22442468305c?auto=format&fit=crop&q=100&w=3840',
                description: 'One of the most magnificent palaces in India, a true architectural marvel.'
            },
            {
                name: 'Chamundi Hills',
                image: 'https://images.unsplash.com/photo-1590050752117-23a9d7f66d41?auto=format&fit=crop&q=100&w=3840',
                description: 'Home to the Chamundeshwari Temple with panoramic views of the city.'
            },
            {
                name: 'Brindavan Gardens',
                image: 'https://images.unsplash.com/photo-1621535497241-11883a9d949d?auto=format&fit=crop&q=100&w=3840',
                description: 'Beautifully landscaped gardens famous for their musical fountain shows.'
            },
            {
                name: 'Zoo',
                image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=100&w=3840',
                description: 'Sri Chamarajendra Zoological Gardens, one of the oldest and best in India.'
            }
        ]
    },
    {
        id: 'vijayanagara',
        name: 'Vijayanagara',
        image: 'https://images.unsplash.com/photo-1695981064066-9db6d8ebd6f2?auto=format&fit=crop&q=100&w=3840',
        color: '#F4A261',
        famousPlaces: [
            {
                name: 'Hampi Ruins',
                image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?auto=format&fit=crop&q=100&w=3840',
                description: 'A UNESCO World Heritage site featuring the remains of the Vijayanagara Empire.'
            },
            {
                name: 'Virupaksha Temple',
                image: 'https://images.unsplash.com/photo-1622325324523-86815302772a?auto=format&fit=crop&q=100&w=3840',
                description: 'An ancient and active temple dedicated to Lord Shiva, located in Hampi.'
            },
            {
                name: 'Stone Chariot',
                image: 'https://images.unsplash.com/photo-1622325324546-563b7e743a1a?auto=format&fit=crop&q=100&w=3840',
                description: 'The iconic symbol of Hampi, a chariot-shaped shrine carved from stone.'
            },
            {
                name: 'Lotus Mahal',
                image: 'https://images.unsplash.com/photo-1622325324599-4c1737e40742?auto=format&fit=crop&q=100&w=3840',
                description: 'A beautiful example of Indo-Islamic architecture with lotus-like arches.'
            }
        ]
    },
    {
        id: 'bangalore',
        name: 'Bangalore',
        image: 'https://plus.unsplash.com/premium_photo-1697729606469-027395aadb6f?auto=format&fit=crop&q=100&w=3840',
        color: '#8338EC',
        famousPlaces: [
            {
                name: 'Lalbagh Botanical Garden',
                image: 'https://images.unsplash.com/photo-1624385150247-4952093510f8?auto=format&fit=crop&q=100&w=3840',
                description: 'A historic garden with a massive glass house and diverse flora.'
            },
            {
                name: 'Bangalore Palace',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=100&w=3840',
                description: 'A royal palace inspired by Windsor Castle, known for its Tudor-style architecture.'
            },
            {
                name: 'ISKCON Temple',
                image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=100&w=3840',
                description: 'A massive cultural complex and temple dedicated to Krishna and Radha.'
            },
            {
                name: 'Cubbon Park',
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=100&w=3840',
                description: 'The lungs of the city, a sprawling green space with many historic buildings.'
            }
        ]
    }
];

console.log("Scripts initializing...");
const app = document.getElementById('app');

function renderHome() {
    const homeHTML = `
        <div class="page-content">
            <section class="hero">
                <div class="badge">
                    <img src="https://api.iconify.design/material-symbols:location-on.svg?color=%238338EC" alt="Loc">
                    Explore the best of Karnataka
                </div>
                <h1>Where do<br>you want to go?</h1>
                <p>Choose your perfect destination and create beautiful memories.</p>
            </section>

            <div class="destinations-row">
                ${destinations.map(dest => `
                    <div class="dest-card" data-id="${dest.id}">
                        <img src="${dest.image}" alt="${dest.name}">
                        <div class="dest-card-overlay">
                            <h3>${dest.name}</h3>
                        </div>
                        <div class="arrow-btn">
                            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = homeHTML;

    // Add click listeners to cards
    document.querySelectorAll('.dest-card').forEach(card => {
        card.addEventListener('click', () => {
            const destId = card.getAttribute('data-id');
            renderDestination(destId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function renderDestination(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    const destHTML = `
        <div class="page-content">
            <header class="dest-header">
                <a href="#" class="back-btn" id="back-home">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Back to Home
                </a>
                <h1>Famous Places in <span>${dest.name}</span></h1>
                <p>Explore the natural beauty and serene landscapes of ${dest.name}.</p>
            </header>

            <div class="places-grid">
                ${dest.famousPlaces.map(place => `
                    <div class="place-card">
                        <div class="place-img">
                            <img src="${place.image}" alt="${place.name}">
                        </div>
                        <div class="place-info">
                            <h3>${place.name}</h3>
                            <p>${place.description}</p>
                            <a href="#" class="explore-link">Explore →</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = destHTML;

    // Add back button listener
    document.getElementById('back-home').addEventListener('click', (e) => {
        e.preventDefault();
        renderHome();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initial render
renderHome();
