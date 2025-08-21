// components/home/ClientHome.tsx
"use client";

import CustomHighlightMessage from "@/components/ui/CustomHighlightMessage";
import VideoBanner from "@/components/home/VideoBanner";
import WelcomeSection from "@/components/home/WelcomeSection";
import InfoCardSection from "@/components/home/InfoCardSection";
import CompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import { useEffect, useState } from "react";
import { welcomeDataDe } from "./data/WelcomeText_De";
import { useAppState } from "@/hooks/useAppState";
import { welcomeDataEn } from "./data/WelcomeText_En";
import { welcomeDataEs } from "./data/WelcomeText_Es";

export default function ClientHome() {

  const [welcomeDataLocal,setWelcomeDataLocal] = useState(welcomeDataDe);
    
      const {lenguaje} = useAppState();
    
      useEffect(()=>{
        if(lenguaje == "es"){
          setWelcomeDataLocal(welcomeDataEs)
        }else if(lenguaje == "de"){
          setWelcomeDataLocal(welcomeDataDe)
        }else{
          setWelcomeDataLocal(welcomeDataEn)
        }
      },[lenguaje])

  return (
    <div id="home-content-top">
      <VideoBanner />
      <WelcomeSection />
      <CustomHighlightMessage text={welcomeDataLocal.highlightMessage} />
      <InfoCardSection />
      <CompetitiveSlider />
      <div id="home-content-bottom" className="w-full">
        <ContactCTA />
      </div>
    </div>
  );
}
