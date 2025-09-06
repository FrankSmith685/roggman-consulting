"use client";

import Breadcrumbs from "@/components/eventos-programas/lanzamientos-exposiciones/BreadCrumb";
import Header from "@/components/eventos-programas/lanzamientos-exposiciones/header";
import LanzamientoExposicionesOverview from "@/components/eventos-programas/lanzamientos-exposiciones/lanzamientoExposiciones";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ComercioImportacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <LanzamientoExposicionesOverview/>
            <ContactCTA/>
        </div>
    );
}
