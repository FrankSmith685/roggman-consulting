"use client";

import Breadcrumbs from "@/components/eventos-programas/programas-intercambio/BreadCrumb";
import Header from "@/components/eventos-programas/programas-intercambio/header";
import ProgramasIntercambioOverview from "@/components/eventos-programas/programas-intercambio/programasIntecambioOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function CapacitacionFormacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ProgramasIntercambioOverview/>
            <ContactCTA/>
        </div>
    );
}
