import { Button } from "~/components/ui/button";

export function AddActivityCard() {
  return (
    <div className="bg-primary-900 text-primary-foreground p-4 rounded-md">
      <h3 className="font-semibold">Activities</h3>
      <p className="text-sm mt-2">
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>
      <Button className="w-full mt-9">Add Activities</Button>
    </div>
  );
}
