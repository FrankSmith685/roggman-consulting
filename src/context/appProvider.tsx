'use client'
import { ReactNode, useReducer } from "react";
import { AppContext } from "./appContext";
import { appReducer } from "./appReducer";
import { AppState } from "@/interface/appStateInterface";
import { VideoPreloaderProvider } from "@/hooks/useVideoHooks/videoPreloaderProvider";
import { PageTransitionProvider } from "@/hooks/useTransitionHooks/pageTransitionProvider";
import CustomLoader from "@/components/ui/CustomLoader";

interface Props {
  children: ReactNode;
}

const initialState: AppState = {
  lenguaje: 'es',
};

export const AppProvider = ({ children }: Props) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);



  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <VideoPreloaderProvider>
      <PageTransitionProvider>
        <CustomLoader />
          {children}
      </PageTransitionProvider>
      </VideoPreloaderProvider>
    </AppContext.Provider>
  );
};
