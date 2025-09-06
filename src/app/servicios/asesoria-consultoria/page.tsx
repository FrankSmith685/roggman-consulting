"use client";

import AsesoriaConsultoriaOverview from "@/components/servicios/asesoria-consultoria/asesoriaConsultoriaOverView";
import Breadcrumbs from "@/components/servicios/asesoria-consultoria/BreadCrumb";
import Header from "@/components/servicios/asesoria-consultoria/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function AsesoriaConsultoria() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <AsesoriaConsultoriaOverview/>
            <ContactCTA/>
        </div>
    );
}
