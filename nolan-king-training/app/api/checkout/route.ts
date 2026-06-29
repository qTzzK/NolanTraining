import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-04-22.dahlia' });

interface BookingDetails {
  date?: string;
  time?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { programName, priceInCents, booking } = body as {
    programName: string;
    priceInCents: number;
    booking?: BookingDetails;
  };

  if (!programName || !priceInCents || priceInCents <= 0) {
    return Response.json({ error: 'Invalid program or price' }, { status: 400 });
  }

  const metadata: Record<string, string> = { programName };
  if (booking) {
    if (booking.date) metadata.booking_date = booking.date;
    if (booking.time) metadata.booking_time = booking.time;
    if (booking.name) metadata.booking_name = booking.name;
    if (booking.email) metadata.booking_email = booking.email;
    if (booking.phone) metadata.booking_phone = booking.phone;
    if (booking.message) metadata.booking_message = booking.message.slice(0, 500);
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: priceInCents,
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    metadata,
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
