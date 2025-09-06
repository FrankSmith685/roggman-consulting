import BackgroundSlider from "@/components/ui/CustomBackgroundSidebar";
import { slides } from "./data/slider";


export default function Header() {
  return <BackgroundSlider slides={slides} />;
}
