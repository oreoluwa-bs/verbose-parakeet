import { Button } from "~/components/ui/button";

export function AddHotelCard() {
  return (
    <div className="bg-primary-100 text-primary p-4 rounded-md">
      <h3 className="font-semibold">Hotels</h3>
      <p className="text-sm mt-2">
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>
      <Button className="w-full mt-9">Add Hotels</Button>
    </div>
  );
}
