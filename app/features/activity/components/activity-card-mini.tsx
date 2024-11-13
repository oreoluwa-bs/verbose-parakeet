import { Link } from "@remix-run/react";
import { MapPinIcon, PlusIcon, StarIcon, XIcon } from "lucide-react";
import { Button, buttonVariants } from "~/components/ui/button";
import { useItineraryStore } from "~/features/itinerary-store";
import { Product as Attraction } from "~/lib/bookingapi/activity";

export function ActivityCardMini({ attraction }: { attraction: Attraction }) {
  const addActiviesToItinarary = useItineraryStore.use.addToActivies();
  const removeFromActivities = useItineraryStore.use.removeFromActivities();
  const isInItineraryList = useItineraryStore.use.isInActivities()(
    attraction.id
  );

  return (
    <div className="bg-background text-foreground rounded-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="p-5 lg:px-0">
          <img
            src={attraction.primaryPhoto.small}
            alt={attraction.name}
            className="w-full lg:w-[60px] aspect-video lg:aspect-square object-cover rounded-md"
          />
        </div>
        <div className="flex-1 py-5">
          <div className="flex justify-between gap-4 px-5">
            <div>
              <h3 className="font-semibold">{attraction.name}</h3>
              <p className="text-xs max-w-[50ch] text-balance">
                {attraction.shortDescription}
              </p>
            </div>
            <div className="text-end shrink-0">
              <p className="font-semibold text-lg">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: attraction.representativePrice.currency,
                }).format(attraction.representativePrice.publicAmount)}
              </p>
              <p className="text-xs">
                Total Price:{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: attraction.representativePrice.currency,
                }).format(attraction.representativePrice.chargeAmount)}
              </p>
              <p className="text-xs">1 room x 10 nights incl. taxes</p>
            </div>
          </div>

          <div className="flex gap-4 items-baseline text-xs px-5">
            <a
              href={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              <MapPinIcon /> Directions
            </a>

            <span className="flex items-center gap-1">
              <StarIcon className="fill-yellow-400 stroke-transparent size-5" />
              {attraction.reviewsStats?.combinedNumericStats.average ?? 0}(
              {attraction.reviewsStats?.allReviewsCount ?? 0})
            </span>
          </div>

          <div className="flex border-y border-border my-6 px-5 py-4 text-muted-foreground justify-between">
            <div className="">
              <span className="flex gap-2">
                <span>
                  What&apos;s Included: {attraction.supportedFeatures.nativeApp}{" "}
                </span>
              </span>
            </div>

            <div className="flex text-sm gap-4">
              <Button>Buy</Button>
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
              Activity details
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
        {isInItineraryList ? (
          <Button
            variant="destructive"
            className="h-auto self-stretch rounded-s-none"
            onClick={() => {
              removeFromActivities(attraction.id);
            }}
          >
            <XIcon />
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="h-auto self-stretch rounded-s-none"
            onClick={() => {
              addActiviesToItinarary(attraction);
            }}
          >
            <PlusIcon />
          </Button>
        )}
      </div>
    </div>
  );
}
