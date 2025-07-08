import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.ER_KEY); // Replace with actual API key

export async function POST(req) {
  try {
    const { firstName, lastName, mobile, email, message } = await req.json();

    if (!firstName || !mobile || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName || ''}`.trim();

    const result = await resend.emails.send({
      from: 'info@dameasy.in',
      to: 'info@dameasy.in', // sender & receiver both same
      cc: ['zubinchadha@gmail.com'], // 🔁 add CC addresses here
      subject: `📩 New Contact Form Submission from ${fullName}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, messageId: result.id });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}