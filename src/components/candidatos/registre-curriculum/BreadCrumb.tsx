import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { registreCurriculumBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={registreCurriculumBreadcrumb} />
    </div>
  );
}
