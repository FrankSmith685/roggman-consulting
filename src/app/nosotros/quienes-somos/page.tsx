"use client";

import Breadcrumbs from "@/components/nosotros/quienes-somos/BreadCrumb";
import Header from "@/components/nosotros/quienes-somos/header";
import QuienesSomosOverview from "@/components/nosotros/quienes-somos/quienesSomosOverview";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <QuienesSomosOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
