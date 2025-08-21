import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { quienesSomosBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={quienesSomosBreadcrumb} />
    </div>
  );
}
