import { HotelIcon, PlaneTakeoffIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ActivityCard } from "~/features/activity/components/activity-card";
import { HotelCard } from "~/features/hotels/components/hotel-card";

export function ItinararyList() {
  return (
    <ul className="space-y-4">
      <li>
        <FlightList />
      </li>
      <li>
        <HotelList />
      </li>
      <li>
        <ActivityList />
      </li>
    </ul>
  );
}

function FlightList() {
  const flights = [
    {
      accessibilityLabel:
        "The Taj Mahal Tower, Mumbai.\n5 out of 5 stars.\n9.0 Superb 4887 reviews.\n‎Colaba‬ • ‎11 miles from centre‬\n‎Travel Sustainable‬\n‎This property has free cots available‬.\n1 bed.\n24190 INR.\nIncludes taxes and charges.\nFree cancellation.",
      property: {
        reviewScoreWord: "Superb",
        accuratePropertyClass: 5,
        reviewCount: 4887,
        ufi: -2092174,
        isPreferred: true,
        isFirstPage: true,
        checkin: {
          untilTime: "00:00",
          fromTime: "14:00",
        },
        qualityClass: 0,
        rankingPosition: 0,
        reviewScore: 9,
        countryCode: "in",
        propertyClass: 5,
        photoUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/square60/31204963.jpg?k=90c11832231c37a814e9631123bd28820e8ad8cd983b78ad529ea139791653d1&o=",
        ],
        checkoutDate: "2023-11-22",
        position: 0,
        latitude: 18.9215006738599,
        checkout: {
          fromTime: "00:00",
          untilTime: "12:00",
        },
        priceBreakdown: {
          benefitBadges: [],
          grossPrice: {
            currency: "INR",
            value: 24190.0001466274,
          },
          taxExceptions: [],
        },
        optOutFromGalleryChanges: 0,
        wishlistName: "Mumbai",
        blockIds: ["7471708_158036154_2_42_0"],
        currency: "INR",
        checkinDate: "2023-11-21",
        id: 74717,
        mainPhotoId: 31204963,
        name: "The Taj Mahal Tower, Mumbai",
        longitude: 72.8332896530628,
      },
    },
    {
      accessibilityLabel:
        "Sunset Heaven.\n‎Powai‬ • ‎4 miles from centre‬.\n 495.1 ft² : 2 beds • 1 bedroom • 1 living room • 2 bathrooms.\nOriginal price 9086 INR. Current price 7330 INR..\nIncludes taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      property: {
        ufi: -2092174,
        reviewCount: 0,
        reviewScoreWord: "",
        accuratePropertyClass: 0,
        rankingPosition: 1,
        propertyClass: 0,
        countryCode: "in",
        reviewScore: 0,
        checkin: {
          fromTime: "14:00",
          untilTime: "00:00",
        },
        isFirstPage: true,
        qualityClass: 0,
        latitude: 19.1200589,
        checkout: {
          untilTime: "11:00",
          fromTime: "11:00",
        },
        position: 1,
        photoUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/square60/492673163.jpg?k=630d18165ec29ed9b94030c94d8c505a99027c1abdeaf1589ee857c59ef060df&o=",
        ],
        checkoutDate: "2023-11-22",
        wishlistName: "Mumbai",
        blockIds: ["1077565801_380345253_4_0_0"],
        optOutFromGalleryChanges: 0,
        priceBreakdown: {
          strikethroughPrice: {
            value: 9086.00005507469,
            currency: "INR",
          },
          taxExceptions: [],
          benefitBadges: [],
          grossPrice: {
            value: 7330.39998244494,
            currency: "INR",
          },
        },
        mainPhotoId: 492673163,
        name: "Sunset Heaven",
        longitude: 72.9171316,
        checkinDate: "2023-11-21",
        currency: "INR",
        id: 10775658,
      },
    },
    {
      accessibilityLabel:
        "La Terra Cosy Studio Service Apartment.\n4 out of 5 for property rating.\n‎Western Suburbs‬ • ‎9 miles from centre‬.\n 2,691 ft² : 1 bed • 1 bedroom • 1 bathroom.\n3326 INR.\nIncludes taxes and charges.",
      property: {
        reviewScoreWord: "",
        accuratePropertyClass: 0,
        ufi: -2092174,
        reviewCount: 0,
        checkin: {
          fromTime: "13:00",
          untilTime: "23:30",
        },
        isFirstPage: true,
        qualityClass: 4,
        rankingPosition: 2,
        propertyClass: 0,
        countryCode: "in",
        reviewScore: 0,
        position: 2,
        photoUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/square60/495003037.jpg?k=937caa5f5495a97fe8fc464131d6d7dafb0b8d8897a5ff5511fa99dcd136fdfa&o=",
        ],
        checkoutDate: "2023-11-22",
        checkout: {
          fromTime: "07:00",
          untilTime: "11:00",
        },
        latitude: 19.198281317507,
        checkinDate: "2023-11-21",
        currency: "INR",
        id: 9972500,
        mainPhotoId: 495003037,
        name: "La Terra Cosy Studio Service Apartment",
        longitude: 72.85712434938,
        priceBreakdown: {
          benefitBadges: [],
          grossPrice: {
            currency: "INR",
            value: 3326.39999203384,
          },
          taxExceptions: [],
        },
        blockIds: ["997250001_372587785_3_1_0"],
        wishlistName: "Mumbai",
        optOutFromGalleryChanges: 0,
      },
    },
  ];

  return (
    <div className="bg-dashboard p-6 rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <h3 className="flex gap-4 font-semibold">
          <PlaneTakeoffIcon />
          Flights
        </h3>
        <Button variant="secondary" className="bg-white">
          Add Flights
        </Button>
      </div>

      <ul className="space-y-5 my-6">
        {flights.map((h) => {
          return (
            <li key={h.property.id}>
              <HotelCard hotel={h} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function HotelList() {
  const hotels = [
    {
      accessibilityLabel:
        "The Taj Mahal Tower, Mumbai.\n5 out of 5 stars.\n9.0 Superb 4887 reviews.\n‎Colaba‬ • ‎11 miles from centre‬\n‎Travel Sustainable‬\n‎This property has free cots available‬.\n1 bed.\n24190 INR.\nIncludes taxes and charges.\nFree cancellation.",
      property: {
        reviewScoreWord: "Superb",
        accuratePropertyClass: 5,
        reviewCount: 4887,
        ufi: -2092174,
        isPreferred: true,
        isFirstPage: true,
        checkin: {
          untilTime: "00:00",
          fromTime: "14:00",
        },
        qualityClass: 0,
        rankingPosition: 0,
        reviewScore: 9,
        countryCode: "in",
        propertyClass: 5,
        photoUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/square60/31204963.jpg?k=90c11832231c37a814e9631123bd28820e8ad8cd983b78ad529ea139791653d1&o=",
        ],
        checkoutDate: "2023-11-22",
        position: 0,
        latitude: 18.9215006738599,
        checkout: {
          fromTime: "00:00",
          untilTime: "12:00",
        },
        priceBreakdown: {
          benefitBadges: [],
          grossPrice: {
            currency: "INR",
            value: 24190.0001466274,
          },
          taxExceptions: [],
        },
        optOutFromGalleryChanges: 0,
        wishlistName: "Mumbai",
        blockIds: ["7471708_158036154_2_42_0"],
        currency: "INR",
        checkinDate: "2023-11-21",
        id: 74717,
        mainPhotoId: 31204963,
        name: "The Taj Mahal Tower, Mumbai",
        longitude: 72.8332896530628,
      },
    },
    {
      accessibilityLabel:
        "Sunset Heaven.\n‎Powai‬ • ‎4 miles from centre‬.\n 495.1 ft² : 2 beds • 1 bedroom • 1 living room • 2 bathrooms.\nOriginal price 9086 INR. Current price 7330 INR..\nIncludes taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      property: {
        ufi: -2092174,
        reviewCount: 0,
        reviewScoreWord: "",
        accuratePropertyClass: 0,
        rankingPosition: 1,
        propertyClass: 0,
        countryCode: "in",
        reviewScore: 0,
        checkin: {
          fromTime: "14:00",
          untilTime: "00:00",
        },
        isFirstPage: true,
        qualityClass: 0,
        latitude: 19.1200589,
        checkout: {
          untilTime: "11:00",
          fromTime: "11:00",
        },
        position: 1,
        photoUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/square60/492673163.jpg?k=630d18165ec29ed9b94030c94d8c505a99027c1abdeaf1589ee857c59ef060df&o=",
        ],
        checkoutDate: "2023-11-22",
        wishlistName: "Mumbai",
        blockIds: ["1077565801_380345253_4_0_0"],
        optOutFromGalleryChanges: 0,
        priceBreakdown: {
          strikethroughPrice: {
            value: 9086.00005507469,
            currency: "INR",
          },
          taxExceptions: [],
          benefitBadges: [],
          grossPrice: {
            value: 7330.39998244494,
            currency: "INR",
          },
        },
        mainPhotoId: 492673163,
        name: "Sunset Heaven",
        longitude: 72.9171316,
        checkinDate: "2023-11-21",
        currency: "INR",
        id: 10775658,
      },
    },
    {
      accessibilityLabel:
        "La Terra Cosy Studio Service Apartment.\n4 out of 5 for property rating.\n‎Western Suburbs‬ • ‎9 miles from centre‬.\n 2,691 ft² : 1 bed • 1 bedroom • 1 bathroom.\n3326 INR.\nIncludes taxes and charges.",
      property: {
        reviewScoreWord: "",
        accuratePropertyClass: 0,
        ufi: -2092174,
        reviewCount: 0,
        checkin: {
          fromTime: "13:00",
          untilTime: "23:30",
        },
        isFirstPage: true,
        qualityClass: 4,
        rankingPosition: 2,
        propertyClass: 0,
        countryCode: "in",
        reviewScore: 0,
        position: 2,
        photoUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/square60/495003037.jpg?k=937caa5f5495a97fe8fc464131d6d7dafb0b8d8897a5ff5511fa99dcd136fdfa&o=",
        ],
        checkoutDate: "2023-11-22",
        checkout: {
          fromTime: "07:00",
          untilTime: "11:00",
        },
        latitude: 19.198281317507,
        checkinDate: "2023-11-21",
        currency: "INR",
        id: 9972500,
        mainPhotoId: 495003037,
        name: "La Terra Cosy Studio Service Apartment",
        longitude: 72.85712434938,
        priceBreakdown: {
          benefitBadges: [],
          grossPrice: {
            currency: "INR",
            value: 3326.39999203384,
          },
          taxExceptions: [],
        },
        blockIds: ["997250001_372587785_3_1_0"],
        wishlistName: "Mumbai",
        optOutFromGalleryChanges: 0,
      },
    },
  ];

  return (
    <div className="bg-[#344054] text-white p-6 rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <h3 className="flex gap-4 font-semibold">
          <HotelIcon />
          Hotels
        </h3>
        <Button variant="secondary" className="text-foreground">
          Add Hotels
        </Button>
      </div>

      <ul className="space-y-5 my-6">
        {hotels.map((h) => {
          return (
            <li key={h.property.id}>
              <HotelCard hotel={h} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ActivityList() {
  const activities = [
    {
      __typename: "AttractionsProduct",
      cancellationPolicy: {
        __typename: "AttractionsCancellationPolicy",
        hasFreeCancellation: true,
      },
      id: "PR02vbVqub1M",
      name: "Découverte nocturne de Mumbai",
      slug: "pr02vbvqub1m-mumbai-night-tour",
      shortDescription:
        "Balade nocturne pour découvrir en toute tranquillité des lieux d'intérêt célèbres de Mumbai",
      representativePrice: {
        __typename: "AttractionsPrice",
        chargeAmount: 4159.62,
        currency: "INR",
        publicAmount: 4159.62,
      },
      primaryPhoto: {
        __typename: "AttractionsPhoto",
        small:
          "https://q-xx.bstatic.com/xdata/images/xphoto/300x320/142009071.jpg?k=30f6c0464aba39762aeafd2a63bb5727fdc19bcbb7081f0abf00d9dd4b107542&o=",
      },
      reviewsStats: {
        __typename: "AttractionsProductReviewStats",
        allReviewsCount: 5,
        percentage: "100%",
        combinedNumericStats: {
          __typename: "AttractionsProductCombinedReviewStats",
          average: 4.7,
          total: 3,
        },
      },
      ufiDetails: {
        __typename: "AttractionLocationResponse",
        bCityName: "Mumbai",
        ufi: -2092174,
        url: {
          __typename: "AttractionLocationUrl",
          country: "in",
        },
      },
      offers: [
        {
          __typename: "Offer",
          items: [
            {
              __typename: "OfferItem",
              id: "OIGolNa1DbVE",
            },
            {
              __typename: "OfferItem",
              id: "OIGBTlzxxHJb",
            },
          ],
        },
      ],
      supportedFeatures: {
        __typename: "AttractionsProductSupportedFeatures",
        nativeApp: true,
      },
      flags: null,
    },
    {
      __typename: "AttractionsProduct",
      cancellationPolicy: {
        __typename: "AttractionsCancellationPolicy",
        hasFreeCancellation: true,
      },
      id: "PRugRDm0UamX",
      name: "Visite en petit groupe du bidonville de Dharavi",
      slug: "prugrdm0uamx-small-group-dharavi-slum-tour",
      shortDescription:
        "Une occasion de découvrir l'un des plus grands bidonvilles d'Asie",
      representativePrice: {
        __typename: "AttractionsPrice",
        chargeAmount: 1247.89,
        currency: "INR",
        publicAmount: 1247.89,
      },
      primaryPhoto: {
        __typename: "AttractionsPhoto",
        small:
          "https://r-xx.bstatic.com/xdata/images/xphoto/300x320/142000879.jpg?k=4eda102f2173d59d3aa2714d7ccb08e94e32f199640ecd206791d311118b5704&o=",
      },
      reviewsStats: {
        __typename: "AttractionsProductReviewStats",
        allReviewsCount: 11,
        percentage: "91%",
        combinedNumericStats: {
          __typename: "AttractionsProductCombinedReviewStats",
          average: 4.9,
          total: 11,
        },
      },
      ufiDetails: {
        __typename: "AttractionLocationResponse",
        bCityName: "Mumbai",
        ufi: -2092174,
        url: {
          __typename: "AttractionLocationUrl",
          country: "in",
        },
      },
      offers: [
        {
          __typename: "Offer",
          items: [
            {
              __typename: "OfferItem",
              id: "OIQBRCyPPl42",
            },
            {
              __typename: "OfferItem",
              id: "OIMAqjM3hF0K",
            },
            {
              __typename: "OfferItem",
              id: "OI6yA75MGkUr",
            },
          ],
        },
        {
          __typename: "Offer",
          items: [
            {
              __typename: "OfferItem",
              id: "OIrUbqHFqca5",
            },
            {
              __typename: "OfferItem",
              id: "OIytnbEAcs9g",
            },
            {
              __typename: "OfferItem",
              id: "OIE11gqw34p4",
            },
          ],
        },
        {
          __typename: "Offer",
          items: [
            {
              __typename: "OfferItem",
              id: "OIR6Z1PVtWEv",
            },
            {
              __typename: "OfferItem",
              id: "OIDLHHr4Y0g9",
            },
            {
              __typename: "OfferItem",
              id: "OIk99DPtwar6",
            },
          ],
        },
      ],
      supportedFeatures: {
        __typename: "AttractionsProductSupportedFeatures",
        nativeApp: true,
      },
      flags: [
        {
          __typename: "AttractionsProductFlags",
          flag: "bestseller",
          value: true,
          rank: 1,
        },
        {
          __typename: "AttractionsProductFlags",
          flag: "bestsellerForTours",
          value: true,
          rank: 1,
        },
        {
          __typename: "AttractionsProductFlags",
          flag: "highlyRated",
          value: true,
          rank: 1,
        },
        {
          __typename: "AttractionsProductFlags",
          flag: "popularFor1Traveler",
          value: true,
          rank: 1,
        },
      ],
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <h3 className="flex gap-4 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#F9FAFB"
              d="M22.302 18.98a1.125 1.125 0 0 1-1.532-.429L14.344 7.125h-1.218V7.5a1.125 1.125 0 0 1-2.25 0v-.375h-1.22L3.232 18.551A1.125 1.125 0 1 1 1.27 17.45L7.077 7.125H2.25a1.125 1.125 0 0 1 0-2.25h19.5a1.125 1.125 0 0 1 0 2.25h-4.827l5.807 10.324a1.125 1.125 0 0 1-.43 1.532M12 10.126a1.125 1.125 0 0 0-1.125 1.125v1.5a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 10.125m0 5.25a1.125 1.125 0 0 0-1.125 1.125V18a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 15.375"
            ></path>
          </svg>
          Activity
        </h3>
        <Button variant="secondary">Add Activities</Button>
      </div>

      <ul className="space-y-5 my-6">
        {activities.map((h) => {
          return (
            <li key={h.id}>
              <ActivityCard attraction={h} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
