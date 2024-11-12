import { ArrowLeftIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export function DashboardBanner() {
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute bg-white/20 left-4 top-8 [&_svg]:size-6"
      >
        <ArrowLeftIcon strokeWidth="1.5" />
      </Button>

      <img src="/banner.svg" alt="" className="w-full h-[200px] object-cover" />
    </div>
  );
}
