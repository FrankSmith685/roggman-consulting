import Breadcrumbs from "@/components/servicios/curso-aleman/BreadCrumb";
import Header from "@/components/servicios/curso-aleman/header";
import { FaWhatsapp } from "react-icons/fa";

export default function CursoAlemanPeruPage() {
  return (
    <div className="w-full">
        <Header/>
        <Breadcrumbs/>
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Título */}
          <h1 className="text-4xl font-extrabold text-center text-red-600 mb-6">
            🇩🇪 Curso de Alemán Online – Especial para Perú
          </h1>

          {/* Intro */}
          <p className="mb-6 text-lg text-center text-gray-700 leading-relaxed">
            Da el primer paso hacia el dominio del alemán desde la comodidad de tu hogar. 
            Clases <strong>100% en vivo</strong> por Google Meet, con grupos pequeños, 
            atención personalizada y materiales explicados en español.
          </p>

          {/* Detalles */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">📅 Detalles del curso</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li><strong>Inicio:</strong> 2 de septiembre</li>
              <li><strong>Frecuencia:</strong> 5 veces por semana</li>
              <li><strong>Duración por clase:</strong> 2 horas (90 min efectivos)</li>
              <li><strong>Duración total:</strong> 6 meses – 1 módulo completo (A1 o A2)</li>
              <li><strong>Niveles disponibles:</strong> A1 y A2</li>
              <li><strong>Grupos reducidos:</strong> máximo 6 personas</li>
            </ul>
          </section>

          {/* Precio */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">💰 Inversión</h2>
            <p className="text-lg text-gray-800">
              Solo <span className="font-bold text-green-600">S/ 15 por cada clase de 2 horas</span>.  
            </p>
            <p className="text-gray-700 mt-2">
              Una de las opciones más accesibles para aprender alemán con práctica constante. 
              ¡Más horas de aprendizaje, menos gasto!
            </p>
          </section>

          {/* Modalidad */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">👩‍🏫 Modalidad</h2>
            <p className="text-gray-700 leading-relaxed">
              📌 Clases en vivo y dinámicas a través de <strong>Google Meet</strong>. <br />
              📌 Grupo privado de <strong>WhatsApp</strong> para dudas, materiales y soporte. <br />
              📌 Enseñanza cercana y práctica, enfocada en conversación y comprensión real.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-green-100 border border-green-300 p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">📲 Regístrate ahora</h2>
            <p className="mb-6 text-gray-800">
              Los grupos son pequeños (máx. 6 personas) y las <strong>plazas se llenan rápido</strong>.  
              Asegura tu cupo y empieza tu camino al alemán con nosotros.
            </p>
            <a
              href="https://wa.me/519XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-green-600 transition"
            >
              <FaWhatsapp size={26} /> Inscribirme por WhatsApp
            </a>
          </section>
        </main>

    </div>
  );
}
