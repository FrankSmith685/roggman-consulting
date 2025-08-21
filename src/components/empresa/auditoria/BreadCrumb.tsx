import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { auditoriaBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={auditoriaBreadcrumb} />
    </div>
  );
}
