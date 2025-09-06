import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { consultoriaTecnologicaBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={consultoriaTecnologicaBreadcrumb} />
    </div>
  );
}
