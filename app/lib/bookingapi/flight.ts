/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReqConfig, Service } from "./types";
import { formatURLSearchParams } from "./utils";

function flightService({ api }: Service) {
  const prefix = "v1/flights";

  const searchFlightLocations = async (
    data: { query: string },
    reqConfig?: ReqConfig
  ) => {
    type Response = {
      status: boolean;
      message: string;
      timestamp: number;
      data: {
        id: string;
        type: string;
        name: string;
        code: string;
        city?: string;
        cityName?: string;
        regionName?: string;
        country: string;
        countryName: string;
        countryNameShort?: string;
        photoUri: string;
        distanceToCity?: {
          value: number;
          unit: string;
        };
        parent?: string;
        region?: string;
      }[];
    };

    const filters = new URLSearchParams(formatURLSearchParams(data)).toString();

    const result = await api.get<Response>(
      `${prefix}/getFlightDetails?${filters}`,
      {
        ...reqConfig,
      }
    );
    return result;
  };

  const searchFlights = async (
    data: { fromId: string; toId: string; departDate: string },
    reqConfig?: ReqConfig
  ) => {
    type Response = {
      status: boolean;
      message: string;
      timestamp: number;
      data: {
        aggregation: Aggregation;
        flightOffers: FlightOffer[];
        flightDeals: FlightDeal[];
        atolProtectedStatus: string;
        isOffersCabinClassExtended: boolean;
        baggagePolicies: BaggagePolicy[];
      };
    };

    const filters = new URLSearchParams(formatURLSearchParams(data)).toString();

    const result = await api.get<Response>(
      `${prefix}/getFlightDetails?${filters}`,
      {
        ...reqConfig,
      }
    );
    return result;
  };

  return Object.freeze({
    searchFlightLocations,
    searchFlights,
  });
}

export default flightService;

interface BaggagePolicy {
  code: string;
  name: string;
  url: string;
}

interface FlightDeal {
  key: string;
  offerToken: string;
  price: MinPrice;
  travellerPrices: TravellerPrice2[];
}

interface TravellerPrice2 {
  travellerPriceBreakdown: PriceBreakdown2;
  travellerReference: string;
  travellerType: string;
}

interface FlightOffer {
  token: string;
  segments: Segment[];
  priceBreakdown: PriceBreakdown;
  travellerPrices: TravellerPrice[];
  priceDisplayRequirements: any[];
  pointOfSale: string;
  tripType: string;
  posMismatch: PosMismatch;
  includedProducts: IncludedProducts;
  extraProducts: ExtraProduct[];
  offerExtras: OfferExtras;
  ancillaries: Ancillaries;
  appliedDiscounts: any[];
  offerKeyToHighlight: string;
  seatAvailability?: SeatAvailability;
  extraProductDisplayRequirements: MoreTaxesAndFees;
  brandedFareInfo?: BrandedFareInfo;
}

interface BrandedFareInfo {
  fareName: string;
  cabinClass: string;
  features: any[];
  fareAttributes: any[];
  nonIncludedFeatures: any[];
}

interface SeatAvailability {
  numberOfSeatsAvailable: number;
}

interface Ancillaries {
  flexibleTicket?: FlexibleTicket2;
}

interface FlexibleTicket2 {
  airProductReference: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown2;
  preSelected: boolean;
}

interface OfferExtras {
  flexibleTicket?: FlexibleTicket;
}

interface FlexibleTicket {
  airProductReference: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown2;
}

interface ExtraProduct {
  type: string;
  priceBreakdown: PriceBreakdown2;
}

interface PriceBreakdown2 {
  total: MinPrice;
  baseFare: MinPrice;
  fee: MinPrice;
  tax: MinPrice;
  moreTaxesAndFees: MoreTaxesAndFees;
  discount: MinPrice;
  totalWithoutDiscount: MinPrice;
}

interface IncludedProducts {
  areAllSegmentsIdentical: boolean;
  segments: Segment2[][];
}

interface Segment2 {
  luggageType: string;
  maxPiece: number;
  maxWeightPerPiece?: number;
  massUnit?: string;
  sizeRestrictions?: SizeRestrictions;
  ruleType?: string;
  maxTotalWeight?: number;
}

interface PosMismatch {
  detectedPointOfSale: string;
  isPOSMismatch: boolean;
  offerSalesCountry: string;
}

interface TravellerPrice {
  travellerPriceBreakdown: TravellerPriceBreakdown;
  travellerReference: string;
  travellerType: string;
}

interface TravellerPriceBreakdown {
  total: MinPrice;
  baseFare: MinPrice;
  fee: MinPrice;
  tax: MinPrice;
  totalRounded: MinPrice;
  moreTaxesAndFees: MoreTaxesAndFees;
  discount: MinPrice;
  totalWithoutDiscount: MinPrice;
  totalWithoutDiscountRounded: MinPrice;
}

interface PriceBreakdown {
  total: MinPrice;
  baseFare: MinPrice;
  fee: MinPrice;
  tax: MinPrice;
  totalRounded: MinPrice;
  moreTaxesAndFees: MoreTaxesAndFees;
  discount: MinPrice;
  totalWithoutDiscount: MinPrice;
  totalWithoutDiscountRounded: MinPrice;
  carrierTaxBreakdown: CarrierTaxBreakdown[];
}

interface CarrierTaxBreakdown {
  carrier: CarriersDatum;
  avgPerAdult: MinPrice;
  avgPerChild: MinPrice;
  avgPerInfant?: MinPrice;
}

interface MoreTaxesAndFees {}

interface Segment {
  departureAirport: DepartureAirport;
  arrivalAirport: DepartureAirport;
  departureTime: string;
  arrivalTime: string;
  legs: Leg[];
  totalTime: number;
  travellerCheckedLuggage: TravellerCheckedLuggage[];
  travellerCabinLuggage: TravellerCabinLuggage[];
  isAtolProtected: boolean;
  showWarningDestinationAirport: boolean;
  showWarningOriginAirport: boolean;
}

interface TravellerCabinLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance2;
  personalItem?: boolean;
}

interface LuggageAllowance2 {
  luggageType: string;
  maxPiece: number;
  maxWeightPerPiece: number;
  massUnit: string;
  sizeRestrictions: SizeRestrictions;
}

interface SizeRestrictions {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

interface TravellerCheckedLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance;
}

interface LuggageAllowance {
  luggageType: string;
  ruleType: string;
  maxPiece: number;
  maxWeightPerPiece?: number;
  massUnit: string;
  maxTotalWeight?: number;
}

interface Leg {
  departureTime: string;
  arrivalTime: string;
  departureAirport: DepartureAirport;
  arrivalAirport: DepartureAirport;
  cabinClass: string;
  flightInfo: FlightInfo;
  carriers: string[];
  carriersData: CarriersDatum[];
  totalTime: number;
  flightStops: any[];
  departureTerminal?: string;
  arrivalTerminal?: string;
}

interface CarriersDatum {
  name: string;
  code: string;
  logo: string;
}

interface FlightInfo {
  facilities: any[];
  flightNumber: number;
  planeType: string;
  carrierInfo: CarrierInfo;
}

interface CarrierInfo {
  operatingCarrier: string;
  marketingCarrier: string;
  operatingCarrierDisclosureText: string;
}

interface DepartureAirport {
  type: string;
  code: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
  name: string;
}

interface Aggregation {
  totalCount: number;
  filteredTotalCount: number;
  stops: Stop[];
  airlines: Airline[];
  departureIntervals: DepartureInterval[];
  flightTimes: FlightTime[];
  durationMin: number;
  durationMax: number;
  minPrice: MinPrice;
  minPriceFiltered: MinPrice;
  baggage: Baggage[];
  budget: Budget;
  budgetPerAdult: Budget;
  duration: Duration[];
}

interface Duration {
  min: number;
  max: number;
  durationType: string;
  enabled: boolean;
  paramName: string;
}

interface Budget {
  paramName: string;
  min: MinPrice;
  max: MinPrice;
}

interface Baggage {
  paramName: string;
  count: number;
  enabled: boolean;
  baggageType: string;
}

interface FlightTime {
  arrival: Arrival[];
  departure: Arrival[];
}

interface Arrival {
  start: string;
  end: string;
  count: number;
}

interface DepartureInterval {
  start: string;
  end: string;
}

interface Airline {
  name: string;
  logoUrl: string;
  iataCode: string;
  count: number;
  minPrice: MinPrice;
}

interface Stop {
  numberOfStops: number;
  count: number;
  minPrice: MinPrice;
}

interface MinPrice {
  currencyCode: string;
  units: number;
  nanos: number;
}
