"use client";

import Breadcrumbs from "@/components/nosotros/filosofia/BreadCrumb";
import FilosofiaOverview from "@/components/nosotros/filosofia/filosofiaOverview";
import Header from "@/components/nosotros/filosofia/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <FilosofiaOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
