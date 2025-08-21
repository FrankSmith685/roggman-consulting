// app/api/contacto/empresa/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      nombre,
      apellido,
      correo,
      telefono,
      empresa,
      ciudad,
      posicion,
      mensaje,
    } = data;

    if (!nombre || !apellido || !correo) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'f.s.b.rojas@gmail.com',
      subject: `Nuevo contacto de empresa: ${empresa || 'Sin nombre'}`,
      html: `
        <h3>Mensaje desde formulario de empresa</h3>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
        <p><strong>Ciudad:</strong> ${ciudad || 'No especificada'}</p>
        <p><strong>Posición:</strong> ${posicion || 'No especificada'}</p>
        <p><strong>Mensaje:</strong> ${mensaje || 'Sin mensaje'}</p>
      `,
    });

    return NextResponse.json({ message: 'Correo enviado con éxito (empresa)' });
  } catch (error) {
    console.error('Error empresa:', error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
