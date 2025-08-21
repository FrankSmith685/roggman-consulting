import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { contactanosBreadcrumb } from "./data/breadcrumb";



export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={contactanosBreadcrumb} />
    </div>
  );
}
