"use client";


import Breadcrumbs from "@/components/otros-servicios/visado-idioma/BreadCrumb";
import Header from "@/components/otros-servicios/visado-idioma/header";
import VisadoIdiomaOverview from "@/components/otros-servicios/visado-idioma/visadoIdiomaOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ViviendaTransporte() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <VisadoIdiomaOverview/>
            <ContactCTA/>
        </div>
    );
}
