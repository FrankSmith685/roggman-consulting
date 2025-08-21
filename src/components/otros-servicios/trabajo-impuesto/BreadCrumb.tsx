import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { trabajoImpuestoBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={trabajoImpuestoBreadcrumb} />
    </div>
  );
}
