"use client";

import Breadcrumbs from "@/components/otros-servicios/estudio-formacion-practicas/BreadCrumb";
import EstudiosOverview from "@/components/otros-servicios/estudio-formacion-practicas/estudiosOverView";
import Header from "@/components/otros-servicios/estudio-formacion-practicas/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function EstudioFormacionPracticas() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <EstudiosOverview/>
            <ContactCTA/>
        </div>
    );
}
