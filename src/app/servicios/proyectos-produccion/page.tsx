"use client";

import Breadcrumbs from "@/components/servicios/proyectos-produccion/BreadCrumb";
import Header from "@/components/servicios/proyectos-produccion/header";
import ProyectoProduccionOverview from "@/components/servicios/proyectos-produccion/proyectosProduccionOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ProyectosProduccion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ProyectoProduccionOverview/>
            <ContactCTA/>
        </div>
    );
}
