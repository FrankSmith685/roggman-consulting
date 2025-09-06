"use client";

import Breadcrumbs from "@/components/servicios/comercio-importacion/BreadCrumb";
import ComercioImportacionOverview from "@/components/servicios/comercio-importacion/comercioImportacionOverView";
import Header from "@/components/servicios/comercio-importacion/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ComercioImportacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ComercioImportacionOverview/>
            <ContactCTA/>
        </div>
    );
}
