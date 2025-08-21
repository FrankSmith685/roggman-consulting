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

export const navItems_Es: NavItem[] = [
  {
    label: "Empresa",
    href: "/empresa",
    icon: <FiUsers />,
    title: "Soluciones para Empresas",
    description:
      "Seleccionamos los profesionales que su empresa necesita y fomentamos nuevos estilos de liderazgo adaptados a los tiempos actuales.",
    subItems: [
      {
        label: "Selección y Reclutamiento de Personal",
        href: "/empresa/reclutamiento",
        icon: <FiUserPlus />,
      },
      {
        label: "Evaluaciones de Personal",
        href: "/empresa/evaluacion",
        icon: <FiCheckCircle />,
      },
      {
        label: "Internacional",
        href: "/empresa/internacional",
        icon: <FiGlobe />,
      },
      {
        label: "Funciones",
        href: "/empresa/funciones",
        icon: <FiTrendingUp />,
      },
      {
        label: "Búsqueda Especializada",
        href: "/empresa/busqueda",
        icon: <FiShield />,
      },
      {
        label: "Auditoría de Inclusión",
        href: "/empresa/auditoria",
        icon: <FiUserCheck />,
      },
    ],
  },
  {
    label: "Candidatos",
    href: "/candidatos",
    icon: <FiBriefcase />,
    title: "Oportunidades para Candidatos",
    description:
      "Le apoyamos en su camino hacia su carrera. Aproveche nuestras ofertas de empleo, asesoría profesional y recursos digitales.",
    subItems: [
      {
        label: "Registre su Curriculum",
        href: "/candidatos/registre-curriculum",
        icon: <FiFileText />,
      },
      {
        label: "Gestión de Carrera Internacional",
        href: "/candidatos/gestion-internacional",
        icon: <FiGlobe />,
      },
    ],
  },
  {
    label: "Nosotros",
    href: "/nosotros",
    icon: <FiStar />,
    title: "Conócenos Mejor",
    description: "Conozca más sobre nuestra empresa, valores y trayectoria.",
    subItems: [
      {
        label: "Quiénes Somos",
        href: "/nosotros/quienes-somos",
        icon: <FiUsers />,
      },
      {
        label: "Nuestra Filosofía",
        href: "/nosotros/filosofia",
        icon: <FiMessageCircle />,
      },
    ],
  },
  {
    label: "Otros Servicios",
    href: "/otros-servicios",
    icon: <FiSettings />,
    title: "Servicios Complementarios",
    description:
      "Ofrecemos servicios para su desarrollo académico, profesional y personal, incluyendo estudios, trabajo, vivienda, transporte, visados e idiomas.",
    subItems: [
      {
        label: "Estudios - Formación - Prácticas",
        href: "/otros-servicios/estudio-formacion-practicas",
        icon: <FiBookOpen />,
      },
      {
        label: "Trabajo - Impuestos",
        href: "/otros-servicios/trabajo-impuesto",
        icon: <FiBriefcase />,
      },
      {
        label: "Vivienda - Transporte",
        href: "/otros-servicios/vivienda-transporte",
        icon: <FiHome />,
      },
      {
        label: "Visado - Idioma",
        href: "/otros-servicios/visado-idioma",
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
    label: "Contacto",
    href: "/contactanos",
    icon: <FiMail />,
    title: "¿Listo para dar el siguiente paso?",
    description:
      "Contáctanos para resolver tus dudas, agendar una asesoría o iniciar tu proceso de selección. Estamos aquí para ayudarte.",
    subItems: [],
  },
];
