import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { capacitacionFormacionBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={capacitacionFormacionBreadcrumb} />
    </div>
  );
}
