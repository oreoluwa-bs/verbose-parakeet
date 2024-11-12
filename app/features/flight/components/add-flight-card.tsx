import { Button } from "~/components/ui/button";

export function AddFlightCard() {
  return (
    <div className="bg-primary text-primary-foreground p-4 rounded-md">
      <h3 className="font-semibold">Flights</h3>
      <p className="text-sm mt-2">
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>
      <Button className="w-full mt-9" variant="secondary">
        Add Flights
      </Button>
    </div>
  );
}
