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

interface ContentItem{
    interestArea:string,
    score:number
    description:string
}

const content:ContentItem[]=[
    {
        interestArea:'Artistic',
        score:85,
        description:'You enjoy creating art, music, dance, drama, or creative writing.'
    },
    {
        interestArea:'Conventional',
        score:5,
        description:'You enjoy working with data, have strong math skills, and are detail-oriented.'
    },
    {
        interestArea:'Enterprising',
        score:5,
        description:'You enjoy leading and persuading others, and are comfortable taking risks.'
    },
    {
        interestArea:'Investigative',
        score:5,
        description:'You enjoy analyzing data and solving complex problems.'
    },
    {
        interestArea:'Realistic',
        score:5,
        description:'You enjoy working with your hands, tools, and machines.'
    },
    {
        interestArea:'Social',
        score:5,
        description:'You enjoy helping others and working in groups.'
    }
]


const InterestInventoryTable = () => {
    return (
        <Table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
            <TableCaption className="bg-blue-500 text-white p-4 font-semibold text-lg">Interest Inventory</TableCaption>
            <TableHeader className="bg-blue-600 text-white">
                <TableRow>
                    <TableHead className=" text-black p-2 text-lg">Interest Area</TableHead>
                    <TableHead className="text-black p-2 text-lg">Score</TableHead>
                    <TableHead className="text-black p-2 text-lg">Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700">
                {
                    content.map((item, index) => (
                        <TableRow key={index} className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}>
                            <TableCell className="p-2">{item.interestArea}</TableCell>
                            <TableCell className="p-2">{item.score}</TableCell>
                            <TableCell className="p-2">{item.description}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
      );





  /*return (
    <Table>
        <TableCaption>Interest Inventory</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className=' w-[100px] text-black'>Interest Area</TableHead>
                <TableHead className=' text-black'>Score</TableHead>
                <TableHead className=' text-black'>Description</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                content.map((item,index)=>(
                    <TableRow key={index}>
                        <TableCell>{item.interestArea}</TableCell>
                        <TableCell>{item.score}</TableCell>
                        <TableCell>{item.description}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>   
  )*/
}

export default InterestInventoryTable