"use client";

import Breadcrumbs from "@/components/empresa/busqueda/BreadCrumb";
import BusquedaOverview from "@/components/empresa/busqueda/busquedaOverview";
import Header from "@/components/empresa/busqueda/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Busqueda() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <BusquedaOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
