import { ReactElement } from "react";

// Tipado (opcional pero recomendable)
export interface SubNavItem {
  label: string;
  href: string;
  icon: ReactElement;
}

export interface NavItem {
  label: string;
  href: string;
  icon: ReactElement;
  title: string;
  description: string;
  subItems: SubNavItem[];
}