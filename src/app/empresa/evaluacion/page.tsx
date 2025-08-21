"use client";

import Breadcrumbs from "@/components/empresa/evaluacion/BreadCrumb";
import EvaluacionOverview from "@/components/empresa/evaluacion/EvaluacionOverview";
import Header from "@/components/empresa/evaluacion/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Evaluacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <EvaluacionOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
