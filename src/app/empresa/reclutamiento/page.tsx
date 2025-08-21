"use client";

import Breadcrumbs from "@/components/empresa/reclutamiento/BreadCrumb";
import Header from "@/components/empresa/reclutamiento/header";
import ReclutamientoOverview from "@/components/empresa/reclutamiento/ReclutamientoOverview";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ReclutamientoOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
