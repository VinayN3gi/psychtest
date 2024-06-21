'use client';
import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import Link from 'next/link'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { buttonVariants } from '@/components/ui/button'

const Navbar = () => {
  return (
    <nav className=' sticky top-0 inset-x-0 h-14 z-30 border-b border-gray-200 bg-white/75 backdrop:blur-lg transition-all w-full'>
        <MaxWidthWrapper className=' md:p-0 sm:p-0'>
            <div className='flex h-14 justify-between items-center md:border-b border-zinc-200'>
                <Link href='/dashboard' className=' z-40 font-semibold flex'>
                AcadHelp
                </Link>
              <div className='items-center sm:flex space-x-2'>
                <LoginLink className={buttonVariants()}>
                  Sign in
                </LoginLink>
                <RegisterLink className={buttonVariants()}>
                  Sign Up
                </RegisterLink>
              </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar