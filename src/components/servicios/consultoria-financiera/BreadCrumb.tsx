import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { consultoriaFinancieraBreadcrumb } from "./data/breadcrumb";
// import { asesoriaConsultoriaBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={consultoriaFinancieraBreadcrumb} />
    </div>
  );
}
