import { Destination } from '../types/travel';

export const ALL_INDIAN_STATES_AND_UTS = [
  // 28 STATES
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  // 8 UNION TERRITORIES
  "Andaman & Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const DESTINATIONS_DATABASE: Destination[] = [
  {
    id: "araku-valley",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    regionType: "State",
    tagline: "Mystic Mist, Tribal Heartbeats & Coffee Aromas",
    matchScore: 94,
    matchReasons: [
      "Matches 4 of your selected interests: Tribal Culture, Sunrise, Nature & Local Food",
      "Perfect fit for your ₹15,000 budget with 25% cost buffer remaining",
      "78% lower crowd density compared to standard hill stations this season",
      "Seamless train journey via 84 tunnels & breathtaking valley bridges"
    ],
    description: "Nestled in the Eastern Ghats of Andhra Pradesh, Araku Valley is an offbeat sanctuary renowned for indigenous tribal culture, organic coffee plantations, misty valleys, and secluded waterfalls.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    interests: ["TRIBAL", "SUNRISE", "NATURE", "FOOD", "HIDDEN GEMS", "PEACE & RELAXATION"],
    bestSeason: "October to March",
    estimatedBudget: { solo: 11500, couple: 14800, family: 22000, friends: 13500 },
    idealDurationDays: 4,
    crowdLevel: "LOW",
    touristPriceGuard: {
      item: "Organic Araku Coffee Box (250g)",
      expectedPrice: "₹220 - ₹280",
      observedPrice: "₹450 at highway stalls",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Bongu Kodi (Bamboo Chicken)", spot: "Tribal Food Stalls near Borra", price: "₹250", whyFamous: "Marinated indigenous chicken slow-cooked inside fresh green bamboo stalks with zero oil.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Araku Organic Filter Coffee", spot: "Tribal Coffee House", price: "₹40", whyFamous: "100% shade-grown Arabica coffee harvested directly by indigenous farmers.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Teppati Fish Fry", spot: "Valley Stream Stalls", price: "₹150", whyFamous: "Fresh river trout fried with curry leaves and coarse mustard paste.", localPopularity: "HIDDEN LOCAL FAVORITE" }
      ],
      shopsMarkets: [
        { name: "Girijan Co-operative Tribal Store", spot: "Araku Main Road", price: "₹180 - ₹800", item: "Wild Forest Honey & Spices", whyFamous: "Authentic government-backed tribal welfare outlet selling pure forest produce." },
        { name: "Hukumpeta Weekly Tribal Haat", spot: "Hukumpeta", price: "₹50 - ₹500", item: "Handwoven Bamboo Baskets & Pottery", whyFamous: "Centuries-old weekly barter haat where 12 local tribes meet every Thursday." }
      ],
      localProducts: [
        { name: "Organic Araku Arabica Beans", spot: "Girijan Co-op", price: "₹240", whyFamous: "Award-winning global specialty coffee grown on Eastern Ghat heights." },
        { name: "Dhimsa Tribal Brass Ornaments", spot: "Tribal Museum Crafts Center", price: "₹350", whyFamous: "Traditional anklets and hairpins worn during tribal ceremonial dances." }
      ],
      culturalExperiences: [
        { name: "Dhimsa Dance Night", spot: "Padmapuram Gardens Compound", price: "₹200", description: "Immersive folk dance performance with Valmiki and Bagata tribes around a bonfire." },
        { name: "Chaparai Stream Foot Bath", spot: "Chaparai Water Cascades", price: "Free", description: "Smooth granite rock slides with ice-cold mountain streams flowing past lush forest." }
      ]
    },
    hiddenGems: [
      {
        id: "galikonda",
        name: "Galikonda View Point",
        distanceFromHub: "2.4 km",
        travelTime: "15 min",
        crowdLevel: "LOW",
        estimatedCost: "₹100",
        whyRecommended: "Highest point in Eastern Ghats (4300 ft). Matches your sunrise photography and peaceful vibe request.",
        category: "SUNRISE & PANORAMA",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "katiki-waterfalls",
        name: "Katiki Waterfalls Secluded Trail",
        distanceFromHub: "18.5 km",
        travelTime: "45 min",
        crowdLevel: "LOW",
        estimatedCost: "₹300 (Jeep Ride)",
        whyRecommended: "50-foot crystal clear waterfall surrounded by dense teak forest with zero commercial stalls.",
        category: "NATURE & ADVENTURE",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "araku-balloon-fest",
        name: "Araku Balloon & Tribal Heritage Fest",
        dates: "Oct 14 - Oct 17",
        location: "Padmapuram Valley Grounds",
        crowdImpact: "MEDIUM",
        hotelImpact: "Prices may increase by 15-20%",
        transportImpact: "Local jeeps recommended early morning",
        description: "Hot air balloon flights over misty coffee estates alongside tribal music performances.",
        price: "₹1,200 for tethered flight"
      }
    ],
    localAvailability: [
      { category: "Vistadome Express Train", name: "Visakhapatnam - Araku Glass Car", status: "LIMITED", capacityPct: 88, openingHours: "06:45 AM - 11:00 AM", bestTime: "Book 3 days ahead" },
      { category: "Borra Caves", name: "Cave Lighting Experience", status: "AVAILABLE", capacityPct: 45, openingHours: "10:00 AM - 05:00 PM", bestTime: "11:30 AM (Low queue)" },
      { category: "Tribal Stay", name: "Eco Wooden Cottages", status: "AVAILABLE", capacityPct: 60, openingHours: "24 Hours", bestTime: "Immediate Check-in" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Mystic Valley Welcome",
        stops: [
          { id: "s1", time: "07:00 AM", activity: "Vistadome Train Ride through 84 Tunnels", location: "Vizag to Araku Rail Route", category: "Transport & Scenic", cost: 670, travelTime: "3.5 hrs", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "s2", time: "01:00 PM", activity: "Bamboo Chicken Lunch at Local Tribal Shack", location: "Borra Junction", category: "Dining", cost: 300, travelTime: "20 min", crowd: "LOW", risk: "LOW", available: true },
          { id: "s3", time: "04:30 PM", activity: "Sunset over Coffee Estates & Coffee Tasting", location: "Ananthagiri Hills Viewpoint", category: "Sightseeing", cost: 150, travelTime: "25 min", crowd: "LOW", risk: "LOW", available: true }
        ]
      },
      {
        day: 2,
        title: "Sunrise at Galikonda & Tribal Culture",
        stops: [
          { id: "s4", time: "05:30 AM", activity: "Golden Sunrise Photography at Galikonda", location: "Galikonda View Point", category: "Hidden Gem", cost: 100, travelTime: "15 min", crowd: "LOW", risk: "LOW", available: true },
          { id: "s5", time: "10:00 AM", activity: "Tribal Museum & Artifact Workshop", location: "Araku Tribal Museum", category: "Culture", cost: 80, travelTime: "10 min", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "s6", time: "03:00 PM", activity: "Hukumpeta Weekly Tribal Market Exploration", location: "Hukumpeta Haat", category: "Shopping", cost: 400, travelTime: "30 min", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "s7", time: "07:00 PM", activity: "Dhimsa Folk Dance Performance & Bonfire", location: "Eco Resort Grounds", category: "Experience", cost: 200, travelTime: "0 min", crowd: "LOW", risk: "LOW", available: true }
        ]
      },
      {
        day: 3,
        title: "Hidden Waterfalls & Secluded Nature Trek",
        stops: [
          { id: "s8", time: "08:30 AM", activity: "Offroad Jeep Trek to Katiki Waterfalls", location: "Katiki Waterfall Trail", category: "Nature Trek", cost: 350, travelTime: "45 min", crowd: "LOW", risk: "MEDIUM", available: true },
          { id: "s9", time: "01:30 PM", activity: "Fresh Stream Fish Lunch by River Bank", location: "Chaparai Cascades", category: "Dining", cost: 250, travelTime: "20 min", crowd: "LOW", risk: "LOW", available: true },
          { id: "s10", time: "05:00 PM", activity: "Pine Forest Stroll & Photography", location: "Araku Pine Tree Sanctuary", category: "Relaxation", cost: 50, travelTime: "15 min", crowd: "LOW", risk: "LOW", available: true }
        ]
      },
      {
        day: 4,
        title: "Subterranean Wonder & Departure",
        stops: [
          { id: "s11", time: "09:00 AM", activity: "Borra Caves Million-Year Stalactite Walk", location: "Borra Caves", category: "Heritage", cost: 110, travelTime: "30 min", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "s12", time: "12:30 PM", activity: "Souvenir Shopping at Girijan Store", location: "Araku Main Haat", category: "Shopping", cost: 500, travelTime: "15 min", crowd: "LOW", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Vistadome Train", provider: "Indian Railways", price: 670, time: "3.5 Hours", availability: "High Demand", rating: 4.8, badge: "MOST SCENIC", convenienceScore: 96 },
      { mode: "Private Taxi", provider: "Araku Cabs", price: 2800, time: "3.0 Hours", availability: "Available", rating: 4.6, badge: "FASTEST", convenienceScore: 92 },
      { mode: "Shared Jeep", provider: "Valley Transport", price: 150, time: "4.0 Hours", availability: "Available Every 30m", rating: 4.1, badge: "BEST VALUE", convenienceScore: 78 }
    ],
    hotelOptions: [
      { id: "h1", name: "Tribal Heritage Wooden Cottages", pricePerNight: 2400, location: "Near Coffee Plantations", rating: 4.7, distanceToHub: "1.2 km", transportCostToHighlights: 300, totalEstimatedTripHotelCost: 7200, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" },
      { id: "h2", name: "Haritha Hill Resort (APTDC)", pricePerNight: 3200, location: "Valley Crest Road", rating: 4.4, distanceToHub: "0.5 km", transportCostToHighlights: 150, totalEstimatedTripHotelCost: 9600, recommendationTag: "LUXURY PICK", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
      { id: "h3", name: "Pine Wood Homestay", pricePerNight: 1200, location: "Pine Forest Gate", rating: 4.2, distanceToHub: "3.0 km", transportCostToHighlights: 500, totalEstimatedTripHotelCost: 3600, recommendationTag: "BUDGET FRIENDLY", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "LOW",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "HIGH",
      scamShieldTips: [
        "Buy Araku coffee directly from Girijan Co-operative or verified estates to avoid fake blended coffee sold at 2x price.",
        "Fix shared jeep rates before boarding at Borra Cave junction."
      ],
      dosAndDonts: {
        dos: ["Carry light woolens for chilly early mornings", "Ask permission before taking portraits of tribal elders", "Try fresh bamboo cooked dishes"],
        donts: ["Do not litter plastic near Katiki stream", "Do not venture into unguided cave passages"]
      },
      emergencyServices: [
        { type: "Hospital", name: "Area Hospital Araku", contact: "08936-249234 (Verified)", distance: "1.8 km", verified: true },
        { type: "Police", name: "Araku Valley Police Station", contact: "100 / 08936-249223 (Verified)", distance: "0.9 km", verified: true },
        { type: "Tourist Helpline", name: "APTDC Araku Desk", contact: "1800-425-4545 (Verified)", distance: "0.5 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "p1", english: "How much does this cost?", localScript: "దీని ధర ఎంత?", phonetic: "Deeni dhara entha?", category: "Shopping" },
      { id: "p2", english: "This bamboo food is delicious!", localScript: "ఈ బంబూ ఆహారం చాలా బాగుంది!", phonetic: "Ee bamboo aahaaram chaala baagundhi!", category: "Dining" },
      { id: "p3", english: "Where is Galikonda view point?", localScript: "గాలికొండ వ్యూ పాయింట్ ఎక్కడ ఉంది?", phonetic: "Gaalikonda view point ekkada undhi?", category: "Direction" },
      { id: "p4", english: "Thank you very much", localScript: "చాలా ధన్యవాదాలు", phonetic: "Chaala dhanyavaadaalu", category: "Greetings" }
    ]
  },
  {
    id: "ziro-valley",
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    regionType: "State",
    tagline: "Pine-Clad Hills, Apatani Heritage & Paddy Fish Farms",
    matchScore: 91,
    matchReasons: [
      "Unmatched Apatani tribal culture & nose-plug heritage",
      "Serene sunrise views over organic pine forest valleys",
      "Fits 4-5 day offbeat adventure budget",
      "Low crowd density with authentic local homestays"
    ],
    description: "A UNESCO World Heritage candidate, Ziro Valley is home to the fascinated Apatani tribe, known for sustainable wet rice cultivation, facial tattoos, bamboo architecture, and lush pine trails.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    interests: ["TRIBAL", "NATURE", "CULTURE", "PEACE & RELAXATION", "PHOTOGRAPHY", "HIDDEN GEMS"],
    bestSeason: "September to April",
    estimatedBudget: { solo: 13500, couple: 18500, family: 26000, friends: 16000 },
    idealDurationDays: 5,
    crowdLevel: "LOW",
    touristPriceGuard: {
      item: "Handwoven Apatani Jacket",
      expectedPrice: "₹1,200 - ₹1,800",
      observedPrice: "₹3,500 at main road tourist shops",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Pike Pila", spot: "Hong Village Tribal Kitchen", price: "₹180", whyFamous: "Traditional pickled delicacy made from smoked pork, bamboo shoot, and local herbs.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Sududu (Bamboo Stuffed Rice)", spot: "Old Ziro Homestays", price: "₹120", whyFamous: "Sticky rice baked slowly inside green bamboo shoots over oak wood fire.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Hapoli Weekly Market", spot: "Hapoli Town Center", price: "₹100 - ₹1,000", item: "Apatani Bamboo Crafts & Handlooms", whyFamous: "Bustling tribal hub with direct artisan stalls." }
      ],
      localProducts: [
        { name: "Tapyo (Herbal Tribal Salt)", spot: "Apatani Craft Center", price: "₹150", whyFamous: "Unique black herbal salt produced by burning plant ashes." }
      ],
      culturalExperiences: [
        { name: "Hong Village Tribal Walk", spot: "Hong Village", price: "Free", description: "Walk through Asia's largest bamboo-built village to meet Apatani elders." }
      ]
    },
    hiddenGems: [
      {
        id: "kile-pakho",
        name: "Kile Pakho Ridge",
        distanceFromHub: "7.0 km",
        travelTime: "25 min",
        crowdLevel: "LOW",
        estimatedCost: "₹150",
        whyRecommended: "Panoramic vantage point where one side overlooks Ziro plateau and the other side reveals snow-capped Himalayan peaks.",
        category: "PANORAMA & SUNRISE",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "ziro-music-fest",
        name: "Ziro Festival of Music",
        dates: "Sep 26 - Sep 29",
        location: "Ziro Valley Grounds",
        crowdImpact: "HIGH",
        hotelImpact: "Homestays must be booked 3 months prior",
        transportImpact: "Shared cabs require booking",
        description: "India's premier outdoor eco-friendly indie music festival.",
        price: "₹3,500 day pass"
      }
    ],
    localAvailability: [
      { category: "Inner Line Permit (ILP)", name: "Arunachal Govt Portal", status: "AVAILABLE", capacityPct: 30, openingHours: "Online 24/7", bestTime: "Apply 2 days prior" },
      { category: "Apatani Homestay", name: "Hong Village Stay", status: "AVAILABLE", capacityPct: 50, openingHours: "24 Hours", bestTime: "Instant Confirmation" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Ziro & Bamboo Cottage Check-in",
        stops: [
          { id: "zs1", time: "08:00 AM", activity: "Scenic Drive across Brahmaputra Valley", location: "Guwahati to Ziro", category: "Transport", cost: 1200, travelTime: "7 hrs", crowd: "LOW", risk: "LOW", available: true },
          { id: "zs2", time: "05:00 PM", activity: "Bamboo Tea & Sunset in Old Ziro", location: "Hong Village Homestay", category: "Relaxation", cost: 100, travelTime: "0 min", crowd: "LOW", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Shared Sumo Jeep", provider: "North East Cabs", price: 900, time: "7.0 Hours", availability: "Daily 6 AM", rating: 4.5, badge: "BEST VALUE", convenienceScore: 88 }
    ],
    hotelOptions: [
      { id: "zh1", name: "Apatani Heritage Bamboo Lodge", pricePerNight: 1800, location: "Hong Village", rating: 4.8, distanceToHub: "2.0 km", transportCostToHighlights: 200, totalEstimatedTripHotelCost: 7200, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "LOW",
      roadRisk: "MEDIUM",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "MEDIUM",
      scamShieldTips: ["Ensure Inner Line Permit (ILP) is issued through official Arunachal Govt website to avoid middleman fees."],
      dosAndDonts: {
        dos: ["Carry physical ILP copy", "Respect local tribal customs"],
        donts: ["Do not take photos inside sacred village altars without permission"]
      },
      emergencyServices: [
        { type: "Hospital", name: "District Hospital Ziro", contact: "03788-222224 (Verified)", distance: "3.5 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "zp1", english: "Hello (Apatani greeting)", localScript: "Kase neng?", phonetic: "Kase neng?", category: "Greetings" }
    ]
  },
  {
    id: "meghalaya-dawki",
    name: "Meghalaya (Dawki & Mawlynnong)",
    state: "Meghalaya",
    regionType: "State",
    tagline: "Crystal Glass Rivers, Living Root Bridges & Cloud Sanctuaries",
    matchScore: 87,
    matchReasons: [
      "Crystal transparent Umngot River boating experience",
      "Living Root Bridges created by Khasi ancestors",
      "Fits 4-day budget with eco-lodges",
      "Breath-taking waterfalls & living cloud trails"
    ],
    description: "Meghalaya, the Abode of Clouds, features the world's cleanest village Mawlynnong, transparent turquoise rivers in Dawki, and awe-inspiring waterfalls in Cherrapunji.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    interests: ["NATURE", "WATERFALLS", "CULTURE", "HIDDEN GEMS", "PHOTOGRAPHY", "PEACE & RELAXATION"],
    bestSeason: "October to April",
    estimatedBudget: { solo: 12800, couple: 16500, family: 24000, friends: 14500 },
    idealDurationDays: 4,
    crowdLevel: "MEDIUM",
    touristPriceGuard: {
      item: "Dawki 45-min Boat Ride",
      expectedPrice: "₹800 - ₹1,000 per boat",
      observedPrice: "₹2,500 at unauthorized bridge agents",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Jadoh (Rice cooked in herbs)", spot: "Shillong Laitumkhrah Stalls", price: "₹120", whyFamous: "Khasi red rice cooked with mint, ginger, and sesame.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Dohneiiong (Pork in Black Sesame)", spot: "Local Khasi Homestays", price: "₹220", whyFamous: "Rich aromatic stew made with toasted black sesame paste.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Police Bazar Handicraft Emporium", spot: "Shillong Center", price: "₹200 - ₹2,500", item: "Cane Baskets & Bamboo Lamps", whyFamous: "Authentic government outlet for Khasi weaving." }
      ],
      localProducts: [
        { name: "Lakadong Turmeric", spot: "Jowai Farmers Outlet", price: "₹250", whyFamous: "World's highest curcumin content organic turmeric." }
      ],
      culturalExperiences: [
        { name: "Nohkalikai Waterfall Trail Walk", spot: "Cherrapunji", price: "Free", description: "Panoramic view of India's tallest plunge waterfall falling into green pool." }
      ]
    },
    hiddenGems: [
      {
        id: "shnongpdeng",
        name: "Shnongpdeng Riverside Camping",
        distanceFromHub: "8.0 km from Dawki",
        travelTime: "20 min",
        crowdLevel: "LOW",
        estimatedCost: "₹600",
        whyRecommended: "Secluded riverside pebble beach far quieter than main Dawki bridge with kayaking & cliff jumping.",
        category: "RIVER & CAMPING",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "cherry-blossom-fest",
        name: "Shillong Cherry Blossom Festival",
        dates: "Nov 15 - Nov 17",
        location: "Ward's Lake Shillong",
        crowdImpact: "HIGH",
        hotelImpact: "Hotels surge by 40%",
        transportImpact: "Cab booking required in advance",
        description: "Pink cherry blossoms blooming across Shillong hills with music concerts.",
        price: "₹800"
      }
    ],
    localAvailability: [
      { category: "Dawki Boating", name: "Umngot River Boat Slips", status: "AVAILABLE", capacityPct: 40, openingHours: "07:00 AM - 04:30 PM", bestTime: "Morning 8:00 AM (Glass clear water)" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Shillong to Mawlynnong & Living Root Bridge",
        stops: [
          { id: "ms1", time: "09:00 AM", activity: "Drive to Mawlynnong - Cleanest Village", location: "Mawlynnong Village", category: "Sightseeing", cost: 200, travelTime: "2.5 hrs", crowd: "LOW", risk: "LOW", available: true },
          { id: "ms2", time: "02:00 PM", activity: "Walk across Riwai Living Root Bridge", location: "Riwai Village", category: "Nature", cost: 50, travelTime: "15 min", crowd: "MEDIUM", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Private Cab", provider: "Shillong Taxi Union", price: 2500, time: "2.5 Hours", availability: "Available", rating: 4.7, badge: "MOST CONVENIENT", convenienceScore: 94 }
    ],
    hotelOptions: [
      { id: "mh1", name: "Shnongpdeng Bamboo River Huts", pricePerNight: 2100, location: "Shnongpdeng Riverfront", rating: 4.7, distanceToHub: "1.0 km", transportCostToHighlights: 150, totalEstimatedTripHotelCost: 6300, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "MEDIUM",
      crowdRisk: "LOW",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "HIGH",
      scamShieldTips: ["Standard Dawki boating charges are fixed by Meghalaya Tourism at ₹800-₹1,000 per boat."],
      dosAndDonts: {
        dos: ["Carry rain jacket even in summer", "Use eco trash bins in Mawlynnong"],
        donts: ["Do not jump off bridges into unverified water depths"]
      },
      emergencyServices: [
        { type: "Hospital", name: "Civil Hospital Shillong", contact: "0364-2224100 (Verified)", distance: "12 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "mp1", english: "Hello (Khasi)", localScript: "Khumto!", phonetic: "Khum-to", category: "Greetings" }
    ]
  },
  {
    id: "wayanad-kerala",
    name: "Wayanad",
    state: "Kerala",
    regionType: "State",
    tagline: "Mist Shrouded Peaks, Wild Spice Trails & Ancient Caves",
    matchScore: 85,
    matchReasons: [
      "Rich spice plantation trails & wild tea estates",
      "Prehistoric Edakkal Cave carvings from Neolithic era",
      "Serene sunrise views over Chembra peak heart lake",
      "Fits 4-day budget with cozy traditional treehouses"
    ],
    description: "Located high in the Western Ghats of Northern Kerala, Wayanad is a green paradise of spice gardens, dense wildlife sanctuaries, waterfalls, and ancient stone carvings.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    interests: ["NATURE", "FOOD", "CULTURE", "PEACE & RELAXATION", "WILDLIFE", "HIDDEN GEMS"],
    bestSeason: "September to May",
    estimatedBudget: { solo: 12000, couple: 15500, family: 23000, friends: 14000 },
    idealDurationDays: 4,
    crowdLevel: "MEDIUM",
    touristPriceGuard: {
      item: "Wayanad Green Cardamom (100g)",
      expectedPrice: "₹180 - ₹240",
      observedPrice: "₹450 at highway tourist gift shops",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Malabar Parotta with Nadan Beef/Chicken", spot: "Kalpetta Town Eateries", price: "₹140", whyFamous: "Flaky layered flatbread served with slow-roasted coconut spice curry.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Wayanad Bamboo Rice Payasam", spot: "Vythiri Heritage Resto", price: "₹90", whyFamous: "Sweet pudding made from rare seeds of flowering bamboo trees.", localPopularity: "HIDDEN LOCAL FAVORITE" }
      ],
      shopsMarkets: [
        { name: "Uravu Eco Bamboo Center", spot: "Thrikkaipetta", price: "₹150 - ₹1,500", item: "Handcrafted Bamboo Products", whyFamous: "Community-driven eco enterprise training rural craftswomen." }
      ],
      localProducts: [
        { name: "Wayand Wild Honey & Wayanad Pepper", spot: "District Agricultural Outlet", price: "₹220", whyFamous: "GI-tagged black gold pepper harvested from mountain vines." }
      ],
      culturalExperiences: [
        { name: "Edakkal Cave Neolithic Rock Carvings Walk", spot: "Edakkal Caves", price: "₹50", description: "Climb Ambukuthi Hill to witness 6,000-year-old petroglyphs carved by ancient humans." }
      ]
    },
    hiddenGems: [
      {
        id: "meenmutty",
        name: "Meenmutty Hidden Waterfall Trail",
        distanceFromHub: "12 km from Kalpetta",
        travelTime: "30 min",
        crowdLevel: "LOW",
        estimatedCost: "₹80",
        whyRecommended: "Three-tiered 300-meter waterfall hidden deep inside rubber plantations with lush jungle dip pools.",
        category: "WATERFALL & TREK",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "wayanad-splash",
        name: "Splash Monsoon Festival",
        dates: "Jul 10 - Jul 13",
        location: "Vythiri & Mananthavady",
        crowdImpact: "MEDIUM",
        hotelImpact: "Monsoon packages discount available",
        transportImpact: "Jeep safari available",
        description: "Monsoon carnival featuring mud football, raft racing, and spice walks.",
        price: "₹500"
      }
    ],
    localAvailability: [
      { category: "Chembra Heart Lake Trek", name: "Forest Dept Trek Ticket", status: "LIMITED", capacityPct: 90, openingHours: "07:00 AM - 12:00 PM", bestTime: "Arrive 06:45 AM for pass" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Kozhikode Arrival to Wayanad Tea Trail",
        stops: [
          { id: "ws1", time: "09:00 AM", activity: "Thamarassery Ghat Pass Scenic Drive", location: "Kozhikode - Wayanad Highway", category: "Transport", cost: 400, travelTime: "2.0 hrs", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "ws2", time: "02:00 PM", activity: "Fresh Spice Plantation Tasting Walk", location: "Vythiri Gardens", category: "Nature", cost: 150, travelTime: "30 min", crowd: "LOW", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "KSRTC Bus", provider: "Kerala State RTC", price: 120, time: "2.5 Hours", availability: "Every 20 mins", rating: 4.4, badge: "BEST VALUE", convenienceScore: 82 }
    ],
    hotelOptions: [
      { id: "wh1", name: "Wayanad Plantation Treehouse Homestay", pricePerNight: 2600, location: "Vythiri Hills", rating: 4.8, distanceToHub: "3.5 km", transportCostToHighlights: 250, totalEstimatedTripHotelCost: 7800, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "LOW",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "HIGH",
      scamShieldTips: ["Buy spices at government Wayanad Farmer Outlets rather than roadside tourist displays."],
      dosAndDonts: {
        dos: ["Wear sturdy grip shoes for Edakkal cave trek", "Try local bamboo rice dessert"],
        donts: ["Do not feed wild elephants on Wayanad sanctuary road pass"]
      },
      emergencyServices: [
        { type: "Hospital", name: "Wayanad District Hospital Mananthavady", contact: "04935-240223 (Verified)", distance: "8 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "wp1", english: "How much is this?", localScript: "ഇതിന് എത്രയാണ് വില?", phonetic: "Ithinu ethrayanu vila?", category: "Shopping" }
    ]
  },
  {
    id: "hampi-karnataka",
    name: "Hampi",
    state: "Karnataka",
    regionType: "State",
    tagline: "Boulder Landscapes, Vijayanagara Empire & Stone Chariots",
    matchScore: 89,
    matchReasons: [
      "Open-air museum of magnificent 14th-century Vijayanagara ruins",
      "Surreal surrealist boulder hills & Tungabhadra coracle boat rides",
      "Fits 3-4 day heritage & sunset enthusiast trip",
      "Vibrant Hippie Island sunset vibes"
    ],
    description: "A UNESCO World Heritage site, Hampi mesmerizes visitors with monolithic granite stone temples, musical pillars, ancient royal bazaar streets, and dramatic boulder-strewn sunsets.",
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1600&q=80",
    interests: ["HISTORY", "CULTURE", "SUNSET", "PHOTOGRAPHY", "HIDDEN GEMS", "HERITAGE"],
    bestSeason: "October to March",
    estimatedBudget: { solo: 9500, couple: 12800, family: 18500, friends: 11000 },
    idealDurationDays: 3,
    crowdLevel: "MEDIUM",
    touristPriceGuard: {
      item: "Coracle Boat Tungabhadra Crossing",
      expectedPrice: "₹50 - ₹100 per head",
      observedPrice: "₹500 for private short loop",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "South Indian Unlimited Heritage Thali", spot: "Mango Tree Restaurant", price: "₹180", whyFamous: "Banana leaf meal with rasam, payasam, fried raw banana and coconut chutney.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Hampi Bazaar Ruins Alley", spot: "Virupaksha Temple Front", price: "₹100 - ₹800", item: "Handmade Leather Journal & Stone Carvings", whyFamous: "Ancient market street operating since 1336 AD." }
      ],
      localProducts: [
        { name: "Banana Fiber Handbags & Crafts", spot: "Anegundi Crafts Workshop", price: "₹250", whyFamous: "Eco-friendly accessories made from banana stalk fibers by Kishkinda trust." }
      ],
      culturalExperiences: [
        { name: "Vittala Temple Stone Chariot & Musical Pillars Tour", spot: "Vittala Temple Complex", price: "₹40", description: "Marvel at 56 musical pillars that produce acoustic notes when gently tapped." }
      ]
    },
    hiddenGems: [
      {
        id: "anthantha",
        name: "Matanga Hill Secret Sunset Steps",
        distanceFromHub: "1.0 km from Virupaksha",
        travelTime: "20 min trek",
        crowdLevel: "LOW",
        estimatedCost: "Free",
        whyRecommended: "The absolute highest spot in Hampi offering 360-degree views of Tungabhadra river and banana groves.",
        category: "SUNSET & PANORAMA",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "hampi-utsav",
        name: "Hampi Utsav (Vijaya Utsav)",
        dates: "Nov 03 - Nov 05",
        location: "Hampi Ruins Main Stage",
        crowdImpact: "HIGH",
        hotelImpact: "Hotels in Hospet book fast",
        transportImpact: "Shuttle buses operating",
        description: "Grand cultural extravaganza with lit-up monuments, classical dance, and light shows.",
        price: "Free Entry"
      }
    ],
    localAvailability: [
      { category: "Monument Entry Pass", name: "ASI Single Entry Ticket", status: "AVAILABLE", capacityPct: 30, openingHours: "06:00 AM - 06:00 PM", bestTime: "Buy online on ASI website" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Virupaksha & Sacred Center Exploration",
        stops: [
          { id: "hs1", time: "07:00 AM", activity: "Virupaksha Temple Gopuram Walk", location: "Hampi Bazaar", category: "Heritage", cost: 20, travelTime: "10 min", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "hs2", time: "05:00 PM", activity: "Sunset over Boulder Valley from Matanga Hill", location: "Matanga Hill Peak", category: "Sunset", cost: 0, travelTime: "25 min trek", crowd: "MEDIUM", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Bicycle / Moped Rent", provider: "Hampi Bike Rental", price: 200, time: "Per Day", availability: "Abundant", rating: 4.7, badge: "BEST VALUE", convenienceScore: 95 }
    ],
    hotelOptions: [
      { id: "hh1", name: "Kishkinda Heritage River Resort", pricePerNight: 1900, location: "Anegundi Side", rating: 4.6, distanceToHub: "2.0 km", transportCostToHighlights: 100, totalEstimatedTripHotelCost: 5700, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "MEDIUM",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "HIGH",
      scamShieldTips: ["Buy ASI entrance tickets online to skip long queues at Vittala Temple gate."],
      dosAndDonts: {
        dos: ["Carry plenty of drinking water", "Wear sun hat and sunglasses for daytime rock ruins"],
        donts: ["Do not climb delicate ancient temple roofs"]
      },
      emergencyServices: [
        { type: "Hospital", name: "Hospet Government Hospital", contact: "08394-228222 (Verified)", distance: "12 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "hp1", english: "Where is Vittala temple?", localScript: "ವಿಠ್ಠಲ ದೇವಾಲಯ ಎಲ್ಲಿದೆ?", phonetic: "Vittala devalaya ellide?", category: "Direction" }
    ]
  },
  {
    id: "jaipur-rajasthan",
    name: "Jaipur",
    state: "Rajasthan",
    regionType: "State",
    tagline: "The Pink City of Maharajas, Forts & Block Prints",
    matchScore: 88,
    matchReasons: [
      "Regal Amer Fort & Hawa Mahal architectural marvels",
      "Vibrant Johari Bazaar blue pottery & block printing",
      "Fits 3-4 day cultural royalty trip",
      "Famous Rajasthani Dal Baati Churma dining"
    ],
    description: "The capital of Rajasthan, Jaipur is world-renowned for its pink-hued palaces, hilltop forts, ornate bazaars, handloom block printing, and royal cuisine.",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",
    interests: ["HISTORY", "CULTURE", "SHOPPING", "FOOD", "PHOTOGRAPHY", "HERITAGE"],
    bestSeason: "October to March",
    estimatedBudget: { solo: 11000, couple: 14500, family: 22000, friends: 13000 },
    idealDurationDays: 3,
    crowdLevel: "HIGH",
    touristPriceGuard: {
      item: "Hand Block Printed Cotton Bedspread",
      expectedPrice: "₹600 - ₹900",
      observedPrice: "₹2,400 at palace exit shops",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Rajasthani Royal Dal Baati Churma", spot: "Laxmi Misthan Bhandar (LMB)", price: "₹350", whyFamous: "Wheat balls baked in cow dung fuel, dipped in desi ghee with lentils and sweet crushed churma.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Pyaaz Kachori", spot: "Rawat Mishthan Bhandar", price: "₹50", whyFamous: "Crispy fried pastry filled with spicy onion-garlic masala.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Ghevar (Rajasthani Sweet)", spot: "Sodhani Sweets", price: "₹200", whyFamous: "Honeycomb web disc dipped in saffron rabri syrup.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Johari Bazaar", spot: "Old City Pink Gates", price: "₹300 - ₹5,000", item: "Kundan Jewelry & Silverware", whyFamous: "Centuries-old jewelry market of royal goldsmiths." },
        { name: "Bapu Bazaar", spot: "Pink City Core", price: "₹150 - ₹1,200", item: "Mojari Leather Shoes & Bandhani Dupattas", whyFamous: "Bustling street bazaar known for vibrant Jaipuri colors." }
      ],
      localProducts: [
        { name: "Jaipur Blue Pottery", spot: "Neerja Blue Pottery Sangeeta Studio", price: "₹350", whyFamous: "Quartz-glass glazed pottery introduced by Turko-Persian artisans." },
        { name: "Sanganeri Block Printed Quilts", spot: "Sanganer Artisan Hub", price: "₹800", whyFamous: "Featherlight cotton razai made with natural wooden block stamps." }
      ],
      culturalExperiences: [
        { name: "Amer Fort Light & Sound Night Show", spot: "Maota Lake Amer", price: "₹250", description: "Narrated storytelling of 28 Kachwaha rulers beneath illuminated fort ramparts." }
      ]
    },
    hiddenGems: [
      {
        id: "stepwell-panna",
        name: "Panna Meena ka Kund Stepwell",
        distanceFromHub: "1.2 km from Amer Fort",
        travelTime: "5 min",
        crowdLevel: "LOW",
        estimatedCost: "Free",
        whyRecommended: "Geometrically symmetrical 16th-century stepwell that feels completely peaceful compared to noisy Amer Fort.",
        category: "ARCHITECTURE & PHOTOGRAPHY",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "jaipur-lit-fest",
        name: "Jaipur Literature Festival (JLF)",
        dates: "Jan 18 - Jan 22",
        location: "Hotel Clarks Amer",
        crowdImpact: "HIGH",
        hotelImpact: "Hotels citywide surge by 50%",
        transportImpact: "Uber/Ola surge prices",
        description: "The world's largest free literary festival featuring Nobel laureates & thinkers.",
        price: "Free Registration"
      }
    ],
    localAvailability: [
      { category: "Composite Monument Pass", name: "Jaipur 8-Monument Ticket", status: "AVAILABLE", capacityPct: 50, openingHours: "09:00 AM - 05:00 PM", bestTime: "Buy online via Rajasthan Tourism" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Royal Pink City & Palace Landmarks",
        stops: [
          { id: "js1", time: "09:00 AM", activity: "Hawa Mahal Front Photography & Wind Palace", location: "Hawa Mahal Road", category: "Heritage", cost: 50, travelTime: "15 min", crowd: "HIGH", risk: "LOW", available: true },
          { id: "js2", time: "11:30 AM", activity: "City Palace Armoury & Peacock Courtyard", location: "City Palace Jaipur", category: "Heritage", cost: 300, travelTime: "10 min", crowd: "HIGH", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Auto Rickshaw", provider: "Jaipur Autos", price: 150, time: "15 min", availability: "Abundant", rating: 4.3, badge: "MOST CONVENIENT", convenienceScore: 90 }
    ],
    hotelOptions: [
      { id: "jh1", name: "Haveli Heritage Boutique Stay", pricePerNight: 2800, location: "Bani Park", rating: 4.7, distanceToHub: "2.0 km", transportCostToHighlights: 200, totalEstimatedTripHotelCost: 8400, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "HIGH",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "MEDIUM",
      emergencyAccess: "HIGH",
      scamShieldTips: [
        "Ignore gem dealers offering export commission deals around Johari Bazaar.",
        "Buy blue pottery directly from registered studio workshops in Sanganer."
      ],
      dosAndDonts: {
        dos: ["Buy Composite Rajasthan Pass for discount entrance", "Negotiate auto rickshaw fares before getting in"],
        donts: ["Do not accept unsolicited gemstone buying proposals"]
      },
      emergencyServices: [
        { type: "Hospital", name: "SMS Government Hospital Jaipur", contact: "0141-2560291 (Verified)", distance: "3 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "jp1", english: "Greetings / Hello", localScript: "खम्मा घणी", phonetic: "Khamma Ghani", category: "Greetings" }
    ]
  },
  {
    id: "varanasi-up",
    name: "Varanasi",
    state: "Uttar Pradesh",
    regionType: "State",
    tagline: "Eternal Ghats, Ganga Aarti & Spiritual Mysteries",
    matchScore: 86,
    matchReasons: [
      "Soul-stirring Evening Ganga Aarti at Dashashwamedh Ghat",
      "Sunrise wooden boat ride past 84 sacred river steps",
      "Handloom Banarasi Silk saree weaving heritage",
      "Famous Malaiyyo & Kachori Sabzi food culinary culture"
    ],
    description: "One of the oldest continuously inhabited cities in human history, Varanasi is the spiritual heart of India, where ancient Vedic rituals meet sacred riverfront ghats.",
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80",
    interests: ["SPIRITUAL", "HISTORY", "CULTURE", "PHOTOGRAPHY", "FOOD", "LOCAL MARKETS"],
    bestSeason: "October to March",
    estimatedBudget: { solo: 8500, couple: 11500, family: 17500, friends: 10000 },
    idealDurationDays: 3,
    crowdLevel: "HIGH",
    touristPriceGuard: {
      item: "Pure Banarasi Silk Saree",
      expectedPrice: "₹3,500 - ₹8,000",
      observedPrice: "₹18,000 for synthetic polyester at middleman stores",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Banarasi Kachori Sabzi & Jalebi", spot: "Ram Bhandar Chowk", price: "₹60", whyFamous: "Crispy lentil pooris served with spicy black chickpea gravy.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Malaiyyo (Saffron Foam Dessert)", spot: "Chowk Gali (Winter Special)", price: "₹50", whyFamous: "Airy milk froth flavored with saffron, cardamom and pistachio, prepared under night dew.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Banarasi Paan", spot: "Keshav Tambool Bhandar", price: "₹40", whyFamous: "Betel leaf folded with gulkand, menthol, and sweet spices.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Vishwa Nath Gali & Thatheri Bazaar", spot: "Old Kashi Alleys", price: "₹200 - ₹10,000", item: "Banarasi Silk Saree & Brassware", whyFamous: "Ancient narrow alleys bustling with silk handloom master weavers." }
      ],
      localProducts: [
        { name: "Handloom Banarasi Brocade Silk", spot: "Weavers Service Center Chowk", price: "₹3,500", whyFamous: "Gold Zari thread weaving recognized globally." }
      ],
      culturalExperiences: [
        { name: "Subah-e-Banaras Sunrise Boat Ride", spot: "Assi Ghat to Manikarnika Ghat", price: "₹200", description: "Rowing past dawn morning prayers, classical sitar music, and bathing rituals." }
      ]
    },
    hiddenGems: [
      {
        id: "sarnath-stupa",
        name: "Sarnath Chaukhandi Stupa & Garden",
        distanceFromHub: "10 km from Ghats",
        travelTime: "30 min",
        crowdLevel: "LOW",
        estimatedCost: "₹40",
        whyRecommended: "Peaceful Buddhist deer park where Lord Buddha gave his first sermon after enlightenment.",
        category: "SPIRITUAL & PEACE",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "dev-deepawali",
        name: "Dev Deepawali (Festival of Gods)",
        dates: "Nov 15 - Nov 16",
        location: "All 84 Ganga Ghats",
        crowdImpact: "HIGH",
        hotelImpact: "100% hotel occupancy, book 2 months prior",
        transportImpact: "Strict pedestrian zone near ghats",
        description: "Over 1 million clay oil lamps lit along river steps under full moon night.",
        price: "Free"
      }
    ],
    localAvailability: [
      { category: "Kashi Vishwanath Corridor", name: "Sugam Darshan Pass", status: "AVAILABLE", capacityPct: 70, openingHours: "04:00 AM - 11:00 PM", bestTime: "Book on official temple app" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Dawn Ganga Boat & Evening Aarti",
        stops: [
          { id: "vs1", time: "05:30 AM", activity: "Sunrise Wooden Rowing Boat Ride", location: "Assi Ghat", category: "Experience", cost: 200, travelTime: "1.5 hrs", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "vs2", time: "06:30 PM", activity: "Grand Ganga Aarti Ceremony", location: "Dashashwamedh Ghat", category: "Spiritual", cost: 0, travelTime: "1.0 hr", crowd: "HIGH", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "E-Rickshaw", provider: "Varanasi E-Cabs", price: 50, time: "15 min", availability: "Abundant", rating: 4.6, badge: "BEST VALUE", convenienceScore: 92 }
    ],
    hotelOptions: [
      { id: "vh1", name: "Ghatside Heritage Palace Homestay", pricePerNight: 2200, location: "Assi Ghat Riverfront", rating: 4.8, distanceToHub: "0.2 km", transportCostToHighlights: 50, totalEstimatedTripHotelCost: 6600, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "HIGH",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "MEDIUM",
      emergencyAccess: "HIGH",
      scamShieldTips: [
        "Avoid self-proclaimed 'cremation priest guides' asking for wood donations at Manikarnika Ghat.",
        "Buy Banarasi silk directly from government weaver co-operatives in Chowk."
      ],
      dosAndDonts: {
        dos: ["Take early morning boat for quiet photography", "Try Malaiyyo foam dessert in winter mornings"],
        donts: ["Do not photograph private funeral pyres at Manikarnika Ghat"]
      },
      emergencyServices: [
        { type: "Hospital", name: "BHU Sir Sunderlal Hospital", contact: "0542-2369291 (Verified)", distance: "4 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "vp1", english: "Greetings / Victory to Kashi", localScript: "हर हर महादेव", phonetic: "Har Har Mahadev", category: "Greetings" }
    ]
  },
  {
    id: "leh-ladakh",
    name: "Leh & Pangong Tso",
    state: "Ladakh",
    regionType: "Union Territory",
    tagline: "High Mountain Passes, Turquoise Lakes & Buddhist Monasteries",
    matchScore: 95,
    matchReasons: [
      "Stunning high altitude turquoise lakes (Pangong Tso & Tso Moriri)",
      "Ancient Buddhist monasteries overlooking stark cold desert valleys",
      "Khardung La — one of the highest motorable passes in the world",
      "Epic stargazing under zero-pollution crystal night skies"
    ],
    description: "Known as the Land of High Passes, Ladakh offers breathtaking Himalayan vistas, ancient Tibetan Buddhist gompas, dramatic moonscapes, and vibrant blue mountain lakes.",
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    interests: ["MOUNTAINS", "ADVENTURE", "NATURE", "SPIRITUAL", "STARGAZING", "ROAD TRIPS", "PHOTOGRAPHY"],
    bestSeason: "May to October",
    estimatedBudget: { solo: 18500, couple: 24500, family: 38000, friends: 22000 },
    idealDurationDays: 6,
    crowdLevel: "MEDIUM",
    touristPriceGuard: {
      item: "Pangong Wooden Camp Stay",
      expectedPrice: "₹2,500 - ₹3,500 per night",
      observedPrice: "₹7,500 via unregistered agents",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Ladakhi Thukpa & Momos", spot: "Leh Main Market Nook", price: "₹160", whyFamous: "Steaming hot noodle soup infused with mountain herbs.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Gur Gur Chai (Butter Tea)", spot: "Thiksey Monastery Cafe", price: "₹40", whyFamous: "Salty yak butter tea that keeps the body warm at 11,000 feet.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Leh Tibetan Handicraft Market", spot: "Leh Main Bazaar", price: "₹200 - ₹3,000", item: "Pashmina Shawls & Prayer Wheels", whyFamous: "Artisans selling hand-carved singing bowls and silver jewelry." }
      ],
      localProducts: [
        { name: "Pure Ladakhi Pashmina Wool", spot: "Pashmina Farmers Outlet", price: "₹4,500", whyFamous: "Ultra-fine cashmeroid wool from Changthangi goats." }
      ],
      culturalExperiences: [
        { name: "Thiksey Monastery Morning Prayer Chant", spot: "Thiksey Gompa", price: "Free", description: "Deep harmonic chanting by young Buddhist monks at 06:00 AM." }
      ]
    },
    hiddenGems: [
      {
        id: "hanle-dark-sky",
        name: "Hanle Dark Sky Observatory Village",
        distanceFromHub: "250 km from Leh",
        travelTime: "6 hrs drive",
        crowdLevel: "LOW",
        estimatedCost: "₹1,500",
        whyRecommended: "India's first official Dark Sky Reserve offering Milky Way astrophotography with zero light pollution.",
        category: "STARGAZING & HIDDEN GEMS",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "hemis-festival",
        name: "Hemis Monastery Festival",
        dates: "Jun 16 - Jun 17",
        location: "Hemis Gompa Courtyard",
        crowdImpact: "HIGH",
        hotelImpact: "Book 2 months prior",
        transportImpact: "Cabs pre-booked",
        description: "Sacred Cham masked dances honoring Guru Padmasambhava.",
        price: "Free Entry"
      }
    ],
    localAvailability: [
      { category: "Protected Area Permit (PAP)", name: "Ladakh LAHDC Portal", status: "AVAILABLE", capacityPct: 20, openingHours: "Online 24/7", bestTime: "Obtain 1 day prior in Leh" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Leh Arrival & Mandatory Acclimatization",
        stops: [
          { id: "ls1", time: "10:00 AM", activity: "Hotel Rest & Hydration (Acclimatization)", location: "Leh Town Hotel", category: "Health", cost: 0, travelTime: "0 min", crowd: "LOW", risk: "MEDIUM", available: true },
          { id: "ls2", time: "05:00 PM", activity: "Gentle Sunset Walk at Shanti Stupa", location: "Shanti Stupa Hill", category: "Sightseeing", cost: 0, travelTime: "15 min", crowd: "MEDIUM", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Shared Taxi (Innova)", provider: "Ladakh Taxi Union", price: 3500, time: "Per Day", availability: "Available", rating: 4.8, badge: "MOST RELIABLE", convenienceScore: 94 }
    ],
    hotelOptions: [
      { id: "lh1", name: "Spic n Span Heritage Hotel", pricePerNight: 3500, location: "Fort Road Leh", rating: 4.8, distanceToHub: "0.5 km", transportCostToHighlights: 200, totalEstimatedTripHotelCost: 17500, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "MEDIUM",
      weatherRisk: "MEDIUM",
      crowdRisk: "LOW",
      roadRisk: "MEDIUM",
      activityRisk: "MEDIUM",
      scamRisk: "LOW",
      emergencyAccess: "MEDIUM",
      scamShieldTips: [
        "Take 24 hours rest on Day 1 to avoid Acute Mountain Sickness (AMS).",
        "Book taxis through Ladakh Taxi Union fixed rate counters."
      ],
      dosAndDonts: {
        dos: ["Drink 4 liters water daily for altitude", "Carry Diamox if advised by physician"],
        donts: ["Do not exert heavily or run on the first 24 hours of arrival"]
      },
      emergencyServices: [
        { type: "Hospital", name: "SNM Hospital Leh", contact: "01982-252014 (Verified)", distance: "1.5 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "lp1", english: "Hello / Welcome (Ladakhi)", localScript: "Julley!", phonetic: "Joo-lay", category: "Greetings" }
    ]
  },
  {
    id: "andaman-havelock",
    name: "Havelock Island (Swaraj Dweep)",
    state: "Andaman & Nicobar Islands",
    regionType: "Union Territory",
    tagline: "White Coral Sand Beaches, Azure Waters & Coral Reef Diving",
    matchScore: 92,
    matchReasons: [
      "Radhanagar Beach — Voted Asia's best tropical beach",
      "World-class Scuba Diving & Bioluminescent Night Kayaking",
      "Perfect island escape for couples & ocean enthusiasts",
      "Fresh seafood & coconut sunset shacks"
    ],
    description: "Swaraj Dweep (Havelock Island) in the Andaman archipelago is famous for its powder-white beaches, dense mahua tropical forests, vibrant coral reefs, and tranquil island pacing.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    interests: ["BEACHES", "ISLANDS", "ADVENTURE", "ROMANTIC", "SUNSET", "PEACE & RELAXATION"],
    bestSeason: "October to May",
    estimatedBudget: { solo: 16500, couple: 22000, family: 34000, friends: 20000 },
    idealDurationDays: 4,
    crowdLevel: "MEDIUM",
    touristPriceGuard: {
      item: "Elephant Beach Speedboat Ferry",
      expectedPrice: "₹1,000 per head roundtrip",
      observedPrice: "₹2,500 at hotel concierge desk",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "Andaman Red Snapper Fish Grill", spot: "Something Different Beach Cafe", price: "₹450", whyFamous: "Freshly caught sea fish grilled with garlic butter and local lemon.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Market No. 3 Crafts Alley", spot: "Havelock Jetty Road", price: "₹150 - ₹900", item: "Coconut Shell Crafts & Shell Ornaments", whyFamous: "Local islanders crafting eco-friendly coconut bowls." }
      ],
      localProducts: [
        { name: "Organic Coconut Oil & Shell Jewelry", spot: "Havelock Island Co-op", price: "₹200", whyFamous: "Pure virgin cold-pressed coconut oil." }
      ],
      culturalExperiences: [
        { name: "Bioluminescent Night Kayaking", spot: "Havelock Mangroves", price: "₹2,500", description: "Paddle through glowing phytoplankton waters beneath starry island night." }
      ]
    },
    hiddenGems: [
      {
        id: "kalapathar",
        name: "Kalapathar Secluded Black Rock Beach",
        distanceFromHub: "6.5 km from Jetty",
        travelTime: "15 min",
        crowdLevel: "LOW",
        estimatedCost: "Free",
        whyRecommended: "Striking contrast of black volcanic rocks against turquoise sea with serene pine shade.",
        category: "BEACH & SUNRISE",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "island-tourism-fest",
        name: "Island Tourism Festival",
        dates: "Jan 05 - Jan 15",
        location: "Port Blair & Havelock",
        crowdImpact: "MEDIUM",
        hotelImpact: "Book ferries in advance",
        transportImpact: "Ferry tickets surge",
        description: "10-day cultural celebration featuring island folk music and water sports.",
        price: "Free Entry"
      }
    ],
    localAvailability: [
      { category: "Makruzz Catamaran Ferry", name: "Port Blair to Havelock Route", status: "LIMITED", capacityPct: 85, openingHours: "Departs 08:00 AM", bestTime: "Book 7 days ahead" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Port Blair Ferry to Havelock & Radhanagar Sunset",
        stops: [
          { id: "as1", time: "08:00 AM", activity: "High-Speed Catamaran Cruise across Bay of Bengal", location: "Port Blair to Havelock Jetty", category: "Transport", cost: 1400, travelTime: "1.5 hrs", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "as2", time: "04:30 PM", activity: "Sunset Walk on Radhanagar Beach", location: "Radhanagar Beach No. 7", category: "Sunset", cost: 0, travelTime: "20 min", crowd: "MEDIUM", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Scooter Rental", provider: "Havelock Bike Rentals", price: 500, time: "Per Day", availability: "Abundant", rating: 4.8, badge: "BEST VALUE", convenienceScore: 96 }
    ],
    hotelOptions: [
      { id: "ah1", name: "Barefoot at Havelock Eco Resort", pricePerNight: 4500, location: "Radhanagar Forest Edge", rating: 4.9, distanceToHub: "0.5 km", transportCostToHighlights: 150, totalEstimatedTripHotelCost: 18000, recommendationTag: "LUXURY PICK", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "MEDIUM",
      crowdRisk: "LOW",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "MEDIUM",
      scamShieldTips: ["Book Makruzz or Nautika inter-island ferries online on official websites."],
      dosAndDonts: {
        dos: ["Carry dry bags for boat transfers", "Try night kayaking"],
        donts: ["Do not collect or take corals from ocean beaches (Strictly Illegal)"]
      },
      emergencyServices: [
        { type: "Hospital", name: "Community Health Center Havelock", contact: "03192-282205 (Verified)", distance: "2 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "ap1", english: "Hello / How are you?", localScript: "Kaisa hain aap?", phonetic: "Kaisa hain aap?", category: "Greetings" }
    ]
  },
  {
    id: "puducherry-white-town",
    name: "Puducherry",
    state: "Puducherry",
    regionType: "Union Territory",
    tagline: "French Colonial Quarter, Pastel Mansions & Auroville Peace",
    matchScore: 90,
    matchReasons: [
      "Charming French quarter architecture & mustard-yellow villas",
      "Auroville Matrimandir peaceful meditation dome",
      "Famous artisan bakeries & French croissant breakfast culture",
      "Serene Promenade Beach ocean boardwalk"
    ],
    description: "Puducherry retains a distinct French Riviera charm with colonial villas, tree-lined avenues, seaside promenades, bohemian cafes, and the experimental township of Auroville.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    interests: ["CULTURE", "PEACE & RELAXATION", "CAFES", "HERITAGE", "SPIRITUAL", "SHOPPING"],
    bestSeason: "October to March",
    estimatedBudget: { solo: 8000, couple: 11000, family: 16000, friends: 9500 },
    idealDurationDays: 3,
    crowdLevel: "MEDIUM",
    touristPriceGuard: {
      item: "Auroville Handmade Paper Diary",
      expectedPrice: "₹250 - ₹350",
      observedPrice: "₹750 at boutique hotel lobbies",
      status: "POSSIBLE TOURIST OVERCHARGING"
    },
    famousFor: {
      food: [
        { name: "French Croissant & Pain au Chocolat", spot: "Baker Street French Bakery", price: "₹120", whyFamous: "Authentic buttery laminated pastry baked by native French bakers.", localPopularity: "POPULAR WITH LOCALS" },
        { name: "Crepes with Salted Caramel", spot: "Creperie Bistro", price: "₹180", whyFamous: "Brittany-style sweet crepes made fresh on griddle.", localPopularity: "POPULAR WITH LOCALS" }
      ],
      shopsMarkets: [
        { name: "Mission Street & Auroshikha Shop", spot: "White Town", price: "₹150 - ₹1,200", item: "Handmade Incense, Marbled Silk & Ceramics", whyFamous: "Fair-trade products crafted by Auroville community artisans." }
      ],
      localProducts: [
        { name: "Auroville Handmade Incense & Perfume Oils", spot: "Auroshikha Store", price: "₹180", whyFamous: "Natural flower essence candles exported worldwide." }
      ],
      culturalExperiences: [
        { name: "Matrimandir Outer View & Quiet Meditation", spot: "Auroville Visitors Centre", price: "Free", description: "Walk through shaded Banyan gardens to view the golden Matrimandir sphere." }
      ]
    },
    hiddenGems: [
      {
        id: "arikanedu",
        name: "Arikamedu Ancient Roman Trade Port Ruins",
        distanceFromHub: "4.5 km from White Town",
        travelTime: "15 min",
        crowdLevel: "LOW",
        estimatedCost: "Free",
        whyRecommended: "Historical 1st-century BCE Greco-Roman trading port ruin hidden by Ariyankuppam river bank.",
        category: "HERITAGE & PEACE",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      }
    ],
    eventsFestivals: [
      {
        id: "auroville-marathon",
        name: "Auroville Eco Marathon",
        dates: "Feb 09 - Feb 10",
        location: "Auroville Green Belt",
        crowdImpact: "MEDIUM",
        hotelImpact: "Reserve rooms in White Town",
        transportImpact: "Bicycles recommended",
        description: "Eco-friendly forest run celebrating green living.",
        price: "₹1,000 Registration"
      }
    ],
    localAvailability: [
      { category: "Matrimandir Inner Chamber Pass", name: "Auroville Visitors Booking", status: "LIMITED", capacityPct: 95, openingHours: "09:30 AM - 04:00 PM", bestTime: "Book in person 1 day prior" }
    ],
    itinerary: [
      {
        day: 1,
        title: "White Town Heritage Walk & Seaside Promenade",
        stops: [
          { id: "ps1", time: "08:30 AM", activity: "French Croissant Breakfast at Baker Street", location: "Bussy Street", category: "Dining", cost: 250, travelTime: "0 min", crowd: "MEDIUM", risk: "LOW", available: true },
          { id: "ps2", time: "05:00 PM", activity: "Sunset Promenade Beach Boardwalk Stroll", location: "Goubert Avenue", category: "Relaxation", cost: 0, travelTime: "10 min", crowd: "MEDIUM", risk: "LOW", available: true }
        ]
      }
    ],
    transportOptions: [
      { mode: "Rental Bicycle / Electric Scooter", provider: "Pondy Rentals", price: 300, time: "Per Day", availability: "Abundant", rating: 4.8, badge: "BEST VALUE", convenienceScore: 98 }
    ],
    hotelOptions: [
      { id: "ph1", name: "French Heritage Villa Hotel", pricePerNight: 2600, location: "Rue Romain Rolland, White Town", rating: 4.7, distanceToHub: "0.3 km", transportCostToHighlights: 50, totalEstimatedTripHotelCost: 7800, recommendationTag: "BEST OVERALL VALUE", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" }
    ],
    riskProfile: {
      overallScore: "LOW",
      weatherRisk: "LOW",
      crowdRisk: "LOW",
      roadRisk: "LOW",
      activityRisk: "LOW",
      scamRisk: "LOW",
      emergencyAccess: "HIGH",
      scamShieldTips: ["Park scooters inside designated yellow slots along Promenade Beach to avoid police towing."],
      dosAndDonts: {
        dos: ["Explore White Town by walking or cycling", "Visit Auroville visitor center for Matrimandir pass"],
        donts: ["Do not swim at Promenade Beach (Rocky undertow present)"]
      },
      emergencyServices: [
        { type: "Hospital", name: "JIPMER Puducherry Hospital", contact: "0413-2296000 (Verified)", distance: "5 km", verified: true }
      ]
    },
    translatorPhrases: [
      { id: "pp1", english: "Hello / Good Day (French / Tamil)", localScript: "Bonjour / Vanakkam", phonetic: "Bon-joor / Va-na-kam", category: "Greetings" }
    ]
  }
];
