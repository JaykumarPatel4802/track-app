"use client";

import React, { use, useEffect, useReducer } from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between lg:flex mt-24">
        <Link href="app_manager">
          Go to app tracker!
        </Link>
      </div>
    </main>
  )
}
