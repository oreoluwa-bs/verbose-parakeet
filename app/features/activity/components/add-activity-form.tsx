/** eslint-disable @typescript-eslint/ban-ts-comment */
import { LoaderPinwheelIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select } from "~/components/ui/select";
import { booking } from "~/lib/bookingapi";
import { Product } from "~/lib/bookingapi/activity";
import { ActivityCardMini } from "./activity-card-mini";

export function AddActivityForm() {
  const [destPred, setDestPred] = useState<
    {
      id: string;
      __typename: string;
      title: string;
      productId: string;
      productSlug: string;
      taxonomySlug: string;
      cityUfi: number;
      cityName: string;
      countryCode: string;
    }[]
  >([]);
  return (
    <div>
      {destPred.length < 1 ? (
        <SearchHotelDestForm setDestPred={setDestPred} />
      ) : (
        <SearchHotelsForm destPred={destPred} />
      )}
    </div>
  );
}

function SearchHotelDestForm({
  setDestPred,
}: {
  setDestPred: (
    c: {
      id: string;
      __typename: string;
      title: string;
      productId: string;
      productSlug: string;
      taxonomySlug: string;
      cityUfi: number;
      cityName: string;
      countryCode: string;
    }[]
  ) => void;
}) {
  const [isFetching, setIsFetching] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.target as HTMLFormElement);
    const query = formdata.get("query") as string;

    setIsFetching(true);
    booking.attraction
      .searchLocation({ query })
      .then((r) => {
        // console.log(r.data.data);
        setDestPred(r.data.data.data.products);
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
  destPred,
}: {
  destPred: {
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
}) {
  const [isFetching, setIsFetching] = useState(false);
  const [activitiesResults, setActivitiesResults] = useState<Product[] | null>(
    null
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.target as HTMLFormElement);
    const id = formdata.get("id") as string;

    setIsFetching(true);
    booking.attraction
      .searchAttractions({ id })
      .then((r) => {
        setActivitiesResults(r.data.data.products);
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
              <Label htmlFor="id">Products</Label>
              <Select id="id" name="id" required>
                {destPred.map((d) => {
                  return (
                    <option key={d.id} value={d.id}>
                      {d.title}
                    </option>
                  );
                })}
              </Select>
            </div>
          </div>

          <Button disabled={isFetching}>
            Search
            {isFetching && <LoaderPinwheelIcon className="animate-spin" />}
          </Button>
        </div>
      </form>

      {activitiesResults && (
        <div className="mt-5">
          {activitiesResults.length === 0 && (
            <p className="text-center">No Activities found!</p>
          )}
          <ul className="space-y-4">
            {activitiesResults.map((h) => {
              return (
                <li key={h.id}>
                  <ActivityCardMini attraction={h} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
