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

export const navItems_En: NavItem[] = [
  {
    label: "Company",
    href: "/company",
    icon: <FiUsers />,
    title: "Solutions for Companies",
    description:
      "We select the professionals your company needs and promote new leadership styles adapted to today's world.",
    subItems: [
      {
        label: "Personnel Recruitment and Selection",
        href: "/company/recruitment",
        icon: <FiUserPlus />,
      },
      {
        label: "Personnel Assessments",
        href: "/company/assessment",
        icon: <FiCheckCircle />,
      },
      {
        label: "International",
        href: "/company/international",
        icon: <FiGlobe />,
      },
      {
        label: "Functions",
        href: "/company/functions",
        icon: <FiTrendingUp />,
      },
      {
        label: "Specialized Search",
        href: "/company/search",
        icon: <FiShield />,
      },
      {
        label: "Inclusion Audit",
        href: "/company/audit",
        icon: <FiUserCheck />,
      },
    ],
  },
  {
    label: "Candidates",
    href: "/candidates",
    icon: <FiBriefcase />,
    title: "Opportunities for Candidates",
    description:
      "We support you on your career path. Take advantage of our job offers, career counseling, and digital resources.",
    subItems: [
      {
        label: "Register Your Resume",
        href: "/candidates/register-curriculum",
        icon: <FiFileText />,
      },
      {
        label: "International Career Management",
        href: "/candidates/international-management",
        icon: <FiGlobe />,
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: <FiStar />,
    title: "Get to Know Us Better",
    description: "Learn more about our company, values, and track record.",
    subItems: [
      {
        label: "Who We Are",
        href: "/about-us/who-we-are",
        icon: <FiUsers />,
      },
      {
        label: "Our Philosophy",
        href: "/about-us/our-philosophy",
        icon: <FiMessageCircle />,
      },
    ],
  },
  {
    label: "Other Services",
    href: "/other-services",
    icon: <FiSettings />,
    title: "Complementary Services",
    description:
      "We offer services for your academic, professional, and personal development, including education, work, housing, transportation, visas, and languages.",
    subItems: [
      {
        label: "Studies - Training - Internships",
        href: "/other-services/studies-training-internships",
        icon: <FiBookOpen />,
      },
      {
        label: "Work - Taxes",
        href: "/other-services/work-taxes",
        icon: <FiBriefcase />,
      },
      {
        label: "Housing - Transportation",
        href: "/other-services/housing-transportation",
        icon: <FiHome />,
      },
      {
        label: "Visa - Language",
        href: "/other-services/visa-languaje",
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
    label: "Contact",
    href: "/contact",
    icon: <FiMail />,
    title: "Ready to take the next step?",
    description:
      "Contact us to resolve your questions, schedule a consultation, or start your selection process. We’re here to help you.",
    subItems: [],
  },
];
