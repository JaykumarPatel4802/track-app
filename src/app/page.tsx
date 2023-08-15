"use client";

import React, { use, useEffect, useReducer } from 'react';
import Link from 'next/link';
import Navbar from '@/app/home/components/navbar';
import Intro from '@/app/home/components/intro';
import Features from '@/app/home/components/features';


export default function Home() {

  const [content, setContent] = React.useState<String | null>("AboutMe");
  const showPage = (page: String) => {
    setContent(page);
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-pink-100 from-10% via-white-100 via-50% to-blue-100 to-90%">
      <div className='flex flex-col w-screen z-10 justify-between sticky top-0'>
        <Navbar giveChoice={showPage} />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Intro />
      </div>
    </main>
  )
}
