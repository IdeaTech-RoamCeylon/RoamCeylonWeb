export interface MissionPillar {
  id: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  highlight: string;
}

export interface TravelerVertical {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  bgTint: string;
  highlights: string[];
  popularFor: string[];
}

export interface PartnerRole {
  id: 'hotel_manager' | 'tour_guide' | 'activity_provider' | 'shop_partner';
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  capabilities: string[];
}

export interface EcosystemStep {
  step: string;
  actor: 'Traveler' | 'Smart Assistant' | 'Local Partner' | 'Together';
  title: string;
  summary: string;
  outcome: string;
}

export interface ValueCard {
  tag: string;
  title: string;
  summary: string;
  highlights: string[];
}

export interface PrivacyPermissionRow {
  permission: string;
  app: string;
  purpose: string;
}

export const HERO_STATS = [
  { label: 'Two Connected Apps', value: 'Traveler & Partner', detail: 'Built for visitors & local hosts' },
  { label: 'All-in-One Travel', value: '5 Travel Services', detail: 'Plans · Stays · Tours · Crafts · SOS' },
  { label: 'Trusted Community', value: '100% Verified', detail: 'ID & license checked partners' },
  { label: 'Island-Wide Safety', value: '24/7 Support', detail: '1-tap Sri Lanka emergency help' },
];

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: 'bridge',
    tag: 'Everything in One Place',
    title: 'From Travel Inspiration to Real Bookings in Seconds',
    problem:
      'Visiting Sri Lanka often means juggling half a dozen separate apps — one for ideas, another for hotels, another for activities, and endless messaging just to book a local guide.',
    solution:
      'RoamCeylon brings every step together. When our Smart Planner suggests a sunrise climb in Sigiriya or a coastal stay in Galle, you can reserve your room, book a trusted guide, join local activities, and shop local crafts right inside the same app.',
    highlight: '5 Essential Travel Services Unified',
  },
  {
    id: 'seasonality',
    tag: 'Right Coast, Right Season',
    title: 'Weather-Smart Routes & Sustainable Tourism',
    problem:
      'Sri Lanka has two separate monsoon seasons on opposite sides of the island, and famous spots like Ella and Sigiriya can easily get crowded.',
    solution:
      'Our Smart Travel Assistant factors in regional weather and seasonal crowds so you always catch sunny beaches and scenic hill-country views, while helping discover hidden eco-friendly gems across the island.',
    highlight: 'Custom 1 to 30 Day Itineraries',
  },
  {
    id: 'artisans',
    tag: 'Empowering Locals',
    title: 'Direct Support for Rural Artisans & Small Operators',
    problem:
      'Authentic Sri Lankan mask carvers, Ceylon tea estates, spice gardens, and family-run guesthouses often struggle to reach international travelers online.',
    solution:
      'RoamCeylon Admin gives small local businesses a simple, reliable mobile storefront to showcase their rooms, tours, activities, and handcrafted goods directly to visitors.',
    highlight: '4 Dedicated Local Business Tools',
  },
  {
    id: 'safety',
    tag: 'Peace of Mind',
    title: 'Verified Hosts & Built-In Emergency Safety Net',
    problem:
      'Exploring unfamiliar hill-country roads or remote beaches with patchy internet can feel stressful for solo travelers and families.',
    solution:
      'Every partner completes a 3-step identity and business check before going live, saved itineraries remain accessible offline, and our Emergency screen shows your exact location with 1-tap dialing to 119, 1990, 110, and 1331.',
    highlight: '4 Sri Lanka Emergency Hotlines',
  },
];

export const TRAVELER_VERTICALS: TravelerVertical[] = [
  {
    id: 'ai-planner',
    title: 'AI Trip Planner & Travel Chat',
    subtitle: 'Personalized Sri Lanka itineraries built around your budget & pace',
    badge: 'Smart Concierge',
    color: '#0F3D26',
    bgTint: '#E9F5EE',
    highlights: [
      'Creates custom 1 to 30 day plans for Relaxed, Moderate, or Fast-paced travel with clear cost estimates',
      'Reorder, swap, or remove stops anytime and save your favorite trips for offline viewing on the road',
      'Learns what you enjoy from your past ratings and highlights spots matched to your favorite travel style ✨',
    ],
    popularFor: ['Solo Travelers', 'Couples', 'Family Vacations'],
  },
  {
    id: 'hotels',
    title: 'Hotels & Boutique Stays',
    subtitle: 'Handpicked eco-lodges, resorts, and welcoming homestays',
    badge: 'Verified Stays',
    color: '#1A6A3B',
    bgTint: '#DFF6E6',
    highlights: [
      'Suggests hotels and boutique stays that match your itinerary stops and travel budget',
      'Check room availability, nightly rates, and instant confirmation status right on your home screen',
      'Direct communication with verified property owners for smooth airport pickups and check-ins',
    ],
    popularFor: ['Boutique Hotels', 'Eco Lodges', 'Beach Villas'],
  },
  {
    id: 'tours-activities',
    title: 'Guided Tours & Outdoor Activities',
    subtitle: 'Wildlife safaris, surf lessons, cooking classes & heritage walks',
    badge: 'Local Experts',
    color: '#B14B17',
    bgTint: '#FCECE1',
    highlights: [
      'Browse authentic tours and outdoor experiences hosted directly by licensed Sri Lankan guides',
      'Send quick trip inquiries with your group size and pickup point, or book confirmed packages directly',
      'View upcoming tour dates and full booking history anytime from your traveler profile',
    ],
    popularFor: ['Jeep Safaris', 'Cultural Trails', 'Water Sports'],
  },
  {
    id: 'marketplace',
    title: 'Local Treasures Marketplace',
    subtitle: 'Authentic Ceylon tea, spices, traditional masks & handloom crafts',
    badge: 'Artisan Direct',
    color: '#125D8D',
    bgTint: '#E3F0FA',
    highlights: [
      'Explore curated categories including Best Sellers, Ceylon Tea, Handmade Gifts, and Pure Spices',
      'Discover real artisan stories, shop hours, and direct links to local Sri Lankan craft makers',
      'Support traditional cottage industries while taking home genuine, memorable keepsakes',
    ],
    popularFor: ['Ceylon Tea', 'Ambalangoda Masks', 'Pure Spices'],
  },
  {
    id: 'emergency',
    title: 'One-Tap Emergency Safety Net',
    subtitle: 'Know your exact Sri Lankan address & call help in one tap',
    badge: 'Safety First',
    color: '#B91C1C',
    bgTint: '#FEE2E2',
    highlights: [
      'Automatically shows your current street, district, and coordinates so you can read them clearly in an emergency',
      'Instant one-tap calling to Sri Lanka Police (119), Suwa Seriya Ambulance (1990), Fire (110), and Tourist Help (1331)',
      'Designed with high-contrast buttons for fast, stress-free access anywhere on the island',
    ],
    popularFor: ['Police 119', 'Ambulance 1990', 'Tourist Support 1331'],
  },
];

export const PARTNER_ROLES: PartnerRole[] = [
  {
    id: 'hotel_manager',
    title: 'Hotel & Stay Owners',
    badge: 'Accommodations & Homestays',
    tagline: 'Manage rooms, calendars, check-ins & guest messages effortlessly',
    description:
      'Designed for boutique hotels, eco-lodges, and family homestays across Sri Lanka to keep room availability updated, greet arriving guests, and grow direct bookings.',
    features: ['Today’s Check-Ins', 'Room Gallery', 'Date Calendar', 'Guest Chat'],
    capabilities: [
      'Daily overview showing today’s arrivals, occupancy, and upcoming stays at a glance',
      'Add or update rooms, nightly prices, amenities, and property photos right from your phone',
      'Visual availability calendar to block dates or open seasonal rooms in seconds',
      'View guest details and message travelers directly before check-in',
    ],
  },
  {
    id: 'tour_guide',
    title: 'Tour Guides',
    badge: 'Licensed Guides & Operators',
    tagline: 'Publish tour packages, reply to traveler inquiries & track earnings',
    description:
      'Helps Sri Lankan tour guides turn traveler questions into confirmed bookings, showcase multi-day itineraries, and get turn-by-turn directions to pickup points.',
    features: ['Package Builder', 'Inquiry Inbox', 'Revenue Tracker', 'Pickup Maps'],
    capabilities: [
      'Create rich tour packages with photo galleries, highlights, pricing, and trip durations',
      'Receive traveler inquiries instantly and convert promising leads into confirmed bookings',
      'Track earnings, top-performing packages, and monthly booking trends in one dashboard',
      'Open traveler pickup locations directly in your phone’s maps app',
    ],
  },
  {
    id: 'activity_provider',
    title: 'Activity Hosts',
    badge: 'Safaris, Surfing & Experiences',
    tagline: 'Organize daily sessions, group capacity & customer reviews',
    description:
      'Built for surf instructors, wildlife safari operators, tea tasting hosts, and adventure clubs to keep daily time slots organized and maximize every seat.',
    features: ['Daily Schedule', 'Group Capacity', 'Earnings View', 'Guest Reviews'],
    capabilities: [
      'List activities with clear difficulty levels, start times, pricing, and guest limits',
      'Follow a clean Daily Schedule tab showing every booked session by time of day',
      'Monitor revenue summaries, booking counts, and popular seasonal activities',
      'Read and respond to traveler reviews with instant booking notifications',
    ],
  },
  {
    id: 'shop_partner',
    title: 'Local Shop Owners',
    badge: 'Artisans, Tea & Specialty Shops',
    tagline: 'Bring your Sri Lankan craft store online to welcome global visitors',
    description:
      'Gives local tea boutiques, spice gardens, wood carvers, and souvenir shops an inviting digital storefront complete with map pin, hours, and social links.',
    features: ['Storefront Profile', 'Map Pinning', 'Photo Showcase', 'Approval Status'],
    capabilities: [
      'Set up your shop profile with opening hours, story, website, and social media handles',
      'Pin your exact storefront location on the map so nearby travelers can easily find you',
      'Upload crisp photos of your handmade products and authentic Ceylon goods',
      'Appear directly inside the RoamCeylon Traveler Marketplace once verified',
    ],
  },
];

export const ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    step: '01',
    actor: 'Traveler',
    title: 'Tell Us Your Dream Trip',
    summary:
      'Sign in quickly with email or Google, pick your preferred currency (LKR, USD, or EUR), and tell RoamCeylon where you want to go, how long you’re staying, and what you love.',
    outcome: 'Personalized travel profile in under 60 seconds',
  },
  {
    step: '02',
    actor: 'Smart Assistant',
    title: 'Get a Custom Sri Lanka Plan',
    summary:
      'Our AI concierge combines verified Sri Lankan local knowledge with your travel style and budget to craft a realistic day-by-day itinerary — not generic guesswork.',
    outcome: 'Day-by-day schedule & budget breakdown ready to edit',
  },
  {
    step: '03',
    actor: 'Local Partner',
    title: 'Connect with Verified Hosts',
    summary:
      'Every hotel owner, tour guide, activity host, and shop partner in RoamCeylon Admin passes a 3-step ID and business license check before their listings appear to travelers.',
    outcome: 'Trusted bookings with real local Sri Lankan operators',
  },
  {
    step: '04',
    actor: 'Traveler',
    title: 'Book & Explore with Confidence',
    summary:
      'Reserve boutique stays, inquire about guided tours and activities, browse artisan markets, and carry offline plans plus 1-tap emergency hotlines wherever you go.',
    outcome: 'Seamless journey across coastlines, cities & mountains',
  },
  {
    step: '05',
    actor: 'Together',
    title: 'Rate & Improve Every Future Trip',
    summary:
      'Give a quick rating or thumbs-up after your trip. RoamCeylon learns what you loved and refines your future recommendations while helping great local partners shine.',
    outcome: 'Smarter, more personal trips every time you travel',
  },
];

export const WHY_CHOOSE_ROAMCEYLON: ValueCard[] = [
  {
    tag: 'Traveler Advantage',
    title: 'Offline Ready for Rural Trails',
    summary:
      'Hill-country train journeys and rainforest hikes can lose mobile signal. Your saved trips and itineraries remain safely stored right on your phone whenever you need them.',
    highlights: ['Works without constant Wi-Fi', 'Instant schedule check on the go', 'Built-in 119 / 1990 safety screen'],
  },
  {
    tag: 'Verified Quality',
    title: 'Real People, Checked Credentials',
    summary:
      'Unlike unmoderated listings, every RoamCeylon Partner submits their National ID or Passport, official business registration, and a live verification selfie.',
    highlights: ['National ID / Passport verified', 'Tourism & business license check', 'Trusted local service standards'],
  },
  {
    tag: 'Smart Personalization',
    title: 'Plans That Adapt to Your Style',
    summary:
      'Whether you love ancient temples, quiet tea estates, surfing beaches, or local street food, RoamCeylon learns from your ratings to surface experiences you genuinely enjoy.',
    highlights: ['Matches pace & budget tier', 'Highlights previously loved spots ✨', 'Avoids repetitive suggestions'],
  },
  {
    tag: 'Sri Lankan Heritage',
    title: 'Created in Sri Lanka by IdeaTech',
    summary:
      'Built locally by IdeaTech (Pvt) Ltd in Colombo & Maharagama with deep respect for Sri Lankan hospitality, eco-tourism, and preserving traditional island crafts.',
    highlights: ['Supports local artisans & guides', 'Local LKR, USD & EUR support', 'Dedicated local support team'],
  },
];

export const PERMISSIONS_TABLE: PrivacyPermissionRow[] = [
  {
    permission: 'Location Access (Precise & Approximate)',
    app: 'Both Apps',
    purpose:
      'Show nearby attractions and shop locations on the map, and display your current address on the Emergency screen.',
  },
  {
    permission: 'Camera Access',
    app: 'RoamCeylon Admin',
    purpose: 'Take a live selfie photo during Partner Business Verification to confirm account ownership.',
  },
  {
    permission: 'Photo Library & Document Picker',
    app: 'Both Apps',
    purpose:
      'Upload profile pictures, hotel/tour/activity/shop gallery photos, and ID or Business License files (PNG, JPG, HEIC, PDF up to 5 MB).',
  },
  {
    permission: 'Notifications',
    app: 'Both Apps',
    purpose: 'Send timely alerts for new bookings, traveler inquiries, verification updates, and trip reminders.',
  },
  {
    permission: 'Internet & Device Vibration',
    app: 'Both Apps',
    purpose: 'Keep your trips, bookings, and partner listings synced securely and alert you to incoming updates.',
  },
];
