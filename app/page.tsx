import React from 'react'
import { MaxWidthWrapper } from './components/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import Image from 'next/image'
import Navbar from './components/Navbar'


const page = () => {
  return (
    <>
    <MaxWidthWrapper className=' mb-12 mt-14 sm:mt-30 justify-center items-center flex flex-col text-center'>
    <div className='mx-auto mb-4 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200  bg-white px-7 py-2 shadow-md  backdrop-blur transition-all hover:border-gray-300 hover:bg-white/30'>
         <p className=' text-sm font-semibold text-gray-700'>
              Discover your path
         </p>
      </div>
         <h1 className=' max-w-4xl font-bold text-5xl md:text-6xl lg:text-7xl'>
         Discover your <span className=' text-blue-600'>career</span> in  minutes
         </h1>
         <p className=' mt-5 max-w-prose  text-zinc-700 sm:text-lg'>
         Psychometric tests are used by employers to 
         assess intelligence, abilities, potential 
         and personality. This CD-ROM contains over 1000 psychometric test questions, 
         with against-the-clock test conditions and instant scoring, feedback and analysis
        </p>
        <Link href="/dashboard" className={buttonVariants({
            size: 'lg',
            className: 'mt-8'
        })}>
            <span className=' text-lg '>
            Get started
            </span>
        </Link>
    </MaxWidthWrapper>  
    <div>
        <div className=' relative isolate'>
        <div className=' mx-auto max-w-6xl px-6 lg:px-8'> 
                <div className=' mt-16 flow-root sm:mt-24'>
                     <div className= ' ring-gray-900/10 -m-2 rounded-lg bg-gray-900/5 p-2 ring-1 ring-inset  lg:-m-4 lg:rounded-2xl lg:p-4'>
                        <Image src="" alt="Dashboard image" width="1364" height="866"
                        className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10 lg:p-24 xl:p-32'
                        
                        />
                      </div> 
                </div>
            </div>
        </div>
    </div>
    <div className=' mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 '>
        <div className=' mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
                <h2 className=' mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                A quick psychometric test that will help you discover your career path
                </h2>
                <p className=' mt-4 text-lg text-gray-600'>
                 Discovering your career path is a journey that can be both exciting and challenging.
                    Our psychometric test will help you identify your strengths and weaknesses.
                </p>
            </div>
        </div>
       <ol className=' my-8 space-y-8 md:flex md:space-x-12 sm:space-y-0'>
        <li className=' md:flex-1'>
              <div className=' flex flex-col space-y-2  border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:mt-4'>
                <span className=' text-sm font-medium text-blue-600'>
                  Step 1
                </span>
                <span  className=' text-xl font-semibold'>
                  Sign up for an account 
                </span>
                <span className=' mt-2 text-zinc-700'>
                  Create an account to get started with the <Link href="/testPage" className=' text-blue-900 hover:underline font-semibold'> test</Link>
                </span>
              </div>
        </li>
        <li className=' md:flex-1'>
              <div className=' flex flex-col space-y-2  border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:mt-4'>
                <span className=' text-sm font-medium text-blue-600'>
                  Step 2
                </span>
                <span  className=' text-xl font-semibold'>
                  Take the test
                </span>
                <span className=' mt-2 text-zinc-700'>
                   This test will help us evaluate your skills and abilities
                </span>
              </div>
        </li>
        <li className=' md:flex-1'>
              <div className=' flex flex-col space-y-2  border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:mt-4'>
                <span className=' text-sm font-medium text-blue-600'>
                  Step 3
                </span>
                <span  className=' text-xl font-semibold'>
                  Wait for the report to generate
                </span>
                <span className=' mt-2 text-zinc-700'>
                  Get a detailed report on your strengths and weaknesses
                </span>
              </div>
        </li>
        </ol>       
    </div>   

    </>  
  )
}

export default page