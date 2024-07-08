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

    const {data,isLoading}=trpc.getValueAssesment.useQuery()
    
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
                    <TableCell className="p-2  w-[200px]">Autonomy</TableCell>
                    <TableCell className="p-2">{`${data.autonomyScore *10}%`}</TableCell>
                    <TableCell className="p-2">Values independence and the ability to make decisions.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2 w-[200px]">Innovation</TableCell>
                    <TableCell className="p-2">{`${data.innovationScore * 10}%`}</TableCell>
                    <TableCell className="p-2">Thrives in environment that encourage new ideas and creativity.</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2 w-[200px]">Achievement</TableCell>
                    <TableCell className="p-2">{`${data.achievementScore *10}%`}</TableCell>
                    <TableCell className="p-2">Motivated by setting and achieveing personal goals.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2 w-[200px]">Helping score</TableCell>
                    <TableCell className="p-2">{`${data.helpingScore *10}%`}</TableCell>
                    <TableCell className="p-2">Enjoys contributing to other's well-being and success.</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2 w-[200px]">Stability</TableCell>
                    <TableCell className="p-2">{`${data.stabilityScore *10}%`}</TableCell>
                    <TableCell className="p-2">Seeks balance but is open to change and variety in work.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2 w-[200px]">Financial </TableCell>
                    <TableCell className="p-2">{`${data.financialScore *10}%`}</TableCell>
                    <TableCell className="p-2">Motivated by financial incentives.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      );

}

export default InterestInventoryTable