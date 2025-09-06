import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { ValoresCertificacionesBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={ValoresCertificacionesBreadcrumb} />
    </div>
  );
}
