
'use client';
import { useEffect, useState, useContext } from "react";
import ServicesGrid from "./ServiceGrid";
import { bannerIntroEs, bannerTextsEs } from "./data/BannerText_Es";
import ScrollIndicator from "../ui/CustomScrollIndicator";
import { VideoPreloaderContext } from "@/hooks/useVideoHooks/videoPreloaderProvider";
import { useAppState } from "@/hooks/useAppState";
import { bannerIntroDe, bannerTextsDe } from "./data/BannerText_De";
import { bannerIntroEn, bannerTextsEn } from "./data/BannerText_En";

export default function VideoBanner() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const videoContext = useContext(VideoPreloaderContext);

  const [bannerIntroLocal,setBannerIntroLocal] = useState(bannerIntroDe);
  const [bannerTextsLocal,setBannerTextsLocal] = useState(bannerTextsDe);

  const {lenguaje} = useAppState();

  useEffect(()=>{
    if(lenguaje == "es"){
      setBannerIntroLocal(bannerIntroEs)
      setBannerTextsLocal(bannerTextsEs)
    }else if(lenguaje == "de"){
      setBannerIntroLocal(bannerIntroDe)
      setBannerTextsLocal(bannerTextsDe)
    }else{
      setBannerIntroLocal(bannerIntroEn)
      setBannerTextsLocal(bannerTextsEn)
    }
  },[lenguaje])

  useEffect(() => {
    const currentText = bannerTextsLocal[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, 60);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % bannerTextsLocal.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex,bannerTextsLocal,lenguaje]);

  if (!videoContext || !videoContext.isLoaded) {
    return <div>Cargando video...</div>;
  }

  const { videos } = videoContext;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-125"
      >
        <source src={videos["banner"]} type="video/mp4" />
      </video>


      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10" />

      <main className="absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 pt-[150px] md:pt-[200px]">
        <h1 className="text-white text-xl md:text-3xl font-bold leading-snug">
          {bannerIntroLocal}
          <span className="text-blue-400">{displayedText}</span>
        </h1>
      </main>


      <div className="absolute bottom-4 w-full flex justify-center px-4">
        <ServicesGrid />
      </div>
      <ScrollIndicator />
    </div>
  );
}
