'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';

export default function Home() {

  const { user, error, isLoading } = useUser();

  const router = useRouter();

  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

    </div>
  );
}
