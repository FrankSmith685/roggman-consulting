import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { gestionInternacionalBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={gestionInternacionalBreadcrumb} />
    </div>
  );
}
