import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ValidatedFormData = {
  correo: string;
  mensaje: string;
  file: File;
};

function validateFormData(formData: FormData): ValidatedFormData | null {
  const correo = formData.get('correo');
  const mensaje = formData.get('mensaje');
  const file = formData.get('file');

  if (
    typeof correo === 'string' &&
    typeof mensaje === 'string' &&
    file instanceof File
  ) {
    return { correo, mensaje, file };
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

    const { correo, mensaje, file } = data;

    // Convierte el archivo a un buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Configura el transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'f.s.b.rojas@gmail.com',
      subject: 'Nuevo contácto',
      html: `
        <h3>Nuevo registro desde el formulario</h3>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}
