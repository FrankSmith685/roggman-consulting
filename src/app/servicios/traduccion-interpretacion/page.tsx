"use client";

import Breadcrumbs from "@/components/servicios/traduccion-interpretacion/BreadCrumb";
import Header from "@/components/servicios/traduccion-interpretacion/header";
import TraduccionInterpretacionOverview from "@/components/servicios/traduccion-interpretacion/traduccionInterpretacionOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function TraduccionInterpretacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <TraduccionInterpretacionOverview/>
            <ContactCTA/>
        </div>
    );
}
