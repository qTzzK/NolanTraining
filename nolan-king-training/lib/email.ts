import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[email] SMTP_USER / SMTP_PASS not set — skipping send');
    return;
  }
  await transporter.sendMail({
    from: `"Nolan King Training" <${process.env.SMTP_USER}>`,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
  });
}

export function consultationBookingEmailHtml(opts: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  amountPaid: string;
  sessionId: string;
}): string {
  const messageRow = opts.message
    ? `<tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <span style="font-size:0.75rem;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Message</span><br>
          <span style="font-size:0.9rem;color:#cccccc;line-height:1.6;">${opts.message}</span>
        </td>
       </tr>`
    : '';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;color:#ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#111111;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:560px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#000000;padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.07);">
          <span style="font-size:1.1rem;font-weight:900;color:#c9a84c;letter-spacing:0.05em;text-transform:uppercase;">Nolan King Training</span>
        </td></tr>

        <!-- Alert bar -->
        <tr><td style="background:#c9a84c;padding:12px 32px;">
          <span style="font-size:0.85rem;font-weight:900;color:#000000;text-transform:uppercase;letter-spacing:0.08em;">New Consultation Booking</span>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 24px;font-size:0.9rem;color:#888888;">A new consultation has been booked and payment confirmed.</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:0.75rem;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Name</span><br>
                <span style="font-size:0.95rem;font-weight:700;color:#ffffff;">${opts.name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:0.75rem;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Email</span><br>
                <span style="font-size:0.9rem;color:#cccccc;">${opts.email}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:0.75rem;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Phone</span><br>
                <span style="font-size:0.9rem;color:#cccccc;">${opts.phone}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:0.75rem;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Date &amp; Time</span><br>
                <span style="font-size:0.95rem;font-weight:700;color:#c9a84c;">${opts.date} at ${opts.time}</span>
              </td>
            </tr>
            ${messageRow}
            <tr>
              <td style="padding:10px 0;">
                <span style="font-size:0.75rem;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Amount Paid</span><br>
                <span style="font-size:0.9rem;color:#cccccc;">${opts.amountPaid}</span>
              </td>
            </tr>
          </table>

          <p style="margin:0;font-size:0.75rem;color:#444;font-family:monospace;">Stripe session: ${opts.sessionId}</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.07);">
          <p style="margin:0;font-size:0.75rem;color:#444444;">Nolan King Training &mdash; nolankingtraining.com</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
