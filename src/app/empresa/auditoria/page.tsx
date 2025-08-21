"use client";

import AuditoriaOverview from "@/components/empresa/auditoria/auditoriaOverview";
import Breadcrumbs from "@/components/empresa/auditoria/BreadCrumb";
import Header from "@/components/empresa/auditoria/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Auditoria() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <AuditoriaOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
