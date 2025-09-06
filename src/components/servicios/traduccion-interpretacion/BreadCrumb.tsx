import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { traduccionInterpretacionBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={traduccionInterpretacionBreadcrumb} />
    </div>
  );
}
