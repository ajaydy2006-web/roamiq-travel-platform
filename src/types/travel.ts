export type CrowdLevel = 'LOW' | 'MEDIUM' | 'HIGH';
export type AvailabilityStatus = 'AVAILABLE' | 'LIMITED' | 'CLOSED';
export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';
export type TravelGroup = 'Solo' | 'Couple' | 'Family' | 'Friends';
export type TravelStyle = 'Relaxed' | 'Balanced' | 'Packed';

export interface FamousFood {
  name: string;
  spot: string;
  price: string;
  whyFamous: string;
  localPopularity: 'POPULAR WITH LOCALS' | 'POPULAR WITH TOURISTS' | 'HIDDEN LOCAL FAVORITE';
}

export interface FamousShopMarket {
  name: string;
  spot: string;
  price: string;
  item: string;
  whyFamous: string;
}

export interface LocalProduct {
  name: string;
  spot: string;
  price: string;
  whyFamous: string;
}

export interface CulturalExperience {
  name: string;
  spot: string;
  price: string;
  description: string;
}

export interface HiddenGem {
  id: string;
  name: string;
  distanceFromHub: string;
  travelTime: string;
  crowdLevel: 'LOW' | 'MEDIUM';
  estimatedCost: string;
  whyRecommended: string;
  category: string;
  image: string;
}

export interface FestivalEvent {
  id: string;
  name: string;
  dates: string;
  location: string;
  crowdImpact: CrowdLevel;
  hotelImpact: string;
  transportImpact: string;
  description: string;
  price: string;
}

export interface LocalAvailabilityItem {
  category: string;
  name: string;
  status: AvailabilityStatus;
  capacityPct: number;
  openingHours: string;
  bestTime: string;
}

export interface ItineraryStop {
  id: string;
  time: string;
  activity: string;
  location: string;
  category: string;
  cost: number;
  travelTime: string;
  crowd: CrowdLevel;
  risk: RiskLevel;
  available: boolean;
  isAlternative?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  stops: ItineraryStop[];
}

export interface TransportOption {
  mode: string;
  provider: string;
  price: number;
  time: string;
  availability: string;
  rating: number;
  badge?: string;
  convenienceScore: number;
}

export interface HotelOption {
  id: string;
  name: string;
  pricePerNight: number;
  location: string;
  rating: number;
  distanceToHub: string;
  transportCostToHighlights: number;
  totalEstimatedTripHotelCost: number;
  recommendationTag?: 'BEST OVERALL VALUE' | 'LUXURY PICK' | 'BUDGET FRIENDLY';
  image: string;
}

export interface ScamShieldDetail {
  title: string;
  badge: string;
  trigger: string;
  solution: string;
}

export interface TravelRiskProfile {
  overallScore: RiskLevel;
  weatherRisk: RiskLevel;
  crowdRisk: RiskLevel;
  roadRisk: RiskLevel;
  activityRisk: RiskLevel;
  scamRisk: RiskLevel;
  emergencyAccess: 'HIGH' | 'MEDIUM' | 'EXCELLENT';
  scamShieldTips: string[];
  scamShieldItems?: ScamShieldDetail[];
  dosAndDonts: { dos: string[]; donts: string[] };
  emergencyServices: Array<{ type: string; name: string; contact: string; distance: string; verified: boolean }>;
  nearestHospital?: string;
}

export interface TranslationPhrase {
  id: string;
  english: string;
  localScript: string;
  phonetic: string;
  pronunciation?: string;
  usageNote?: string;
  category: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  regionType: 'State' | 'Union Territory';
  tagline: string;
  matchScore: number;
  matchReasons: string[];
  description: string;
  heroImage: string;
  interests: string[];
  bestSeason: string;
  estimatedBudget: { solo: number; couple: number; family: number; friends: number };
  idealDurationDays: number;
  crowdLevel: CrowdLevel;
  touristPriceGuard: {
    item: string;
    expectedPrice: string;
    observedPrice: string;
    status: 'FAIR PRICE' | 'POSSIBLE TOURIST OVERCHARGING' | 'HIGH DEMAND SURGE';
  };
  famousFor: {
    food: FamousFood[];
    shopsMarkets: FamousShopMarket[];
    localProducts: LocalProduct[];
    culturalExperiences: CulturalExperience[];
  };
  hiddenGems: HiddenGem[];
  eventsFestivals: FestivalEvent[];
  localAvailability: LocalAvailabilityItem[];
  itinerary: ItineraryDay[];
  transportOptions: TransportOption[];
  hotelOptions: HotelOption[];
  riskProfile: TravelRiskProfile;
  translatorPhrases: TranslationPhrase[];
}

export interface UserTripQuery {
  promptText: string;
  selectedInterests: string[];
  budget: number;
  durationDays: number;
  travelGroup: TravelGroup;
  travelStyle: TravelStyle;
  dates: string;
}

export interface TravelIntelligenceScore {
  overall: number;
  costScore: number;
  safetyScore: number;
  crowdScore: number;
  weatherScore: number;
  transportScore: number;
  convenienceScore: number;
  explanations: string[];
}
