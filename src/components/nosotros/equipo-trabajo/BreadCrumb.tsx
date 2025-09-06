import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { equipoTrabajoBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={equipoTrabajoBreadcrumb} />
    </div>
  );
}
