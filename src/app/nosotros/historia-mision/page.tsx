"use client";

import Breadcrumbs from "@/components/nosotros/historia-mision/BreadCrumb";
import Header from "@/components/nosotros/historia-mision/header";
import HistoriaMisionOverview from "@/components/nosotros/historia-mision/historiaMision";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <HistoriaMisionOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
