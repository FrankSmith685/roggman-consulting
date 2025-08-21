"use client";

import Breadcrumbs from "@/components/candidatos/gestion-internacional/BreadCrumb";
import GestionInternacionalOverview from "@/components/candidatos/gestion-internacional/gestionInternacionalOverview";
import Header from "@/components/candidatos/gestion-internacional/header";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <GestionInternacionalOverview/>
        </div>
    );
}
