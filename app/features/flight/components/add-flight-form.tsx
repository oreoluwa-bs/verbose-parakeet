/** eslint-disable @typescript-eslint/ban-ts-comment */
import {
  CheckIcon,
  ChevronsUpDownIcon,
  LoaderPinwheelIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "~/components/hooks/use-debounce-value";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useItineraryStore } from "~/features/itinerary-store";
import { booking } from "~/lib/bookingapi";
import { FlightLocation } from "~/lib/bookingapi/flight";
import { cn } from "~/lib/utils";

export function AddFlightForm() {
  return (
    <div>
      <SearchFlightForm />
    </div>
  );
}

function SelectFlightLocation({
  value,
  setValue,
}: {
  value: string;
  setValue: (s: string) => void;
}) {
  const [flightLocations, setFlightLocations] = useState<FlightLocation[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<string>("");

  const dV = useDebounce(query, 1000);

  useEffect(() => {
    if (dV.trim().length > 1) {
      setIsFetching(true);
      booking.flight
        .searchFlightLocations({ query: dV })
        .then((r) => {
          // console.log(r.data.data);
          setFlightLocations(r.data.data);
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
  }, [dV]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-input bg-input-background "
        >
          {value
            ? flightLocations.find((locations) => locations.id === value)?.name
            : "Select locations..."}
          <ChevronsUpDownIcon className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search locations..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>
              {isFetching ? "Loading" : "No locations found."}
            </CommandEmpty>
            <CommandGroup>
              {flightLocations.map((f) => (
                <CommandItem
                  key={f.id}
                  value={f.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {f.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto",
                      value === f.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function SearchFlightForm() {
  const [isFetching, setIsFetching] = useState(false);
  const [flightResults, setFlightResults] = useState<any[] | null>(null);
  const [to, setTo] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const addHotelToItinerary = useItineraryStore.use.addToHotels();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.target as HTMLFormElement);
    // const search_type = formdata.get("search_type") as string;
    // const fromId = formdata.get("fromId") as string;
    const fromId = from;
    const toId = to;
    const departDate = formdata.get("departDate") as string;

    setIsFetching(true);
    booking.flight
      .searchFlights({ departDate, fromId, toId })
      .then((r) => {
        setFlightResults(r.data.data.flightDeals);
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
            <div className="grid items-center gap-2 ">
              <SelectFlightLocation value={from} setValue={setFrom} />
            </div>
            <div className="grid items-center gap-2 ">
              <SelectFlightLocation value={to} setValue={setTo} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid items-center gap-2">
              <Label htmlFor="departDate">Date of departure</Label>
              <Input id="departDate" name="departDate" required type="date" />
            </div>
          </div>

          <Button disabled={isFetching}>
            Search
            {isFetching && <LoaderPinwheelIcon className="animate-spin" />}
          </Button>
        </div>
      </form>

      {flightResults && (
        <div className="mt-5">
          {flightResults.length === 0 && (
            <p className="text-center">No flights found!</p>
          )}
          <ul className="space-y-4">
            {flightResults.map((h) => {
              return (
                <li key={h.property.id}>
                  {/* <HotelCardMini
                    hotel={h}
                    addHotelToItinerary={addHotelToItinerary}
                  /> */}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
