"use client";

import Breadcrumbs from "@/components/servicios/capacitacion-formacion/BreadCrumb";
import CapacitacionFormacionOverview from "@/components/servicios/capacitacion-formacion/capacitacionFormacionOverView";
import Header from "@/components/servicios/capacitacion-formacion/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function CapacitacionFormacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <CapacitacionFormacionOverview/>
            <ContactCTA/>
        </div>
    );
}
