import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { busquedaBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={busquedaBreadcrumb} />
    </div>
  );
}
