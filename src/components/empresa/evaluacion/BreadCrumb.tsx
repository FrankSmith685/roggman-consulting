import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { evaluacionBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={evaluacionBreadcrumb} />
    </div>
  );
}
