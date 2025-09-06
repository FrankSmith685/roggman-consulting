"use client";

import Breadcrumbs from "@/components/servicios/consultoria-financiera/BreadCrumb";
import ConsultoriaFinancieraOverview from "@/components/servicios/consultoria-financiera/consultoriaFinancieraOverView";
import Header from "@/components/servicios/consultoria-financiera/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ConsultoriaFinanciera() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ConsultoriaFinancieraOverview/>
            <ContactCTA/>
        </div>
    );
}
