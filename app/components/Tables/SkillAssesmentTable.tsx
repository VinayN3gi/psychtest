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

    const {data,isLoading}=trpc.getSkillAssesment.useQuery()
    
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
                    <TableCell className="p-2  w-[200px]">Analytical Thinking</TableCell>
                    <TableCell className="p-2">{`${data.analyticalScore *10}%`}</TableCell>
                    <TableCell className="p-2">Strong ability to analyze information and solve complex problems.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2 w-[200px]">Creativity</TableCell>
                    <TableCell className="p-2">{`${data.creativeScore * 10}%`}</TableCell>
                    <TableCell className="p-2">Excellent in generating original ideas and solutions.</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2 w-[200px]">Communnication</TableCell>
                    <TableCell className="p-2">{`${data.communicationScore *10}%`}</TableCell>
                    <TableCell className="p-2">Effective in conveying ideas clearly and engaging others.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2 w-[200px]">Technical Skills</TableCell>
                    <TableCell className="p-2">{`${data.technicalScore *10}%`}</TableCell>
                    <TableCell className="p-2">Competent in technical task but prefers more creative or investigrative work.</TableCell>
                </TableRow>
                <TableRow className='bg-white'>
                    <TableCell className="p-2 w-[200px]">Teamwork</TableCell>
                    <TableCell className="p-2">{`${data.teamworkScore *10}%`}</TableCell>
                    <TableCell className="p-2">Works well in groups but may prefer individual tasks when focusing on creativity.</TableCell>
                </TableRow>
                <TableRow className='bg-blue-100'>
                    <TableCell className="p-2 w-[200px]">Leadership</TableCell>
                    <TableCell className="p-2">{`${data.leadershipScore *10}%`}</TableCell>
                    <TableCell className="p-2">Interested in leading a team of individuals capable of taking difficult decision.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      );

}

export default InterestInventoryTable