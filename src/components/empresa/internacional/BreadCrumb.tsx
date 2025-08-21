import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { internacionalBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={internacionalBreadcrumb} />
    </div>
  );
}
