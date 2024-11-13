import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { AddHotelForm } from "./add-hotel-form";

export function AddHotelCard() {
  return (
    <div className="bg-primary-100 text-primary p-4 rounded-md">
      <h3 className="font-semibold">Hotels</h3>
      <p className="text-sm mt-2">
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-9">Add Hotels</Button>
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
  );
}
