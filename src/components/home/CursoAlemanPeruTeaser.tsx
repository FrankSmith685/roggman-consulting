// components/home/CursoAlemanPeruTeaser.tsx
"use client";
import { FaCalendarAlt, FaClock, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import CustomImage from "../ui/CustomImage";
import CustomButton from "../ui/CustomButton";
import { useRouter } from "next/navigation";

export default function CursoAlemanPeruTeaser() {
  const router = useRouter();
  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Imagen */}
        <div className="flex-1 flex justify-center">
          <CustomImage
            src="/images/curso_aleman.png"
            alt="Curso de Alemán para Perú"
            width={1500}
            height={1000}
            className="object-contain !h-auto !w-full rounded-2xl shadow-lg max-w-sm"
            isCritical
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-blue-400">
            🇩🇪 Curso de Alemán Online – Especial para Perú
          </h2>

          <p className="text-lg mb-6 leading-relaxed text-gray-100/90">
            Aprende alemán desde casa con clases en vivo, <strong>docente con dominio del idioma</strong>,
            materiales en español y horarios pensados para Perú.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaCalendarAlt className="text-blue-400" />
              <span>Próximo inicio: <strong>2 de septiembre</strong></span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaClock className="text-blue-400" />
              <span>Clases: <strong>S/ 15 por 2 horas (90 minutos)</strong></span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaClock className="text-blue-400" />
              <span>Frecuencia: <strong>5 veces por semana</strong></span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGraduationCap className="text-blue-400" />
              <span>Módulo: <strong>6 meses – A1 o A2</strong></span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGraduationCap className="text-blue-400" />
              <span>Grupos reducidos: <strong>máximo 6 personas</strong></span>
            </li>
          </ul>

          <div className="w-auto">
            <CustomButton
              variantType="indigo"
              endIcon={<FaArrowRight />}
              className="!w-auto !rounded-2xl"
              onClick={() => router.push("/otros-servicios/curso-aleman-peru")}
            >
              Más información
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
