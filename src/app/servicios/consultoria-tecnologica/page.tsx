"use client";

import Breadcrumbs from "@/components/servicios/consultoria-tecnologica/BreadCrumb";
import ConsultoriaTecnologicaOverview from "@/components/servicios/consultoria-tecnologica/consultoriaTecnologicaOverView";
import Header from "@/components/servicios/consultoria-tecnologica/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ConsultoriaTecnologico() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ConsultoriaTecnologicaOverview/>
            <ContactCTA/>
        </div>
    );
}
