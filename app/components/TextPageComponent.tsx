'use client'
import React, { useState } from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import { trpc } from '../_trpc/client'
import { useRouter } from 'next/navigation'
import { Contact, Loader2 } from 'lucide-react'
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import ContactInfo from './ContactInfo'

const TextPageComponent = () => {
  const router=useRouter();
  const [firstAnswer, setFirstAnswer] = useState<number>()
  const [secondAnswer, setSecondAnswer] = useState<number>()
  const [thirdAnswer, setThirdAnswer] = useState<number>()
  const [fourthAnswer, setFourthAnswer] = useState<number>()
  const [fifthAnswer, setFifthAnswer] = useState<number>()
  const [sixthAnswer, setSixthAnswer] = useState<number>()
  const [seventhAnswer, setSeventhAnswer] = useState<number>()
  const [eigthAnswer, setEigthAnswer] = useState<number>()
  const [ninthAnswer, setNinthAnswer] = useState<number>()
  const [tenthAnswer, setTenthAnswer] = useState<number>()
  const [eleventhAnswer, setEleventhAnswer] = useState<number>()
  const [twelvethAnswer, setTwelvethAnswer] = useState<number>()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [next, setNext] = useState<boolean>(false)


  const {mutate:createInterestInventory}=trpc.createInerestInvetory.useMutation({
    onSuccess:()=>{
      router.push('/testPage2')
    }
  })

  const handleSubmit=()=>{
      if(!firstAnswer || !secondAnswer || !thirdAnswer || !fourthAnswer || !fifthAnswer || !sixthAnswer || !seventhAnswer || !eigthAnswer || !ninthAnswer || !tenthAnswer || !eleventhAnswer || !twelvethAnswer)
       {
         setIsOpen(true)
         return
       }

      setNext(true)    
      createInterestInventory({
        answerOne:firstAnswer,
        answerTwo:secondAnswer ? secondAnswer : 1,
        answerThree:thirdAnswer ? thirdAnswer : 1,
        answerFour:fourthAnswer ? fourthAnswer : 1,
        answerFive:fifthAnswer ? fifthAnswer : 1,
        answerSix:sixthAnswer ? sixthAnswer : 1,
        answerSeven:seventhAnswer ? seventhAnswer : 1,
        answerEight:eigthAnswer ? eigthAnswer : 1,
        answerNine:ninthAnswer ? ninthAnswer : 1,
        answerTen:tenthAnswer ? tenthAnswer : 1,
        answerEleven:eleventhAnswer ? eleventhAnswer : 1,
        answerTwelve:twelvethAnswer ? twelvethAnswer : 1,
      })
    
  }


  return (
    <MaxWidthWrapper className=' mx-auto '>
    <div className='mx-auto mb-6 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200  bg-white px-7 py-2 shadow-md  backdrop-blur transition-all hover:border-gray-300 hover:bg-white/30 '>
       <p className=' text-sm font-semibold text-gray-700'>
            Interest Inventory 
       </p>
    </div>
    <div className=' mt-5 mb-5 border-b-2  border-zinc-500'>
      <h1 className=' text-3xl font-bold text-gray-700'>Interest Inventory</h1>
      <p className=' text-gray-600 text-xl mb-3 mt-2'>Answer the following questions to the best of your ability</p>
    </div>
    <div>
      <ol>
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q1) `}</p>
            <p>Do you enjoy working with machinery and tools </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-one" id="option-one"  onClick={()=>setFirstAnswer(1)}/>
            <Label htmlFor="option-one" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two"  onClick={()=>setFirstAnswer(2)}/>
            <Label htmlFor="option-two" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three"  onClick={()=>setFirstAnswer(3)}/>
            <Label htmlFor="option-three" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four"  onClick={()=>setFirstAnswer(4)}/>
            <Label htmlFor="option-four" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-five" id="option-five"  onClick={()=>setFirstAnswer(5)}/>
            <Label htmlFor="option-five" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>

        {
            /**Second question */
        }     
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q2) `}</p>
            <p>How interested are you in conducting research and experiments ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-six" id="option-six"  onClick={()=>setSecondAnswer(1)}/>
            <Label htmlFor="option-six" className='  hover:text-red-700 hover:cursor-pointer' >Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-seven" id="option-seven"  onClick={()=>setSecondAnswer(2)}/>
            <Label htmlFor="option-seven" className='  hover:text-red-600/75 hover:cursor-pointer' >A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-eigth" id="option-eigth"  onClick={()=>setSecondAnswer(3)}/>
            <Label htmlFor="option-eigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-nine" id="option-nine"  onClick={()=>setSecondAnswer(4)}/>
            <Label htmlFor="option-nine" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-ten" id="option-ten"  onClick={()=>setSecondAnswer(5)}/>
            <Label htmlFor="option-ten" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>  

        {/**Third question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q3) `}</p>
            <p>Do you enjoy creating art ,such as painting or writing ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-eleven" id="option-eleven"  onClick={()=>setThirdAnswer(1)}/>
            <Label htmlFor="option-eleven" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twelve" id="option-twelve"  onClick={()=>setThirdAnswer(2)}/>
            <Label htmlFor="option-twelve" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirteen" id="option-thirteen"  onClick={()=>setThirdAnswer(3)}/>
            <Label htmlFor="option-thirteen" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourteen" id="option-fourteen"  onClick={()=>setThirdAnswer(4)}/>
            <Label htmlFor="option-fourteen" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fifteen" id="option-fifteen"  onClick={()=>setThirdAnswer(5)}/>
            <Label htmlFor="option-fifteen" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>   
        {/*Fourth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q4) `}</p>
            <p>How often do you enjoy helping others and volunteering ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-sixteen" id="option-sixteen"  onClick={()=>setFourthAnswer(1)}/>
            <Label htmlFor="option-sixteen" className='  hover:text-red-700 hover: cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-seventeen" id="option-seventeen"  onClick={()=>setFourthAnswer(2)}/>
            <Label htmlFor="option-seventeen" className='  hover:text-red-600/75 hover: cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-eigthteen" id="option-eigthteen"  onClick={()=>setFourthAnswer(3)}/>
            <Label htmlFor="option-eigthteen" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-nineteen" id="option-nineteen"  onClick={()=>setFourthAnswer(4)}/>
            <Label htmlFor="option-nineteen" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-twnety" id="option-twenty"  onClick={()=>setFourthAnswer(5)}/>
            <Label htmlFor="option-twenty" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>     

        {/*Fifth Question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q5) `}</p>
            <p>Do you like leading group projects or organizing events ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-twentyone" id="option-twentyone"  onClick={()=>setFifthAnswer(1)}/>
            <Label htmlFor="option-twentyone" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentytwo" id="option-twentytwo"  onClick={()=>setFifthAnswer(2)}/>
            <Label htmlFor="option-twentytwo" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentythree" id="option-twentythree"  onClick={()=>setFifthAnswer(3)}/>
            <Label htmlFor="option-twentythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyfour" id="option-twentyfour"  onClick={()=>setFifthAnswer(4)}/>
            <Label htmlFor="option-twentyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-twnetyfive" id="option-twentyfive"  onClick={()=>setFifthAnswer(5)}/>
            <Label htmlFor="option-twentyfive" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>     
        

        {/*Sixth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q6) `}</p>
            <p>How much do you enjoy tasks that involve organizing data or files ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-twentysix" id="option-twentysix"  onClick={()=>setSixthAnswer(1)}/>
            <Label htmlFor="option-twentysix" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyseven" id="option-twentyseven"  onClick={()=>setSixthAnswer(2)}/>
            <Label htmlFor="option-twentyseven" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyeigth" id="option-twentyeigth"  onClick={()=>setSixthAnswer(3)}/>
            <Label htmlFor="option-twentyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentynine" id="option-twentynine"  onClick={()=>setSixthAnswer(4)}/>
            <Label htmlFor="option-twentynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-thirty" id="option-thirty"  onClick={()=>setSixthAnswer(5)}/>
            <Label htmlFor="option-thirty" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>     

        {/*Seventh Question */}

        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q7) `}</p>
            <p>Do you prefer working outdoors or with physical objects ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-thirtyone" id="option-thirtyone"  onClick={()=>setSeventhAnswer(1)}/>
            <Label htmlFor="option-thirtyone" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtytwo" id="option-thirtytwo"  onClick={()=>setSeventhAnswer(2)}/>
            <Label htmlFor="option-thirtytwo" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtythree" id="option-thirtythree"  onClick={()=>setSeventhAnswer(3)}/>
            <Label htmlFor="option-thirtythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyfour" id="option-thirtyfour"  onClick={()=>setSeventhAnswer(4)}/>
            <Label htmlFor="option-thirtyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-thirtyfive" id="option-thirtyfive"  onClick={()=>setSeventhAnswer(5)}/>
            <Label htmlFor="option-thirtyfive" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>  
        </RadioGroup>
        </li>     
        

        {/*Eigth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q8) `}</p>
            <p>How often do you seek puzzles or problems to solve for fun ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-thirtysix" id="option-thirtysix"  onClick={()=>setEigthAnswer(1)}/>
            <Label htmlFor="option-thirtysix" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyseven" id="option-thirtyseven"  onClick={()=>setEigthAnswer(2)}/>
            <Label htmlFor="option-thirtyseven" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyeigth" id="option-thirtyeigth"  onClick={()=>setEigthAnswer(3)}/>
            <Label htmlFor="option-thirtyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtynine" id="option-thirtynine"  onClick={()=>setEigthAnswer(4)}/>
            <Label htmlFor="option-thirtynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fourty" id="option-fourty"  onClick={()=>setEigthAnswer(5)}/>
            <Label htmlFor="option-fourty" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>     

        {/*Ninth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q9) `}</p>
            <p>How much do you enjoy performing in front of others,such as acting or playing music ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fourtyone" id="option-fourtyone"  onClick={()=>setNinthAnswer(1)}/>
            <Label htmlFor="option-fourtyone" className=' hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtytwo" id="option-fourtytwo"  onClick={()=>setNinthAnswer(2)}/>
            <Label htmlFor="option-fourtytwo" className='  hover:text-red-600/75 cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtythree" id="option-fourtythree"  onClick={()=>setNinthAnswer(3)}/>
            <Label htmlFor="option-fourtythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyfour" id="option-fourtyfour"  onClick={()=>setNinthAnswer(4)}/>
            <Label htmlFor="option-fourtyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fourtyfive" id="option-fourtyfive"  onClick={()=>setNinthAnswer(5)}/>
            <Label htmlFor="option-fourtyfive" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>     

        {/*Tenth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q10) `}</p>
            <p>How confortable are you working in a team to achieve common goals ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fourtysix" id="option-fourtysix"  onClick={()=>setTenthAnswer(1)}/>
            <Label htmlFor="option-fourtysix" className='  hover:text-red-700 cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyseven" id="option-fourtyseven"  onClick={()=>setTenthAnswer(2)}/>
            <Label htmlFor="option-fourtyseven" className='  hover:text-red-600/75 cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyeigth" id="option-fourtyeigth"  onClick={()=>setTenthAnswer(3)}/>
            <Label htmlFor="option-fourtyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtynine" id="option-fourtynine"  onClick={()=>setTenthAnswer(4)}/>
            <Label htmlFor="option-fourtynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fifty" id="option-fifty"  onClick={()=>setTenthAnswer(5)}/>
            <Label htmlFor="option-fifty" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>     

        {/*Eleventh Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q11) `}</p>
            <p>Do you enjoy persuading others to see your point of view ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fiftyone" id="option-fiftyone"  onClick={()=>setEleventhAnswer(1)}/>
            <Label htmlFor="option-fiftyone" className='  hover:text-red-700 cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftytwo" id="option-fiftytwo"  onClick={()=>setEleventhAnswer(2)}/>
            <Label htmlFor="option-fiftytwo" className='  hover:text-red-600/75 cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftythree" id="option-fiftythree"  onClick={()=>setEleventhAnswer(3)}/>
            <Label htmlFor="option-fiftythree" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyfour" id="option-fiftyfour"  onClick={()=>setEleventhAnswer(4)}/>
            <Label htmlFor="option-fiftyfour" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fiftyfive" id="option-fiftyfive"  onClick={()=>setEleventhAnswer(5)}/>
            <Label htmlFor="option-fiftyfive" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li> 

        {/*Twelveth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q12) `}</p>
            <p>How much often do you like following a structured routine ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fiftysix" id="option-fiftysix"  onClick={()=>setTwelvethAnswer(1)}/>
            <Label htmlFor="option-fiftysix" className='  hover:text-red-700 hover:cursor-pointer'>Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyseven" id="option-fiftyseven"  onClick={()=>setTwelvethAnswer(2)}/>
            <Label htmlFor="option-fiftyseven" className='  hover:text-red-600/75 hover:cursor-pointer'>A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyeigth" id="option-fiftyeigth"  onClick={()=>setTwelvethAnswer(3)}/>
            <Label htmlFor="option-fiftyeigth" className=' hover:text-green-600/50 hover:cursor-pointer '>Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftynine" id="option-fiftynine"  onClick={()=>setTwelvethAnswer(4)}/>
            <Label htmlFor="option-fiftynine" className=' hover:text-green-600/90 hover:cursor-pointer'>Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-sixty" id="option-sixty"  onClick={()=>setTwelvethAnswer(5)}/>
            <Label htmlFor="option-sixty" className=' hover:text-green-700 hover:cursor-pointer'>Very Much</Label>
            </div>
        </RadioGroup>
        </li>
      </ol>
      <Button className='w-full mt-5' onClick={()=>handleSubmit()}>
         {
             next ? <div className=' flex flex-row gap-2'>
                <Loader2 className=' h-6 w-6 animate-spin'/>
             </div> : <div className=' flex flex-row gap-2'>
                <p>Next</p>
             </div>
         }
         </Button>
    </div>
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
       
       <ContactInfo/>
  </MaxWidthWrapper>
  )
}

export default TextPageComponent