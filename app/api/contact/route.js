import { NextResponse } from "next/server";
import { saveContactForm } from "@/app/_lib/data-service";
import { Resend } from "resend";
import ContactFormSubmission from "@/emails/ContactFormSubmission";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Save to Firestore using your existing function
    await saveContactForm({ name, email, phone, message });

    // Send email to user
    await resend.emails.send({
      from: "93 North Studio <93northstudio@gmail.com>",
      to: email,
      subject: "Thanks for contacting us!",
      react: <ContactFormSubmission name={name} />,
    });

    // Send email to yourself
    await resend.emails.send({
      from: "Website Contact Form <93northstudio@gmail.com>",
      to: "93northstudio@gmail.com",
      subject: "New contact form submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API error:]", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
