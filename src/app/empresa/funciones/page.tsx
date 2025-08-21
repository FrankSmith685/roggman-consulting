"use client";

import Breadcrumbs from "@/components/empresa/funciones/BreadCrumb";
import FuncionesOverview from "@/components/empresa/funciones/funcionesOverview";
import Header from "@/components/empresa/funciones/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Funciones() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <FuncionesOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
