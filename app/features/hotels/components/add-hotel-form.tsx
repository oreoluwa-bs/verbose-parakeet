/** eslint-disable @typescript-eslint/ban-ts-comment */
import { LoaderPinwheelIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select } from "~/components/ui/select";
import { useItineraryStore } from "~/features/itinerary-store";
import { booking } from "~/lib/bookingapi";
import { Hotel, HotelDestination } from "~/lib/bookingapi/hotel";
import { HotelCardMini } from "./hotel-card-mini";

export function AddHotelForm() {
  const [destinations, setDestinations] = useState<HotelDestination[]>([]);
  return (
    <div>
      {destinations.length < 1 ? (
        <SearchHotelDestForm setDestinations={setDestinations} />
      ) : (
        <SearchHotelsForm destinations={destinations} />
      )}
    </div>
  );
}

function SearchHotelDestForm({
  setDestinations,
}: {
  setDestinations: (c: HotelDestination[]) => void;
}) {
  const [isFetching, setIsFetching] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.target as HTMLFormElement);
    const query = formdata.get("query") as string;

    setIsFetching(true);
    booking.hotel
      .searchHotelDestination({ query })
      .then((r) => {
        console.log(r.data.data);
        setDestinations(r.data.data);
      })
      .catch((e) => {
        if (e instanceof Error) {
          alert(e.message);
        } else if (typeof e === "string") {
          alert(e);
        } else {
          alert("Something went wrong!");
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="query" className="text-right" hidden>
              Search
            </Label>
            <Input
              id="query"
              name="query"
              required
              placeholder="Names of locations, cities, districts, places, countries, counties etc."
            />
          </div>

          <Button disabled={isFetching}>
            Search
            {isFetching && <LoaderPinwheelIcon className="animate-spin" />}
          </Button>
        </div>
      </form>
    </div>
  );
}

function SearchHotelsForm({
  destinations,
}: {
  destinations: HotelDestination[];
}) {
  const [isFetching, setIsFetching] = useState(false);
  const [hotelResults, setHotelResults] = useState<Hotel[] | null>(null);
  const addHotelToItinerary = useItineraryStore.use.addToHotels();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.target as HTMLFormElement);
    // const search_type = formdata.get("search_type") as string;
    const dest_id = formdata.get("dest_id") as string;
    const arrival_date = formdata.get("arrival_date") as string;
    const departure_date = formdata.get("departure_date") as string;

    const search_type = destinations.find(
      (r) => r.dest_id === r.dest_id
    )!.search_type;

    setIsFetching(true);
    booking.hotel
      .searchHotels({ dest_id, arrival_date, departure_date, search_type })
      .then((r) => {
        setHotelResults(r.data.data.hotels);
      })
      .catch((e) => {
        if (e instanceof Error) {
          alert(e.message);
        } else if (typeof e === "string") {
          alert(e);
        } else {
          alert("Something went wrong!");
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="grid items-center gap-2 col-span-2">
              <Label htmlFor="dest_id">Destination</Label>
              <Select id="dest_id" name="dest_id" required>
                {destinations.map((d) => {
                  return (
                    <option key={d.dest_id} value={d.dest_id}>
                      {d.label}
                    </option>
                  );
                })}
              </Select>
            </div>
            {/* <div className="grid items-center gap-2">
              <Label htmlFor="search_type">Type</Label>
              <Select id="search_type" name="search_type" required>
                {destinations.map((d) => {
                  return (
                    <option key={d.dest_type} value={d.dest_type}>
                      {d.dest_type}
                    </option>
                  );
                })}
              </Select>
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid items-center gap-2">
              <Label htmlFor="arrival_date">Date of arrival</Label>
              <Input
                id="arrival_date"
                name="arrival_date"
                required
                type="date"
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="departure_date">Date of departure</Label>
              <Input
                id="departure_date"
                name="departure_date"
                required
                type="date"
              />
            </div>
          </div>

          <Button disabled={isFetching}>
            Search
            {isFetching && <LoaderPinwheelIcon className="animate-spin" />}
          </Button>
        </div>
      </form>

      {hotelResults && (
        <div className="mt-5">
          {hotelResults.length === 0 && (
            <p className="text-center">No hotels found!</p>
          )}
          <ul className="space-y-4">
            {hotelResults.map((h) => {
              return (
                <li key={h.property.id}>
                  <HotelCardMini
                    hotel={h}
                    addHotelToItinerary={addHotelToItinerary}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
