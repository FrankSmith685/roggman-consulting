import { AppState } from "@/interface/appStateInterface";
import { ActionTypes } from "@/types/actionTypes";
import { createContext } from "react";

export interface AppContextProps {
  appState: AppState;
  dispatch: React.Dispatch<ActionTypes>;
}

export const AppContext = createContext<AppContextProps | null>(null);
