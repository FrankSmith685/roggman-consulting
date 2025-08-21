"use client";

import Breadcrumbs from "@/components/empresa/internacional/BreadCrumb";
import Header from "@/components/empresa/internacional/header";
import InternacionalOverview from "@/components/empresa/internacional/InternacionalOverview";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Internacional() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <InternacionalOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
