import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { historiaMisionBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={historiaMisionBreadcrumb} />
    </div>
  );
}
