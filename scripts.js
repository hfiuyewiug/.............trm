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
                image: 'assets/places/panambur_beach.jpg',
                description: 'A clean and popular beach known for its golden sands and water sports.'
            },
            {
                name: 'Tannirbhavi Beach',
                image: 'https://www.hlimg.com/images/things2do/738X538/28mn_mnrmm1_Bea_29_2176132g_1508082724t.jpg',
                description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.'
            },
            {
                name: 'Kadri Temple',
                image: 'assets/places/kadri_temple.jpg',
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
                image: 'https://photos.wikimapia.org/p/00/04/45/95/57_full.jpg',
                description: 'Home to the Chamundeshwari Temple with panoramic views of the city.'
            },
            {
                name: 'Brindavan Gardens',
                image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg',
                description: 'Beautifully landscaped gardens famous for their musical fountain shows.'
            },
            {
                name: 'Zoo',
                image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg',
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
    { id: 'beaches', name: 'Beaches', desc: 'Explore famous beaches →', image: 'assets/places/panambur_beach.jpg' },
    { id: 'temples', name: 'Temples', desc: 'Explore famous temples →', image: 'assets/places/kadri_temple.jpg' },
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
            { name: 'Panambur Beach', image: 'assets/places/panambur_beach.jpg', description: 'A clean and popular beach known for its golden sands and water sports.' },
            { name: 'Tannirbhavi Beach', image: 'https://www.hlimg.com/images/things2do/738X538/28mn_mnrmm1_Bea_29_2176132g_1508082724t.jpg', description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.' },
            { name: 'Someshwara Beach', image: 'https://visitmangalore.in/_next/image?url=https:%2F%2Fapi.visitmangalore.in%2Fuploads%2F5_a_SOMESHWARA_BEACH_9e97b6ef87.jpg&w=1920&q=75', description: 'Famous for the Rudra Shile (huge rocks) and the ancient Someshwara Temple.' },
            { name: 'Surathkal Beach', image: 'https://www.mustvisitplace.com/wp-content/uploads/2019/03/Surathkal-beach-3-768x648.jpg', description: 'A serene beach known for its lighthouse that offers a spectacular view.' },
            { name: 'Sasihithlu Beach', image: 'assets/places/sasihithlu_beach.jpg', description: 'A pristine and scenic beach where the river meets the Arabian Sea, popular for surfing.' },
            { name: 'Ullal Beach', image: 'assets/places/ullal_beach.jpg', description: 'A tranquil beach offering spectacular sunset views and a peaceful environment.' },
            { name: 'Bengre Beach', image: 'assets/places/bengre_beach.png', description: 'A picturesque coastal stretch where the river meets the Arabian Sea, offering breathtaking sunsets.' },
            { name: 'Talapady Beach', image: 'assets/places/talapady_beach.jpg', description: 'A serene and less crowded beach ideal for relaxing walks along the shoreline.' },
            { name: 'Batapady Beach', image: 'assets/places/batapady_beach.jpg', description: 'A hidden gem offering a calm environment and pristine beauty, perfect for a peaceful getaway.' },
            { name: 'Mukka Beach', image: 'assets/places/mukka_beach.jpg', description: 'Known for its golden sands and the nearby NITK lighthouse, offering a panoramic view of the sea.' },
            { name: 'Kodical Beach', image: 'assets/places/kodical_beach.jpg', description: 'A beautiful coastline with a mix of sandy stretches and rocky shores, perfect for an evening stroll.' },
            { name: 'Chitrapura Beach', image: 'assets/places/chitrapura_beach.jpg', description: 'A quiet and peaceful beach, perfect for long walks and enjoying the serene coastal breeze.' },
            { name: 'Mulki Beach', image: 'assets/places/mulki_beach.jpg', description: 'A popular destination for water sports enthusiasts, especially known for surfing and kayaking.' },
            { name: 'Hosabettu Beach', image: 'assets/places/hosabettu_beach.gif', description: 'A beautiful hidden coastal gem that offers a pristine environment away from the city crowd.' }
        ]
    },
    'temples': {
        name: 'Mangalore Temples',
        places: [
            { name: 'Swami Koragajja Temple', image: 'assets/places/swami_koragajja_temple.jpg', description: 'A highly revered sacred shrine dedicated to Swami Koragajja, drawing countless devotees seeking blessings.' },
            { name: 'Kadri Manjunath Temple', image: 'assets/places/kadri_temple.jpg', description: 'An ancient Hindu temple with unique architecture and historical significance.' },
            { name: 'Kudroli Gokarnath Temple', image: 'https://imvoyager.com/wp-content/uploads/2021/04/Kudroli-Temple-Mangalore-Kudroli-Gokarnanatha-Temple-Gokarnanatheshwara-Temple--640x437.png', description: 'A beautiful temple known for its magnificent Dasara celebrations.' },
            { name: 'Mangaladevi Temple', image: 'https://www.thetravelmagazine.net/wp-content/uploads/Mangaladevi-Temple-Sunset.jpg', description: 'The ancient temple after which the city of Mangalore is named.' },
            { name: 'Polali Rajarajeshwari Temple', image: 'https://tempotravellermangalore.in/uploads/image/tour-packages/pilgrimage-places-in-mangalore/polali-rajarajeshwari-temple.jpg', description: 'Famous for its wooden idols and the historic Polali Chendu festival.' },
            { name: 'Kateel Temple', image: 'assets/places/kateel_temple.webp', description: 'A prominent Hindu temple dedicated to Goddess Durgaparameshwari, located on an islet in the Nandini River.' },
            { name: 'Someshwara Temple', image: 'assets/places/someshwara_temple.jpg', description: 'An ancient Shiva temple situated by the sea, known for its historic architecture and beautiful surroundings.' },
            { name: 'Urwa Marigudi Temple', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=100&w=3840', description: 'A highly revered temple dedicated to Goddess Mariamman, famous for its grand Mangaluru Dasara celebrations.' },
            { name: '🌺 Bappanadu Durgaparameshwari Temple', image: 'assets/places/bappanadu_temple.jpg', description: 'A historical temple known for its communal harmony and the annual Bappanadu Dolu festival.' },
            { name: 'Karinjeshwara Hill Temple', image: 'assets/places/karinjeshwara_temple.jpg', description: 'A majestic temple perched on a cliff edge, offering a serene spiritual experience and panoramic views.' }
        ]
    },
    'malls': {
        name: 'Mangalore Malls',
        places: [
            { name: 'City Centre Mall', image: 'https://i.ytimg.com/vi/5hSQ865UkQA/maxresdefault.jpg', description: 'One of the largest malls in Mangalore with great shopping, dining, and multiplex.' },
            { name: 'Forum Fiza Mall', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0b/50/07/central-atrium-of-the.jpg', description: 'A premium shopping destination offering global brands and entertainment options.' },
            { name: 'Lotus Mall (Upcoming)', image: 'https://1.bp.blogspot.com/-ukW_y6j0NO4/UAj7Xco44hI/AAAAAAAALMw/dFO_pcSzgjU/s1600/2s8obah.jpg', description: 'An upcoming mega mall promising a world-class shopping experience.' },
            { name: 'Bharath Mall', image: 'https://content.jdmagicbox.com/comp/mangalore/54/0824p824std2004954/catalogue/bharath-mall-bejai-mangalore-malls-z1qvkl4h1d.jpg', description: 'One of the first modern malls in the city, popular among locals.' }
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

const bangaloreCategories = [
    { id: 'parks', name: 'Parks & Gardens', desc: 'Explore green parks →', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000' },
    { id: 'heritage', name: 'Palaces & Heritage', desc: 'Explore heritage →', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=1000' },
    { id: 'temples', name: 'Temples & Spiritual', desc: 'Explore temples →', image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=80&w=1000' },
    { id: 'shopping', name: 'Malls & Shopping', desc: 'Explore shopping →', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=1000' },
    { id: 'breweries', name: 'Pubs & Breweries', desc: 'Explore breweries →', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000' },
    { id: 'coming_soon_1', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_2', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_3', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true }
];

const bangaloreCategoryData = {
    'parks': {
        name: 'Bangalore Parks & Gardens',
        places: [
            { name: 'Cubbon Park', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=100&w=3840', description: 'The lungs of the city, a sprawling green space with historic buildings and walking trails.' },
            { name: 'Lalbagh Botanical Garden', image: 'https://images.unsplash.com/photo-1624385150247-4952093510f8?auto=format&fit=crop&q=100&w=3840', description: 'A historic botanical garden featuring a majestic 19th-century glass house inspired by London.' },
            { name: 'Bannerghatta National Park', image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=100&w=3840', description: 'A bio-reserve featuring an exciting tiger and lion safari, zoo, and butterfly park.' }
        ]
    },
    'heritage': {
        name: 'Bangalore Palaces & Heritage',
        places: [
            { name: 'Bangalore Palace', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=100&w=3840', description: 'A grand royal residence built in Tudor style, modeled after Windsor Castle.' },
            { name: 'Tipu Sultan Palace', image: 'https://images.unsplash.com/photo-1622325324523-86815302772a?auto=format&fit=crop&q=100&w=3840', description: 'An ornate double-storied wooden palace featuring elegant arches, columns, and history.' },
            { name: 'Devanahalli Fort', image: 'https://images.unsplash.com/photo-1580191947416-62d35a55e71d?auto=format&fit=crop&q=100&w=3840', description: 'A massive historic stone fort originating from 1501, famous as the birthplace of Tipu Sultan.' }
        ]
    },
    'temples': {
        name: 'Bangalore Temples',
        places: [
            { name: 'ISKCON Temple', image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=100&w=3840', description: 'A massive neo-classical style cultural complex and temple dedicated to Krishna.' },
            { name: 'Bull Temple', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=100&w=3840', description: 'Historic temple in Basavanagudi containing a monolithic statue of Nandi the bull.' },
            { name: 'Shivoham Shiva Temple', image: 'https://images.unsplash.com/photo-1590480394626-821152686e18?auto=format&fit=crop&q=100&w=3840', description: 'Features a spectacular 65-foot statue of Lord Shiva seated amidst artificial mountains.' }
        ]
    },
    'shopping': {
        name: 'Bangalore Malls & Shopping',
        places: [
            { name: 'UB City', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=100&w=3840', description: 'India\'s first luxury commercial mall featuring ultra-premium global brands and dining.' },
            { name: 'Phoenix Marketcity', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=100&w=3840', description: 'One of the largest lifestyle malls in the city, popular for international fashion.' },
            { name: 'Commercial Street', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=100&w=3840', description: 'A highly bustling open-street market known for trendy wear, jewelry, and street shopping.' }
        ]
    },
    'breweries': {
        name: 'Bangalore Breweries & Pubs',
        places: [
            { name: 'Toit', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=100&w=3840', description: 'A legendary and widely popular English-pub styled microbrewery situated in Indiranagar.' },
            { name: 'Windmills Craftworks', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=100&w=3840', description: 'A sophisticated craft brewery offering premier jazz performances and an integrated library.' },
            { name: 'Arbor Brewing Company', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=100&w=3840', description: 'A lively and rustic brewery serving excellent craft IPAs, stouts, and global food.' }
        ]
    }
};

const mysuruCategories = [
    { id: 'palaces', name: 'Royal Palaces', desc: 'Explore palaces →', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=1000' },
    { id: 'hills_lakes', name: 'Scenic Hills & Lakes', desc: 'Explore hills & lakes →', image: 'https://www.itslife.in/wp-content/gallery/travel/travel-karanji-lake5.jpg' },
    { id: 'gardens', name: 'Gardens & Fountains', desc: 'Explore gardens →', image: 'https://i.pinimg.com/736x/9e/69/4c/9e694c072f6c1a9be2a9ae4b2c0b170c.jpg' },
    { id: 'wildlife', name: 'Wildlife & Nature', desc: 'Explore wildlife →', image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg' },
    { id: 'heritage', name: 'Temples & Heritage', desc: 'Explore heritage →', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000' },
    { id: 'coming_soon_1', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_2', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_3', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true }
];

const mysuruCategoryData = {
    'palaces': {
        name: 'Mysore Palaces',
        places: [
            { name: 'Mysore Palace', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=100&w=3840', description: 'One of the most grand palaces in India, outstandingly illuminated with 97,000 bulbs.' },
            { name: 'Jaganmohan Palace', image: 'https://imgcld.yatra.com/ytimages/image/upload/v1434118406/Mysore_bbu.jpg', description: 'A beautiful historic palace featuring a premier art gallery displaying royal portraits and artifacts.' },
            { name: 'Lalitha Mahal Palace', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/26/1e/39/lalitha-mahal-palace.jpg?w=700&h=-1&s=1', description: 'A stunning white palace set against Chamundi Hills, built in classical Italian style.' }
        ]
    },
    'hills_lakes': {
        name: 'Mysore Hills & Lakes',
        places: [
            { name: 'Chamundi Hills', image: 'https://photos.wikimapia.org/p/00/04/45/95/57_full.jpg', description: 'A scenic hill overlooking Mysore, featuring a historic monolithic bull statue.' },
            { name: 'Karanji Lake', image: 'https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1707395561_karanji_lake.png', description: 'A picturesque lake that hosts India\'s largest walk-through aviary and butterfly park.' },
            { name: 'Kukkarahalli Lake', description: 'A peaceful, serene lake popular for quiet morning walks and bird watching.', image: 'https://live.staticflickr.com/65535/50948988027_64c8bd54e0.jpg' }
        ]
    },
    'gardens': {
        name: 'Mysore Gardens & Fountains',
        places: [
            { name: 'Brindavan Gardens', image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg', description: 'Beautifully manicured terraced gardens famed for their synchronized musical fountain shows.' },
            { name: 'Bonsai Garden', image: 'https://www.itslife.in/wp-content/gallery/myszoo-eda-balamuri-krs/travel-mysore-bonsai-garden-1.jpg', description: 'A spectacular garden housing 450 miniature trees inside Sri Ganapathy Sachchidananda Ashram.' }
        ]
    },
    'wildlife': {
        name: 'Mysore Wildlife & Nature',
        places: [
            { name: 'Mysore Zoo', image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg', description: 'One of India\'s oldest and most renowned zoos, home to a wide range of exotic animals.' },
            { name: 'Ranganathittu Bird Sanctuary', image: 'https://i1.wp.com/www.dominiquetravels.com/wp-content/uploads/2019/07/03.-Ranganathittu-Bird-Sanctuary.jpg?resize=747%2C560', description: 'Scenic islets on the Kaveri River hosting thousands of nesting migratory birds.' }
        ]
    },
    'heritage': {
        name: 'Mysore Temples & Heritage',
        places: [
            { name: 'Chamundeshwari Temple', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&80&w=1000', description: 'An ancient temple atop Chamundi Hills dedicated to the patron deity of Mysuru.' },
            { name: 'St. Philomena\'s Cathedral', image: 'https://i.pinimg.com/originals/67/7d/f9/677df9fc5e071c32c23b53c5bc59a466.jpg', description: 'A towering neo-gothic cathedral designed with majestic twin spires.' },
            { name: 'Venugopala Swamy Temple | Submerged Temple', image: 'https://jothishi.com/wp-content/uploads/2019/03/Venugopala-Swamy-Temple.jpg', description: 'A magnificent historic temple located near KRS Dam that was once submerged under water and later relocated and restored to its full glory.' },
            { name: 'ISKCON Temple', image: 'https://www.iskconmysore.org/wp-content/uploads/2022/11/008.jpg', description: 'A beautiful spiritual center dedicated to Sri Sri Krishna Balarama, featuring a peaceful atmosphere, wonderful architecture, and soul-stirring bhajans.' },
            { name: 'Kote Sri Anjaneya Temple', image: 'https://i.ytimg.com/vi/E7fsyPWnQj8/maxresdefault.jpg', description: 'A historic temple dedicated to Lord Hanuman, located near the palace grounds, famous for its magnificent Hanuman statue and spiritual energy.' },
            { name: 'Srikanteshwara Temple', image: 'https://www.omastrology.com/indian-temples/images/srikanteshwara-temple-nanjanguda.jpg', description: 'An ancient temple dedicated to Lord Shiva situated in Nanjangud, highly renowned for its majestic Dravidian gopuram and spiritual significance.' }
        ]
    }
};

const cityFoods = {
    'mangaluru': [
        { img: 'https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg', name: 'Chicken Kori Rotti' },
        { img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', name: 'Fish Fry' },
        { img: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg', name: 'Mangalore Bun' },
        { img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', name: 'Ghee Roast' }
    ],
    'bangalore': [
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Masala Dosa' },
        { img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800', name: 'Filter Coffee' },
        { img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800', name: 'Idli Vada' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Ragi_mudde_and_sops.JPG', name: 'Ragi Mudde' }
    ],
    'mysuru': [
        { img: 'https://images.slurrp.com/prodarticles/ydoju3f5ofc.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75', name: 'Mysore Pak' },
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Mysore Masala Dosa' },
        { img: 'https://figarooliveoil.com/wp-content/uploads/2022/02/mysore-bonda.png', name: 'Mysore Bonda' },
        { img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800', name: 'Hanumanthu Biryani' }
    ]
};

const cityCategories = {
    'mangaluru': mangaloreCategories,
    'bangalore': bangaloreCategories,
    'mysuru': mysuruCategories
};

const cityCategoryData = {
    'mangaluru': mangaloreCategoryData,
    'bangalore': bangaloreCategoryData,
    'mysuru': mysuruCategoryData
};

let currentCityId = 'mangaluru';

function renderCategoryPage(categoryId, cityId = currentCityId) {
    const cityData = cityCategoryData[cityId];
    if (!cityData) return;
    const category = cityData[categoryId];
    if (!category) return;

    const cityName = cityId === 'mangaluru' ? 'Mangaluru' : cityId === 'bangalore' ? 'Bangalore' : 'Mysuru';

    const destHTML = `
        <div class="page-content">
            <header class="dest-header">
                <div class="dest-header-row" style="margin-bottom: 2rem;">
                    <a href="#" class="back-btn" id="back-to-city" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to ${cityName}
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
                            <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" ${place.name === 'Chamundi Hills' ? 'style="transform: scale(1.2); transform-origin: center; object-fit: cover;"' : place.name.includes('Upcoming') ? 'style="filter: blur(4px);"' : ''}>
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

    document.getElementById('back-to-city').addEventListener('click', (e) => {
        e.preventDefault();
        renderDestination(cityId);
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

    currentCityId = id;

    const isPremiumCity = ['mangaluru', 'bangalore', 'mysuru'].includes(dest.id);

    const destHTML = `
        <div class="page-content" style="position: relative;">
            <header class="dest-header dest-header-flex">
                <div class="dest-header-row">
                    <a href="#" class="back-btn" id="back-home" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to Home
                    </a>
                    ${isPremiumCity ? `
                    <button class="must-watch-btn" id="city-must-watch-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 2px;"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        Must Watching <span class="hide-mobile">Places</span>
                    </button>
                    ` : ''}
                </div>
                
                ${isPremiumCity ? `
                <div class="category-card famous-food-header-card" data-cat-id="food">
                    <div class="category-img swiper food-swiper" style="will-change: transform; perspective: 1000px; width: 100%; height: 100%;">
                        <div class="swiper-wrapper">
                            ${cityFoods[dest.id].map(item => `
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
                        <p style="margin:0; font-size: 0.9rem;">
                            ${dest.id === 'mangaluru' ? 'Chicken Kori Rotti, Fish Fry, Mangalore Bun & More' : dest.id === 'bangalore' ? 'Masala Dosa, Filter Coffee, Idli Vada & More' : 'Mysore Pak, Mysore Masala Dosa, Mylari & More'}
                        </p>
                    </div>
                </div>
                ` : ''}
                ${!isPremiumCity ? `
                <div style="width: 100%; text-align: center;">
                    <h1>Famous Places in <span>${dest.name}</span></h1>
                    <p>Explore the natural beauty and serene landscapes of ${dest.name}.</p>
                </div>
                ` : ''}
            </header>

            ${!isPremiumCity ? `
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

            ${isPremiumCity ? `
                <div class="categories-section">
                    <h2 class="section-title">${dest.name} Categories</h2>
                    <div class="category-grid">
                        ${cityCategories[dest.id].map(cat => `
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

    // Initialize Swiper for Famous Food if we are in a premium city page
    if (isPremiumCity && typeof Swiper !== 'undefined') {
        new Swiper('.food-swiper', {
            loop: true,
            speed: 1200,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            effect: 'slide',
            grabCursor: true,
            touchRatio: 1.2,
            resistanceRatio: 0.8,
        });
    }

    // Add Must Watch button listener if present
    const mustWatchBtn = document.getElementById('city-must-watch-btn');
    if (mustWatchBtn) {
        mustWatchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCityMustWatchModal(dest.id);
        });
    }

    // Add category click listeners if any
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const catId = card.getAttribute('data-cat-id');
            if (catId && !catId.startsWith('coming_soon')) {
                renderCategoryPage(catId, dest.id);
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
                                        <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" ${place.name.includes('Upcoming') ? 'style="filter: blur(4px);"' : ''}>
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

    }, 600);
}

const cityMustWatchData = {
    'mangaluru': {
        title: '🌍 Mangalore Must Watching Places',
        places: [
            {
                name: 'Kadri Manjunath Temple',
                image: 'assets/places/kadri_temple.jpg',
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
                image: 'https://mangaloreblogs.com/wp-content/uploads/2025/03/Sultan-Battery.png',
                rating: '4.6',
                location: 'Boloor, Mangalore',
                bestTime: '🕒 Afternoon Breeze: 3:30 PM',
                description: 'A watchtower built by Tipu Sultan in 1784, constructed of black stone to prevent warship intrusions via the Gurupura River.'
            },
            {
                name: 'Panambur Beach',
                image: 'assets/places/panambur_beach.jpg',
                rating: '4.9',
                location: 'Coastal Hwy, Mangalore',
                bestTime: '🌅 Evening View: 5:00 PM',
                description: 'A clean and popular beach known for its golden sands, gorgeous sunsets, and thrilling water sports.'
            },
            {
                name: 'Swami Koragajja Temple',
                image: 'assets/places/swami_koragajja_temple.jpg',
                rating: '4.9',
                location: 'Kuthar, Mangalore',
                bestTime: '🛕 Holy Darshan: 7:00 PM',
                description: 'A highly revered and powerful sacred shrine dedicated to Swami Koragajja, drawing massive crowds of faithful devotees seeking direct blessings.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'Kadri Manjunath Temple',
                time: '🛕 Morning Darshan: 8:00 AM',
                detour: { id: 'mangaladevi', text: '⚡ Detour to Mangaladevi Temple (5 KM)', category: 'temples' }
            },
            {
                dot: 2,
                name: 'Ocean Pearl Hotel / Ideal Café',
                time: '🍽️ Lunch Timings: 1:30 PM',
                detour: { id: 'aloysius', text: '⚡ Detour to St. Aloysius Chapel (1 KM)', category: 'churches' }
            },
            {
                dot: 3,
                name: 'Sultan Battery',
                time: '🕒 Afternoon Breeze: 3:30 PM',
                detour: { id: 'tannirbhavi', text: '⚡ Detour to Tannirbhavi Beach (2 KM)', category: 'beaches' }
            },
            {
                dot: 4,
                name: 'Panambur Beach',
                time: '🌅 Evening View: 5:00 PM',
                detour: { id: 'koragajja', text: '⚡ Detour to Swami Koragajja Temple (17 KM)', slideIndex: 4 }
            },
            {
                dot: 5,
                name: 'Swami Koragajja Temple',
                time: '🛕 Holy Darshan: 7:00 PM'
            }
        ],
        distances: [
            { dist: '3 KM', time: '🚗 8m | 🏍️ 6m' },
            { dist: '6 KM', time: '🚗 10m | 🏍️ 9m' },
            { dist: '10 KM', time: '🚗 18m | 🏍️ 15m' },
            { dist: '17 KM', time: '🚗 30m | 🏍️ 25m' }
        ]
    },
    'bangalore': {
        title: '🌍 Bangalore Must Watching Places',
        places: [
            {
                name: 'Cubbon Park',
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=100&w=3840',
                rating: '4.8',
                location: 'Kasturba Road, Bangalore',
                bestTime: '🌳 Morning Stroll: 8:00 AM',
                description: 'The green heart of Bangalore, a sprawling park perfect for morning walks, jogging, and exploring public libraries.'
            },
            {
                name: 'Vidyarthi Bhavan',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                rating: '4.7',
                location: 'Gandhi Bazaar, Bangalore',
                bestTime: '🍽️ Breakfast Timings: 9:30 AM',
                description: 'A historic vegetarian restaurant in Gandhi Bazaar legendary for its thick, crispy, and butter-dripping Masala Dosas.'
            },
            {
                name: 'Bangalore Palace',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=100&w=3840',
                rating: '4.6',
                location: 'Vasanth Nagar, Bangalore',
                bestTime: '🏰 Tudor Palace Tour: 11:30 AM',
                description: 'A majestic palace featuring Tudor style architecture, fortified towers, elegant wooden carvings, and royal memorabilia.'
            },
            {
                name: 'ISKCON Temple',
                image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=100&w=3840',
                rating: '4.8',
                location: 'Rajajinagar, Bangalore',
                bestTime: '🛕 Evening Darshan: 4:30 PM',
                description: 'A spectacular neo-classical temple featuring grand shrines, a gold-plated flag post, and vibrant spiritual atmosphere.'
            },
            {
                name: 'UB City',
                image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=100&w=3840',
                rating: '4.9',
                location: 'Vittal Mallya Road, Bangalore',
                bestTime: '🍷 Premium Dining: 7:30 PM',
                description: 'India\'s first luxury commercial complex, hosting ultra-premium shopping boutiques, art galleries, and dynamic rooftop restaurants.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'Cubbon Park',
                time: '🌳 Morning Stroll: 8:00 AM',
                detour: { id: 'lalbagh', text: '⚡ Detour to Lalbagh Garden (4 KM)', category: 'parks' }
            },
            {
                dot: 2,
                name: 'Vidyarthi Bhavan',
                time: '🍽️ Breakfast Timings: 9:30 AM',
                detour: { id: 'commercial', text: '⚡ Detour to Commercial Street (5 KM)', category: 'shopping' }
            },
            {
                dot: 3,
                name: 'Bangalore Palace',
                time: '🏰 Tudor Palace Tour: 11:30 AM',
                detour: { id: 'tipu', text: '⚡ Detour to Tipu Sultan Palace (5 KM)', category: 'heritage' }
            },
            {
                dot: 4,
                name: 'ISKCON Temple',
                time: '🛕 Evening Darshan: 4:30 PM',
                detour: { id: 'ubcity', text: '⚡ Detour to UB City (7 KM)', slideIndex: 4 }
            },
            {
                dot: 5,
                name: 'UB City',
                time: '🍷 Premium Dining: 7:30 PM'
            }
        ],
        distances: [
            { dist: '4 KM', time: '🚗 12m | 🏍️ 10m' },
            { dist: '5 KM', time: '🚗 15m | 🏍️ 12m' },
            { dist: '8 KM', time: '🚗 20m | 🏍️ 18m' },
            { dist: '7 KM', time: '🚗 18m | 🏍️ 15m' }
        ]
    },
    'mysuru': {
        title: '🌍 Mysore Must Watching Places',
        places: [
            {
                name: 'Chamundi Hills',
                image: 'https://photos.wikimapia.org/p/00/04/45/95/57_full.jpg',
                rating: '4.8',
                location: 'Chamundi Hill Road, Mysore',
                bestTime: '🛕 Morning Darshan: 7:30 AM',
                description: 'A holy hill dedicated to Goddess Chamundeshwari, offering sweeping bird\'s eye views of the heritage city of Mysore.'
            },
            {
                name: 'Mylari Hotel',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                rating: '4.7',
                location: 'Nazarbad, Mysore',
                bestTime: '🍽️ Breakfast Timings: 9:30 AM',
                description: 'Legendary restaurant renowned for serving the softest Mylari butter masala dosas accompanied by unique coconut chutney.'
            },
            {
                name: 'Mysore Palace',
                image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=100&w=3840',
                rating: '4.9',
                location: 'Sayyaji Rao Road, Mysore',
                bestTime: '👑 Royal Palace Tour: 11:00 AM',
                description: 'One of the most magnificent palaces in India, a true architectural masterpiece combining Indo-Saracenic styles.'
            },
            {
                name: 'Mysore Zoo',
                image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg',
                rating: '4.8',
                location: 'Indiranagar, Mysore',
                bestTime: '🐅 Wildlife Walk: 2:30 PM',
                description: 'Sri Chamarajendra Zoological Gardens, housing diverse global animal species in a beautifully forested urban sanctuary.'
            },
            {
                name: 'Brindavan Gardens',
                image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg',
                rating: '4.7',
                location: 'KRS Dam, Mandya (Mysore)',
                bestTime: '⛲ Musical Fountain: 6:00 PM',
                description: 'Stunningly landscaped terraced gardens famed for their vibrant, colorful synchronized musical fountain and laser show.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'Chamundi Hills',
                time: '🛕 Morning Darshan: 7:30 AM',
                detour: { id: 'karanji', text: '⚡ Detour to Karanji Lake (5 KM)', category: 'hills_lakes' }
            },
            {
                dot: 2,
                name: 'Mylari Hotel',
                time: '🍽️ Breakfast Timings: 9:30 AM',
                detour: { id: 'gurupak', text: '⚡ Detour to Guru Sweet Mart (3 KM)', category: 'palaces' }
            },
            {
                dot: 3,
                name: 'Mysore Palace',
                time: '👑 Royal Palace Tour: 11:00 AM',
                detour: { id: 'philomena', text: '⚡ Detour to St. Philomena\'s (2 KM)', category: 'heritage' }
            },
            {
                dot: 4,
                name: 'Mysore Zoo',
                time: '🐅 Wildlife Walk: 2:30 PM',
                detour: { id: 'brindavan', text: '⚡ Detour to Brindavan Gardens (19 KM)', slideIndex: 4 }
            },
            {
                dot: 5,
                name: 'Brindavan Gardens',
                time: '⛲ Musical Fountain: 6:00 PM'
            }
        ],
        distances: [
            { dist: '5 KM', time: '🚗 12m | 🏍️ 10m' },
            { dist: '2 KM', time: '🚗 6m | 🏍️ 5m' },
            { dist: '3 KM', time: '🚗 8m | 🏍️ 6m' },
            { dist: '19 KM', time: '🚗 35m | 🏍️ 30m' }
        ]
    }
};

function openCityMustWatchModal(cityId) {
    const cityData = cityMustWatchData[cityId];
    if (!cityData) return;

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

    const modalHTML = `
        <div class="must-watch-modal-overlay" id="mangaluru-must-watch-modal-overlay">
            <div class="must-watch-modal" style="max-width: 1100px;">
                <header class="must-watch-modal-header">
                    <h2>${cityData.title}</h2>
                    <button class="must-watch-close-btn" id="mangaluru-must-watch-close-btn" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                
                <div class="mangaluru-modal-grid">
                    <!-- Left Pane: Swiper Slider -->
                    <div class="mangaluru-carousel-pane">
                        <div class="swiper must-watch-swiper mangaluru-must-watch-swiper">
                            <div class="swiper-wrapper">
                                ${cityData.places.map((place, idx) => `
                                    <div class="swiper-slide">
                                        <div class="must-watch-card" style="max-width: 100%;">
                                            <div class="must-watch-card-img">
                                                <img src="${place.image}" alt="${place.name}" decoding="async" ${place.name === 'Chamundi Hills' ? 'style="transform: scale(1.2); transform-origin: center; object-fit: cover;"' : ''}>
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
                            
                            ${cityData.nodes.map((node, idx) => `
                                <!-- Node ${idx + 1} -->
                                <div class="route-node ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                                    <div class="node-dot">${node.dot}</div>
                                    <div class="node-content">
                                        <h4>${node.name}</h4>
                                        <span class="node-best-time">${node.time}</span>
                                        ${node.detour ? `
                                            <span class="route-detour-btn" 
                                                  id="${cityId}-detour-${idx}" 
                                                  data-type="${node.detour.category ? 'cat' : 'slide'}" 
                                                  data-target="${node.detour.category || node.detour.slideIndex}">
                                                ${node.detour.text}
                                            </span>
                                        ` : ''}
                                    </div>
                                </div>
                                
                                ${idx < cityData.nodes.length - 1 ? `
                                    <div class="route-distance-label">
                                        <span class="dist-pill">🛣️ ${cityData.distances[idx].dist}</span>
                                        <span class="time-pills">${cityData.distances[idx].time}</span>
                                    </div>
                                ` : ''}
                            `).join('')}
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

        const closeModal = () => {
            overlay.classList.remove('active');
            // Wait for transition to complete before removing from DOM
            setTimeout(() => {
                overlay.remove();
            }, 600);
        };

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

        // Add detour link handlers dynamically
        cityData.nodes.forEach((node, idx) => {
            if (node.detour) {
                const detourBtn = document.getElementById(`${cityId}-detour-${idx}`);
                if (detourBtn) {
                    detourBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const type = detourBtn.getAttribute('data-type');
                        const target = detourBtn.getAttribute('data-target');
                        
                        if (type === 'cat') {
                            closeModal();
                            renderCategoryPage(target, cityId);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (type === 'slide') {
                            if (swiperInstance) {
                                swiperInstance.slideToLoop(parseInt(target), 800);
                            }
                        }
                    });
                }
            }
        });

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
