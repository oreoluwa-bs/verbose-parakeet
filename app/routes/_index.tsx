import {
  ArrowRightIcon,
  CalendarIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  UserPlus2Icon,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { AddActivityCard } from "~/features/activity/components/add-activity-card";
import { DashboardBanner } from "~/features/dashboard/components/banner";
import { AddFlightCard } from "~/features/flight/components/add-flight-card";
import { AddHotelCard } from "~/features/hotels/components/add-hotel-card";
import { ItinararyList } from "~/features/itinerary/components/itinarary-list";

export default function Index() {
  return (
    <div className="bg-background p-6">
      <DashboardBanner />
      <section className="flex gap-4 mt-6 justify-between items-start">
        <div className="flex-1">
          <Badge variant="accent" className="px-2 text-sm gap-2">
            <CalendarIcon className="size-4" />
            <span>21 March 2024</span>
            <ArrowRightIcon className="size-4" />
            <span>21 April 2024</span>
          </Badge>
          <h2 className="font-semibold text-2xl mt-2">Bahamas Family Trip</h2>
          <p className="font-medium text-muted-foreground text-base tracking-tighter">
            New York,  United States of America | Solo Trip
          </p>
        </div>
        <div className="inline-flex flex-col shrink-0 gap-4">
          <div className="inline-flex gap-4">
            <Button
              variant="secondary"
              className="bg-primary/20 hover:bg-primary/50 hover:text-white min-w-40 [&_svg]:size-6"
            >
              <UserPlus2Icon strokeWidth="1.5" />
            </Button>
            <Button variant="ghost" className="[&_svg]:size-6" size="icon">
              <MoreHorizontalIcon strokeWidth="1.5" />
            </Button>
          </div>
          <div className="flex justify-end me-14">
            <img
              src="/avatar2.png"
              alt="avatar2"
              className="size-10 rounded-full object-cover"
            />
            <span className="w-[20px] h-0.5 bg-primary/20 self-center" />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border-2 border-primary/20"
            >
              <SettingsIcon />
            </Button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,220px),1fr))] mt-6 gap-4">
        <AddActivityCard />
        <AddHotelCard />
        <AddFlightCard />
      </section>
      <section className="mt-16">
        <h2 className="font-semibold text-2xl mt-2">Trip itineraries</h2>
        <p className="font-medium text-muted-foreground text-base tracking-tighter">
          Your trip itineraries are placed here
        </p>
        <div className="mt-6">
          <ItinararyList />
        </div>
      </section>
    </div>
  );
}
