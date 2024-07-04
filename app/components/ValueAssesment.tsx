'use client'
import React, { useState } from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog"
import { Loader2 } from 'lucide-react'
import { trpc } from '../_trpc/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'


const ValueAssesment = () => {
    const [firstAnswer, setFirstAnswer] = useState<string>('')
    const [secondAnswer, setSecondAnswer] = useState<string>('')
    const [thirdAnswer, setThirdAnswer] = useState<string>('')
    const [fourthAnswer, setFourthAnswer] = useState<string>('')
    const [fifthAnswer, setFifthAnswer] = useState<string>('')
    const [sixthAnswer, setSixthAnswer] = useState<string>('')
    const [seventhAnswer, setSeventhAnswer] = useState<string>('')
    const [eigthAnswer, setEigthAnswer] = useState<string>('')
    const [ninthAnswer, setNinthAnswer] = useState<string>('')
    const [tenthAnswer, setTenthAnswer] = useState<string>('')
    const [eleventhAnswer, setEleventhAnswer] = useState<string>('')
    const [twelvethAnswer, setTwelvethAnswer] = useState<string>('')

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [next, setNext] = useState<boolean>(false)  
    const router=useRouter()

    const {mutate:createValueAssesmentAnswer}=trpc.ValueAssesment.useMutation({
      onSuccess:()=>router.push('/reportPage'),
      retry:true,
      retryDelay:500,
    })
   
    const onSubmit=()=>{
      if(!firstAnswer || !secondAnswer || !thirdAnswer || !fourthAnswer || !fifthAnswer || !sixthAnswer || !seventhAnswer || !eigthAnswer || !ninthAnswer || !tenthAnswer || !eleventhAnswer || !twelvethAnswer)
      {
            setIsOpen(true)
            return
      }
      setNext(true)
      createValueAssesmentAnswer({
         answerOne:firstAnswer,
         answerTwo:secondAnswer,
         answerThree:thirdAnswer,
         answerFour:fourthAnswer,
         answerFive:fifthAnswer,
         answerSix:sixthAnswer,
         answerSeven:seventhAnswer,
         answerEight:eigthAnswer,
         answerNine:ninthAnswer,
         answerTen:tenthAnswer,
         answerEleven:eleventhAnswer,
         answerTwelve:twelvethAnswer
 })}
  
    return (
    <MaxWidthWrapper className=' mx-auto'>
         <div className='mx-auto mb-6 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200  bg-white px-7 py-2 shadow-md  backdrop-blur transition-all hover:border-gray-300 hover:bg-white/30 '>
       <p className=' text-sm font-semibold text-gray-700'>
            Value Assesment
       </p>
    </div>
    <div className=' mt-5 mb-5 border-b-2  border-zinc-500'>
      <h1 className=' text-3xl font-bold text-gray-700'>Value Assesment</h1>
      <p className=' text-gray-600 text-xl mb-3 mt-2'>Answer the following questions to the best of your ability</p>
    </div>
    <ol>
         {/*First question */}
         <li>
        <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q1) `}</p>
            <p>How important is it for you to have control over your work schedule ?</p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-one" id="option-one"  onClick={()=>setFirstAnswer('A')}/>
            <Label htmlFor="option-one" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two"  onClick={()=>setFirstAnswer('B')}/>
            <Label htmlFor="option-two" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three"  onClick={()=>setFirstAnswer('C')}/>
            <Label htmlFor="option-three" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four"  onClick={()=>setFirstAnswer('D')}/>
            <Label htmlFor="option-four" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-five" id="option-five"  onClick={()=>setFirstAnswer('E')}/>
            <Label htmlFor="option-five" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Second question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q2) `}</p>
            <p>How much do you value ability to work independtly without constant supervision ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-six" id="option-six"  onClick={()=>setSecondAnswer('A')}/>
            <Label htmlFor="option-six" className='  hover:text-red-700 hover:cursor-pointer' >Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-seven" id="option-seven"  onClick={()=>setSecondAnswer('B')}/>
            <Label htmlFor="option-seven" className='  hover:text-red-600/75 hover:cursor-pointer' >Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-eigth" id="option-eigth"  onClick={()=>setSecondAnswer('C')}/>
            <Label htmlFor="option-eigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-nine" id="option-nine"  onClick={()=>setSecondAnswer('D')}/>
            <Label htmlFor="option-nine" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-ten" id="option-ten"  onClick={()=>setSecondAnswer('E')}/>
            <Label htmlFor="option-ten" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Third question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q3) `}</p>
            <p>How important is it for you to be in a role where you can innovate and develop new ideas ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-eleven" id="option-eleven"  onClick={()=>setThirdAnswer('A')}/>
            <Label htmlFor="option-eleven" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twelve" id="option-twelve"  onClick={()=>setThirdAnswer('B')}/>
            <Label htmlFor="option-twelve" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirteen" id="option-thirteen"  onClick={()=>setThirdAnswer('C')}/>
            <Label htmlFor="option-thirteen" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourteen" id="option-fourteen"  onClick={()=>setThirdAnswer('D')}/>
            <Label htmlFor="option-fourteen" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fifteen" id="option-fifteen"  onClick={()=>setThirdAnswer('E')}/>
            <Label htmlFor="option-fifteen" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Fourth question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q4) `}</p>
            <p>How much do you value being able to contribute to creative processes or projects in your work ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-sixteen" id="option-sixteen"  onClick={()=>setFourthAnswer('A')}/>
            <Label htmlFor="option-sixteen" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-seventeen" id="option-seventeen"  onClick={()=>setFourthAnswer('B')}/>
            <Label htmlFor="option-seventeen" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-eigthteen" id="option-eigthteen"  onClick={()=>setFourthAnswer('C')}/>
            <Label htmlFor="option-eigthteen" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-nineteen" id="option-nineteen"  onClick={()=>setFourthAnswer('D')}/>
            <Label htmlFor="option-nineteen" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-twenty" id="option-twenty"  onClick={()=>setFourthAnswer('E')}/>
            <Label htmlFor="option-twenty" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Fifth question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q5) `}</p>
            <p>How motivated are you by setting and achieving challenging goals in your carrer ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-twentyone" id="option-twentyone"  onClick={()=>setFifthAnswer('A')}/>
            <Label htmlFor="option-twentyone" className='  hover:text-red-700 hover:cursor-pointer'>Not motivated</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentytwo" id="option-twentytwo"  onClick={()=>setFifthAnswer('B')}/>
            <Label htmlFor="option-twentytwo" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly motivated</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentythree" id="option-twentythree"  onClick={()=>setFifthAnswer('C')}/>
            <Label htmlFor="option-twentythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately motivated</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyfour" id="option-twentyfour"  onClick={()=>setFifthAnswer('D')}/>
            <Label htmlFor="option-twentyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Very motivated</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-twnetyfive" id="option-twentyfive"  onClick={()=>setFifthAnswer('E')}/>
            <Label htmlFor="option-twentyfive" className=' hover:text-green-700 hover:cursor-pointer'>Extremely motivated</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Sixth question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q6) `}</p>
            <p>How important is it for you to be recognized dor your accomplishments in the workplace ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-twentysix" id="option-twentysix"  onClick={()=>setSixthAnswer('A')}/>
            <Label htmlFor="option-twentysix" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyseven" id="option-twentyseven"  onClick={()=>setSixthAnswer('B')}/>
            <Label htmlFor="option-twentyseven" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyeigth" id="option-twentyeigth"  onClick={()=>setSixthAnswer('C')}/>
            <Label htmlFor="option-twentyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentynine" id="option-twentynine"  onClick={()=>setSixthAnswer('D')}/>
            <Label htmlFor="option-twentynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-thirty" id="option-thirty"  onClick={()=>setSixthAnswer('E')}/>
            <Label htmlFor="option-thirty" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Seventh question */}

        
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q7) `}</p>
            <p>How important is it for you to work in a job that allows you to make a positive impact on other's live ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-thirtyone" id="option-thirtyone"  onClick={()=>setSeventhAnswer('A')}/>
            <Label htmlFor="option-thirtyone" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtytwo" id="option-thirtytwo"  onClick={()=>setSeventhAnswer('B')}/>
            <Label htmlFor="option-thirtytwo" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtythree" id="option-thirtythree"  onClick={()=>setSeventhAnswer('C')}/>
            <Label htmlFor="option-thirtythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyfour" id="option-thirtyfour"  onClick={()=>setSeventhAnswer('D')}/>
            <Label htmlFor="option-thirtyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-thirtyfive" id="option-thirtyfive"  onClick={()=>setSeventhAnswer('E')}/>
            <Label htmlFor="option-thirtyfive" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>  
        </RadioGroup>
        </li>

        {/*Eigth question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q8) `}</p>
            <p>How much do you value opportunities to provide support or assistance to colleagues or clients ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-thirtysix" id="option-thirtysix"  onClick={()=>setEigthAnswer('A')}/>
            <Label htmlFor="option-thirtysix" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyseven" id="option-thirtyseven"  onClick={()=>setEigthAnswer('B')}/>
            <Label htmlFor="option-thirtyseven" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyeigth" id="option-thirtyeigth"  onClick={()=>setEigthAnswer('C')}/>
            <Label htmlFor="option-thirtyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtynine" id="option-thirtynine"  onClick={()=>setEigthAnswer('D')}/>
            <Label htmlFor="option-thirtynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fourty" id="option-fourty"  onClick={()=>setEigthAnswer('E')}/>
            <Label htmlFor="option-fourty" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Ninth question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q9) `}</p>
            <p>How important is it for you have a high salary and financial benefits in your job ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fourtyone" id="option-fourtyone"  onClick={()=>setNinthAnswer('A')}/>
            <Label htmlFor="option-fourtyone" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtytwo" id="option-fourtytwo"  onClick={()=>setNinthAnswer('B')}/>
            <Label htmlFor="option-fourtytwo" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtythree" id="option-fourtythree"  onClick={()=>setNinthAnswer('C')}/>
            <Label htmlFor="option-fourtythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyfour" id="option-fourtyfour"  onClick={()=>setNinthAnswer('D')}/>
            <Label htmlFor="option-fourtyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fourtyfive" id="option-fourtyfive"  onClick={()=>setNinthAnswer('E')}/>
            <Label htmlFor="option-fourtyfive" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Tenth question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q10) `}</p>
            <p>How much do you value job security and financial stability as part of your career ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fourtysix" id="option-fourtysix"  onClick={()=>setTenthAnswer('A')}/>
            <Label htmlFor="option-fourtysix" className='  hover:text-red-700 cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyseven" id="option-fourtyseven"  onClick={()=>setTenthAnswer('B')}/>
            <Label htmlFor="option-fourtyseven" className='  hover:text-red-600/75 cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyeigth" id="option-fourtyeigth"  onClick={()=>setTenthAnswer('C')}/>
            <Label htmlFor="option-fourtyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtynine" id="option-fourtynine"  onClick={()=>setTenthAnswer('D')}/>
            <Label htmlFor="option-fourtynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fifty" id="option-fifty"  onClick={()=>setTenthAnswer('E')}/>
            <Label htmlFor="option-fifty" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Eleventh question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q11) `}</p>
            <p>How important is it for you to have a good balance between your work responsibilities and personal life ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fiftyone" id="option-fiftyone"  onClick={()=>setEleventhAnswer('A')}/>
            <Label htmlFor="option-fiftyone" className='  hover:text-red-700 cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftytwo" id="option-fiftytwo"  onClick={()=>setEleventhAnswer('B')}/>
            <Label htmlFor="option-fiftytwo" className='  hover:text-red-600/75 cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftythree" id="option-fiftythree"  onClick={()=>setEleventhAnswer('C')}/>
            <Label htmlFor="option-fiftythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyfour" id="option-fiftyfour"  onClick={()=>setEleventhAnswer('D')}/>
            <Label htmlFor="option-fiftyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fiftyfive" id="option-fiftyfive"  onClick={()=>setEleventhAnswer('E')}/>
            <Label htmlFor="option-fiftyfive" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>

        {/*Twelveth question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q12) `}</p>
            <p>How much do you value having flexible working hourse or the ability to take time off when needed ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fiftysix" id="option-fiftysix"  onClick={()=>setTwelvethAnswer('A')}/>
            <Label htmlFor="option-fiftysix" className='  hover:text-red-700 hover:cursor-pointer'>Not important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyseven" id="option-fiftyseven"  onClick={()=>setTwelvethAnswer('B')}/>
            <Label htmlFor="option-fiftyseven" className='  hover:text-red-600/75 hover:cursor-pointer'>Slightly important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyeigth" id="option-fiftyeigth"  onClick={()=>setTwelvethAnswer('C')}/>
            <Label htmlFor="option-fiftyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Moderately important</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftynine" id="option-fiftynine"  onClick={()=>setTwelvethAnswer('D')}/>
            <Label htmlFor="option-fiftynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Very important</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-sixty" id="option-sixty"  onClick={()=>setTwelvethAnswer('E')}/>
            <Label htmlFor="option-sixty" className=' hover:text-green-700 hover:cursor-pointer'>Extremely important</Label>
            </div>
        </RadioGroup>
        </li>
    </ol>

    <Button onClick={()=>onSubmit()} className=' w-full mt-5'>
            {
                next ? <div className=' flex flex-row gap-2'>
                <Loader2 className=' h-6 w-6 animate-spin'/>
               </div> : <div className=' flex flex-row gap-2'>
                  <p>Finish</p>
               </div>
            }
        </Button>


    <Dialog open={isOpen}>
      <DialogContent className=' bg-white/50'>
         <DialogHeader>
            <DialogTitle className=' font-semibold text-lg'>You have not answered all the questions</DialogTitle>
            <DialogDescription className=' text-md text-zinc-900'>
              Please answer all the questions before submitting
            </DialogDescription>
         </DialogHeader>
         <DialogFooter className="sm:justify-start">
          <DialogClose asChild className=' mt-2'>
            <Button type="button"  onClick={()=>setIsOpen(false)}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      </Dialog>
    </MaxWidthWrapper>
  )
}

export default ValueAssesment