import React, { useState, useEffect } from 'react';

export default function CountriesHighlight() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const countries = [
    {
      id: 1,
      name: "Japan",
      flag: "🇯🇵",
      image: "https://images.unsplash.com/photo-1540959733332-abc0499434c1?w=400&h=250&fit=crop",
      summary: "Ancient traditions meet cutting-edge technology.",
      cultureLink: "https://www.japan.travel/en/culture/",
      categories: [
        { icon: "🍣", name: "Sushi & Ramen", description: "World-renowned cuisine" },
        { icon: "🎎", name: "Traditional Arts", description: "Tea ceremony, Ikebana" },
        { icon: "🏯", name: "Heritage Sites", description: "Temples & Castles" },
        { icon: "🎌", name: "Festivals", description: "Matsuri celebrations" }
      ]
    },
    {
      id: 2,
      name: "India",
      flag: "🇮🇳",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop",
      summary: "Diverse festivals and rich culinary heritage.",
      cultureLink: "https://www.incredibleindia.org/content/incredibleindia/en/culture.html",
      categories: [
        { icon: "🍛", name: "Curry Culture", description: "Spices & flavors" },
        { icon: "🕌", name: "Architecture", description: "Taj Mahal & temples" },
        { icon: "🎪", name: "Festivals", description: "Diwali, Holi" },
        { icon: "🧘", name: "Yoga Heritage", description: "Ancient practices" }
      ]
    },
    {
        id: 3,
        name: "Italy",
        flag: "🇮🇹",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop",
        summary: "Artistic legacy and world-famous cuisine.",
        cultureLink: "https://www.italia.it/en/culture",
        categories: [
          { icon: "🍕", name: "Italian Cuisine", description: "Pizza & Pasta" },
          { icon: "🎨", name: "Renaissance Art", description: "Da Vinci, Michelangelo" },
          { icon: "🏛️", name: "Roman Heritage", description: "Colosseum & ruins" },
          { icon: "🎭", name: "Opera", description: "Musical tradition" }
        ]
      },
      {
        id: 4,
        name: "Brazil",
        flag: "🇧🇷",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=250&fit=crop",
        summary: "Vibrant carnival and Amazonian diversity.",
        cultureLink: "https://www.visitbrasil.com/en/culture/",
        categories: [
          { icon: "🎉", name: "Carnival", description: "Samba & celebrations" },
          { icon: "⚽", name: "Football", description: "National passion" },
          { icon: "🌳", name: "Amazon Culture", description: "Indigenous heritage" },
          { icon: "🍖", name: "Churrasco", description: "BBQ traditions" }
        ]
      },
      {
        id: 5,
        name: "Mexico",
        flag: "🇲🇽",
        image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=400&h=250&fit=crop",
        summary: "Colorful traditions and ancient heritage.",
        cultureLink: "https://www.visitmexico.com/en/culture",
        categories: [
          { icon: "🌮", name: "Mexican Food", description: "Tacos & Mole" },
          { icon: "💀", name: "Día de Muertos", description: "Unique celebration" },
          { icon: "🏺", name: "Mayan Ruins", description: "Ancient civilization" },
          { icon: "🎺", name: "Mariachi", description: "Traditional music" }
        ]
      },
      {
        id: 6,
        name: "Egypt",
        flag: "🇪🇬",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop",
        summary: "Pharaohs and timeless archaeological wonders.",
        cultureLink: "https://www.egypt.travel/culture",
        categories: [
          { icon: "🐫", name: "Ancient History", description: "Pyramids & Pharaohs" },
          { icon: "🕌", name: "Islamic Art", description: "Mosques & calligraphy" },
          { icon: "🫓", name: "Egyptian Bread", description: "Aish Baladi" },
          { icon: "📜", name: "Hieroglyphics", description: "Ancient writing" }
        ]
      },
      {
        id: 7,
        name: "France",
        flag: "🇫🇷",
        image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=250&fit=crop",
        summary: "Romantic art, fashion, and gourmet cuisine.",
        cultureLink: "https://www.france.fr/en/culture",
        categories: [
          { icon: "🍷", name: "Wine & Cheese", description: "Culinary excellence" },
          { icon: "🎨", name: "Art Museums", description: "Louvre & Orsay" },
          { icon: "👗", name: "Fashion", description: "Haute couture" },
          { icon: "🏰", name: "Châteaux", description: "Loire Valley" }
        ]
      },
      {
        id: 8,
        name: "Thailand",
        flag: "🇹🇭",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=250&fit=crop",
        summary: "Golden temples and flavorful street food.",
        cultureLink: "https://www.tourismthailand.org/Culture",
        categories: [
          { icon: "🍜", name: "Street Food", description: "Pad Thai & more" },
          { icon: "🛕", name: "Buddhist Temples", description: "Wat architecture" },
          { icon: "🎭", name: "Thai Dance", description: "Traditional performance" },
          { icon: "🎉", name: "Songkran", description: "Water festival" }
        ]
      },
      {
        id: 9,
        name: "Spain",
        flag: "🇪🇸",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=250&fit=crop",
        summary: "Flamenco, fiestas, and architectural marvels.",
        cultureLink: "https://www.spain.info/en/culture/",
        categories: [
          { icon: "💃", name: "Flamenco", description: "Music & dance" },
          { icon: "🏰", name: "Moorish Architecture", description: "Alhambra" },
          { icon: "🍷", name: "Tapas Culture", description: "Social dining" },
          { icon: "🎭", name: "La Tomatina", description: "Unique festival" }
        ]
      },
      {
        id: 10,
        name: "Greece",
        flag: "🇬🇷",
        image: "https://images.unsplash.com/photo-1536152470836-b943b246224c?w=400&h=250&fit=crop",
        summary: "Mythological history and Mediterranean charm.",
        cultureLink: "https://www.visitgreece.gr/culture/",
        categories: [
          { icon: "🏛️", name: "Ancient Philosophy", description: "Aristotle, Plato" },
          { icon: "🏺", name: "Mythology", description: "Gods & heroes" },
          { icon: "🫒", name: "Mediterranean Diet", description: "Olive oil & feta" },
          { icon: "🏝️", name: "Island Culture", description: "Unique traditions" }
        ]
      },
      {
        id: 11,
        name: "China",
        flag: "🇨🇳",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=250&fit=crop",
        summary: "Ancient civilization and modern innovation.",
        cultureLink: "https://www.cultural-china.com/",
        categories: [
          { icon: "🐉", name: "Chinese New Year", description: "Lunar celebrations" },
          { icon: "🥢", name: "Regional Cuisine", description: "8 great traditions" },
          { icon: "🖋️", name: "Calligraphy", description: "Ancient art form" },
          { icon: "🏮", name: "Festivals", description: "Dragon boat, Mid-autumn" }
        ]
      },
      {
        id: 12,
        name: "Turkey",
        flag: "🇹🇷",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop",
        summary: "Where East meets West in harmony.",
        cultureLink: "https://goturkiye.com/culture",
        categories: [
          { icon: "🕌", name: "Ottoman Heritage", description: "Hagia Sophia" },
          { icon: "🍖", name: "Turkish Cuisine", description: "Kebabs & Baklava" },
          { icon: "🧿", name: "Traditional Arts", description: "Nazar, ceramics" },
          { icon: "🛁", name: "Hammam Culture", description: "Bath traditions" }
        ]
      },
      {
        id: 13,
        name: "Morocco",
        flag: "🇲🇦",
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=400&h=250&fit=crop",
        summary: "Magical markets and desert adventures.",
        cultureLink: "https://www.visitmorocco.com/en/culture",
        categories: [
          { icon: "🏺", name: "Berber Culture", description: "Indigenous heritage" },
          { icon: "🕌", name: "Islamic Architecture", description: "Mosques & palaces" },
          { icon: "🧿", name: "Souk Markets", description: "Traditional shopping" },
          { icon: "🍵", name: "Mint Tea", description: "Hospitality symbol" }
        ]
      },
      {
        id: 14,
        name: "Peru",
        flag: "🇵🇪",
        image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&h=250&fit=crop",
        summary: "Inca heritage and Andean traditions.",
        cultureLink: "https://www.peru.travel/culture",
        categories: [
          { icon: "🏔️", name: "Inca Trail", description: "Machu Picchu" },
          { icon: "🦙", name: "Andean Culture", description: "Textiles & music" },
          { icon: "🍲", name: "Peruvian Food", description: "Ceviche & potatoes" },
          { icon: "🎭", name: "Festivals", description: "Inti Raymi" }
        ]
      },
      {
        id: 15,
        name: "South Korea",
        flag: "🇰🇷",
        image: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed1?w=400&h=250&fit=crop",
        summary: "K-pop, kimchi, and technological innovation.",
        cultureLink: "https://english.visitkorea.or.kr/enu/CU/CU_EN_8_1_1.jsp",
        categories: [
          { icon: "🍚", name: "Korean BBQ", description: "Kimchi & banchan" },
          { icon: "💃", name: "K-Pop Culture", description: "Music & entertainment" },
          { icon: "🎎", name: "Hanbok", description: "Traditional clothing" },
          { icon: "🏯", name: "Palaces", description: "Gyeongbokgung" }
        ]
      },
      {
        id: 16,
        name: "Vietnam",
        flag: "🇻🇳",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=250&fit=crop",
        summary: "Ancient temples and bustling street life.",
        cultureLink: "https://vietnam.travel/culture",
        categories: [
          { icon: "🍜", name: "Pho & Street Food", description: "Noodle soups & banh mi" },
          { icon: "🛕", name: "Buddhist Pagodas", description: "Ancient architecture" },
          { icon: "👒", name: "Traditional Hats", description: "Non la conical hats" },
          { icon: "🎪", name: "Water Puppetry", description: "Unique art form" }
        ]
      },
      {
        id: 17,
        name: "Ireland",
        flag: "🇮🇪",
        image: "https://images.unsplash.com/photo-1508606572321-5019ffdc73b2?w=400&h=250&fit=crop",
        summary: "Celtic traditions and literary heritage.",
        cultureLink: "https://www.ireland.com/en-us/culture/",
        categories: [
          { icon: "🍀", name: "Celtic Heritage", description: "Ancient traditions" },
          { icon: "📚", name: "Literary Legacy", description: "Joyce, Yeats, Beckett" },
          { icon: "🎻", name: "Traditional Music", description: "Fiddle & bodhrán" },
          { icon: "🍺", name: "Pub Culture", description: "Social gatherings" }
        ]
      },
      {
        id: 18,
        name: "Portugal",
        flag: "🇵🇹",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=250&fit=crop",
        summary: "Fado music and maritime history.",
        cultureLink: "https://www.visitportugal.com/en/culture",
        categories: [
          { icon: "🎵", name: "Fado Music", description: "Soulful tradition" },
          { icon: "🏰", name: "Manueline Architecture", description: "Maritime style" },
          { icon: "🍷", name: "Port Wine", description: "World-famous" },
          { icon: "🐠", name: "Maritime Heritage", description: "Age of Discoveries" }
        ]
      },
      {
        id: 19,
        name: "Kenya",
        flag: "🇰🇪",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=250&fit=crop",
        summary: "Wildlife safaris and Maasai culture.",
        cultureLink: "https://www.magicalkenya.com/culture/",
        categories: [
          { icon: "🦁", name: "Wildlife Safari", description: "Big Five animals" },
          { icon: "👑", name: "Maasai Culture", description: "Indigenous traditions" },
          { icon: "🥁", name: "Drum Music", description: "Rhythmic beats" },
          { icon: "🏃", name: "Marathon Legacy", description: "Running champions" }
        ]
      },
      {
        id: 20,
        name: "Argentina",
        flag: "🇦🇷",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=250&fit=crop",
        summary: "Tango, gauchos, and Patagonian landscapes.",
        cultureLink: "https://argentina.travel/en/culture",
        categories: [
          { icon: "💃", name: "Tango Dance", description: "Passionate tradition" },
          { icon: "🤠", name: "Gaucho Culture", description: "Cowboy heritage" },
          { icon: "🍖", name: "Asado BBQ", description: "Social gatherings" },
          { icon: "🏔️", name: "Patagonia", description: "Wild landscapes" }
        ]
      },
      {
        id: 21,
        name: "Russia",
        flag: "🇷🇺",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&h=250&fit=crop",
        summary: "Ballet, literature, and imperial history.",
        cultureLink: "https://www.russia.travel/culture",
        categories: [
          { icon: "🩰", name: "Ballet", description: "Bolshoi tradition" },
          { icon: "📖", name: "Literature", description: "Dostoevsky, Tolstoy" },
          { icon: "🏰", name: "Imperial Palaces", description: "Winter Palace" },
          { icon: "🪆", name: "Matryoshka", description: "Nesting dolls" }
        ]
      },
      {
        id: 22,
        name: "Canada",
        flag: "🇨🇦",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=250&fit=crop",
        summary: "Multicultural mosaic and natural wonders.",
        cultureLink: "https://www.canada.ca/en/canadian-heritage/services/culture.html",
        categories: [
          { icon: "🏒", name: "Ice Hockey", description: "National sport" },
          { icon: "🍁", name: "Indigenous Arts", description: "First Nations" },
          { icon: "🎭", name: "Multicultural Festivals", description: "Diverse celebrations" },
          { icon: "🏞️", name: "Natural Heritage", description: "National parks" }
        ]
      },
      {
        id: 23,
        name: "Germany",
        flag: "🇩🇪",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
        summary: "Castles, classical music, and innovation.",
        cultureLink: "https://www.germany.travel/en/culture.html",
        categories: [
          { icon: "🏰", name: "Fairy Tale Castles", description: "Neuschwanstein" },
          { icon: "🎵", name: "Classical Music", description: "Beethoven, Bach" },
          { icon: "🍺", name: "Oktoberfest", description: "Beer festival" },
          { icon: "🚗", name: "Automotive Heritage", description: "Engineering excellence" }
        ]
      },
      {
        id: 24,
        name: "Indonesia",
        flag: "🇮🇩",
        image: "https://images.unsplash.com/photo-1539367628447-021a5c83d851?w=400&h=250&fit=crop",
        summary: "Island diversity and ancient temples.",
        cultureLink: "https://www.indonesia.travel/culture",
        categories: [
          { icon: "🛕", name: "Borobudur Temple", description: "Buddhist monument" },
          { icon: "💃", name: "Traditional Dance", description: "Bali & Java styles" },
          { icon: "🍚", name: "Rice Terraces", description: "Agricultural heritage" },
          { icon: "🏝️", name: "Island Diversity", description: "17,000 islands" }
        ]
      },
      {
        id: 25,
        name: "South Africa",
        flag: "🇿🇦",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=400&h=250&fit=crop",
        summary: "Rainbow nation and wildlife heritage.",
        cultureLink: "https://www.southafrica.net/gl/culture",
        categories: [
          { icon: "🌈", name: "Rainbow Nation", description: "Multicultural society" },
          { icon: "🦁", name: "Safari Culture", description: "Big Five wildlife" },
          { icon: "🎵", name: "Music Heritage", description: "Jazz & traditional" },
          { icon: "🍷", name: "Wine Lands", description: "Cape wineries" }
        ]
      },
      {
        id: 26,
        name: "Malaysia",
        flag: "🇲🇾",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197b06?w=400&h=250&fit=crop",
        summary: "Tropical paradise with cultural fusion.",
        cultureLink: "https://www.tourism.gov.my/culture",
        categories: [
          { icon: "🕌", name: "Islamic Heritage", description: "Mosques & culture" },
          { icon: "🍛", name: "Nyonya Cuisine", description: "Chinese-Malay fusion" },
          { icon: "🏙️", name: "Modern Architecture", description: "Petronas Towers" },
          { icon: "🌴", name: "Rainforest Culture", description: "Borneo heritage" }
        ]
      },
      {
        id: 27,
        name: "Philippines",
        flag: "🇵🇭",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop",
        summary: "Island festivals and warm hospitality.",
        cultureLink: "https://www.tourism.gov.ph/culture",
        categories: [
          { icon: "🎪", name: "Fiestas", description: "Colorful festivals" },
          { icon: "🏝️", name: "Island Culture", description: "7,641 islands" },
          { icon: "🎵", name: "Karaoke", description: "National pastime" },
          { icon: "🍚", name: "Rice Terraces", description: "Ifugao heritage" }
        ]
      },
      {
        id: 28,
        name: "Colombia",
        flag: "🇨🇴",
        image: "https://images.unsplash.com/photo-1587595432887-8d59e45f1c0e?w=400&h=250&fit=crop",
        summary: "Coffee culture and Caribbean rhythms.",
        cultureLink: "https://colombia.travel/en/culture",
        categories: [
          { icon: "☕", name: "Coffee Culture", description: "World's best coffee" },
          { icon: "💃", name: "Salsa Music", description: "Caribbean rhythms" },
          { icon: "🌺", name: "Flower Festival", description: "Medellín celebration" },
          { icon: "🏺", name: "Pre-Columbian Art", description: "Gold Museum" }
        ]
      },
      {
        id: 29,
        name: "Netherlands",
        flag: "🇳🇱",
        image: "https://images.unsplash.com/photo-1506905925340-14faa638f6c2?w=400&h=250&fit=crop",
        summary: "Windmills, tulips, and artistic legacy.",
        cultureLink: "https://www.holland.com/global/tourism/culture.htm",
        categories: [
          { icon: "🌷", name: "Tulip Fields", description: "Floral heritage" },
          { icon: "🎨", name: "Dutch Masters", description: "Rembrandt, Vermeer" },
          { icon: "🚲", name: "Bicycle Culture", description: "National transport" },
          { icon: "🏠", name: "Canal Houses", description: "Amsterdam architecture" }
        ]
      },
  ];

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.categories.some(cat => 
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const cardsPerPage = 6;
  const totalPages = Math.ceil(filteredCountries.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const currentCountries = filteredCountries.slice(startIndex, startIndex + cardsPerPage);

  const handleCardClick = (cultureLink) => {
    window.open(cultureLink, '_blank', 'noopener,noreferrer');
  };

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);

  // Responsive Styles
  const containerStyle = {
    padding: 'clamp(1rem, 5vw, 2rem) clamp(0.5rem, 3vw, 1rem)',
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
   
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: 'clamp(1.5rem, 6vw, 3rem)'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: 'clamp(0.5rem, 3vw, 1rem)',
    color: 'white',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    lineHeight: '1.2',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 'clamp(1rem, 4vw, 2rem)',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
    lineHeight: '1.4',
    padding: '0 clamp(1rem, 5vw, 2rem)'
  };

  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 'clamp(1.5rem, 5vw, 2rem)',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const searchStyle = {
    padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 25px)',
    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
    border: `2px solid ${isSearchActive ? '#667eea' : 'rgba(255, 255, 255, 0.3)'}`,
    borderRadius: '25px',
    width: '100%',
    maxWidth: 'min(500px, 90vw)',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: isSearchActive ? '0 0 0 3px rgba(102, 126, 234, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
    gap: 'clamp(1rem, 4vw, 2rem)',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 'clamp(15px, 4vw, 20px)',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative'
  };

  const imageStyle = {
    width: '100%',
    height: 'clamp(180px, 40vw, 200px)',
    objectFit: 'cover',
    display: 'block',
    transition: 'all 0.3s ease'
  };

  const cardContentStyle = {
    padding: 'clamp(1rem, 4vw, 1.5rem)',
    position: 'relative'
  };

  const flagStyle = {
    fontSize: 'clamp(1.8rem, 6vw, 2rem)',
    marginBottom: 'clamp(0.5rem, 3vw, 0.8rem)'
  };

  const nameStyle = {
    fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
    fontWeight: '600',
    marginBottom: 'clamp(0.5rem, 3vw, 0.8rem)',
    color: '#2c3e50',
    transition: 'all 0.3s ease',
    lineHeight: '1.3'
  };

  const summaryStyle = {
    fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
    color: '#7f8c8d',
    lineHeight: '1.5',
    margin: '0 0 clamp(1rem, 4vw, 1.5rem) 0',
    transition: 'all 0.3s ease'
  };

  const categoriesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'clamp(0.6rem, 2vw, 0.8rem)',
    marginTop: 'clamp(0.8rem, 3vw, 1rem)'
  };

  const categoryStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(0.3rem, 2vw, 0.5rem)',
    padding: 'clamp(0.5rem, 2vw, 0.6rem) clamp(0.6rem, 2vw, 0.8rem)',
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 'clamp(8px, 2vw, 10px)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102, 126, 234, 0.2)',
    minHeight: '50px'
  };

  const categoryIconStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    transition: 'all 0.3s ease',
    flexShrink: 0
  };

  const categoryTextStyle = {
    fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)',
    fontWeight: '500',
    color: '#2c3e50',
    lineHeight: '1.2'
  };

  const categoryDescriptionStyle = {
    fontSize: 'clamp(0.6rem, 2vw, 0.7rem)',
    color: '#7f8c8d',
    marginTop: '2px'
  };

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'clamp(1rem, 3vw, 1.5rem)',
    marginTop: 'clamp(2rem, 6vw, 3rem)',
    flexWrap: 'wrap',
    padding: '0 clamp(0.5rem, 3vw, 1rem)'
  };

  const buttonStyle = {
    padding: 'clamp(10px, 3vw, 14px) clamp(20px, 4vw, 28px)',
    backgroundColor: 'rgba(102, 126, 234, 0.9)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    minWidth: 'clamp(100px, 20vw, 120px)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  };

  const pageInfoStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    color: 'white',
    fontWeight: '500',
    padding: '0 clamp(0.5rem, 2vw, 1rem)',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'center'
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: 'clamp(2rem, 8vw, 4rem) clamp(1rem, 4vw, 2rem)',
    color: 'white',
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Explore World Cultures</h1>
          <p style={subtitleStyle}>
            Discover authentic cultural heritage with official categories
          </p>
        </div>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="🔍 Search countries, cultures, or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            style={searchStyle}
          />
        </div>

        {/* Countries Grid */}
        {filteredCountries.length > 0 ? (
          <>
            <div style={gridStyle}>
              {currentCountries.map((country) => (
                <div
                  key={country.id}
                  style={cardStyle}
                  onClick={() => handleCardClick(country.cultureLink)}
                  onMouseEnter={() => setHoveredCard(country.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img 
                    src={country.image} 
                    alt={country.name}
                    style={{
                      ...imageStyle,
                      filter: hoveredCard === country.id ? 'brightness(1.1)' : 'brightness(1)',
                      transform: hoveredCard === country.id ? 'scale(1.02)' : 'scale(1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback with colored background */}
                  <div style={{
                    width: '100%',
                    height: 'clamp(180px, 40vw, 200px)',
                    backgroundColor: `hsl(${country.id * 12}, 70%, 85%)`,
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(2.5rem, 8vw, 3rem)',
                    fontWeight: 'bold'
                  }}>
                    {country.flag}
                  </div>
                  
                  <div style={cardContentStyle}>
                    <div style={flagStyle}>{country.flag}</div>
                    <h3 style={{
                      ...nameStyle,
                      color: hoveredCard === country.id ? '#667eea' : '#2c3e50'
                    }}>
                      {country.name}
                    </h3>
                    <p style={summaryStyle}>{country.summary}</p>
                    
                    {/* Cultural Categories Grid */}
                    <div style={categoriesGridStyle}>
                      {country.categories.map((category, index) => (
                        <div
                          key={index}
                          style={{
                            ...categoryStyle,
                            backgroundColor: hoveredCard === country.id 
                              ? 'rgba(102, 126, 234, 0.15)' 
                              : 'rgba(102, 126, 234, 0.1)',
                            transform: hoveredCard === country.id ? 'translateY(-1px)' : 'translateY(0)'
                          }}
                        >
                          <span style={{
                            ...categoryIconStyle,
                            transform: hoveredCard === country.id ? 'scale(1.1)' : 'scale(1)'
                          }}>
                            {category.icon}
                          </span>
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div style={categoryTextStyle}>{category.name}</div>
                            <div style={categoryDescriptionStyle}>{category.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={paginationStyle}>
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: currentPage === 0 ? 'rgba(204, 204, 204, 0.7)' : 'rgba(102, 126, 234, 0.9)',
                    cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
                  }}
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                
                <span style={pageInfoStyle}>
                  Page {currentPage + 1} of {totalPages}
                </span>
                
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: currentPage === totalPages - 1 ? 'rgba(204, 204, 204, 0.7)' : 'rgba(102, 126, 234, 0.9)',
                    cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer'
                  }}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={noResultsStyle}>
            <h3>No countries found matching "{searchTerm}"</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Mobile-specific optimizations */}
      <style>{`
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          div[style*="cursor: pointer"]:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease !important;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .search-input {
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          .categories-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Landscape mode */
        @media (max-width: 768px) and (orientation: landscape) {
          .container {
            padding: 1rem 0.5rem !important;
          }
          
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 1rem !important;
          }
        }

        /* Large screens */
        @media (min-width: 1440px) {
          .container {
            padding: 3rem 2rem !important;
          }
          
          .grid {
            max-width: 1400px !important;
          }
        }
      `}</style>
    </div>
  );
}