"use client";

import Breadcrumbs from "@/components/nosotros/valores-certificaciones/BreadCrumb";
import Header from "@/components/nosotros/valores-certificaciones/header";
import ValoresCertificacionesOverview from "@/components/nosotros/valores-certificaciones/valoresCertificacionesOverView";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ValoresCertificacionesOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
