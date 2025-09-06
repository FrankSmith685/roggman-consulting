// navItems.tsx
import { NavItem } from "@/interface/navItem";
import {
  FiUsers,
  FiBookOpen,
  FiFileText,
  FiGlobe,
  FiSettings,
  FiCheckCircle,
  FiStar,
  FiPhone,
  FiMail,
  FiTrendingUp,
  FiCalendar,
  FiLayers,
  FiMonitor,
  FiShoppingCart,
} from "react-icons/fi";
import { FaLanguage, FaBalanceScale, FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export const navItems_Es: NavItem[] = [
  {
    label: "Servicios",
    href: "/servicios",
    icon: <FiSettings />,
    title: "Nuestros Servicios",
    description: "Soluciones integrales de consultoría, formación, tecnología y comercio.",
    subItems: [
      {
        label: "Asesoría y Consultoría",
        href: "/servicios/asesoria-consultoria",
        icon: <FaBalanceScale />,
      },
      {
        label: "Capacitación y Formación",
        href: "/servicios/capacitacion-formacion",
        icon: <FiBookOpen />,
      },
      {
        label: "Traducción e Interpretación",
        href: "/servicios/traduccion-interpretacion",
        icon: <FaLanguage />,
      },
      {
        label: "Proyectos y Producción",
        href: "/servicios/proyectos-produccion",
        icon: <FiLayers />,
      },
      {
        label: "Consultoría Tecnológica",
        href: "/servicios/consultoria-tecnologica",
        icon: <FiMonitor />,
      },
      {
        label: "Consultoría Financiera y Bursátil",
        href: "/servicios/consultoria-financiera",
        icon: <FaMoneyBillWave />,
      },
      {
        label: "Comercio e Importación/Exportación",
        href: "/servicios/comercio-importacion",
        icon: <FiShoppingCart />,
      },
      {
        label: "Curso de Alemán",
        href: "/servicios/curso-aleman",
        icon: <MdOutlineSchool />,
      },
    ],
  },
  {
    label: "Eventos y Programas",
    href: "/eventos-programas",
    icon: <FiCalendar />,
    title: "Eventos y Programas Especiales",
    description: "Organizamos eventos, talleres y programas de intercambio cultural y lingüístico.",
    subItems: [
      {
        label: "Cursos y Congresos",
        href: "/eventos-programas/cursos-congresos",
        icon: <FiBookOpen />,
      },
      {
        label: "Lanzamientos y Exposiciones",
        href: "/eventos-programas/lanzamientos-exposiciones",
        icon: <FiTrendingUp />,
      },
      {
        label: "Programas de Intercambio",
        href: "/eventos-programas/programas-intercambio",
        icon: <FiGlobe />,
      },
    ],
  },
  {
    label: "Nosotros",
    href: "/nosotros",
    icon: <FiStar />,
    title: "Sobre Nosotros",
    description: "Conoce nuestra historia, misión y valores.",
    subItems: [
      {
        label: "Historia y Misión",
        href: "/nosotros/historia-mision",
        icon: <FiFileText />,
      },
      {
        label: "Equipo de Trabajo",
        href: "/nosotros/equipo-trabajo",
        icon: <FiUsers />,
      },
      {
        label: "Valores y Certificaciones",
        href: "/nosotros/valores-certificaciones",
        icon: <FiCheckCircle />,
      },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
    icon: <FiMail />,
    title: "Contáctanos",
    description: "Estamos disponibles para resolver tus dudas y atender tus consultas.",
    subItems: [
      {
        label: "Formulario de Contacto",
        href: "/contacto/formulario",
        icon: <FiFileText />,
      },
      {
        label: "Teléfono y Dirección",
        href: "/contacto/telefono-direccion",
        icon: <FiPhone />,
      },
      {
        label: "Redes Sociales y Mapa",
        href: "/contacto/redes-mapa",
        icon: <FiGlobe />,
      },
    ],
  },
];
