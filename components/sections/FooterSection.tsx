import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterSection = () => {
    return (
       <footer className="mt-24 border-t border-slate-200 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Logo & Info */}
      <div className="text-center md:text-left">
        <Link href="/">
          <Image
            width={150}
            height={150}
            src="/devMohib.png"
            alt="Mohibullah Mohim"
            className="mx-auto md:mx-0"
            loading="eager"
          />
        </Link>

        <p className="mt-3 text-slate-600 max-w-sm">
          MERN Stack Developer passionate about building modern,
          scalable, and user-friendly web applications.
        </p>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-slate-800 font-semibold text-center mb-4">
          Connect With Me
        </h3>

        <div className="flex items-center justify-center gap-4">

          <Link
            href="https://www.linkedin.com/in/mohibullah-mohim"
            target="_blank"
            className="group p-3 rounded-full border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all"
          >
            <FaLinkedin className="text-xl text-slate-700 group-hover:text-red-500" />
          </Link>

          <Link
            href="https://www.facebook.com/mohibullah.jubileean"
            target="_blank"
            className="group p-3 rounded-full border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all"
          >
            <FaFacebook className="text-xl text-slate-700 group-hover:text-red-500" />
          </Link>

          <Link
            href="https://twitter.com/mohibullah_m_17"
            target="_blank"
            className="group p-3 rounded-full border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all"
          >
            <FaTwitter className="text-xl text-slate-700 group-hover:text-red-500" />
          </Link>

          <Link
            href="https://github.com/developerMohib"
            target="_blank"
            className="group p-3 rounded-full border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all"
          >
            <FaGithub className="text-xl text-slate-700 group-hover:text-red-500" />
          </Link>

        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-8 border-t border-slate-200" />

    {/* Bottom */}
    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500">

      <p className='text-center'>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-slate-700">
          Mohibullah Mohim
        </span>
        . All rights reserved.
      </p>
    </div>
  </div>
</footer>
    );
};

export default FooterSection;