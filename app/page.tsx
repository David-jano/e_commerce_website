"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from "react-icons/hi";


export default function Home() {
  useEffect(() => {
  const btn = document.getElementById('menu');
  const nav = document.getElementById('nav');

  const toggleMenu = () => {
    btn?.classList.toggle('open');
    nav?.classList.toggle('max-h-0');
    nav?.classList.toggle('max-h-96'); // Adjust based on your content height
  };

  btn?.addEventListener('click', toggleMenu);

  return () => {
    btn?.removeEventListener('click', toggleMenu);
  };
}, []);


  return (
    <>
    <nav className="relative w-full container mx-auto p-6 md:ml-20">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src="/logo.svg" width={100} height={100} alt="logo"/>
        </div>
        <div className="space-x-6 hidden sm:block">
          <Link href="#" className="inline-block hover:text-gray-400">Home</Link>
          <Link href="#" className="inline-block hover:text-gray-400">Pricing</Link>
          <Link href="#" className="inline-block hover:text-gray-400">Product</Link>
          <Link href="#" className="inline-block hover:text-gray-400">About Us</Link>
          <Link href="#" className="inline-block hover:text-gray-400">Careers</Link>
          <Link href="#" className="inline-block hover:text-gray-400">Community</Link>
        </div>
        <a href="" className="bg-amber-600 px-6 hover:bg-amber-700 text-white rounded-full py-2 hidden md:block">Get Started</a>
         <HiMenu size={24} id='menu' className='md:hidden'/>

      </div>

      <div className="max-h-0 overflow-hidden transition-all duration-900 w-full text-center md:hidden shadow-2xl" id="nav">
        <ul className="space-y-3 shadow-2xl p-4">
          <li><a href="" className="hover:text-amber-600 cursor-pointer">Home</a></li>
          <li><a href="" className="hover:text-amber-600 cursor-pointer">Product</a></li>
          <li><a href="" className="hover:text-amber-600 cursor-pointer">About Us</a></li>
          <li><a href="" className="hover:text-amber-600 cursor-pointer">Careers</a></li>
          <li><a href="" className="hover:text-amber-600 cursor-pointer">Pricing</a></li>
          <li><a href="" className="hover:text-amber-600 cursor-pointer">Community</a></li>
        </ul>
      </div>
    </nav>

    <section className= "mx-0 sm:mx-5 md:mx-10">
  <div className="container mx-auto flex flex-col-reverse md:flex-row py-10 px-4 items-center">
    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
      <h1 className="font-black text-3xl md:text-5xl mx-10">
        Bring everyone together to build better products
      </h1>
      <p className="text-gray-600 mx-10">
        Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view and maintain the product main frame in idle Time.
      </p>
      <a
        href="#" className="bg-amber-600 hover:bg-amber-700 md:ml-8 text-white rounded-full py-2 px-6 md:inline-block"
      >
        Get Started
      </a>
    </div>
    <div className="w-full md:w-1/2">
    <Image src="/illustration-intro.svg" alt="hello" width="500" height="500"/>
    </div>
  </div>
</section>

<section className="mx-5 mt-7">
  <div className="container flex flex-col px-4 items-center md:flex-row md:items-start md:ml-32 space-y-6">
    <div className="w-full md:w-1/2 max-w-160">
      <h2 className="font-black text-4xl md:text-5xl text-center md:text-left">What is different about Manage?</h2>
      <p className="text-gray-600 mt-10 text-center md:text-left max-w-120">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
    </div>
    <div className="w-full md:w-1/2 md:pr-10 ">
    <div className="flex items-start space-x-6 pt-8">
  <span className="bg-amber-600 rounded-full text-white px-4 py-2">01</span>
  <div className="">
    <h4 className="text-2xl font-bold">Track company-wide progress</h4>
    <p className="text-gray-400 mt-2 mr-5">
      See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
       the milestone level all the way down to the smallest of details. Never lose sight of 
       the bigger picture again.
    </p>
  </div>
</div>
   
    <div className="flex items-start space-x-6 pt-8">
  <span className="bg-amber-600 rounded-full text-white px-4 py-2">02</span>
  <div className="">
    <h4 className="text-2xl font-bold">Advanced built-in reports</h4>
    <p className="text-gray-400 mt-2 mr-5">
      Set internal delivery estimates and track progress toward company goals. 
      Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
    </p>
  </div>
</div>
   
    <div className="flex items-start space-x-6 pt-8">
  <span className="bg-amber-600 rounded-full text-white px-4 py-2">03</span>
  <div className="">
    <h4 className="text-2xl font-bold">Everything you need in one place</h4>
    <p className="text-gray-400 mt-2 mr-5">
      Stop jumping from one service to another to communicate, store files, 
      track tasks and share documents. Manage offers an all-in-one team productivity solution.
    </p>
  </div>
</div>
    </div>
  </div>
</section>

<section>
  <div className="mx-auto">
    <h2 className="text-4xl font-bold pt-15 pb-20 text-center">What's Different About Manage?</h2>
    </div>
   <div className="container mx-auto px-4 pt-2">
  <div className="flex flex-col md:flex-row gap-1 md:gap-10 justify-center items-stretch">

    <div className="flex flex-col space-y-6 items-center md:w-1/3 bg-gray-100 p-10 rounded-md">
      <Image src="/avatar-anisha.png" alt="anisha" width={70} height={70} className="-mt-18" />
      <h2 className="font-bold text-2xl text-center">Anisha Li</h2>
      <p className="pt-4 text-center text-gray-700">
        “Manage has supercharged our team workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
      </p>
    </div>

    <div className="flex flex-col space-y-6 items-center md:w-1/3 bg-gray-100 p-10 rounded-md">
      <Image src="/avatar-ali.png" alt="ali" width={70} height={70} className="-mt-18" />
      <h2 className="font-bold text-2xl text-center">Ali Bravo</h2>
      <p className="pt-4 text-center text-gray-700">
        “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
      </p>
    </div>

    <div className="flex flex-col space-y-6 items-center md:w-1/3 bg-gray-100 p-10 rounded-md">
      <Image src="/avatar-richard.png" alt="richard" width={70} height={70} className="-mt-18" />
      <h2 className="font-bold text-2xl text-center">Richard Watts</h2>
      <p className="pt-4 text-center text-gray-700">
        “Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
      </p>
    </div>

  </div>
</div>

</section>

<section>
  <div className="pt-10 pb-10 mx-auto flex items-center flex-col">
       <a
        href="#" className="bg-amber-600 hover:bg-amber-700 md:ml-8 text-white rounded-full py-2 px-6 md:inline-block">
        Get Started
      </a>
  </div>
</section>
<div className="bg-amber-600">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-4 py-10">
    
    <div className="font-bold text-4xl md:w-1/2 w-full" id="cta">
      <h2 className="text-white  text-center md:text-left">
        Simplify how your team works today
      </h2>
    </div>

    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
      <a
        href="#"
        className="bg-white hover:bg-amber-50 text-amber-600 rounded-full py-2 px-6">
        Get Started
      </a>
    </div>

  </div>
</div>
<footer className="bg-black md:h-60 h-auto md:p-15">
  <div className="container flex flex-col md:flex-row-reverse mx-auto items-center justify-center">
    
    <div className="w-full md:w-1/3 mt-10 flex flex-col items-center">
      <Image src="/logo-white.svg" width={150} height={150} alt="logo" />
      <span className="flex space-x-4 mt-10">
        <Image src="/icon-facebook.svg" width={20} height={20} alt="fb" />
        <Image src="/icon-youtube.svg" width={20} height={20} alt="yt" />
        <Image src="/icon-twitter.svg" width={20} height={20} alt="tw" />
        <Image src="/icon-pinterest.svg" width={20} height={20} alt="pt" />
        <Image src="/icon-instagram.svg" width={20} height={20} alt="ig" />
      </span>
    </div>

    <div className="w-full md:w-1/3 flex flex-row justify-center gap-10 mt-6 md:mt-0">
      <div>
        <ul className="text-white space-y-2 text-center md:text-left">
          <li><a href="#" className="hover:text-amber-300">Pricing</a></li>
          <li><a href="#" className="hover:text-amber-300">Home</a></li>
          <li><a href="#" className="hover:text-amber-300">Products</a></li>
          <li><a href="#" className="hover:text-amber-300">About</a></li>
        </ul>
      </div>
      <div>
        <ul className="text-white space-y-2 text-center md:text-left">
          <li><a href="#" className="hover:text-amber-300">Careers</a></li>
          <li><a href="#" className="hover:text-amber-300">Community</a></li>
          <li><a href="#" className="hover:text-amber-300">Policy</a></li>
        </ul>
      </div>
    </div>

    <div className="w-full md:w-1/3 mt-7 flex flex-col items-center">
      <div className="flex">
        <input type="text" placeholder="Provide Feedback" className="bg-white py-1 px-5 rounded-s-full focus:outline-none" />
        <input type="submit" value="Go" className="bg-amber-600 text-amber-50 rounded-e-full py-1 px-5" />
      </div>
      <p className="text-gray-400 text-sm pt-12 text-center">
        Copyright David &copy; 2025, All Rights Reserved
      </p>
    </div>
  </div>
</footer>
    </>
  );
}
