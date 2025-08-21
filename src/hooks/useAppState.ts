import { useContext } from "react";
import { AppContext } from "../context/appContext";

import { 
  setLenguaje,
} from "../context/actions/actions";

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState debe ser usado dentro de un AppProvider");
  }

  const { appState, dispatch } = context;

  return {
    ...appState,
    setLenguaje: (lenguaje: string | null) => dispatch(setLenguaje(lenguaje)),
  };
};
