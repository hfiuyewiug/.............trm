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
                image: 'https://image3.mouthshut.com/images/imagesp/925753479s.jpg',
                description: 'A clean and popular beach known for its golden sands and water sports.'
            },
            {
                name: 'Tannirbhavi Beach',
                image: 'https://www.hlimg.com/images/things2do/738X538/28mn_mnrmm1_Bea_29_2176132g_1508082724t.jpg',
                description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.'
            },
            {
                name: 'Kadri Temple',
                image: 'https://mangaloretourism.in/images/v2/places-to-visit/kadri-manjunath-temple-mangalore-tourism-header.jpg',
                description: 'An ancient Hindu temple with unique architecture and historical significance.'
            },
            {
                name: 'St. Aloysius Chapel',
                image: 'https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg',
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

const mangaloreCategories = [
    { id: 'beaches', name: 'Beaches', desc: 'Explore famous beaches →', image: 'https://image3.mouthshut.com/images/imagesp/925753479s.jpg' },
    { id: 'temples', name: 'Temples', desc: 'Explore famous temples →', image: 'https://mangaloretourism.in/images/v2/places-to-visit/kadri-manjunath-temple-mangalore-tourism-header.jpg' },
    { id: 'malls', name: 'Malls', desc: 'Explore shopping malls →', image: 'https://i.ytimg.com/vi/5hSQ865UkQA/maxresdefault.jpg' },
    { id: 'trekking', name: 'Trekking Places', desc: 'Explore trekking spots →', image: 'https://vl-prod-static.b-cdn.net/system/images/000/277/222/8a9f6cab8057c115cd3b9dc620b8a9f7/banner/bmcermayi.jpg?1550889416' },
    { id: 'churches', name: 'Famous Churches', desc: 'Explore famous churches →', image: 'https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg' },
    { id: 'coming_soon_1', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_2', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_3', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true }
];

const mangaloreCategoryData = {
    'beaches': {
        name: 'Mangalore Beaches',
        places: [
            { name: 'Panambur Beach', image: 'https://image3.mouthshut.com/images/imagesp/925753479s.jpg', description: 'A clean and popular beach known for its golden sands and water sports.' },
            { name: 'Tannirbhavi Beach', image: 'https://www.hlimg.com/images/things2do/738X538/28mn_mnrmm1_Bea_29_2176132g_1508082724t.jpg', description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.' },
            { name: 'Someshwara Beach', image: 'https://visitmangalore.in/_next/image?url=https:%2F%2Fapi.visitmangalore.in%2Fuploads%2F5_a_SOMESHWARA_BEACH_9e97b6ef87.jpg&w=1920&q=75', description: 'Famous for the Rudra Shile (huge rocks) and the ancient Someshwara Temple.' },
            { name: 'Surathkal Beach', image: 'https://www.mustvisitplace.com/wp-content/uploads/2019/03/Surathkal-beach-3-768x648.jpg', description: 'A serene beach known for its lighthouse that offers a spectacular view.' },
            { name: 'Sasihithlu Beach', image: 'https://im.whatshot.in/img/2021/Sep/sasihitlu-beach-is-1-analava-majumdar-fb-cropped1-1632472656.jpg', description: 'A pristine and scenic beach where the river meets the Arabian Sea, popular for surfing.' },
            { name: 'Ullal Beach', image: 'https://www.mangaloretaxi.com/wp-content/uploads/Ullal-Beach6.jpg', description: 'A tranquil beach offering spectacular sunset views and a peaceful environment.' },
            { name: 'Bengre Beach', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=100&w=3840', description: 'A picturesque coastal stretch where the river meets the Arabian Sea, offering breathtaking sunsets.' },
            { name: 'Talapady Beach', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=100&w=3840', description: 'A serene and less crowded beach ideal for relaxing walks along the shoreline.' },
            { name: 'Batapady Beach', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&q=100&w=3840', description: 'A hidden gem offering a calm environment and pristine beauty, perfect for a peaceful getaway.' },
            { name: 'Mukka Beach', image: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&q=100&w=3840', description: 'Known for its golden sands and the nearby NITK lighthouse, offering a panoramic view of the sea.' },
            { name: 'Kodical Beach', image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=100&w=3840', description: 'A beautiful coastline with a mix of sandy stretches and rocky shores, perfect for an evening stroll.' },
            { name: 'Chitrapura Beach', image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=100&w=3840', description: 'A quiet and peaceful beach, perfect for long walks and enjoying the serene coastal breeze.' },
            { name: 'Mulki Beach', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=100&w=3840', description: 'A popular destination for water sports enthusiasts, especially known for surfing and kayaking.' },
            { name: 'Hosabettu Beach', image: 'https://images.unsplash.com/photo-1495954222046-2c427ecb546d?auto=format&fit=crop&q=100&w=3840', description: 'A beautiful hidden coastal gem that offers a pristine environment away from the city crowd.' }
        ]
    },
    'temples': {
        name: 'Mangalore Temples',
        places: [
            { name: 'Swami Koragajja Temple', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/53/e7/55/adhisthala-swami-koragajja.jpg?w=1200&h=-1&s=1', description: 'A highly revered sacred shrine dedicated to Swami Koragajja, drawing countless devotees seeking blessings.' },
            { name: 'Kadri Manjunath Temple', image: 'https://mangaloretourism.in/images/v2/places-to-visit/kadri-manjunath-temple-mangalore-tourism-header.jpg', description: 'An ancient Hindu temple with unique architecture and historical significance.' },
            { name: 'Kudroli Gokarnath Temple', image: 'https://imvoyager.com/wp-content/uploads/2021/04/Kudroli-Temple-Mangalore-Kudroli-Gokarnanatha-Temple-Gokarnanatheshwara-Temple--640x437.png', description: 'A beautiful temple known for its magnificent Dasara celebrations.' },
            { name: 'Mangaladevi Temple', image: 'https://www.thetravelmagazine.net/wp-content/uploads/Mangaladevi-Temple-Sunset.jpg', description: 'The ancient temple after which the city of Mangalore is named.' },
            { name: 'Polali Rajarajeshwari Temple', image: 'https://tempotravellermangalore.in/uploads/image/tour-packages/pilgrimage-places-in-mangalore/polali-rajarajeshwari-temple.jpg', description: 'Famous for its wooden idols and the historic Polali Chendu festival.' },
            { name: 'Kateel Temple', image: 'https://temple.yatradham.org/public/Product/temple/temple_qID0YQIM_202505071643410.webp', description: 'A prominent Hindu temple dedicated to Goddess Durgaparameshwari, located on an islet in the Nandini River.' },
            { name: 'Someshwara Temple', image: 'https://i.ytimg.com/vi/onFyh3-6LOs/maxresdefault.jpg', description: 'An ancient Shiva temple situated by the sea, known for its historic architecture and beautiful surroundings.' },
            { name: 'Urwa Marigudi Temple', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=100&w=3840', description: 'A highly revered temple dedicated to Goddess Mariamman, famous for its grand Mangaluru Dasara celebrations.' },
            { name: '🌺 Bappanadu Durgaparameshwari Temple', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Bappanadu_temple_drum.jpg', description: 'A historical temple known for its communal harmony and the annual Bappanadu Dolu festival.' },
            { name: 'Karinjeshwara Hill Temple', image: 'https://i.ytimg.com/vi/FQ494-dBaWk/maxresdefault.jpg', description: 'A majestic temple perched on a cliff edge, offering a serene spiritual experience and panoramic views.' }
        ]
    },
    'malls': {
        name: 'Mangalore Malls',
        places: [
            { name: 'City Centre Mall', image: 'https://i.ytimg.com/vi/5hSQ865UkQA/maxresdefault.jpg', description: 'One of the largest malls in Mangalore with great shopping, dining, and multiplex.' },
            { name: 'Forum Fiza Mall', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0b/50/07/central-atrium-of-the.jpg', description: 'A premium shopping destination offering global brands and entertainment options.' },
            { name: 'Bharath Mall', image: 'https://content.jdmagicbox.com/comp/mangalore/54/0824p824std2004954/catalogue/bharath-mall-bejai-mangalore-malls-z1qvkl4h1d.jpg', description: 'One of the first modern malls in the city, popular among locals.' },
            { name: 'Lotus Mall (Upcoming)', image: 'https://1.bp.blogspot.com/-ukW_y6j0NO4/UAj7Xco44hI/AAAAAAAALMw/dFO_pcSzgjU/s1600/2s8obah.jpg', description: 'An upcoming mega mall promising a world-class shopping experience.' }
        ]
    },
    'trekking': {
        name: 'Mangalore Trekking Places',
        places: [
            { name: 'Jamalabad Fort', image: 'https://visitmangalore.in/_next/image?url=https:%2F%2Fapi.visitmangalore.in%2Fuploads%2Fgadey_kalu_ed7e47ceb6.jpg&w=1920&q=75', description: 'A challenging trek to a historic hilltop fort with stunning 360-degree views.' },
            { name: 'Ermayi Falls Trek', image: 'https://vl-prod-static.b-cdn.net/system/images/000/277/222/8a9f6cab8057c115cd3b9dc620b8a9f7/banner/bmcermayi.jpg?1550889416', description: 'A scenic trek through lush forests leading to a multi-tiered waterfall.' },
            { name: 'Karinchieshwara Trek', image: 'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_518,q_auto,w_660/v1705557186/bbj/m1wifaroojflvk5woe3g.jpg', description: 'A steep trek blending nature and spirituality, ending at an ancient cliffside temple.' },
            { name: 'Gadaikallu', image: 'https://i.pinimg.com/originals/ce/6f/61/ce6f61f2917fb5e4712fc7c7c663311c.jpg', description: 'A prominent rock formation offering an adventurous climb and beautiful vistas.' }
        ]
    },
    'churches': {
        name: 'Famous Churches',
        places: [
            { name: 'St. Aloysius Chapel', image: 'https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg', description: 'Famous for its exquisite ceiling paintings that rival the Sistine Chapel.' },
            { name: 'Milagres Church', image: 'https://www.shatravelsmts.com/uploads/image/tour-packages/11-best-places-to-visit-in-mangalore/milagres-church.jpg', description: 'A historic Roman Catholic church in the heart of Mangalore with rich heritage.' },
            { name: 'Rosario Cathedral', image: 'https://th-i.thgim.com/public/news/national/karnataka/p052cm/article25479880.ece/alternates/LANDSCAPE_1200/13BG-CATHEDRAL', description: 'The oldest church in Mangalore featuring a stunning dome and beautiful architecture.' },
            { name: 'Infant Jesus Shrine', image: 'https://www.infantjesusmangalore.net/images/shrine1.jpg', description: 'A popular pilgrimage site known for its modern architecture and peaceful ambiance.' }
        ]
    }
};

function renderCategoryPage(categoryId) {
    const category = mangaloreCategoryData[categoryId];
    if (!category) return;

    const destHTML = `
        <div class="page-content">
            <header class="dest-header">
                <div class="dest-header-row" style="margin-bottom: 2rem;">
                    <a href="#" class="back-btn" id="back-to-mangaluru" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to Mangaluru
                    </a>
                    <button class="must-watch-btn" id="must-watch-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 2px;"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        Must Watching <span class="hide-mobile">Places</span>
                    </button>
                </div>
                <h1>${category.name}</h1>
                <p>Discover the best ${category.name.toLowerCase()} and plan your visit.</p>
            </header>

            <div class="places-grid">
                ${category.places.map(place => `
                    <div class="place-card">
                        <div class="place-img">
                            <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" ${place.name.includes('Upcoming') ? 'style="filter: blur(4px);"' : ''}>
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

    document.getElementById('back-to-mangaluru').addEventListener('click', (e) => {
        e.preventDefault();
        renderDestination('mangaluru');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('must-watch-btn').addEventListener('click', (e) => {
        e.preventDefault();
        openMustWatchModal(category);
    });
}

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
                        <img src="${dest.image}" alt="${dest.name}" loading="lazy" decoding="async">
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
        <div class="page-content" style="position: relative;">
            <header class="dest-header dest-header-flex">
                <div class="dest-header-row">
                    <a href="#" class="back-btn" id="back-home" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to Home
                    </a>
                    ${dest.id === 'mangaluru' ? `
                    <button class="must-watch-btn" id="mangaluru-must-watch-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 2px;"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        Must Watching <span class="hide-mobile">Places</span>
                    </button>
                    ` : ''}
                </div>
                
                ${dest.id === 'mangaluru' ? `
                <div class="category-card famous-food-header-card" data-cat-id="food">
                    <div class="category-img swiper food-swiper" style="will-change: transform; perspective: 1000px; width: 100%; height: 100%;">
                        <div class="swiper-wrapper">
                            ${[
                                { img: 'https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg', name: 'Chicken Kori Rotti' },
                                { img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', name: 'Fish Fry' },
                                { img: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg', name: 'Mangalore Bun' },
                                { img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', name: 'Ghee Roast' }
                            ].map(item => `
                                <div class="swiper-slide" style="position: relative;">
                                    <img src="${item.img}" alt="${item.name}" loading="lazy" decoding="async">
                                    <div style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); color: #fff; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.2);">
                                        ${item.name}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="category-overlay">
                        <h3 style="margin:0; font-size: 1.2rem;">Famous Food</h3>
                        <p style="margin:0; font-size: 0.9rem;">Chicken Kori Rotti, Fish Fry, Mangalore Bun & More</p>
                    </div>
                </div>
                ` : ''}
                ${dest.id !== 'mangaluru' ? `
                <div style="width: 100%; text-align: center;">
                    <h1>Famous Places in <span>${dest.name}</span></h1>
                    <p>Explore the natural beauty and serene landscapes of ${dest.name}.</p>
                </div>
                ` : ''}
            </header>

            ${dest.id !== 'mangaluru' ? `
            <div class="places-grid">
                ${dest.famousPlaces.map(place => `
                    <div class="place-card">
                        <div class="place-img">
                            <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async">
                        </div>
                        <div class="place-info">
                            <h3>${place.name}</h3>
                            <p>${place.description}</p>
                            <a href="#" class="explore-link">Explore →</a>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : ''}

            ${dest.id === 'mangaluru' ? `
                <div class="categories-section">
                    <h2 class="section-title">Mangalore Categories</h2>
                    <div class="category-grid">
                        ${mangaloreCategories.map(cat => `
                            <div class="category-card ${cat.empty ? 'empty-card' : ''}" data-cat-id="${cat.id}">
                                <div class="category-img">
                                    <img src="${cat.image}" alt="${cat.name}" loading="lazy" decoding="async">
                                </div>
                                <div class="category-overlay">
                                    <h3>${cat.name}</h3>
                                    ${cat.desc ? `<p>${cat.desc}</p>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    app.innerHTML = destHTML;

    // Add back button listener
    document.getElementById('back-home').addEventListener('click', (e) => {
        e.preventDefault();
        renderHome();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initialize Swiper for Famous Food if we are in Mangaluru page
    if (dest.id === 'mangaluru' && typeof Swiper !== 'undefined') {
        new Swiper('.food-swiper', {
            loop: true,
            speed: 1200, // smooth cinematic transition
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            effect: 'slide',
            grabCursor: true,
            touchRatio: 1.2, // easier swipe
            resistanceRatio: 0.8,
        });
    }

    // Add Mangaluru Must Watch button listener if present
    const mustWatchBtn = document.getElementById('mangaluru-must-watch-btn');
    if (mustWatchBtn) {
        mustWatchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openMangaluruMustWatchModal();
        });
    }

    // Add category click listeners if any
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const catId = card.getAttribute('data-cat-id');
            if (catId && !catId.startsWith('coming_soon')) {
                renderCategoryPage(catId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// Initial render
renderHome();

function openMustWatchModal(category) {
    // Remove existing modal if any
    const existing = document.getElementById('must-watch-modal-overlay');
    if (existing) existing.remove();

    // 1. Add and Activate dynamic premium loader overlay
    let loader = document.getElementById('must-watch-loader-overlay');
    if (!loader) {
        const loaderHTML = `
            <div class="must-watch-loader-overlay" id="must-watch-loader-overlay">
                <div class="must-watch-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
        loader = document.getElementById('must-watch-loader-overlay');
    }

    loader.classList.add('active');

    // Select top 3 places as the "Must Watching Places"
    const topPlaces = category.places.slice(0, 3);
    
    // Helper to get static location and rating
    const getLocation = (placeName) => {
        if (category.name.includes("Beaches")) return "Coastal Hwy, Mangalore";
        if (category.name.includes("Temples")) return "Temple Square, Mangalore";
        if (category.name.includes("Malls")) return "City Centre, Mangalore";
        if (category.name.includes("Trekking")) return "Ghats Region, Mangalore";
        return "Heritage Block, Mangalore";
    };

    const getRating = (index) => {
        return (4.9 - (index * 0.1)).toFixed(1);
    };

    const modalHTML = `
        <div class="must-watch-modal-overlay" id="must-watch-modal-overlay">
            <div class="must-watch-modal">
                <header class="must-watch-modal-header">
                    <h2>⭐ Top Must Watching ${category.name}</h2>
                    <button class="must-watch-close-btn" id="must-watch-close-btn" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                
                <div class="swiper must-watch-swiper">
                    <div class="swiper-wrapper">
                        ${topPlaces.map((place, idx) => `
                            <div class="swiper-slide">
                                <div class="must-watch-card">
                                    <div class="must-watch-card-img">
                                        <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async">
                                        <div class="must-watch-badges">
                                            <span class="must-watch-badge rating">★ ${getRating(idx)}</span>
                                            <span class="must-watch-badge">Must Visit</span>
                                        </div>
                                    </div>
                                    <div class="must-watch-card-info">
                                        <h3>${place.name}</h3>
                                        <div class="location-row">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="12" r="3"/></svg>
                                            <span>${getLocation(place.name)}</span>
                                        </div>
                                        <p>${place.description}</p>
                                        <button class="must-watch-explore-btn">
                                            Explore More
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <!-- Add Pagination & Nav arrows -->
                    <div class="swiper-pagination must-watch-pagination"></div>
                    <div class="swiper-button-next must-watch-next"></div>
                    <div class="swiper-button-prev must-watch-prev"></div>
                </div>
            </div>
        </div>
    `;

    // 2. Simulate dynamique loading before showing modal
    setTimeout(() => {
        loader.classList.remove('active');
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const overlay = document.getElementById('must-watch-modal-overlay');
        const closeBtn = document.getElementById('must-watch-close-btn');

        // Smooth entry with elastic cubic-bezier overshoot
        setTimeout(() => {
            overlay.classList.add('active');
        }, 30);

        // Initialize swiper inside the modal
        if (typeof Swiper !== 'undefined') {
            new Swiper('.must-watch-swiper', {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                effect: 'slide',
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.must-watch-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.must-watch-next',
                    prevEl: '.must-watch-prev',
                },
            });
        }

        const closeModal = () => {
            overlay.classList.remove('active');
            // Wait for transition to complete before removing from DOM
            setTimeout(() => {
                overlay.remove();
            }, 600);
        };

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        // Close on ESC keypress
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

    }, 600); // 600ms loading effect
}

function openMangaluruMustWatchModal() {
    // Remove existing modal if any
    const existing = document.getElementById('mangaluru-must-watch-modal-overlay');
    if (existing) existing.remove();

    // 1. Add and Activate dynamic premium loader overlay
    let loader = document.getElementById('must-watch-loader-overlay');
    if (!loader) {
        const loaderHTML = `
            <div class="must-watch-loader-overlay" id="must-watch-loader-overlay">
                <div class="must-watch-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
        loader = document.getElementById('must-watch-loader-overlay');
    }

    loader.classList.add('active');

    const top6Places = [
        {
            name: 'Kadri Manjunath Temple',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800&fm=webp',
            rating: '4.8',
            location: 'Kadri Temple Road, Mangalore',
            bestTime: '🛕 Morning Darshan: 8:00 AM',
            description: 'An ancient Hindu temple dating back to the 10th century, famous for its bronze statue of Lokeshvara and natural spring ponds.'
        },
        {
            name: 'Ocean Pearl Hotel / Ideal Café',
            image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800&fm=webp',
            rating: '4.7',
            location: 'Kodialbail, Mangalore',
            bestTime: '🍽️ Lunch Timings: 1:30 PM',
            description: 'Famous for modern luxury stay and mouthwatering Mangalorean street food, particularly the iconic Ideal ice creams.'
        },
        {
            name: 'Sultan Battery',
            image: 'https://images.unsplash.com/photo-1590050752117-23a9d7f66d41?auto=format&fit=crop&q=80&w=800&fm=webp',
            rating: '4.6',
            location: 'Boloor, Mangalore',
            bestTime: '🕒 Afternoon Breeze: 3:30 PM',
            description: 'A watchtower built by Tipu Sultan in 1784, constructed of black stone to prevent warship intrusions via the Gurupura River.'
        },
        {
            name: 'Panambur Beach',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&fm=webp',
            rating: '4.9',
            location: 'Coastal Hwy, Mangalore',
            bestTime: '🌅 Evening View: 5:00 PM',
            description: 'A clean and popular beach known for its golden sands, gorgeous sunsets, and thrilling water sports.'
        },
        {
            name: 'Gokarnanatheshwara Temple',
            image: 'https://images.unsplash.com/photo-1602631985686-2bb0686a6a5a?auto=format&fit=crop&q=80&w=800&fm=webp',
            rating: '4.8',
            location: 'Kudroli, Mangalore',
            bestTime: '🛕 Evening Lights: 6:30 PM',
            description: 'Also known as Kudroli Temple, this magnificent structure is dedicated to Lord Gokarnanatha and features a stunning golden Gopuram.'
        },
        {
            name: 'Swami Koragajja Temple',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/53/e7/55/adhisthala-swami-koragajja.jpg?w=1200&h=-1&s=1',
            rating: '4.9',
            location: 'Kuthar, Mangalore',
            bestTime: '🛕 Holy Darshan: 7:00 PM',
            description: 'A highly revered and powerful sacred shrine dedicated to Swami Koragajja, drawing massive crowds of faithful devotees seeking direct blessings.'
        }
    ];

    const modalHTML = `
        <div class="must-watch-modal-overlay" id="mangaluru-must-watch-modal-overlay">
            <div class="must-watch-modal" style="max-width: 1100px;">
                <header class="must-watch-modal-header">
                    <h2>🌍 Mangalore Must Watching Places</h2>
                    <button class="must-watch-close-btn" id="mangaluru-must-watch-close-btn" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                
                <div class="mangaluru-modal-grid">
                    <!-- Left Pane: Swiper Slider -->
                    <div class="mangaluru-carousel-pane">
                        <div class="swiper must-watch-swiper mangaluru-must-watch-swiper">
                            <div class="swiper-wrapper">
                                ${top6Places.map((place, idx) => `
                                    <div class="swiper-slide">
                                        <div class="must-watch-card" style="max-width: 100%;">
                                            <div class="must-watch-card-img">
                                                <img src="${place.image}" alt="${place.name}" decoding="async">
                                                <div class="must-watch-badges">
                                                    <span class="must-watch-badge rating">★ ${place.rating}</span>
                                                    <span class="must-watch-badge" style="background: rgba(131, 56, 236, 0.9); font-weight: 700; border: none; box-shadow: 0 4px 10px rgba(131,56,236,0.3);">${place.bestTime}</span>
                                                </div>
                                            </div>
                                            <div class="must-watch-card-info">
                                                <h3>${place.name}</h3>
                                                <div class="location-row">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="12" r="3"/></svg>
                                                    <span>${place.location}</span>
                                                </div>
                                                <p>${place.description}</p>
                                                <button class="must-watch-explore-btn">
                                                    Explore More
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <!-- Swiper navigation & bullets -->
                            <div class="swiper-pagination must-watch-pagination"></div>
                            <div class="swiper-button-next must-watch-next"></div>
                            <div class="swiper-button-prev must-watch-prev"></div>
                        </div>
                    </div>
                    
                    <!-- Right Pane: Interactive Route Planner -->
                    <div class="mangaluru-route-pane">
                        <h3>📍 Interactive Route Planner</h3>
                        <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1.5rem;">Click nodes or detours to dynamically control the view map.</p>
                        
                        <div class="mangaluru-route-map">
                            <div class="route-line-animated"></div>
                            
                            <!-- Node 1 -->
                            <div class="route-node active" data-index="0">
                                <div class="node-dot">1</div>
                                <div class="node-content">
                                    <h4>Kadri Manjunath Temple</h4>
                                    <span class="node-best-time">🛕 Morning Darshan: 8:00 AM</span>
                                    <span class="route-detour-btn" id="gokarna-detour-btn">⚡ Detour to Gokarnanatheshwara Temple (5 KM)</span>
                                </div>
                            </div>
                            
                            <div class="route-distance-label">
                                <span class="dist-pill">🛣️ 3 KM</span>
                                <span class="time-pills">🚗 8m | 🏍️ 6m</span>
                            </div>
                            
                            <!-- Node 2 -->
                            <div class="route-node" data-index="1">
                                <div class="node-dot">2</div>
                                <div class="node-content">
                                    <h4>Ocean Pearl Hotel / Ideal Café</h4>
                                    <span class="node-best-time">🍽️ Lunch Timings: 1:30 PM</span>
                                </div>
                            </div>
                            
                            <div class="route-distance-label">
                                <span class="dist-pill">🛣️ 6 KM</span>
                                <span class="time-pills">🚗 10m | 🏍️ 9m</span>
                            </div>
                            
                            <!-- Node 3 -->
                            <div class="route-node" data-index="2">
                                <div class="node-dot">3</div>
                                <div class="node-content">
                                    <h4>Sultan Battery</h4>
                                    <span class="node-best-time">🕒 Afternoon Breeze: 3:30 PM</span>
                                </div>
                            </div>
                            
                            <div class="route-distance-label">
                                <span class="dist-pill">🛣️ 10 KM</span>
                                <span class="time-pills">🚗 18m | 🏍️ 15m</span>
                            </div>
                            
                            <!-- Node 4 -->
                            <div class="route-node" data-index="3">
                                <div class="node-dot">4</div>
                                <div class="node-content">
                                    <h4>Panambur Beach</h4>
                                    <span class="node-best-time">🌅 Evening View: 5:00 PM</span>
                                </div>
                            </div>
                            
                            <div class="route-distance-label">
                                <span class="dist-pill">🛣️ 9 KM</span>
                                <span class="time-pills">🚗 18m | 🏍️ 15m</span>
                            </div>
                            
                            <!-- Node 5 -->
                            <div class="route-node" data-index="4">
                                <div class="node-dot">5</div>
                                <div class="node-content">
                                    <h4>Gokarnanatheshwara Temple</h4>
                                    <span class="node-best-time">🛕 Evening Lights: 6:30 PM</span>
                                </div>
                            </div>
                            
                            <div class="route-distance-label">
                                <span class="dist-pill">🛣️ 8 KM</span>
                                <span class="time-pills">🚗 15m | 🏍️ 12m</span>
                            </div>
                            
                            <!-- Node 6 -->
                            <div class="route-node" data-index="5">
                                <div class="node-dot">6</div>
                                <div class="node-content">
                                    <h4>Swami Koragajja Temple</h4>
                                    <span class="node-best-time">🛕 Holy Darshan: 7:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 2. Simulate loading animation before displaying
    setTimeout(() => {
        loader.classList.remove('active');
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const overlay = document.getElementById('mangaluru-must-watch-modal-overlay');
        const closeBtn = document.getElementById('mangaluru-must-watch-close-btn');

        // Smooth scale entrance
        setTimeout(() => {
            overlay.classList.add('active');
        }, 30);

        // Initialize swiper inside the modal
        let swiperInstance = null;
        if (typeof Swiper !== 'undefined') {
            swiperInstance = new Swiper('.mangaluru-must-watch-swiper', {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                effect: 'slide',
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.must-watch-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.must-watch-next',
                    prevEl: '.must-watch-prev',
                },
            });
            
            // Connect Swiper active slide change with route node highlighting
            swiperInstance.on('slideChange', () => {
                const activeIdx = swiperInstance.realIndex;
                document.querySelectorAll('#mangaluru-must-watch-modal-overlay .route-node').forEach(node => {
                    node.classList.remove('active');
                });
                const activeNode = document.querySelector(`#mangaluru-must-watch-modal-overlay .route-node[data-index="${activeIdx}"]`);
                if (activeNode) activeNode.classList.add('active');
            });
        }

        // Add interactive controls to route map nodes
        document.querySelectorAll('#mangaluru-must-watch-modal-overlay .route-node').forEach(node => {
            node.addEventListener('click', () => {
                const index = parseInt(node.getAttribute('data-index'));
                if (swiperInstance) {
                    swiperInstance.slideToLoop(index, 800);
                }
            });
        });

        // Add detour link handler
        const detourBtn = document.getElementById('gokarna-detour-btn');
        if (detourBtn) {
            detourBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Avoid triggering node click
                if (swiperInstance) {
                    swiperInstance.slideToLoop(4, 800); // 4 is Gokarnanatheshwara Temple
                }
            });
        }

        const closeModal = () => {
            overlay.classList.remove('active');
            // Wait for transition to complete before removing from DOM
            setTimeout(() => {
                overlay.remove();
            }, 600);
        };

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        // Close on ESC keypress
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

    }, 600);
}
