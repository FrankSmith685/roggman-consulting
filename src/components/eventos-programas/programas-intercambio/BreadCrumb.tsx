import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { ProgramasIntercambioBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={ProgramasIntercambioBreadcrumb} />
    </div>
  );
}
