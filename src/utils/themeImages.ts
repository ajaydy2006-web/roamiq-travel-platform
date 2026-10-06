import { Destination, UserTripQuery } from '../types/travel';

export interface BackgroundTheme {
  url: string;
  label: string;
  icon: string;
}

export const getDestinationBackground = (
  dest: Destination | null,
  query?: UserTripQuery
): BackgroundTheme => {
  const searchText = (
    dest
      ? `${dest.name} ${dest.state} ${dest.description} ${dest.interests.join(' ')}`
      : `${query?.promptText || ''} ${query?.selectedInterests?.join(' ') || ''}`
  ).toLowerCase();

  // 1. Himalayan Mountains & Tibetan Prayer Flags (Exact match for user reference images!)
  if (
    searchText.includes('ladakh') ||
    searchText.includes('ziro') ||
    searchText.includes('himalaya') ||
    searchText.includes('mountain') ||
    searchText.includes('snow') ||
    searchText.includes('sikim') ||
    searchText.includes('sikkim') ||
    searchText.includes('kashmir') ||
    searchText.includes('spiti') ||
    searchText.includes('manali') ||
    searchText.includes('shimla') ||
    searchText.includes('tawang') ||
    searchText.includes('himachal') ||
    searchText.includes('uttarakhand')
  ) {
    return {
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
      label: "Himalayan Snow Peaks & Prayer Flags",
      icon: "🏔️"
    };
  }

  // 2. Beach & Tropical Islands (Andaman, Goa, Puducherry, Lakshadweep)
  if (
    searchText.includes('andaman') ||
    searchText.includes('beach') ||
    searchText.includes('island') ||
    searchText.includes('sea') ||
    searchText.includes('goa') ||
    searchText.includes('puducherry') ||
    searchText.includes('pondicherry') ||
    searchText.includes('lakshadweep') ||
    searchText.includes('gokarna') ||
    searchText.includes('ocean')
  ) {
    return {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
      label: "Tropical Coastal Sunset & Turquoise Waters",
      icon: "🏖️"
    };
  }

  // 3. Royal Sandstone Forts, Desert & Palaces (Jaipur, Udaipur, Jaisalmer, Gujarat)
  if (
    searchText.includes('jaipur') ||
    searchText.includes('rajasthan') ||
    searchText.includes('fort') ||
    searchText.includes('palace') ||
    searchText.includes('desert') ||
    searchText.includes('jaisalmer') ||
    searchText.includes('udaipur') ||
    searchText.includes('kutch') ||
    searchText.includes('royal')
  ) {
    return {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2000&q=80",
      label: "Royal Sandstone Forts & Golden Architecture",
      icon: "🏰"
    };
  }

  // 4. Sacred River Ghats, Temples & Heritage (Varanasi, Amritsar, Hampi, Madurai)
  if (
    searchText.includes('varanasi') ||
    searchText.includes('amritsar') ||
    searchText.includes('temple') ||
    searchText.includes('ghat') ||
    searchText.includes('spiritual') ||
    searchText.includes('hampi') ||
    searchText.includes('madurai') ||
    searchText.includes('rishikesh')
  ) {
    return {
      url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=80",
      label: "Sacred River Ghats & Heritage Temples",
      icon: "🛕"
    };
  }

  // 5. Green Hill Stations, Tea Valleys & Forests (Araku Valley, Munnar, Coorg, Wayanad)
  if (
    searchText.includes('araku') ||
    searchText.includes('munnar') ||
    searchText.includes('coorg') ||
    searchText.includes('hill') ||
    searchText.includes('valley') ||
    searchText.includes('forest') ||
    searchText.includes('meghalaya') ||
    searchText.includes('nature')
  ) {
    return {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80",
      label: "Misty Mountain Valleys & Emerald Tea Estates",
      icon: "🌿"
    };
  }

  // Default: Himalayan Prayer Flags & Snow Peaks (as requested by user!)
  return {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    label: "Himalayan Snow Peaks & Prayer Flags",
    icon: "🏔️"
  };
};
