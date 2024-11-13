import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { AddActivityForm } from "./add-activity-form";

export function AddActivityCard() {
  return (
    <div className="bg-primary-900 text-primary-foreground p-4 rounded-md">
      <h3 className="font-semibold">Activities</h3>
      <p className="text-sm mt-2">
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-9">Add Activities</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[725px]">
          <DialogHeader>
            <DialogTitle>Search Activities</DialogTitle>
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
  );
}
