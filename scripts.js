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
        image: 'https://www.talkativeman.com/img/Architectural_Highlights_of_The_Bangalore_Palace.jpg',
        color: '#8338EC',
        famousPlaces: [
            {
                name: 'Lalbagh Botanical Garden',
                image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/03/lalbagh-botanical-garden-1.jpg',
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
                image: 'https://bangaloretourism.in/images/v2/places-to-visit/cubbon-park-bangalore/cubbon-park-bangalore-bangalore-entry-ticket-price-bangalore-tourism-cr-pmekara.jpg',
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
    { id: 'restaurants', name: 'Best Restaurants', desc: 'Explore best restaurants →', image: 'https://www.crazymasalafood.com/wp-content/images/machali-mangalore-hotel.png' },
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
    },
    'restaurants': {
        name: 'Best Restaurants in Mangalore',
        places: [
            {
                name: 'Machali',
                image: 'https://www.crazymasalafood.com/wp-content/images/machali-mangalore-hotel.png',
                description: 'A legendary home-style seafood restaurant in Mangaluru, celebrated for its fresh fish, traditional local masalas, and quick service.',
                openHours: '11:30 AM – 3:30 PM, 7:00 PM – 10:00 PM',
                bestFoods: [
                    { name: 'Anjal Fish Fry', img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', price: '₹290 (Approx)' },
                    { name: 'Fish Thali', img: 'https://static.wixstatic.com/media/798804_28241958932a44f682b26db6b35a8987~mv2.jpg/v1/fill/w_980,h_766,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/798804_28241958932a44f682b26db6b35a8987~mv2.jpg', price: '₹190 (Approx)' },
                    { name: 'Prawns Ghee Roast', img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', price: '₹280 (Approx)' },
                    { name: 'Crab Masala Fry', img: 'https://www.seriouseats.com/thmb/3dFjzacZ0gSdlibO6UpuBwBeSaw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__03__25.03.201420Spicy-Indian-Crab-Masala-Fry-cd7dc3ba0d8b4f3489c13c4989ddeb4c.jpg', price: '₹350 (Approx)' }
                ]
            },
            {
                name: 'Shetty Lunch Home',
                image: 'https://aroundmangalore.com/wp-content/uploads/2020/02/Shetty-Lunch-Home-Seafood-and-Mangalore-Cuisine-Restaurant-Adyar-Mangalore-P1.jpg',
                description: 'The iconic restaurant credited with the invention of the world-famous Chicken Ghee Roast, serving outstanding traditional recipes.',
                openHours: '11:30 AM – 3:30 PM, 6:30 PM – 10:30 PM',
                bestFoods: [
                    { name: 'Chicken Ghee Roast', img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', price: '₹340 (Approx)' },
                    { name: 'Kane (Lady Fish) Fry', img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', price: '₹280 (Approx)' },
                    { name: 'Neer Dosa with Curry', img: 'https://www.idfreshfood.com/wp-content/uploads/2020/12/gsrgergge.jpg', price: '₹120 (Approx)' },
                    { name: 'Silver Fish Rava Fry', img: 'https://i.pinimg.com/originals/9e/c8/24/9ec824618f757fb1dad66ccdc0640103.jpg', price: '₹220 (Approx)' }
                ]
            },
            {
                name: 'Pallkhi Restaurant',
                image: 'https://aroundmangalore.com/wp-content/uploads/2016/06/Pallkhi-Restaurant-Balmatta-Road-Mangalore-P1.jpg',
                description: 'One of Mangaluru\'s premier dining landmarks, renowned for its heritage-style fine dining, authentic local curries, and warm hospitality.',
                openHours: '11:30 AM – 3:30 PM, 7:00 PM – 11:00 PM',
                bestFoods: [
                    { name: 'Chicken Kori Rotti', img: 'https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg', price: '₹260 (Approx)' },
                    { name: 'Crab Ghee Roast', img: 'https://i.ytimg.com/vi/gxik1GMXxE0/maxresdefault.jpg', price: '₹380 (Approx)' },
                    { name: 'Mutton Curry', img: 'https://cookwithfaiza.net/wp-content/uploads/2024/03/312836521_Classic_Mutton_Curry_By_Cook_With_Faiza.jpeg', price: '₹320 (Approx)' },
                    { name: 'Neer Dosa', img: 'https://vanitascorner.com/wp-content/uploads/2018/01/Neer-Dosa-1024x768.jpg', price: '₹80 (Approx)' }
                ]
            },
            {
                name: 'Village Restaurant',
                image: 'https://aroundmangalore.com/wp-content/uploads/2015/08/village5.png',
                description: 'A charming theme-style garden restaurant offering a rustic coastal village ambiance and a delectable range of Mangalorean delicacies.',
                openHours: '12:00 PM – 3:30 PM, 7:00 PM – 11:00 PM',
                bestFoods: [
                    { name: 'Fish Curry & Neer Dosa', img: 'https://traveltillyoudrop.com/wp-content/uploads/2024/11/Neer-Dosa-with-Fish-Curry_11zon.webp', price: '₹200 (Approx)' },
                    { name: 'Pomfret Masala Fry', img: 'https://lh3.googleusercontent.com/-4qEWHrdDEf8/YAAmed_qpRI/AAAAAAAAMHs/X28AQROcmQ8Uwt04RJRcryM4dB06-EG_ACLcBGAsYHQ/w1200-h630-p-k-no-nu/1610622580540332-0.png', price: '₹450 (Approx)' },
                    { name: 'Chicken Ghee Roast', img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', price: '₹340 (Approx)' },
                    { name: 'Mangalore Buns', img: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg', price: '₹60 (Approx)' }
                ]
            }
        ]
    }
};

const bangaloreCategories = [
    { id: 'parks', name: 'Parks & Gardens', desc: 'Explore green parks →', image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/03/lalbagh-botanical-garden-1.jpg' },
    { id: 'heritage', name: 'Palaces & Heritage', desc: 'Explore heritage →', image: 'https://www.talkativeman.com/img/Architectural_Highlights_of_The_Bangalore_Palace.jpg' },
    { id: 'temples', name: 'Temples & Spiritual', desc: 'Explore temples →', image: 'https://www.explorebees.com/uploads/blogs/A-Road-Trip-from-Bangalore-to-Adiyogi-Shiva-Statue-Chikkaballapur.jpg' },
    { id: 'shopping', name: 'Malls & Shopping', desc: 'Explore shopping →', image: 'https://lh3.googleusercontent.com/i8Vrd_X2CJmyIanO7jBQ48hppHl1BT3LEQJFlZAOhWZ3Ux05oSvq2nAcuHA_-s05AS4OF-yDT6DOlhE0_A5ioAJtCYVbbkc21_8Q5fxW=w1024-rw' },
    { id: 'breweries', name: 'Pubs & Breweries', desc: 'Explore breweries →', image: 'https://www.treebo.com/blog/wp-content/uploads/2016/02/Prost-Brew-Pub-Koramangala-1.jpg' },
    { id: 'trekking', name: 'Trekking Places', desc: 'Explore trekking spots →', image: 'https://www.thegari.in/blog/wp-content/uploads/2025/08/thottikallu-falls.jpg' },
    { id: 'coming_soon_2', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true },
    { id: 'coming_soon_3', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true }
];

const bangaloreCategoryData = {
    'parks': {
        name: 'Bangalore Parks & Gardens',
        places: [
            { name: 'Cubbon Park', image: 'https://bangaloretourism.in/images/v2/places-to-visit/cubbon-park-bangalore/cubbon-park-bangalore-bangalore-entry-ticket-price-bangalore-tourism-cr-pmekara.jpg', description: 'The lungs of the city, a sprawling green space with historic buildings and walking trails.' },
            { name: 'Lalbagh Botanical Garden', image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/03/lalbagh-botanical-garden-1.jpg', description: 'A historic botanical garden featuring a majestic 19th-century glass house inspired by London.' },
            { name: 'Bannerghatta National Park', image: 'https://im.whatshot.in/img/2019/Nov/bp-1-cropped-1-1573218361.jpg', description: 'A bio-reserve featuring an exciting tiger and lion safari, zoo, and butterfly park.' },
            { name: 'Bugle Rock Park', image: 'https://bangalore247.in/wp-content/uploads/2021/02/Bugle-Rock-Park.jpg', description: 'A massive rock formation of geological importance, featuring a beautiful landscaped park and watchtower.' },
            { name: 'JP Park', image: 'https://www.holidify.com/images/cmsuploads/compressed/JPPark_20200602150442_20200602150525.jpg', description: 'Jayaprakash Narayan Biodiversity Park, featuring lush lawns, visual musical fountains, and a diverse collection of trees.' },
            { name: 'Freedom Park', image: 'https://ideadesign.org/wpla/wp-content/uploads/2012/09/FPB_005.jpg', description: 'A unique historical public park built on the grounds of the former Central Jail, showcasing rich heritage and lush green areas.' }
        ]
    },
    'heritage': {
        name: 'Bangalore Palaces & Heritage',
        places: [
            { name: 'Bangalore Palace', image: 'https://www.talkativeman.com/img/Architectural_Highlights_of_The_Bangalore_Palace.jpg', description: 'A grand royal residence built in Tudor style, modeled after Windsor Castle.' },
            { name: 'Tipu Sultan Palace', image: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/10/Tipu-Sultan-Palace.jpg', description: 'An ornate double-storied wooden palace featuring elegant arches, columns, and history.' },
            { name: 'Devanahalli Fort', image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Devanahalli-Fort-1.jpg', description: 'A massive historic stone fort originating from 1501, famous as the birthplace of Tipu Sultan.' },
            { name: 'Mayo Hall', image: 'https://bangalore247.in/wp-content/uploads/2021/03/Mayo-Hall-Bangalore.jpg', description: 'An iconic, towering building of architectural prominence featuring beautiful Neo-Classical style elements.' },
            { name: 'Kempegowda Museum', image: 'https://im.whatshot.in/img/2021/Sep/1-0-cropped-1633005698.jpg', description: 'A fascinating government museum dedicated to Yelahanka chieftain Kempegowda, located inside Mayo Hall.' },
            { name: 'Venkatappa Art Gallery', image: 'https://indiator.com/tourist-places/wp-content/uploads/2016/11/Venkatappa-Art-Gallery.jpeg', description: 'A prestigious government art gallery showcasing the brilliant works of K. Venkatappa and other prominent artists.' },
            { name: 'Government Museum', image: 'https://indianexpress.com/wp-content/uploads/2023/02/Museum_bengaluru-1.jpeg', description: 'One of the oldest museums in India, featuring an exceptional collection of archaeological and historical artifacts.' },
            { name: 'Attara Kacheri', image: 'https://www.molon.de/galleries/India/Karnataka/Bangalore/VidhanaSoudha/images01/15%20Attara%20Kacheri%20Karnataka%20High%20Court.jpg', description: 'The magnificent, red-painted stone building built in neoclassical style, housing the High Court of Karnataka.' }
        ]
    },
    'temples': {
        name: 'Bangalore Temples',
        places: [
            { name: 'ISKCON Temple', image: 'https://travellerscribe.com/wp-content/uploads/2024/05/iskcon-temple-bangalore-Aarti-timings.webp', description: 'A massive neo-classical style cultural complex and temple dedicated to Krishna.' },
            { name: 'Bull Temple', image: 'https://wallpapers.com/images/hd/bangalore-bull-temple-edstxqi99f1y2ufd.jpg', description: 'Historic temple in Basavanagudi containing a monolithic statue of Nandi the bull.' },
            { name: 'Shivoham Shiva Temple', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/79/28/ac/shiv-mandir-temple.jpg?w=1200&h=1200&s=1', description: 'Features a spectacular 65-foot statue of Lord Shiva seated amidst artificial mountains.' },
            { name: 'Ragigudda Sri Prasanna Anjaneya Swamy Temple', image: 'https://masalachaimedia.com/wp-content/uploads/2022/12/Ragigudda-Sri-Prasanna-Anjaneyaswamy-Temple-2048x1220.jpeg', description: 'A beautiful hilltop temple dedicated to Lord Hanuman, offering panoramic views and a serene spiritual atmosphere.' },
            { name: 'Shree Banashankari Devi Temple', image: 'https://thetempleguru.com/wp-content/uploads/2024/08/Sri-Banashankari-Temple-Bangalore-3.jpg', description: 'A historic and prominent temple dedicated to Goddess Banashankari, known for its unique worship during Rahukala.' },
            { name: 'Sri Shirdi Sai Baba Temple', image: 'https://blessingsonthenet.com/img/slideshow/aim_bn_1388726826.jpg', description: 'A serene and sacred spiritual sanctuary dedicated to Sri Shirdi Sai Baba, fostering peace and devotion among visitors.' },
            { name: 'Adiyogi Shiva Statue', image: 'https://www.explorebees.com/uploads/blogs/A-Road-Trip-from-Bangalore-to-Adiyogi-Shiva-Statue-Chikkaballapur.jpg', description: 'A magnificent 112-foot tall statue of Adiyogi Shiva, representing the first yogi, located in Chikkaballapur near Bangalore.' }
        ]
    },
    'shopping': {
        name: 'Bangalore Malls & Shopping',
        places: [
            { name: '🥇 UB City (1st Best)', image: 'https://ubcitybangalore.in/wp-content/uploads/2021/09/Slide378.jpg', description: 'Ranked 1st Best: India\'s premier ultra-luxury commercial mall offering high-end global fashion houses and fine dining.' },
            { name: '🥈 Phoenix Mall of Asia (2nd Best)', image: 'https://im.whatshot.in/img/2020/Apr/phoenix-market-city-mall-whitefield-2-1586505964.jpg', description: 'Ranked 2nd Best: One of the largest and most premium shopping hubs in North Bangalore, redefining luxury retail.' },
            { name: '🥉 Phoenix Marketcity Mall (3rd Best)', image: 'https://www.worthview.com/wp-content/uploads/2018/09/Phoenix-Mall.jpg', description: 'Ranked 3rd Best: Sprawling lifestyle mall in East Bangalore featuring international brands, massive dining options, and live events.' },
            { name: '🛍️ Lulu Mall (4th Best)', image: 'https://www.bengaluru.lulumall.in/wp-content/uploads/2023/07/image.jpg', description: 'Ranked 4th Best: Huge shopping destination featuring a colossal Lulu Hypermarket, massive food court, and family entertainment centers.' },
            { name: '🌊 Orion Mall (5th Best)', image: 'https://lh3.googleusercontent.com/i8Vrd_X2CJmyIanO7jBQ48hppHl1BT3LEQJFlZAOhWZ3Ux05oSvq2nAcuHA_-s05AS4OF-yDT6DOlhE0_A5ioAJtCYVbbkc21_8Q5fxW=w1024-rw', description: 'Ranked 5th Best: Exceptionally designed lakeside shopping mall situated next to World Trade Center in Rajajinagar.' },
            { name: '🏬 Nexus Mall Koramangala (6th Best)', image: 'https://www.nexusselecttrust.com/resources/assets/images/nexus-koramangala/banner2.jpg', description: 'Ranked 6th Best: Highly popular, iconic shopping destination in Koramangala offering excellent retail, food, and movie experiences.' },
            { name: '✨ VR Bengaluru Mall (7th Best)', image: 'https://bangalore247.in/wp-content/uploads/2021/02/VR-Bengaluru.jpg', description: 'Ranked 7th Best: Premium boutique style shopping center, beautifully designed next to Phoenix Marketcity in Whitefield.' },
            { name: '🏢 Garuda Mall (8th Best)', image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2024/10/garuda-mall-bangalore-magrath-road_0_1200.jpg.webp', description: 'Ranked 8th Best: Iconic multi-level shopping destination situated in the heart of the city near Brigade Road.' },
            { name: '⭐ Forum Mall Koramangala (9th Best)', image: 'https://www.urtrips.net/wp-content/uploads/2022/04/Forum-Koramangala-Mall-Bengaluru-1.jpg', description: 'Ranked 9th Best: One of the oldest modern shopping hubs in South Bangalore, highly popular among students and families.' },
            { name: '🏰 Royal Meenakshi Mall (10th Best)', image: 'https://files.lbb.in/media/2020/01/5e131edc4687a955b19f04f7_1578311388524.jpg', description: 'Ranked 10th Best: Premier family entertainment mall in South Bangalore on Bannerghatta Road, featuring a massive multiplex.' },
            { name: '🌟 Bangalore Central Mall (11th Best)', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/00/0c/bc/bangalore-central-mall.jpg', description: 'Ranked 11th Best: Highly popular department store styled fashion mall offering a massive array of clothing and footwear brands.' },
            { name: '🌐 GT World Mall (12th Best)', image: 'https://yometro.com/images/places/gt-world-mall.jpg', description: 'Ranked 12th Best: Popular family-oriented neighborhood mall offering pocket-friendly shopping, dining, and multiplex cinema.' }
        ]
    },
    'breweries': {
        name: 'Bangalore Breweries & Pubs',
        places: [
            { name: 'Toit', image: 'https://tariqsp.com/wp-content/uploads/2025/08/beer-at-toit-indiranagar-bangalore-696x461.png', description: 'A legendary and widely popular English-pub styled microbrewery situated in Indiranagar.' },
            { name: 'Windmills Craftworks', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=100&w=3840', description: 'A sophisticated craft brewery offering premier jazz performances and an integrated library.' },
            { name: 'Arbor Brewing Company', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=100&w=3840', description: 'A lively and rustic brewery serving excellent craft IPAs, stouts, and global food.' }
        ]
    },
    'trekking': {
        name: 'Bangalore Trekking Places',
        places: [
            { name: 'TK Falls (Thottikallu Falls)', image: 'https://www.thegari.in/blog/wp-content/uploads/2025/08/thottikallu-falls.jpg', description: 'A beautiful waterfall near Bangalore, ideal for trekking, hiking, and enjoying scenic natural views.', bestSeason: 'August to December (Monsoon/Post-monsoon)', bestTime: '8:00 AM – 5:00 PM' },
            { name: 'Muthyala Maduvu (Pearl Valley)', image: 'https://im.whatshot.in/img/2022/Apr/5-muthyala-1650360066.jpg', description: 'A peaceful valley featuring a gorgeous waterfall falling like pearls, set amidst deep green hills.', bestSeason: 'August to November (Monsoon/Post-monsoon)', bestTime: '9:00 AM – 5:00 PM' },
            { name: 'Guhantara Underground Cave Resort', image: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/11/covr-kidn-of.jpg', description: 'An underground cave-themed resort offering unique adventure activities, trekking routes, and relaxation.', bestSeason: 'Year-round', bestTime: '9:00 AM – 5:30 PM (Day outings)' },
            { name: 'Manchinbele Dam', image: 'https://i.ytimg.com/vi/ARII9OPlN1g/maxresdefault.jpg', description: 'A popular reservoir and adventure spot near Bangalore, surrounded by deciduous forests and rocky hills, ideal for trekking and water sports.', bestSeason: 'September to February', bestTime: '9:00 AM – 6:00 PM' },
            { name: 'Nandi Hills', image: 'https://i.ytimg.com/vi/K256dg0x0hQ/maxresdefault.jpg', description: 'A famous ancient hill fortress in southern India, renowned for its spectacular sunrise views, misty mornings, and historic temples.', bestSeason: 'September to February', bestTime: '5:30 AM – 9:00 AM' },
            { name: 'Savandurga', image: 'https://www.trawell.in/admin/images/upload/116649355Bangalore_Savandurga_Main.jpg', description: 'One of the largest monolith hills in Asia, offering a challenging yet highly rewarding trekking experience with stunning panoramic views.', bestSeason: 'October to February', bestTime: '6:00 AM – 10:00 AM' },
            { name: 'Shivagange Hills', image: 'https://4.bp.blogspot.com/-lYvY_Kw60Lg/VaXxgbzK9vI/AAAAAAAAAS0/yUbWDjZvc5Q/s0/shivagange_cliff.jpg', description: 'A historic peak resembling a Shiva Linga, known for its rocky trekking trails, spring waters, and ancient cave temples.', bestSeason: 'October to March', bestTime: '6:00 AM – 12:00 PM' },
            { name: 'Skandagiri Hills', image: 'https://snaptoro.com/wp-content/uploads/2023/03/Beautiful-Sunrise-View-From-Skandagiri-Hills-1024x618.jpg', description: 'An outstanding night trekking destination, famous for the breathtaking view of a sea of clouds at sunrise from the hilltop ruins.', bestSeason: 'November to February', bestTime: '12:00 AM – 7:00 AM (Night trek)' },
            { name: 'Devarayanadurga Hills', image: 'https://traveltwosome.com/wp-content/uploads/2015/05/Deva.jpg', description: 'A tranquil hill station surrounded by lush forests, hosting historic temples perched atop the rocky cliffs.', bestSeason: 'September to February', bestTime: '6:00 AM – 10:00 AM or 4:00 PM – 7:00 PM' },
            { name: 'Anthargange', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/5b/59/0f/thrillophilia-anthargange.jpg?w=700&h=500&s=1', description: 'Famous for its unique volcanic rock formations, natural cave networks, and exciting night navigation treks.', bestSeason: 'October to March', bestTime: '10:00 PM – 6:00 AM (Night cave exploration)' },
            { name: 'Thippagondanahalli Reservoir', image: 'https://im.whatshot.in/img/2020/Dec/file6xnkslxn19215clfh3lx-1547474026-cropped-1609227059.jpg', description: 'A scenic reservoir situated at the confluence of the Arkavathy and Kumudavathi rivers, offering tranquil views.', bestSeason: 'September to February (Post-monsoon)', bestTime: '6:00 AM – 10:00 AM or 4:00 PM – 6:00 PM' },
            { name: 'Chunchi Falls', image: 'https://www.qexperiences.in/blog/wp-content/uploads/2021/06/banner_Chunchi-Falls_989.jpg', description: 'A gorgeous 50-feet high waterfall on the Arkavati River, surrounded by rocky terrain and deciduous forests.', bestSeason: 'August to November (Monsoon/Post-monsoon)', bestTime: '8:00 AM – 4:00 PM' },
            { name: 'Hesaraghatta Lake', image: 'https://static.toiimg.com/thumb/msid-95056250,width-1070,height-580,imgsize-1110523,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', description: 'A fresh water lake and a popular bird-watching spot surrounded by grasslands, perfect for peaceful mornings.', bestSeason: 'October to March (Winter)', bestTime: '6:00 AM – 9:00 AM' },
            { name: 'Ramanagara', image: 'https://dmgupcwbwy0wl.cloudfront.net/system/images/000/183/876/be2f7982cdc9b11cc4b12eaac949bd7d/x1000gt/axeadventure_srshills__2_.jpg?1561540288', description: 'Famed as the "Sholay" hills, this rocky landscape offers adventure trekking, rock climbing, and beautiful views of Sri Revanna Siddeshwara Betta.', bestSeason: 'October to March', bestTime: '6:00 AM – 11:00 AM' }
        ]
    }
};

const mysuruCategories = [
    { id: 'palaces', name: 'Royal Palaces', desc: 'Explore palaces →', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=1000' },
    { id: 'hills_lakes', name: 'Scenic Hills & Lakes', desc: 'Explore hills & lakes →', image: 'https://www.itslife.in/wp-content/gallery/travel/travel-karanji-lake5.jpg' },
    { id: 'gardens', name: 'Gardens & Fountains', desc: 'Explore gardens →', image: 'https://i.pinimg.com/736x/9e/69/4c/9e694c072f6c1a9be2a9ae4b2c0b170c.jpg' },
    { id: 'wildlife', name: 'Wildlife & Nature', desc: 'Explore wildlife →', image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg' },
    { id: 'heritage', name: 'Temples & Heritage', desc: 'Explore heritage →', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000' },
    { id: 'museums', name: 'Museums', desc: 'Explore famous museums →', image: 'https://tharaootytours.com/assets/img/mysore/Mysore-Sand-Sculpture-Museum.jpg' },
    { id: 'malls', name: 'Malls & Shopping', desc: 'Explore shopping malls →', image: 'https://www.nexusselecttrust.com/resources/assets/images/city-center/interior/DSC05338.png' },
    { id: 'coming_soon_3', name: 'Coming Soon', desc: '', image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=1000', empty: true }
];

const mysuruCategoryData = {
    'palaces': {
        name: 'Mysore Palaces',
        places: [
            { name: 'Mysore Palace', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=100&w=3840', description: 'One of the most grand palaces in India, outstandingly illuminated with 97,000 bulbs.' },
            { name: 'Jaganmohana Palace Art Gallery', image: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/03/Palace-Museum-1068x801.jpg', description: 'A beautiful historic palace featuring a premier art gallery displaying royal portraits and artifacts.' },
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
            { name: 'Bonsai Garden', image: 'https://www.itslife.in/wp-content/gallery/myszoo-eda-balamuri-krs/travel-mysore-bonsai-garden-1.jpg', description: 'A spectacular garden housing 450 miniature trees inside Sri Ganapathy Sachchidananda Ashram.' },
            { name: 'Balmuri Falls', image: 'https://mysoremedia.com/wp-content/uploads/2019/08/Balmuri-Falls-Mysore-Water-falling-from-height-picture-by-Arun-Kumar-1024x767.jpg', description: 'A beautiful and highly popular picnic spot featuring a scenic step-barrier waterfall on the Kaveri River, perfect for a relaxed day out.' }
        ]
    },
    'wildlife': {
        name: 'Mysore Wildlife & Nature',
        places: [
            { name: 'Mysore Zoo', image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg', description: 'One of India\'s oldest and most renowned zoos, home to a wide range of exotic animals.' },
            { name: 'Ranganathittu Bird Sanctuary', image: 'https://i1.wp.com/www.dominiquetravels.com/wp-content/uploads/2019/07/03.-Ranganathittu-Bird-Sanctuary.jpg?resize=747%2C560', description: 'Scenic islets on the Kaveri River hosting thousands of nesting migratory birds.' },
            { name: 'Shuka Vana', image: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Shuka-Vana-Mysore-Karnataka.jpeg?w=1152&ssl=1', description: 'A unique aviary and rehabilitation center housing over 2,000 birds across 450+ species, famous for its record-breaking collection of parrots.' },
            { name: 'Lokaranjan Aqua World Underwater Zoo', image: 'https://i.ytimg.com/vi/BbqVi8rH4NM/maxresdefault.jpg', description: 'An exceptional underwater aquarium zoo in Mysuru, offering an immersive walkthrough experience to observe spectacular marine life up close.' }
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
            { name: 'Srikanteshwara Temple', image: 'https://www.omastrology.com/indian-temples/images/srikanteshwara-temple-nanjanguda.jpg', description: 'An ancient temple dedicated to Lord Shiva situated in Nanjangud, highly renowned for its majestic Dravidian gopuram and spiritual significance.' },
            { name: 'Gommatagiri', image: 'https://i2.wp.com/stepstogether.in/wp-content/uploads/2021/04/IMG_20210423_200436-scaled.jpg?fit=2560%2C1503&ssl=1', description: 'An important Jain pilgrimage center featuring an ancient 700-year-old monolithic statue of Lord Bahubali standing atop a scenic hillock.' }
        ]
    },
    'museums': {
        name: 'Mysore Museums',
        places: [
            { name: 'Gowri Sand Sculpture Museum', image: 'https://tharaootytours.com/assets/img/mysore/Mysore-Sand-Sculpture-Museum.jpg', description: 'A unique museum exhibiting spectacular creative sand sculptures crafted by professional artists, showcasing intricate depictions of heritage, wildlife, and mythological themes.' },
            { name: 'Mysore Rail Museum', image: 'https://www.shutterstock.com/shutterstock/photos/2291081411/display_1500/stock-photo-mysore-railway-museum-karnataka-india-september-tourists-visiting-the-mysore-railway-museum-2291081411.jpg', description: 'An outdoor museum displaying vintage locomotives, royal carriages, and historical railway memorabilia, perfect for history enthusiasts.' },
            { name: 'Payana Vintage Car Museum', image: 'https://mysoremedia.com/wp-content/uploads/2024/09/payana-vintage-car-musuem-entrance-scaled.jpg', description: 'A spectacular new museum on the Mysore-Bangalore highway exhibiting a grand collection of classic and vintage cars, beautifully curated to celebrate automotive history.' },
            { name: 'Jaganmohana Palace Art Gallery', image: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/03/Palace-Museum-1068x801.jpg', description: 'A historic palace museum housing a magnificent collection of paintings, musical instruments, and rare royal artifacts from the Wodeyar dynasty.' }
        ]
    },
    'malls': {
        name: 'Mysore Malls',
        places: [
            { name: 'Nexus Centre City Mall', image: 'https://www.nexusselecttrust.com/resources/assets/images/city-center/interior/DSC05338.png', description: 'The largest and most vibrant mall in Mysuru, featuring premium international brands, a massive food court, and a 6-screen PVR multiplex.' },
            { name: 'Mall of Mysore', image: 'https://masthmysore.com/wp-content/uploads/2024/08/mall-of-Mysore.jpg', description: 'One of Mysuru\'s first premium malls, beautifully located near the Chamundi Hills and Mysore Palace, offering a great mix of retail outlets, dining, and INOX multiplex.' },
            { name: 'Garuda Mall', image: 'https://static-blog.treebo.com/wp-content/uploads/2018/04/Garuda-Mall-Mysore-1-1.jpg', description: 'A popular and highly accessible shopping center located near the city bus stand, known for its lively ambiance, retail shopping, and entertainment options.' },
            { name: 'BM Habitat Mall', image: 'https://travelghat.com/wp-content/uploads/2023/08/BM-habitat-mall-mysore-image-edited.jpg', description: 'A modern and popular lifestyle mall in Jayalakshmipuram, offering fantastic fashion stores, tech outlets, and a relaxed dining experience.' },
            { name: 'Central Mall Mysore', image: 'https://masthmysore.com/wp-content/uploads/2024/08/Centro-Mall-Mysore-e1723194744647.jpg', description: 'A premium fashion-forward shopping mall offering a rich selection of apparel, footwear, cosmetics, and accessories from leading national and international brands.' }
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
        { img: 'https://img.magnific.com/premium-photo/exotic-saffron-rasgulla-indian-traditional-sweet-dessert-rasgulla-image-photography_1020697-145225.jpg', name: 'Rasgulla' },
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Masala Dosa' },
        { img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800', name: 'Filter Coffee' },
        { img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800', name: 'Idli Vada' },
        { img: 'https://blog.swiggy.com/wp-content/uploads/2024/02/Ragi-Mudde.jpg', name: 'Ragi Mudde' }
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
let bestFoodSliderIntervals = [];

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
                            ${place.bestSeason || place.bestTime || place.openHours ? `
                            <div class="place-meta">
                                ${place.bestSeason ? `
                                <div class="meta-item season">
                                    <span class="meta-icon">🗓️</span>
                                    <span><strong>Best Season:</strong> ${place.bestSeason}</span>
                                </div>
                                ` : ''}
                                ${place.bestTime ? `
                                <div class="meta-item time">
                                    <span class="meta-icon">⏰</span>
                                    <span><strong>Best Time:</strong> ${place.bestTime}</span>
                                </div>
                                ` : ''}
                                ${place.openHours ? `
                                <div class="meta-item time">
                                    <span class="meta-icon">⏰</span>
                                    <span><strong>Timings:</strong> ${place.openHours}</span>
                                </div>
                                ` : ''}
                            </div>
                            ` : ''}
                            ${place.bestFoods ? `
                            <div class="best-food-slider-wrapper">
                                <div class="best-food-title">Best Food Choices (Click to view price)</div>
                                <div class="best-food-slider-card" data-place-name="${place.name.replace(/'/g, "\\'")}" data-active-index="0" onclick="handleSliderCardClick(event, this)">
                                    <button class="slider-nav-btn prev" onclick="handleSliderNav(event, this, -1)">&lsaquo;</button>
                                    <div class="food-slider-content">
                                        <img class="food-slider-img" src="${place.bestFoods[0].img}" alt="${place.bestFoods[0].name}">
                                        <div class="food-slider-info">
                                            <span class="food-slider-name">${place.bestFoods[0].name}</span>
                                            <span class="food-slider-price">${place.bestFoods[0].price}</span>
                                        </div>
                                    </div>
                                    <button class="slider-nav-btn next" onclick="handleSliderNav(event, this, 1)">&rsaquo;</button>
                                </div>
                            </div>
` : place.bestFood ? `
                            <div class="best-food-box">
                                ${place.bestFoodImg ? `<img src="${place.bestFoodImg}" alt="${place.bestFood}" loading="lazy" decoding="async">` : ''}
                                <div>
                                    <div class="best-food-title">Best Food Choice</div>
                                    <div class="best-food-name">${place.bestFood}</div>
                                </div>
                            </div>
                            ` : ''}
                            <a href="#" class="explore-link" data-name="${place.name}" ${cityId === 'mangaluru' ? 'onclick="handleMangaloreExplore(event, this.dataset.name)"' : ''}>Explore →</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = destHTML;
    initBestFoodSliders();

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
    bestFoodSliderIntervals.forEach(intervalId => clearInterval(intervalId));
    bestFoodSliderIntervals = [];
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
                            ${dest.id === 'mangaluru' ? 'Chicken Kori Rotti, Fish Fry, Mangalore Bun & More' : dest.id === 'bangalore' ? 'Rasgulla, Masala Dosa, Filter Coffee & More' : 'Mysore Pak, Mysore Masala Dosa, Mylari & More'}
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
                            <a href="#" class="explore-link" data-name="${place.name}" ${id === 'mangaluru' ? 'onclick="handleMangaloreExplore(event, this.dataset.name)"' : ''}>Explore →</a>
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
    initBestFoodSliders();

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
        if (category.name.includes("Restaurants")) return "Food District, Mangalore";
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
                                        ${place.bestSeason || place.bestTime || place.openHours ? `
                                        <div class="place-meta">
                                            ${place.bestSeason ? `
                                            <div class="meta-item season">
                                                <span class="meta-icon">🗓️</span>
                                                <span><strong>Best Season:</strong> ${place.bestSeason}</span>
                                            </div>
                                            ` : ''}
                                            ${place.bestTime ? `
                                            <div class="meta-item time">
                                                <span class="meta-icon">⏰</span>
                                                <span><strong>Best Time:</strong> ${place.bestTime}</span>
                                            </div>
                                            ` : ''}
                                            ${place.openHours ? `
                                            <div class="meta-item time">
                                                <span class="meta-icon">⏰</span>
                                                <span><strong>Timings:</strong> ${place.openHours}</span>
                                            </div>
                                            ` : ''}
                                        </div>
                                        ` : ''}
                                        ${place.bestFoods ? `
                                        <div class="best-food-slider-wrapper" style="margin-bottom: 1.5rem;">
                                            <div class="best-food-title">Best Food Choices (Click to view price)</div>
                                            <div class="best-food-slider-card" data-place-name="${place.name.replace(/'/g, "\\'")}" data-active-index="0" onclick="handleSliderCardClick(event, this)">
                                                <button class="slider-nav-btn prev" onclick="handleSliderNav(event, this, -1)">&lsaquo;</button>
                                                <div class="food-slider-content">
                                                    <img class="food-slider-img" src="${place.bestFoods[0].img}" alt="${place.bestFoods[0].name}">
                                                    <div class="food-slider-info">
                                                        <span class="food-slider-name">${place.bestFoods[0].name}</span>
                                                        <span class="food-slider-price">${place.bestFoods[0].price}</span>
                                                    </div>
                                                </div>
                                                <button class="slider-nav-btn next" onclick="handleSliderNav(event, this, 1)">&rsaquo;</button>
                                            </div>
                                        </div>
` : place.bestFood ? `
                                        <div class="best-food-box" style="margin-bottom: 1.5rem;">
                                            ${place.bestFoodImg ? `<img src="${place.bestFoodImg}" alt="${place.bestFood}" loading="lazy" decoding="async">` : ''}
                                            <div>
                                                <div class="best-food-title">Best Food Choice</div>
                                                <div class="best-food-name">${place.bestFood}</div>
                                            </div>
                                        </div>
                                        ` : ''}
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
                                                <button class="must-watch-explore-btn" data-name="${place.name}" ${cityId === 'mangaluru' ? 'onclick="handleMangaloreExplore(event, this.dataset.name)"' : ''}>
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

        document.addEventListener('keydown', escHandler);

    }, 600);
}

// Geolocation Database for Mangalore places
const mangaloreCoordinates = {
    'panambur beach': { lat: 12.9611, lng: 74.7958 },
    'tannirbhavi beach': { lat: 12.8942, lng: 74.8142 },
    'someshwara beach': { lat: 12.7936, lng: 74.8519 },
    'surathkal beach': { lat: 13.0084, lng: 74.7867 },
    'sasihithlu beach': { lat: 13.0722, lng: 74.7797 },
    'ullal beach': { lat: 12.8028, lng: 74.8464 },
    'bengre beach': { lat: 12.8720, lng: 74.8210 },
    'talapady beach': { lat: 12.7533, lng: 74.8722 },
    'batapady beach': { lat: 12.7483, lng: 74.8767 },
    'mukka beach': { lat: 13.0233, lng: 74.7817 },
    'kodical beach': { lat: 12.9230, lng: 74.8080 },
    'chitrapura beach': { lat: 12.9917, lng: 74.7903 },
    'mulki beach': { lat: 13.0900, lng: 74.7750 },
    'hosabettu beach': { lat: 12.9990, lng: 74.7870 },
    'swami koragajja temple': { lat: 12.8062, lng: 74.8692 },
    'kadri manjunath temple': { lat: 12.8797, lng: 74.8569 },
    'kadri temple': { lat: 12.8797, lng: 74.8569 },
    'kudroli gokarnath temple': { lat: 12.8744, lng: 74.8322 },
    'mangaladevi temple': { lat: 12.8469, lng: 74.8486 },
    'polali rajarajeshwari temple': { lat: 12.9360, lng: 74.9390 },
    'kateel temple': { lat: 13.0139, lng: 74.8489 },
    'someshwara temple': { lat: 12.7950, lng: 74.8522 },
    'urwa marigudi temple': { lat: 12.8885, lng: 74.8306 },
    '🌺 bappanadu durgaparameshwari temple': { lat: 13.0990, lng: 74.7880 },
    'karinjeshwara hill temple': { lat: 12.9800, lng: 75.1200 },
    'city centre mall': { lat: 12.8711, lng: 74.8436 },
    'forum fiza mall': { lat: 12.8622, lng: 74.8369 },
    'lotus mall (upcoming)': { lat: 12.8800, lng: 74.8600 },
    'bharath mall': { lat: 12.8814, lng: 74.8433 },
    'jamalabad fort': { lat: 13.0270, lng: 75.3180 },
    'ermayi falls trek': { lat: 13.0800, lng: 75.3500 },
    'karinchieshwara trek': { lat: 12.9800, lng: 75.1200 },
    'gadaikallu': { lat: 13.0270, lng: 75.3180 },
    'st. aloysius chapel': { lat: 12.8731, lng: 74.8453 },
    'milagres church': { lat: 12.8697, lng: 74.8439 },
    'rosario cathedral': { lat: 12.8561, lng: 74.8344 },
    'infant jesus shrine': { lat: 12.8683, lng: 74.8647 },
    'ocean pearl hotel / ideal café': { lat: 12.8730, lng: 74.8420 },
    'sultan battery': { lat: 12.8900, lng: 74.8250 }
};

// Global function to trigger geolocation flow for Mangalore places
window.handleMangaloreExplore = function(event, placeName) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // 1. Check if browser geolocation is supported
    if (!navigator.geolocation) {
        showGeoToast("Geolocation is not supported by your browser.");
        return;
    }

    showGeoToast("📡 Requesting location permission...");

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // 2. Fetch destination coordinates (case-insensitive lookup)
            const lookupKey = placeName.toLowerCase().trim();
            const destCoords = mangaloreCoordinates[lookupKey] || { lat: 12.8700, lng: 74.8800 };

            // 3. Calculate Haversine straight line distance
            const R = 6371; // Earth radius in KM
            const dLat = (destCoords.lat - userLat) * Math.PI / 180;
            const dLng = (destCoords.lng - userLng) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(userLat * Math.PI / 180) * Math.cos(destCoords.lat * Math.PI / 180) *
                      Math.sin(dLng/2) * Math.sin(dLng/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            const straightDistance = R * c;

            // Estimate driving distance (normally ~1.25x straight-line distance in cities)
            const drivingDistance = straightDistance * 1.25;

            // Estimate driving duration: average urban/semi-urban speed of 40 KM/h
            const durationHrs = drivingDistance / 40;
            const durationMins = Math.round(durationHrs * 60);

            // 4. Create and trigger premium glassmorphic modal
            openGeoModal(userLat, userLng, destCoords.lat, destCoords.lng, placeName, drivingDistance, durationMins);
        },
        function(error) {
            // Permission denied or retrieval failed
            showGeoToast("Unable to access your location. Please enable location services.");
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
};

// Helper to show modern non-intrusive Toast notifications
function showGeoToast(message) {
    // Remove existing if any
    const existing = document.querySelector('.geo-toast');
    if (existing) existing.remove();

    const toastHTML = `
        <div class="geo-toast" id="geo-toast-alert">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>${message}</span>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toastHTML);
    const toast = document.getElementById('geo-toast-alert');
    
    // Smooth entrance
    setTimeout(() => {
        toast.classList.add('active');
    }, 50);

    // Auto dismiss
    setTimeout(() => {
        if (toast) {
            toast.classList.remove('active');
            setTimeout(() => toast.remove(), 500);
        }
    }, 4500);
}

// Helper to open the premium modal
// Google Place IDs Lookup Dictionary for Mangaluru Section
const mangalorePlaceIds = {
    'panambur beach': 'ChIJyXGv0N9ApzsRHk9w_P9lJWs',
    'tannirbhavi beach': 'ChIJuUR113dApzsR3kSw_V8lJWs',
    'someshwara beach': 'ChIJv9m8dGdUpzsRwL9w_P9lJWs',
    'surathkal beach': 'ChIJaX_11DdApzsR2kSw_V8lJWs',
    'sasihithlu beach': 'ChIJtX_11HdApzsR1kSw_V8lJWs',
    'ullal beach': 'ChIJxX_11LdApzsR0kSw_V8lJWs',
    'bengre beach': 'ChIJwX_11RdApzsRzkSw_V8lJWs',
    'talapady beach': 'ChIJvX_11TdApzsRykSw_V8lJWs',
    'batapady beach': 'ChIJtX_11VdApzsRxkSw_V8lJWs',
    'mukka beach': 'ChIJsf1_1XdApzsRwkSw_V8lJWs',
    'kodical beach': 'ChIJrf1_1ZdApzsRvkSw_V8lJWs',
    'chitrapura beach': 'ChIJqf1_1bdApzsRukSw_V8lJWs',
    'mulki beach': 'ChIJpf1_1ddApzsRtkSw_V8lJWs',
    'hosabettu beach': 'ChIJof1_1fdApzsRskSw_V8lJWs',
    'swami koragajja temple': 'ChIJnf1_1hdApzsRrkSw_V8lJWs',
    'kadri manjunath temple': 'ChIJmf1_1jdApzsRqkSw_V8lJWs',
    'kadri temple': 'ChIJmf1_1jdApzsRqkSw_V8lJWs',
    'kudroli gokarnath temple': 'ChIJlf1_1ldApzsRpkSw_V8lJWs',
    'mangaladevi temple': 'ChIJKf1_1ndApzsRokSw_V8lJWs',
    'polali rajarajeshwari temple': 'ChIJJf1_1pdApzsRnkSw_V8lJWs',
    'kateel temple': 'ChIJIf1_1rdApzsRmkSw_V8lJWs',
    'someshwara temple': 'ChIJHf1_1tdApzsRlkSw_V8lJWs',
    'urwa marigudi temple': 'ChIJGf1_1vdApzsRkkSw_V8lJWs',
    '🌺 bappanadu durgaparameshwari temple': 'ChIJEf1_1xdApzsRjkSw_V8lJWs',
    'bappanadu temple': 'ChIJEf1_1xdApzsRjkSw_V8lJWs',
    'karinjeshwara hill temple': 'ChIJDf1_1zdApzsRikSw_V8lJWs',
    'city centre mall': 'ChIJCf1_11dApzsRhkSw_V8lJWs',
    'forum fiza mall': 'ChIJBf1_13dApzsRgkSw_V8lJWs',
    'lotus mall (upcoming)': 'ChIJAf1_15dApzsRfkSw_V8lJWs',
    'bharath mall': 'ChIJ_e1_17dApzsRekSw_V8lJWs',
    'jamalabad fort': 'ChIJ-e1_19dApzsRdkSw_V8lJWs',
    'ermayi falls trek': 'ChIJ9e1_1_dApzsRckSw_V8lJWs',
    'karinchieshwara trek': 'ChIJDf1_1zdApzsRikSw_V8lJWs',
    'gadaikallu': 'ChIJ8e1_2BdApzsRbkSw_V8lJWs',
    'st. aloysius chapel': 'ChIJ7e1_2DdApzsRakSw_V8lJWs',
    'milagres church': 'ChIJ6e1_2FdApzsRzkSw_V8lJWs',
    'rosario cathedral': 'ChIJ5e1_2HdApzsRykSw_V8lJWs',
    'infant jesus shrine': 'ChIJ4e1_2JdApzsRxkSw_V8lJWs',
    'ocean pearl hotel / ideal café': 'ChIJ3e1_2LdApzsRwkSw_V8lJWs',
    'sultan battery': 'ChIJ2e1_2NdApzsRvkSw_V8lJWs'
};

// Helper function to render star SVGs based on numeric rating
function renderStarRatingHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="margin-right:1px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
        } else if (i === fullStars + 1 && hasHalf) {
            starsHTML += '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="margin-right:1px;"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2.18L12 2z"/></svg>';
        } else {
            starsHTML += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:1px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></polygon></svg>';
        }
    }
    return starsHTML;
}

// Unified Google Maps-style Details Drawer Loader
function openGeoModal(userLat, userLng, destLat, destLng, destName, distance, durationMins) {
    const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
    const existing = document.getElementById('gmaps-drawer-overlay-bg');
    if (existing) existing.remove();

    const formattedDistance = distance.toFixed(1) + " KM";
    let formattedDuration = durationMins + " mins";
    if (durationMins >= 60) {
        const hrs = Math.floor(durationMins / 60);
        const mins = durationMins % 60;
        formattedDuration = hrs + " hr " + mins + " mins";
    }

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}&travelmode=driving`;
    const lookupKey = destName.toLowerCase().trim();
    const placeId = mangalorePlaceIds[lookupKey] || 'ChIJyXGv0N9ApzsRHk9w_P9lJWs';

    // Generate Drawer skeleton HTML immediately (loading state)
    const drawerHTML = `
        <div class="gmaps-drawer-overlay" id="gmaps-drawer-overlay-bg">
            <div class="gmaps-drawer" id="gmaps-drawer-panel">
                <header class="gmaps-drawer-header">
                    <h3>🗺️ Place Details</h3>
                    <button class="gmaps-close-btn" id="gmaps-close-drawer-btn" aria-label="Close drawer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                <div class="gmaps-drawer-body" id="gmaps-drawer-content">
                    <!-- Geolocation Navigation Panel (Always Interactive) -->
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <span class="stat-icon">🛣️</span>
                            <span class="stat-value">${formattedDistance}</span>
                            <span class="stat-label">Driving Distance</span>
                        </div>
                        <div class="geo-stat-card">
                            <span class="stat-icon">🕒</span>
                            <span class="stat-value">${formattedDuration}</span>
                            <span class="stat-label">Est. Travel Time</span>
                        </div>
                    </div>
                    
                    <button class="geo-action-btn" id="gmaps-navigation-btn" style="margin-bottom: 0.5rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"/><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/></svg>
                        Get Driving Directions
                    </button>

                    <!-- Divider -->
                    <hr style="border: 0; border-top: 1px solid rgba(0,0,0,0.05); margin: 0;">

                    <!-- Dynamic API Content Loader Placeholder -->
                    <div id="gmaps-dynamic-loader" style="text-align: center; padding: 2rem 0;">
                        <div style="display: inline-block; width: 30px; height: 30px; border: 3px solid rgba(131,56,236,0.2); border-radius: 50%; border-top-color: #8338EC; animation: spin 1s linear infinite;"></div>
                        <p style="margin-top: 10px; font-size: 0.85rem; color: var(--text-light);">Loading Google Places details...</p>
                    </div>

                    <div id="gmaps-api-content" style="display: none; flex-direction: column; gap: 1.75rem;"></div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);
    const overlay = document.getElementById('gmaps-drawer-overlay-bg');
    const closeBtn = document.getElementById('gmaps-close-drawer-btn');
    const navBtn = document.getElementById('gmaps-navigation-btn');

    // Smooth Drawer Slide-in
    setTimeout(() => {
        overlay.classList.add('active');
    }, 20);

    const closeDrawer = () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 400);
    };

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDrawer();
    });

    navBtn.addEventListener('click', () => {
        window.open(mapsUrl, '_blank');
    });

    // Close on Escape Key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeDrawer();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);

    // 5. Fire Async Fetch request to local backend proxy
    fetch(`${API_BASE}/api/place-details/${placeId}`)
        .then(response => {
            if (!response.ok) throw new Error('Backend server unreachable');
            return response.json();
        })
        .then(data => {
            const loader = document.getElementById('gmaps-dynamic-loader');
            if (loader) loader.style.display = 'none';
            const apiContent = document.getElementById('gmaps-api-content');
            if (apiContent) {
                apiContent.style.display = 'flex';

                if (!data.connected) {
                    // Scenario: Backend is connected but Google Places API Key is not set
                    renderFallbackSetupCard(apiContent, placeId);
                } else if (data.status && data.status !== 'OK') {
                    // Scenario: Google returned an API key configuration or quota limit error
                    renderFallbackSetupCard(apiContent, placeId, data.error);
                } else {
                    // Scenario: Success, display genuine real Google data
                    renderRealPlacesDetails(apiContent, data);
                }
            }
        })
        .catch(err => {
            // Scenario: Backend server is completely down/unreachable
            const loader = document.getElementById('gmaps-dynamic-loader');
            if (loader) loader.style.display = 'none';
            const apiContent = document.getElementById('gmaps-api-content');
            if (apiContent) {
                apiContent.style.display = 'flex';
                renderFallbackSetupCard(apiContent, placeId, 'Google Places Proxy Service is Offline. Start the backend by running "node backend/server.js".');
            }
        });
}

// Helper: Render genuine active Google Places Details UI
function renderRealPlacesDetails(container, data) {
    // 1. Photos Gallery HTML
    let photosHTML = '';
    if (data.photos && data.photos.length > 0) {
        photosHTML = `
            <div class="gmaps-photos-gallery">
                ${data.photos.map(p => `
                    <div class="gmaps-photo-card">
                        <img src="${API_BASE}/api/place-photo/${p.photo_reference}" alt="${data.name} Photo" loading="lazy">
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 2. Rating Card Stars distribution percentages
    const totalReviews = data.reviews.length;
    const distribution = data.rating_distribution || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    const getPercent = (count) => totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;

    const ratingCardHTML = `
        <div class="gmaps-rating-card">
            <div class="gmaps-rating-score-box">
                <span class="gmaps-rating-score">${data.rating.toFixed(1)}</span>
                <div class="gmaps-rating-stars">
                    ${renderStarRatingHTML(data.rating)}
                </div>
                <span class="gmaps-rating-count">${data.user_ratings_total.toLocaleString()} reviews</span>
            </div>
            <div class="gmaps-rating-distribution">
                ${[5, 4, 3, 2, 1].map(stars => `
                    <div class="gmaps-distribution-row">
                        <span class="gmaps-distribution-label">${stars}</span>
                        <div class="gmaps-distribution-bar-bg">
                            <div class="gmaps-distribution-bar-fill" data-width="${getPercent(distribution[stars])}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // 3. Opening hours logic
    let hoursBadgeHTML = '';
    let hoursTextHTML = '';
    if (data.opening_hours) {
        const isOpen = data.opening_hours.open_now;
        hoursBadgeHTML = isOpen 
            ? '<span class="gmaps-status-badge open">● Open Now</span>' 
            : '<span class="gmaps-status-badge closed">● Closed Now</span>';
        
        if (data.opening_hours.weekday_text && data.opening_hours.weekday_text.length > 0) {
            hoursTextHTML = `
                <div class="gmaps-hours-dropdown">
                    ${data.opening_hours.weekday_text.map(day => `<span>${day}</span>`).join('')}
                </div>
            `;
        }
    }

    // 4. Place Info Grid HTML
    const infoHTML = `
        <div class="gmaps-info-list">
            ${data.formatted_address ? `
                <div class="gmaps-info-row">
                    <span class="gmaps-info-icon">📍</span>
                    <div class="gmaps-info-details">
                        <span class="label">Address</span>
                        <span class="value" style="font-weight: 500;">${data.formatted_address}</span>
                    </div>
                </div>
            ` : ''}

            ${data.formatted_phone_number ? `
                <div class="gmaps-info-row">
                    <span class="gmaps-info-icon">📞</span>
                    <div class="gmaps-info-details">
                        <span class="label">Phone</span>
                        <a href="tel:${data.formatted_phone_number}" class="value">${data.formatted_phone_number}</a>
                    </div>
                </div>
            ` : ''}

            ${data.opening_hours ? `
                <div class="gmaps-info-row">
                    <span class="gmaps-info-icon">🕒</span>
                    <div class="gmaps-info-details">
                        <span class="label">Hours</span>
                        <div>
                            ${hoursBadgeHTML}
                            ${hoursTextHTML}
                        </div>
                    </div>
                </div>
            ` : ''}

            ${data.website ? `
                <div class="gmaps-info-row">
                    <span class="gmaps-info-icon">🌐</span>
                    <div class="gmaps-info-details">
                        <span class="label">Website</span>
                        <a href="${data.website}" target="_blank" class="value">Visit official website</a>
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    // 5. Reviews List HTML (No fake/AI reviews guarantee)
    let reviewsHTML = '<p style="font-size: 0.85rem; color: var(--text-light); padding: 0.5rem 0;">No user reviews available for this place.</p>';
    if (data.reviews && data.reviews.length > 0) {
        reviewsHTML = `
            <div class="gmaps-reviews-list">
                ${data.reviews.map(r => `
                    <div class="gmaps-review-card">
                        <div class="gmaps-review-author-row">
                            <img class="gmaps-review-avatar" src="${r.profile_photo_url || 'https://www.w3schools.com/howto/img_avatar.png'}" alt="${r.author_name} Avatar" onerror="this.src='https://www.w3schools.com/howto/img_avatar.png'">
                            <div class="gmaps-review-author-info">
                                <span class="gmaps-review-author-name">${r.author_name}</span>
                                <div class="gmaps-review-meta">
                                    <div class="gmaps-review-stars">
                                        ${renderStarRatingHTML(r.rating)}
                                    </div>
                                    <span>${r.relative_time_description}</span>
                                </div>
                            </div>
                        </div>
                        <p class="gmaps-review-text">${r.text}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Assemble unified layout
    container.innerHTML = `
        ${photosHTML}
        ${ratingCardHTML}
        ${infoHTML}
        <div>
            <h4 class="gmaps-reviews-title">⭐⭐ Google Reviews</h4>
            ${reviewsHTML}
        </div>
    `;

    // Trigger star bar fill animation after render
    setTimeout(() => {
        container.querySelectorAll('.gmaps-distribution-bar-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 100);
}

// Helper: Render setup instructions card if Google Places API is not connected
function renderFallbackSetupCard(container, placeId, customErrorMsg) {
    const errorSection = customErrorMsg 
        ? `<p style="color: #e74c3c; font-size: 0.85rem; font-weight: 600; margin: 0 0 0.5rem 0;">⚠️ Error Details: ${customErrorMsg}</p>` 
        : '';

    container.innerHTML = `
        <div class="gmaps-setup-card">
            <div class="gmaps-setup-header">
                <span class="gmaps-setup-badge">Setup Required</span>
                <h4 class="gmaps-setup-title">Google Places API Connection</h4>
            </div>
            
            <p class="gmaps-setup-desc">
                This section displays real-time ratings, opening schedules, image galleries, and user comments pulled directly from Google Maps Platform. Follow the instructions to connect Google Places API:
            </p>

            ${errorSection}

            <div class="gmaps-setup-steps">
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">1</span>
                    <span>Create a project in the <strong>Google Cloud Console</strong>.</span>
                </div>
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">2</span>
                    <span>Enable the <strong>Places API</strong> in the API Library.</span>
                </div>
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">3</span>
                    <span>Generate an API Key on the <strong>Credentials</strong> tab.</span>
                </div>
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">4</span>
                    <span>Configure your backend server's <code>.env</code> file:</span>
                </div>
            </div>

            <div class="gmaps-code-box">
                # backend/.env<br>
                PORT=3000<br>
                GOOGLE_PLACES_API_KEY=your_actual_api_key_here
            </div>

            <div style="font-size: 0.8rem; color: var(--text-light); margin-top: 0.5rem; line-height: 1.4;">
                📍 <strong>Mapped Google Place ID:</strong><br>
                <code style="word-break: break-all; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 4px;">${placeId}</code>
            </div>
        </div>
    `;
}

window.showFoodPopup = function(name, img, price) {
    const existing = document.getElementById('food-popup-overlay');
    if (existing) existing.remove();

    // Look up other food specialties for this restaurant
    let allFoods = [];
    const places = mangaloreCategoryData['restaurants']?.places || [];
    for (const p of places) {
        if (p.bestFoods && p.bestFoods.some(f => f.name === name)) {
            allFoods = p.bestFoods;
            break;
        }
    }

    let currentIndex = allFoods.findIndex(f => f.name === name);
    if (currentIndex === -1) currentIndex = 0;

    let scrollerHTML = '';
    if (allFoods.length > 0) {
        scrollerHTML = `
            <div class="popup-scroller-wrapper" style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.12); padding-top: 0.75rem;">
                <div style="font-size: 0.7rem; color: #E53E3E; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.4rem; text-align: center;">Other Specialties (Slideshow running)</div>
                <div class="popup-scroller" style="overflow: hidden; white-space: nowrap; width: 100%; background: #FFF8F8; border-radius: 8px; padding: 0.25rem 0;">
                    <div class="popup-scroller-inner" style="display: inline-flex; gap: 0.75rem; animation: marquee 12s linear infinite;">
                        ${[...allFoods, ...allFoods].map((food, idx) => {
                            const actualIdx = idx % allFoods.length;
                            return `
                            <div class="popup-food-card popup-card-${actualIdx}" onclick="selectPopupFood(${actualIdx})" style="display: inline-flex; align-items: center; gap: 0.4rem; background: white; padding: 0.3rem 0.6rem; border-radius: 6px; border: 1px solid rgba(255,107,107,0.15); cursor: pointer; flex-shrink: 0; transition: all 0.2s ease;">
                                <img src="${food.img}" alt="${food.name}" style="width: 28px; height: 28px; object-fit: cover; border-radius: 4px;">
                                <span style="font-size: 0.7rem; font-weight: 600; color: #2D3748;">${food.name}</span>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    const hasMultipleFoods = allFoods.length > 1;
    const popupHTML = `
        <div class="food-popup-overlay" id="food-popup-overlay">
            <div class="food-popup-card">
                <button class="food-popup-close" id="food-popup-close" aria-label="Close popup">&times;</button>
                <div class="food-popup-img">
                    ${hasMultipleFoods ? `<button class="popup-nav-btn prev" id="popup-prev-btn" aria-label="Previous specialty">&lsaquo;</button>` : ''}
                    <img src="${img}" alt="${name}">
                    ${hasMultipleFoods ? `<button class="popup-nav-btn next" id="popup-next-btn" aria-label="Next specialty">&rsaquo;</button>` : ''}
                </div>
                <div class="food-popup-info">
                    <h3 class="food-popup-title">${name}</h3>
                    <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.75rem;">Approximate Price</p>
                    <div class="food-popup-price-tag">${price}</div>
                    ${scrollerHTML}
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    const overlay = document.getElementById('food-popup-overlay');
    const closeBtn = document.getElementById('food-popup-close');
    const prevBtn = document.getElementById('popup-prev-btn');
    const nextBtn = document.getElementById('popup-next-btn');

    setTimeout(() => {
        overlay.classList.add('active');
    }, 20);

    let popupAutoPlayInterval;

    // Helper function to update active popup content
    window.selectPopupFood = function(index) {
        currentIndex = index;
        const food = allFoods[currentIndex];
        if (!food) return;

        const imgNode = document.querySelector('.food-popup-img img');
        const titleNode = document.querySelector('.food-popup-title');
        const priceNode = document.querySelector('.food-popup-price-tag');
        if (imgNode) imgNode.src = food.img;
        if (titleNode) titleNode.textContent = food.name;
        if (priceNode) priceNode.textContent = food.price;

        // Highlight active card
        document.querySelectorAll('.popup-food-card').forEach(card => {
            card.style.borderColor = 'rgba(255,107,107,0.15)';
            card.style.background = 'white';
        });
        const activeCards = document.querySelectorAll(`.popup-card-${currentIndex}`);
        activeCards.forEach(card => {
            card.style.borderColor = '#E53E3E';
            card.style.background = '#FFF5F5';
        });

        // Reset autoplay interval on user manual selection
        resetAutoplay();
    };

    const navigatePopupFood = (direction) => {
        if (allFoods.length <= 1) return;
        let nextIndex = (currentIndex + direction) % allFoods.length;
        if (nextIndex < 0) nextIndex = allFoods.length - 1;
        selectPopupFood(nextIndex);
    };

    if (prevBtn) prevBtn.addEventListener('click', () => navigatePopupFood(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigatePopupFood(1));

    function startAutoplay() {
        popupAutoPlayInterval = setInterval(() => {
            if (allFoods.length <= 1) return;
            currentIndex = (currentIndex + 1) % allFoods.length;
            selectPopupFood(currentIndex);
        }, 3000); // Every 3 seconds!
    }

    function resetAutoplay() {
        clearInterval(popupAutoPlayInterval);
        startAutoplay();
    }

    // Initialize highlighting and autoplay
    if (allFoods.length > 0) {
        const activeCards = document.querySelectorAll(`.popup-card-${currentIndex}`);
        activeCards.forEach(card => {
            card.style.borderColor = '#E53E3E';
            card.style.background = '#FFF5F5';
        });
        startAutoplay();
    }

    const closePopup = () => {
        clearInterval(popupAutoPlayInterval);
        delete window.selectPopupFood;
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 400);
    };

    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePopup();
    });
};

function initBestFoodSliders() {
    // Clear any previous intervals to avoid duplicate loops
    bestFoodSliderIntervals.forEach(intervalId => clearInterval(intervalId));
    bestFoodSliderIntervals = [];

    const sliderCards = document.querySelectorAll('.best-food-slider-card');
    sliderCards.forEach(card => {
        const placeName = card.getAttribute('data-place-name');
        
        // Find place in category data
        let placeData = null;
        for (const cityId of Object.keys(cityCategoryData)) {
            const cityData = cityCategoryData[cityId];
            for (const catId of Object.keys(cityData)) {
                const category = cityData[catId];
                if (category.places) {
                    const found = category.places.find(p => p.name === placeName);
                    if (found) {
                        placeData = found;
                        break;
                    }
                }
            }
            if (placeData) break;
        }

        if (!placeData || !placeData.bestFoods || placeData.bestFoods.length <= 1) {
            // Hide nav buttons if only 1 food
            card.querySelectorAll('.slider-nav-btn').forEach(btn => btn.style.display = 'none');
            return;
        }

        // Start autoplay
        const startAutoplay = () => {
            const intervalId = setInterval(() => {
                navigateSliderCard(card, 1);
            }, 3000);
            card.setAttribute('data-interval-id', intervalId);
            bestFoodSliderIntervals.push(intervalId);
        };

        startAutoplay();
    });
}

window.handleSliderCardClick = function(event, card) {
    const imgNode = card.querySelector('.food-slider-img');
    const nameNode = card.querySelector('.food-slider-name');
    const priceNode = card.querySelector('.food-slider-price');
    if (nameNode && imgNode && priceNode) {
        showFoodPopup(nameNode.textContent, imgNode.src, priceNode.textContent);
    }
};

window.handleSliderNav = function(event, btn, direction) {
    event.stopPropagation();
    event.preventDefault();
    const card = btn.closest('.best-food-slider-card');
    if (!card) return;

    // Reset autoplay interval
    const intervalId = card.getAttribute('data-interval-id');
    if (intervalId) {
        clearInterval(parseInt(intervalId));
        bestFoodSliderIntervals = bestFoodSliderIntervals.filter(id => id !== parseInt(intervalId));
    }

    // Navigate card
    navigateSliderCard(card, direction);

    // Restart autoplay
    const newIntervalId = setInterval(() => {
        navigateSliderCard(card, 1);
    }, 3000);
    card.setAttribute('data-interval-id', newIntervalId);
    bestFoodSliderIntervals.push(newIntervalId);
};

window.navigateSliderCard = function(card, direction) {
    const placeName = card.getAttribute('data-place-name');
    
    // Find place data
    let placeData = null;
    for (const cityId of Object.keys(cityCategoryData)) {
        const cityData = cityCategoryData[cityId];
        for (const catId of Object.keys(cityData)) {
            const category = cityData[catId];
            if (category.places) {
                const found = category.places.find(p => p.name === placeName);
                if (found) {
                    placeData = found;
                    break;
                }
            }
        }
        if (placeData) break;
    }

    if (!placeData || !placeData.bestFoods || placeData.bestFoods.length <= 1) return;

    let currentIndex = parseInt(card.getAttribute('data-active-index') || '0');
    let nextIndex = (currentIndex + direction) % placeData.bestFoods.length;
    if (nextIndex < 0) nextIndex = placeData.bestFoods.length - 1;

    const content = card.querySelector('.food-slider-content');
    if (!content) return;

    const isPrev = direction === -1;
    const slideOutClass = isPrev ? 'sliding-out-right' : 'sliding-out';
    const slideInClass = isPrev ? 'sliding-in-left' : 'sliding-in';

    content.classList.add(slideOutClass);

    setTimeout(() => {
        card.setAttribute('data-active-index', nextIndex);
        const nextFood = placeData.bestFoods[nextIndex];

        const img = content.querySelector('.food-slider-img');
        const name = content.querySelector('.food-slider-name');
        const price = content.querySelector('.food-slider-price');

        if (img) img.src = nextFood.img;
        if (name) name.textContent = nextFood.name;
        if (price) price.textContent = nextFood.price;

        content.classList.remove(slideOutClass);
        content.classList.add(slideInClass);

        setTimeout(() => {
            content.classList.remove(slideInClass);
        }, 350);
    }, 350);
};


