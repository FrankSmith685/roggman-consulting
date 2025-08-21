import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { funcionesBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={funcionesBreadcrumb} />
    </div>
  );
}
