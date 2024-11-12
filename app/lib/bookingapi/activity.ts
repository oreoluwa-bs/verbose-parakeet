/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReqConfig, Service } from "./types";
import { formatURLSearchParams } from "./utils";

function attractionService({ api }: Service) {
  const prefix = "v1/attraction";

  const searchLocation = async (
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
        status: boolean;
        message: string;
        timestamp: number;
        data: {
          products: {
            id: string;
            __typename: string;
            title: string;
            productId: string;
            productSlug: string;
            taxonomySlug: string;
            cityUfi: number;
            cityName: string;
            countryCode: string;
          }[];
          destinations: {
            id: string;
            __typename: string;
            ufi: number;
            country: string;
            cityName: string;
            productCount: number;
            cc1: string;
          }[];
        };
      };
    };

    const filters = new URLSearchParams(formatURLSearchParams(data)).toString();

    const result = await api.get<Response>(
      `${prefix}/searchLocation?${filters}`,
      {
        ...reqConfig,
      }
    );
    return result;
  };

  const searchAttractions = async (
    data: {
      id: string;
    },
    reqConfig?: ReqConfig
  ) => {
    type Response = {
      status: boolean;
      message: string;
      timestamp: number;
      data: {
        __typename: string;
        products: Product[];
        filterStats: FilterStats;
        sorters: Sorter[];
        defaultSorter: Sorter;
        filterOptions: FilterOptions;
      };
    };

    const filters = new URLSearchParams(formatURLSearchParams(data)).toString();

    const result = await api.get<Response>(
      `${prefix}/searchAttractions?${filters}`,
      {
        ...reqConfig,
      }
    );
    return result;
  };

  return Object.freeze({
    searchLocation,
    searchAttractions,
  });
}

export default attractionService;

interface FilterOptions {
  __typename: string;
  typeFilters: TypeFilter[];
  labelFilters: TypeFilter[];
  ufiFilters: TypeFilter[];
  priceFilters: TypeFilter[];
}

interface TypeFilter {
  __typename: string;
  name: string;
  tagname: string;
  productCount: number;
}

interface Sorter {
  __typename: string;
  name: string;
  value: string;
}

interface FilterStats {
  __typename: string;
  unfilteredProductCount: number;
  filteredProductCount: number;
}

export interface Product {
  __typename: string;
  cancellationPolicy: CancellationPolicy;
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  representativePrice: RepresentativePrice;
  primaryPhoto: PrimaryPhoto;
  reviewsStats: ReviewsStat | null;
  ufiDetails: UfiDetails;
  offers: Offer[];
  supportedFeatures: SupportedFeatures;
  flags: Flag[] | null;
}

interface Flag {
  __typename: string;
  flag: string;
  value: boolean;
  rank: number;
}

interface SupportedFeatures {
  __typename: string;
  nativeApp: boolean;
}

interface Offer {
  __typename: string;
  items: Item[];
}

interface Item {
  __typename: string;
  id: string;
}

interface UfiDetails {
  __typename: string;
  bCityName: string;
  ufi: number;
  url: Url;
}

interface Url {
  __typename: string;
  country: string;
}

interface ReviewsStat {
  __typename: string;
  allReviewsCount: number;
  percentage: string;
  combinedNumericStats: CombinedNumericStats;
}

interface CombinedNumericStats {
  __typename: string;
  average: number;
  total: number;
}

interface PrimaryPhoto {
  __typename: string;
  small: string;
}

interface RepresentativePrice {
  __typename: string;
  chargeAmount: number;
  currency: string;
  publicAmount: number;
}

interface CancellationPolicy {
  __typename: string;
  hasFreeCancellation: boolean;
}
