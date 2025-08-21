// import { AppState } from "../interfaces/appStateInterface";
import { AppState } from "@/interface/appStateInterface";
import { 
  ActionTypes,
  SET_LENGUAJE,
  } from "@/types/actionTypes";

export const appReducer = (state: AppState, action: ActionTypes): AppState => {
  switch (action.type) {
    case SET_LENGUAJE:
      return { ...state, lenguaje: action.payload };
    default:
      return state;
  }
};
