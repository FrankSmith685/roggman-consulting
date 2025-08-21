"use client";

import Breadcrumbs from "@/components/candidatos/registre-curriculum/BreadCrumb";
import Header from "@/components/candidatos/registre-curriculum/header";
import RegistreCurriculumOverview from "@/components/candidatos/registre-curriculum/registreCurriculumOverview";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <RegistreCurriculumOverview/>
        </div>
    );
}
