import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Ghost } from 'lucide-react'
import Link from 'next/link'


const Dashboard = () => {
  return (
    <MaxWidthWrapper>
    <div className=' flex flex-col divide-x-2 divide-zinc-200 text-5xl font-bold text-gray-900/90 mt-5 md:mt-0'>
         My Reports
    </div>
    <div className=' mt-16 flex flex-col items-center gap-2 '>
     <Ghost className=' h-10 w-10 text-zinc-800 '/>
     <h3 className=' font-bold text-xl'>Pretty empty around here </h3>
       <p>Take the <span className=' text-blue-600  hover:text-blue-900 hover:underline'>
        <Link href="/testPage">
        test
        </Link>
        </span> to generate report</p>  
    </div>
  </MaxWidthWrapper>
  )
}

export default Dashboard