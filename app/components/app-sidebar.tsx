import { NavLink } from "@remix-run/react";
import {
  BookOpenTextIcon,
  BriefcaseIcon,
  ChevronsUpDownIcon,
  GraduationCapIcon,
  HomeIcon,
  HotelIcon,
  LuggageIcon,
  PackageIcon,
  PlaneTakeoffIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const mainMenu = [
  {
    label: "Activities",
    icon: HomeIcon,
  },
  {
    label: "Hotels",
    icon: HotelIcon,
  },
  {
    label: "Flights",
    icon: PlaneTakeoffIcon,
  },
  {
    label: "Study",
    icon: GraduationCapIcon,
  },
  {
    label: "Visa",
    icon: BookOpenTextIcon,
  },
  {
    label: "Immigration",
    icon: LuggageIcon,
  },
  {
    label: "Medical",
    icon: BriefcaseIcon,
  },
  {
    label: "Vacation",
    icon: PackageIcon,
  },
];

export function AppSidebar() {
  return (
    <div className="bg-white w-full h-full rounded-md p-5">
      <nav className="inline-flex flex-col gap-5 text-muted-foreground">
        {mainMenu.map((link, idx) => {
          return (
            <NavLink
              to="#"
              key={link.label + idx}
              className="inline-flex gap-2 items-center"
            >
              <span>
                <link.icon strokeWidth="1.5" />
              </span>
              <span className="text-sm font-medium">{link.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="flex-1" />

      <div className="w-full mt-20">
        <Button
          size="lg"
          className="w-full px-2 text-muted-foreground"
          variant="secondary"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            Go
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold text-xs">Personal Account</span>
          </div>
          <ChevronsUpDownIcon className="ml-auto" />
        </Button>
      </div>
    </div>
  );
}
