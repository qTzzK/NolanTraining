import Stripe from 'stripe';
import { sendEmail, consultationBookingEmailHtml } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-04-22.dahlia' });

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return Response.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return Response.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object as Stripe.PaymentIntent;
    const meta = pi.metadata ?? {};

    if (meta.booking_name) {
      const notifyEmail = process.env.NOTIFICATION_EMAIL ?? 'groundgametheory@gmail.com';
      const amountPaid = `$${(pi.amount / 100).toFixed(2)}`;

      await sendEmail({
        to: notifyEmail,
        subject: `New Consultation Booking — ${meta.booking_name} on ${meta.booking_date} at ${meta.booking_time}`,
        html: consultationBookingEmailHtml({
          name: meta.booking_name ?? '',
          email: meta.booking_email ?? '',
          phone: meta.booking_phone ?? '',
          date: meta.booking_date ?? '',
          time: meta.booking_time ?? '',
          message: meta.booking_message ?? '',
          amountPaid,
          sessionId: pi.id,
        }),
      });
    }
  }

  return Response.json({ received: true });
}
