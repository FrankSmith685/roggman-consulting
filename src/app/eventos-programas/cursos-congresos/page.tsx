"use client";

import Breadcrumbs from "@/components/eventos-programas/cursos-congresos/BreadCrumb";
import CursoCongresoOverview from "@/components/eventos-programas/cursos-congresos/cursoCongresoOverView";
import Header from "@/components/eventos-programas/cursos-congresos/header";
// import Breadcrumbs from "@/components/eventos-programas/programas-intercambio/BreadCrumb";
// import Header from "@/components/eventos-programas/programas-intercambio/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function CursoCongreso() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <CursoCongresoOverview/>
            <ContactCTA/>
        </div>
    );
}
