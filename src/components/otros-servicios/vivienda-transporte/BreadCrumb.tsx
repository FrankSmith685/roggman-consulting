import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { viviendaTransporteBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={viviendaTransporteBreadcrumb} />
    </div>
  );
}
