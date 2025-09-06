"use client";

import Breadcrumbs from "@/components/nosotros/equipo-trabajo/BreadCrumb";
import EquipoTrabajoOverview from "@/components/nosotros/equipo-trabajo/equipoTrabajoOverView";
import Header from "@/components/nosotros/equipo-trabajo/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <EquipoTrabajoOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
