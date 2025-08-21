import { NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';

type ValidatedFormData = {
  nombre: string;
  apellido: string;
  correo: string;
  telefono?: string;
  mensaje: string;
  file?: File;
};

function validateFormData(formData: FormData): ValidatedFormData | null {
  const nombre = formData.get('nombre');
  const apellido = formData.get('apellido');
  const correo = formData.get('correo');
  const telefono = formData.get('telefono');
  const mensaje = formData.get('mensaje');
  const file = formData.get('documento');

  if (
    typeof nombre === 'string' &&
    typeof apellido === 'string' &&
    typeof correo === 'string' &&
    typeof mensaje === 'string'
  ) {
    return {
      nombre,
      apellido,
      correo,
      telefono: typeof telefono === 'string' ? telefono : undefined,
      mensaje,
      file: file instanceof File ? file : undefined,
    };
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data = validateFormData(formData);

    if (!data) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
    }

    const { nombre, apellido, correo, telefono, mensaje, file } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions: SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'f.s.b.rojas@gmail.com',
      subject: `Nuevo contacto de solicitante`,
      html: `
        <h3>Nuevo mensaje de un solicitante</h3>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      mailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}
