/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReqConfig, Service } from "./types";
import { formatURLSearchParams } from "./utils";

function hotelService({ api }: Service) {
  const prefix = "v1/hotels";

  const searchHotelDestination = async (
    data: {
      query: string;
    },
    reqConfig?: ReqConfig
  ) => {
    type Response = {
      status: boolean;
      message: string;
      timestamp: number;
      data: {
        dest_type: string;
        cc1: string;
        city_name: string;
        label: string;
        longitude: number;
        latitude: number;
        type: string;
        region: string;
        city_ufi: null | number;
        name: string;
        roundtrip: string;
        country: string;
        image_url: string;
        dest_id: string;
        nr_hotels: number;
        lc: string;
        hotels: number;
      }[];
    };

    const filters = new URLSearchParams(formatURLSearchParams(data)).toString();

    const result = await api.get<Response>(
      `${prefix}/searchDestination?${filters}`,
      {
        ...reqConfig,
      }
    );
    return result;
  };

  const searchHotels = async (
    data: {
      dest_id: string;
      search_type: string;
      arrival_date: string;
      departure_date: string;
    },
    reqConfig?: ReqConfig
  ) => {
    type Response = {
      status: boolean;
      message: string;
      timestamp: number;
      data: Hotel;
    };

    const filters = new URLSearchParams(formatURLSearchParams(data)).toString();

    const result = await api.get<Response>(
      `${prefix}/searchHotels?${filters}`,
      {
        ...reqConfig,
      }
    );
    return result;
  };

  return Object.freeze({
    searchHotelDestination,
    searchHotels,
  });
}

export default hotelService;

export interface Hotel {
  accessibilityLabel: string;
  property: Property;
}

interface Property {
  reviewScoreWord: string;
  accuratePropertyClass: number;
  reviewCount: number;
  ufi: number;
  isPreferred?: boolean;
  isFirstPage: boolean;
  checkin: Checkin;
  qualityClass: number;
  rankingPosition: number;
  reviewScore: number;
  countryCode: string;
  propertyClass: number;
  photoUrls: string[];
  checkoutDate: string;
  position: number;
  latitude: number;
  checkout: Checkin;
  priceBreakdown: PriceBreakdown;
  optOutFromGalleryChanges: number;
  wishlistName: string;
  blockIds: string[];
  currency: string;
  checkinDate: string;
  id: number;
  mainPhotoId: number;
  name: string;
  longitude: number;
  isPreferredPlus?: boolean;
}

interface PriceBreakdown {
  benefitBadges: any[];
  grossPrice: GrossPrice;
  taxExceptions: any[];
  strikethroughPrice?: GrossPrice;
}

interface GrossPrice {
  currency: string;
  value: number;
}

interface Checkin {
  untilTime: string;
  fromTime: string;
}
