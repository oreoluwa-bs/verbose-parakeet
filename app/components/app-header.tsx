import { Form, Link, NavLink } from "@remix-run/react";
import {
  BellIcon,
  ChevronDownIcon,
  HandCoinsIcon,
  HomeIcon,
  ListChecksIcon,
  PieChartIcon,
  SearchIcon,
  ShoppingBasketIcon,
  SquarePlusIcon,
  WalletIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function AppHeader() {
  return (
    <header className="flex h-20 z-30 sticky top-0 items-center justify-between gap-2 border-b px-4 py-6 overflow-clip bg-background">
      <div className="inline-flex gap-8 items-center">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="h-10 " />
        </Link>
        <div className="w-[300px]">
          <SearchBar />
        </div>
      </div>
      <div className="inline-flex h-full items-center space-x-4">
        <div className="hidden lg:block">
          <NavigationMenu menu={mainMenu} />
        </div>
        <div className="hidden lg:block">
          <Separator orientation="vertical" />
        </div>
        <Button size="sm">Subscribe</Button>
        <div className="hidden lg:block">
          <NavigationMenu menu={minorMenu} />
        </div>
        <AvatarDropdown />
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <Form>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 left-3">
          <SearchIcon
            strokeWidth="1.25"
            className="text-muted-foreground size-5"
          />
        </span>
        <Input
          name="search"
          id="searchbar:search"
          placeholder="Search"
          className="pl-10"
        />
      </div>
    </Form>
  );
}

const mainMenu = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "Dashboard",
    icon: PieChartIcon,
  },
  {
    label: "Wallet",
    icon: WalletIcon,
  },
  {
    label: "Plan a trip",
    icon: ListChecksIcon,
  },
  {
    label: "Commission for life",
    icon: HandCoinsIcon,
  },
];

const minorMenu = [
  {
    label: "Notification",
    icon: BellIcon,
  },
  {
    label: "Carts",
    icon: ShoppingBasketIcon,
  },
  {
    label: "Create",
    icon: SquarePlusIcon,
  },
];

function NavigationMenu({ menu }: { menu: typeof mainMenu }) {
  return (
    <nav className="inline-flex gap-5">
      {menu.map((link, idx) => {
        return (
          <NavLink
            to="#"
            key={link.label + idx}
            className="inline-flex gap-2 flex-col items-center justify-center"
          >
            <span>
              <link.icon strokeWidth="1.5" />
            </span>
            <span className="text-xs font-medium">{link.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

function AvatarDropdown() {
  return (
    <Button variant="ghost" className="px-0 py-0 hover:bg-transparent">
      <img
        src="/avatar.jpeg"
        alt="avatar"
        className="rounded-full size-10 object-cover"
      />
      <ChevronDownIcon strokeWidth={"1.5"} />
    </Button>
  );
}
