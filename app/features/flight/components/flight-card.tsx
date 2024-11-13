import { XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "~/components/ui/button";

export function FlightCard() {
  return (
    <div className="bg-background text-foreground rounded-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 py-5">
          <div className="flex gap-4 items-baseline text-sm px-5 mt-5">
            <Link
              to={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              Flight details
            </Link>
            <Link
              to={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              Price details
            </Link>
            <div className="flex-1" />
            <Link
              to={`/#`}
              className={buttonVariants({
                variant: "link",
                className: "text-sm gap-1 h-auto !p-0 [&_svg]:size-5",
              })}
            >
              Edit details
            </Link>
          </div>
        </div>
        <Button
          variant="destructive"
          className="h-auto self-stretch rounded-s-none"
        >
          <XIcon />
        </Button>
      </div>
    </div>
  );
}
