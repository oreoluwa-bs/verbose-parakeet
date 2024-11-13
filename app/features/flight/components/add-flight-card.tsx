import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { AddFlightForm } from "./add-flight-form";

export function AddFlightCard() {
  return (
    <div className="bg-primary text-primary-foreground p-4 rounded-md">
      <h3 className="font-semibold">Flights</h3>
      <p className="text-sm mt-2">
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-9" variant="secondary">
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
            <AddFlightForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
