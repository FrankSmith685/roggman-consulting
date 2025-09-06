import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { estudioFormacionPracticasBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={estudioFormacionPracticasBreadcrumb} />
    </div>
  );
}
