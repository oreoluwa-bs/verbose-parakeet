import { Link } from "@remix-run/react";
import {
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  WavesIcon,
  WineIcon,
  XIcon,
} from "lucide-react";
import { Button, buttonVariants } from "~/components/ui/button";
import { Hotel } from "~/lib/bookingapi/hotel";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-background text-foreground rounded-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="p-5 lg:pr-0">
          <img
            src={hotel.property.photoUrls[0]}
            alt={hotel.accessibilityLabel}
            className="w-full lg:w-[232px] aspect-video lg:aspect-square object-cover rounded-md"
          />
        </div>
        <div className="flex-1 py-5">
          <div className="flex justify-between gap-4 px-5">
            <div>
              <h3 className="font-semibold">{hotel.property.name}</h3>
              <p className="text-sm max-w-[50ch] text-balance">
                {hotel.property.wishlistName}
              </p>
            </div>
            <div className="text-end shrink-0">
              <p className="font-semibold text-lg">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: hotel.property.priceBreakdown.grossPrice.currency,
                }).format(hotel.property.priceBreakdown.grossPrice.value)}
              </p>
              <p className="text-sm">
                Total Price:{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: hotel.property.priceBreakdown.grossPrice.currency,
                }).format(hotel.property.priceBreakdown.grossPrice.value)}
              </p>
              <p className="text-sm">1 room x 10 nights incl. taxes</p>
            </div>
          </div>

          <div className="flex gap-4 items-baseline text-sm px-5">
            <a
              href={`https://www.google.com/maps/place/${hotel.property.name}`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              <MapPinIcon /> Show in Map
            </a>

            <span className="flex items-center gap-1">
              <StarIcon className="fill-yellow-400 stroke-transparent size-5" />
              {hotel.property.reviewScore}({hotel.property.reviewCount})
            </span>
          </div>

          <div className="flex border-y border-border my-6 px-5 py-4 text-muted-foreground justify-between">
            <div className="flex gap-2">
              <span>Facilities: </span>
              <span className="flex gap-2">
                <span>
                  <WavesIcon className="size-6" />
                </span>
                <span>Pool </span>
              </span>

              <span className="flex gap-2">
                <span>
                  <WineIcon className="size-6" />
                </span>
                <span>Bar </span>
              </span>
            </div>

            <div className="flex text-sm gap-4">
              <span className="flex gap-2">
                <span>
                  <CalendarIcon className="size-6" />
                </span>
                Check in: {hotel.property.checkinDate}
              </span>
              <span className="flex gap-2">
                <span>
                  <CalendarIcon className="size-6" />
                </span>
                Check out: {hotel.property.checkoutDate}
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-baseline text-sm px-5 mt-5">
            <Link
              to={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              Hotel details
            </Link>
            <Link
              to={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              Price details
            </Link>
            <div className="flex-1" />
            <Link
              to={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              Edit details
            </Link>
          </div>
        </div>
        <Button
          variant="destructive"
          className="h-auto self-stretch rounded-s-none"
        >
          <XIcon />
        </Button>
      </div>
    </div>
  );
}
