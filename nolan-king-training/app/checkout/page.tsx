import { Suspense } from 'react';
import CheckoutClient from './CheckoutClient';

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-600">
          Loading…
        </div>
      }
    >
      <CheckoutClient />
    </Suspense>
  );
}
