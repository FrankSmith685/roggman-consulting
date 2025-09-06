import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { comercioImportacionBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={comercioImportacionBreadcrumb} />
    </div>
  );
}
