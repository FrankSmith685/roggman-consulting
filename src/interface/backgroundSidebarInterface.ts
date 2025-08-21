export interface Slide {
  name: string; // imagen de fondo
  text?: string;
  nameImage?: string; // imagen decorativa encima (como un icono visual)
}

export interface BackgroundSliderProps {
  slides: Slide[];
}
