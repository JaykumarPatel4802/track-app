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
    <main className="flex min-h-screen flex-col items-center">
      <div className='flex relative w-full'>
        <div className='flex absolute inset-0 bg-gradient-to-r from-pink-100 from-10% via-white-100 via-50% to-blue-100 to-90%'></div>
        <div className='flex absolute inset-0 bg-gradient-to-b from-transparent to-white'></div>
        <div className='flex flex-col inset-0 w-full'>
          <div className='flex flex-col z-10 justify-between sticky top-0 backdrop-filter backdrop-blur-lg'><Navbar giveChoice={showPage} /></div>
          <div className='z-10'><Intro /></div>
        </div>
      </div>
      <div className='flex flex-col items-center mt-auto'>
        <div className='w-full'><Features /></div>
        <div className='w-full'><Intro /></div>
      </div>
    </main>
  )
}
