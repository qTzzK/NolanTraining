'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const TIME_SLOTS = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
];

export default function BookingForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState('');

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.date || !form.time || !form.name || !form.email || !form.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    const params = new URLSearchParams({
      program: '30-Minute Consultation with Nolan King',
      price: '13500',
      booking_date: form.date,
      booking_time: form.time,
      booking_name: form.name,
      booking_email: form.email,
      booking_phone: form.phone,
    });
    if (form.message) params.set('booking_message', form.message);

    router.push(`/checkout?${params.toString()}`);
  }

  const today = new Date().toISOString().split('T')[0];

  const inputClass =
    'w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors';
  const labelClass =
    'block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="min-w-0">
          <label className={labelClass}>
            Date <span className="text-gold">*</span>
          </label>
          <input
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>
            Time <span className="text-gold">*</span>
          </label>
          <select
            value={form.time}
            onChange={(e) => update('time', e.target.value)}
            className={inputClass}
            required
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Name */}
      <div>
        <label className={labelClass}>
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          placeholder="Your full name"
          className={inputClass}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>
          Email <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>
          Phone Number <span className="text-gold">*</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="+1 (555) 000-0000"
          className={inputClass}
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>
          Message{' '}
          <span className="text-zinc-600 normal-case font-normal tracking-normal">
            (optional)
          </span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell Nolan about your goals, current fitness level, or anything else..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && <p className="text-red-400 text-xs">{error}</p>}

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-colors group"
      >
        Book Now — $135
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>

      <p className="text-zinc-600 text-xs text-center">
        Secure payment processed on the next page.
      </p>
    </form>
  );
}
