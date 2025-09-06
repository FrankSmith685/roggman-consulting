import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { asesoriaConsultoriaBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={asesoriaConsultoriaBreadcrumb} />
    </div>
  );
}
