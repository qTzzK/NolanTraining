'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const GOLD = '#C9A84C';

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2).replace(/\.00$/, '')}`;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  backgroundColor: '#18181b',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box',
};

// ─── Inner form (must be inside <Elements>) ───────────────────────────────────

interface BookingSummary {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface PaymentFormProps {
  programName: string;
  priceInCents: number;
  booking: BookingSummary | null;
}

function PaymentForm({ programName, priceInCents, booking }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState(booking?.name ?? '');
  const [email, setEmail] = useState(booking?.email ?? '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentReady, setPaymentReady] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    setLoading(true);
    setError('');

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        payment_method_data: {
          billing_details: { name: name.trim(), email: email.trim() },
        },
      },
    });

    if (stripeError) {
      setError(stripeError.message ?? 'Payment failed. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <style>{`@keyframes pulse { 0%,100% { opacity:.4 } 50% { opacity:.8 } }`}</style>

      {/* Order summary */}
      <div style={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Order Summary</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: booking ? '12px' : '0' }}>
          <span style={{ color: '#e4e4e7', fontSize: '0.9rem' }}>{programName}</span>
          <span style={{ color: GOLD, fontWeight: 800, fontSize: '1rem' }}>{formatPrice(priceInCents)}</span>
        </div>
        {booking && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ fontSize: '0.8rem', color: GOLD, fontWeight: 700, margin: 0 }}>
              {booking.date} at {booking.time}
            </p>
            <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{booking.phone}</p>
            {booking.message && (
              <p style={{ fontSize: '0.8rem', color: '#666', margin: 0, fontStyle: 'italic' }}>&ldquo;{booking.message}&rdquo;</p>
            )}
          </div>
        )}
      </div>

      {/* Contact */}
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Contact</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
      </div>

      {/* Payment */}
      <div style={{ marginBottom: '28px' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Payment</p>
        <PaymentElement
          options={{ layout: 'accordion' }}
          onReady={() => setPaymentReady(true)}
        />
        {!paymentReady && (
          <div style={{ height: 120, backgroundColor: '#18181b', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)', animation: 'pulse 1.5s ease-in-out infinite' }} />
        )}
      </div>

      {error && (
        <p style={{ fontSize: '0.85rem', color: '#ef4444', marginBottom: '14px' }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: loading ? '#555' : GOLD,
          color: '#000',
          fontWeight: 800,
          fontSize: '0.95rem',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-display)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'background 0.2s',
        }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Processing…
          </>
        ) : (
          `Pay ${formatPrice(priceInCents)}`
        )}
      </button>
    </form>
  );
}

// ─── Outer wrapper ─────────────────────────────────────────────────────────────

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const programName = searchParams.get('program') ?? '';
  const priceInCents = parseInt(searchParams.get('price') ?? '0', 10);

  const bookingDate = searchParams.get('booking_date') ?? '';
  const bookingTime = searchParams.get('booking_time') ?? '';
  const bookingName = searchParams.get('booking_name') ?? '';
  const bookingEmail = searchParams.get('booking_email') ?? '';
  const bookingPhone = searchParams.get('booking_phone') ?? '';
  const bookingMessage = searchParams.get('booking_message') ?? '';

  const isBooking = !!(bookingDate && bookingName);

  const booking: BookingSummary | null = isBooking
    ? { date: bookingDate, time: bookingTime, name: bookingName, email: bookingEmail, phone: bookingPhone, message: bookingMessage }
    : null;

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [initError, setInitError] = useState('');

  useEffect(() => {
    if (!programName || !priceInCents) return;

    const body: Record<string, unknown> = { programName, priceInCents };
    if (booking) {
      body.booking = {
        date: bookingDate,
        time: bookingTime,
        name: bookingName,
        email: bookingEmail,
        phone: bookingPhone,
        message: bookingMessage,
      };
    }

    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) { setInitError(data.error); return; }
        setClientSecret(data.clientSecret);
      })
      .catch(() => setInitError('Failed to initialize checkout. Please try again.'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programName, priceInCents]);

  if (!programName || !priceInCents) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', gap: '6px' }}>
        Invalid checkout link.{' '}
        <Link href="/services" style={{ color: GOLD }}>View programs</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', padding: '40px 16px 80px' }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <Link
            href={isBooking ? '/book' : '/services'}
            style={{ color: '#71717a', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={14} />
            {isBooking ? 'Back to booking' : 'Back to programs'}
          </Link>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>
            Checkout
          </span>
          <div style={{ width: 110 }} />
        </div>

        {initError && (
          <p style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '16px' }}>{initError}</p>
        )}

        {clientSecret ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: 'night',
                variables: {
                  colorPrimary: GOLD,
                  colorBackground: '#18181b',
                  colorText: '#ffffff',
                  colorDanger: '#ef4444',
                  fontFamily: 'system-ui, sans-serif',
                  borderRadius: '6px',
                },
              },
            }}
          >
            <PaymentForm programName={programName} priceInCents={priceInCents} booking={booking} />
          </Elements>
        ) : !initError ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#555' }}>Loading…</div>
        ) : null}
      </div>
    </div>
  );
}
