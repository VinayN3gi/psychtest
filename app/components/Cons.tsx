import React from 'react'

interface ConsProps {
    consHeader1: string;
    consHeader2: string;
    consHeader3: string;
    consList1: string[];
    consList2: string[];
    consList3: string[];

}

const Cons = ({consHeader1,consHeader2,consHeader3,consList1,consList2,consList3}:ConsProps) => {
  return (
    <div>
         <p className=' mt-5 text-xl font-bold'>Cons :</p>
        <ul className=' list-disc  text-md  ml-8'>
            <li className=' mt-2'>
               {/**Teaching */} 
               <span className=' font-bold text-lg'>{consHeader1} </span>  
               <ul className='list-decimal ml-4 text-md font-mono mt-1  gap-2'>
                {
                    consList1.map((cons) => (
                        <li>{cons}</li>
                    ))
                }
               </ul>
            </li>
                {/**Research */}
            <li className=' mt-2 '>
                <span className=' font-bold text-lg'>{consHeader2} </span>  
               <ul className='list-decimal ml-4 text-md mt-1 font-mono gap-2'>
                {
                    consList2.map((cons) => (
                        <li>{cons}</li>
                    ))
                }
                </ul>   
            </li>
                {/**Service */}    
            <li className=' mt-2'>
                <span className=' font-bold text-lg'>{consHeader3} </span>  
               <ul className='list-decimal ml-4 text-md mt-1 font-mono gap-2'>
                {
                    consList3.map((cons) => (
                        <li>{cons}</li>
                    ))
                }
                </ul> 
            </li>
        </ul>
    </div>
  )
}

export default Cons