import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { visadoIdiomaBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={visadoIdiomaBreadcrumb} />
    </div>
  );
}
