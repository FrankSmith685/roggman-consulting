"use client";

import Breadcrumbs from "@/components/contactanos/BreadCrumb";
import ContactanosOverview from "@/components/contactanos/ContactanosOverview";
import Header from "@/components/contactanos/header";

export default function Contactanos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ContactanosOverview/>
        </div>
    );
}
