import { HotelIcon, PlaneTakeoffIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ActivityCard } from "~/features/activity/components/activity-card";
import { AddActivityForm } from "~/features/activity/components/add-activity-form";
import { AddHotelForm } from "~/features/hotels/components/add-hotel-form";
import { HotelCard } from "~/features/hotels/components/hotel-card";
import { useItineraryStore } from "~/features/itinerary-store";

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
  const flights = useItineraryStore.use.flights();

  return (
    <div className="bg-dashboard p-6 rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <h3 className="flex gap-4 font-semibold">
          <PlaneTakeoffIcon />
          Flights
        </h3>

        {flights.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="bg-white">
                Add Flights
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
              <DialogHeader>
                <DialogTitle>Search Flights</DialogTitle>
                <DialogDescription>
                  Search for flights to add to your itinarary!
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 max-h-[80vh] overflow-auto">
                {/* <AddF /> */}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <ul className="space-y-5 my-6">
        {flights.length < 1 && (
          <div className="min-h-[200px] p-6 bg-background text-foreground rounded-md flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <PlaneTakeoffIcon className="size-20 mx-auto" />
              <p className="text-center my-2 mb-4">No Request yet</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add Flights</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[725px]">
                  <DialogHeader>
                    <DialogTitle>Search Flights</DialogTitle>
                    <DialogDescription>
                      Search for flights to add to your itinarary!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 max-h-[80vh] overflow-auto">
                    {/* <AddF /> */}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}

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
  const hotels = useItineraryStore.use.hotels();

  return (
    <div className="bg-[#344054] text-white p-6 rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <h3 className="flex gap-4 font-semibold">
          <HotelIcon />
          Hotels
        </h3>

        {hotels.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="text-foreground">
                Add Hotels
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
              <DialogHeader>
                <DialogTitle>Search Hotels</DialogTitle>
                <DialogDescription>
                  Search for hotels to add to your itinarary!
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <AddHotelForm />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <ul className="space-y-5 my-6">
        {hotels.length < 1 && (
          <div className="min-h-[200px] p-6 bg-background text-foreground rounded-md flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <HotelIcon className="size-20 mx-auto" />
              <p className="text-center my-2 mb-4">No Request yet</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add Hotels</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[725px]">
                  <DialogHeader>
                    <DialogTitle>Search Hotels</DialogTitle>
                    <DialogDescription>
                      Search for hotels to add to your itinarary!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 max-h-[80vh] overflow-auto">
                    <AddHotelForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
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
  const activities = useItineraryStore.use.activities();

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

        {activities.length > 1 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Add Activities</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
              <DialogHeader>
                <DialogTitle>Search Activites</DialogTitle>
                <DialogDescription>
                  Search for activities to add to your itinarary!
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 max-h-[80vh] overflow-auto">
                <AddActivityForm />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <ul className="space-y-5 my-6">
        {activities.length < 1 && (
          <div className="min-h-[200px] p-6 bg-background text-foreground rounded-md flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 24 24"
                className="size-20 mx-auto"
              >
                <path
                  fill="currentColor"
                  d="M22.302 18.98a1.125 1.125 0 0 1-1.532-.429L14.344 7.125h-1.218V7.5a1.125 1.125 0 0 1-2.25 0v-.375h-1.22L3.232 18.551A1.125 1.125 0 1 1 1.27 17.45L7.077 7.125H2.25a1.125 1.125 0 0 1 0-2.25h19.5a1.125 1.125 0 0 1 0 2.25h-4.827l5.807 10.324a1.125 1.125 0 0 1-.43 1.532M12 10.126a1.125 1.125 0 0 0-1.125 1.125v1.5a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 10.125m0 5.25a1.125 1.125 0 0 0-1.125 1.125V18a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 15.375"
                ></path>
              </svg>
              <p className="text-center my-2 mb-4">No Request yet</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add Activities</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[725px]">
                  <DialogHeader>
                    <DialogTitle>Search Activites</DialogTitle>
                    <DialogDescription>
                      Search for activities to add to your itinarary!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 max-h-[80vh] overflow-auto">
                    <AddActivityForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
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
