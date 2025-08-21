// navItems.tsx
import { NavItem } from "@/interface/navItem";
import { FaLanguage } from "react-icons/fa";
import {
  FiUsers,
  FiBriefcase,
  FiStar,
  FiMail,
  FiSettings,
  FiShield,
  FiGlobe,
  FiCheckCircle,
  FiHome,
  FiBookOpen,
  FiFileText,
  FiTrendingUp,
  FiUserCheck,
  FiMessageCircle,
  FiUserPlus,
  FiFlag
} from "react-icons/fi";

export const navItems_De: NavItem[] = [
  {
    label: "Unternehmen",
    href: "/unternehmen",
    icon: <FiUsers />,
    title: "Unternehmen",
    description:
      "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.",
    subItems: [
      {
        label: "Personalauswahl und Rekrutierung",
        href: "/unternehmen/personalauswahl-und-rekrutierung",
        icon: <FiUserPlus />,
      },
      {
        label: "Personalbewertungen",
        href: "/unternehmen/personalbewertungen",
        icon: <FiCheckCircle />,
      },
      {
        label: "International",
        href: "/unternehmen/international",
        icon: <FiGlobe />,
      },
      {
        label: "Funktionen",
        href: "/unternehmen/funktionen",
        icon: <FiTrendingUp />,
      },
      {
        label: "Fachspezifische Suche",
        href: "/unternehmen/fachspezifische-suche",
        icon: <FiShield />,
      },
      {
        label: "Inklusionsaudit",
        href: "/unternehmen/inklusionsaudit",
        icon: <FiUserCheck />,
      },
    ],
  },
  {
    label: "Kandidaten",
    href: "/kandidaten",
    icon: <FiBriefcase />,
    title: "Kandidaten",
    description:
      "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.",
    subItems: [
      {
        label: "Registrieren Sie Ihren Lebenslauf",
        href: "/kandidaten/registrieren-sie-ihren-lebenslauf",
        icon: <FiFileText />,
      },
      {
        label: "Internationales Karrieremanagement",
        href: "/kandidaten/internationales-karrieremanagement",
        icon: <FiGlobe />,
      },
    ],
  },
  {
    label: "Wir",
    href: "/wir",
    icon: <FiStar />,
    title: "Wir",
    description: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.",
    subItems: [
      {
        label: "Wer Wir Sind",
        href: "/wir/wer-wir-sind",
        icon: <FiUsers />,
      },
      {
        label: "Unsere Philosophie",
        href: "/wir/unsere-philosophie",
        icon: <FiMessageCircle />,
      },
    ],
  },
  {
    label: "Sonstige Dienstleistungen",
    href: "/sonstige-dienstleistungen",
    icon: <FiSettings />,
    title: "Sonstige Dienstleistungen",
    description:
      "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.",
    subItems: [
      {
        label: "Studium - Ausbildung - Praktikum",
        href: "/sonstige-dienstleistungen/studium-ausbildung-praktikum",
        icon: <FiBookOpen />,
      },
      {
        label: "Arbeit - Steuern",
        href: "/sonstige-dienstleistungen/arbeit-steuern",
        icon: <FiBriefcase />,
      },
      {
        label: "Wohnen - Transportmittel",
        href: "/sonstige-dienstleistungen/wohnen-transportmittel",
        icon: <FiHome />,
      },
      {
        label: "Visum - Sprachkompetenzen",
        href: "/sonstige-dienstleistungen/visum-sprachkompetenzen",
        icon: <FiFlag />,
      },
      {
        label: "Curso de Alemán",
        href: "/otros-servicios/curso-aleman-peru",
        icon: <FaLanguage  />,
      },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    icon: <FiMail />,
    title: "Bereit für den nächsten Schritt?",
    description:
      "Kontaktiere uns, um deine Fragen zu klären, eine Beratung zu vereinbaren oder deinen Auswahlprozess zu starten. Wir sind hier, um dir zu helfen.",
    subItems: [],
  },
];
