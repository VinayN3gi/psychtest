import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { trpc } from '@/app/_trpc/client'
import { Loader2 } from 'lucide-react'



const InterestInventoryTable = () => {

    const {data,isLoading}=trpc.getInterestInventory.useQuery()
    
    if(isLoading) return <div className=' justify-center flex items-center'><Loader2 color='blue' className=' h-7 w-7  animate-spin '/></div>


    if(!data) return <div className=' justify-center text-center'>
        <div className='text-2xl font-bold'>
        No data found
        </div>
        <div className=' mt-1'>
            Please refresh the page or try again later
        </div>
        </div>
    
   

    return (
        <Table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
            <TableHeader className="bg-blue-600 text-white">
                <TableRow>
                    <TableHead className=" text-black p-2 text-lg">Interest Area</TableHead>
                    <TableHead className="text-black p-2 text-lg">Score</TableHead>
                    <TableHead className="text-black p-2 text-lg">Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700 text-lg">
                <TableRow className='bg-white'>
                    <TableCell className="p-2 ">Artistic</TableCell>
                    <TableCell className="p-2">{`${data.artisticScore *10}%`}</TableCell>
                    <TableCell className="p-2">You enjoy creating art, music, dance, drama, or creative writing. Likes to express ideas artistically</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2">Investigative</TableCell>
                    <TableCell className="p-2">{`${data.investigativeScore * 10}%`}</TableCell>
                    <TableCell className="p-2">Curious about scientific and technical subjects. Likes to solve problems and conduct research.</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2">Social</TableCell>
                    <TableCell className="p-2">{`${data.socialScore *10}%`}</TableCell>
                    <TableCell className="p-2">Prefers working with people,helping others and engaging in social activities.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2">Realistic</TableCell>
                    <TableCell className="p-2">{`${data.realisticScore *10}%`}</TableCell>
                    <TableCell className="p-2">Enjoys practical,hands-on activities and working with tools or machinery</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2">Enterprising</TableCell>
                    <TableCell className="p-2">{`${data.enterprisingScore *10}%`}</TableCell>
                    <TableCell className="p-2">Interested in teading teams,making decisions,and maniging projects or businesses</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2">Conventional</TableCell>
                    <TableCell className="p-2">{`${data.conventionalScore *10}%`}</TableCell>
                    <TableCell className="p-2">Prefers structured ,orderly tasks like data management,accounting or administrative work.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      );

}

export default InterestInventoryTable