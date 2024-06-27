'use client'
import React, { useState } from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import { trpc } from '../_trpc/client'

const TextPageComponent = () => {
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

  const {mutate:createInterestInventory}=trpc.createInerestInvetory.useMutation()


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
            <RadioGroupItem value="option-one" id="option-one"  onClick={()=>setFirstAnswer('A')}/>
            <Label htmlFor="option-one">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two"  onClick={()=>setFirstAnswer('B')}/>
            <Label htmlFor="option-two">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three"  onClick={()=>setFirstAnswer('C')}/>
            <Label htmlFor="option-three">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four"  onClick={()=>setFirstAnswer('D')}/>
            <Label htmlFor="option-four">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-five" id="option-five"  onClick={()=>setFirstAnswer('E')}/>
            <Label htmlFor="option-five">Very Much</Label>
            </div>
        </RadioGroup>
        </li>     
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q2) `}</p>
            <p>How interested are you in conducting research and experiments ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-six" id="option-six"  onClick={()=>setSecondAnswer('A')}/>
            <Label htmlFor="option-six">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-seven" id="option-seven"  onClick={()=>setSecondAnswer('B')}/>
            <Label htmlFor="option-seven">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-eigth" id="option-eigth"  onClick={()=>setSecondAnswer('C')}/>
            <Label htmlFor="option-eigth">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-nine" id="option-nine"  onClick={()=>setSecondAnswer('D')}/>
            <Label htmlFor="option-nine">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-ten" id="option-ten"  onClick={()=>setSecondAnswer('E')}/>
            <Label htmlFor="option-ten">Very Much</Label>
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
            <RadioGroupItem value="option-eleven" id="option-eleven"  onClick={()=>setThirdAnswer('A')}/>
            <Label htmlFor="option-eleven">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twelve" id="option-twelve"  onClick={()=>setThirdAnswer('B')}/>
            <Label htmlFor="option-twelve">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirteen" id="option-thirteen"  onClick={()=>setThirdAnswer('C')}/>
            <Label htmlFor="option-thirteen">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourteen" id="option-fourteen"  onClick={()=>setThirdAnswer('D')}/>
            <Label htmlFor="option-fourteen">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fifteen" id="option-fifteen"  onClick={()=>setThirdAnswer('E')}/>
            <Label htmlFor="option-fifteen">Very Much</Label>
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
            <RadioGroupItem value="option-sixteen" id="option-sixteen"  onClick={()=>setFourthAnswer('A')}/>
            <Label htmlFor="option-sixteen">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-seventeen" id="option-seventeen"  onClick={()=>setFourthAnswer('B')}/>
            <Label htmlFor="option-seventeen">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-eigthteen" id="option-eigthteen"  onClick={()=>setFourthAnswer('C')}/>
            <Label htmlFor="option-eigthteen">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-nineteen" id="option-nineteen"  onClick={()=>setFourthAnswer('D')}/>
            <Label htmlFor="option-nineteen">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-twnety" id="option-twenty"  onClick={()=>setFourthAnswer('E')}/>
            <Label htmlFor="option-twenty">Very Much</Label>
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
            <RadioGroupItem value="option-twentyone" id="option-twentyone"  onClick={()=>setFifthAnswer('A')}/>
            <Label htmlFor="option-twentyone">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentytwo" id="option-twentytwo"  onClick={()=>setFifthAnswer('B')}/>
            <Label htmlFor="option-twentytwo">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentythree" id="option-twentythree"  onClick={()=>setFifthAnswer('C')}/>
            <Label htmlFor="option-twentythree">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyfour" id="option-twentyfour"  onClick={()=>setFifthAnswer('D')}/>
            <Label htmlFor="option-twentyfour">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-twnetyfive" id="option-twentyfive"  onClick={()=>setFifthAnswer('E')}/>
            <Label htmlFor="option-twentyfive">Very Much</Label>
            </div>
        </RadioGroup>
        </li>     
        

        {/*Sixth Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q6) `}</p>
            <p>How much do you enjoy tasks that involve organizing data or filesents ? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-twentysix" id="option-twentysix"  onClick={()=>setSixthAnswer('A')}/>
            <Label htmlFor="option-twentysix">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyseven" id="option-twentyseven"  onClick={()=>setSixthAnswer('B')}/>
            <Label htmlFor="option-twentyseven">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentyeigth" id="option-twentyeigth"  onClick={()=>setSixthAnswer('C')}/>
            <Label htmlFor="option-twentyeigth">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-twentynine" id="option-twentynine"  onClick={()=>setSixthAnswer('D')}/>
            <Label htmlFor="option-twentynine">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-thirty" id="option-thirty"  onClick={()=>setSixthAnswer('E')}/>
            <Label htmlFor="option-thirty">Very Much</Label>
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
            <RadioGroupItem value="option-thirtyone" id="option-thirtyone"  onClick={()=>setSeventhAnswer('A')}/>
            <Label htmlFor="option-thirtyone">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtytwo" id="option-thirtytwo"  onClick={()=>setSeventhAnswer('B')}/>
            <Label htmlFor="option-thirtytwo">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtythree" id="option-thirtythree"  onClick={()=>setSeventhAnswer('C')}/>
            <Label htmlFor="option-thirtythree">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyfour" id="option-thirtyfour"  onClick={()=>setSeventhAnswer('D')}/>
            <Label htmlFor="option-thirtyfour">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-thirtyfive" id="option-thirtyfive"  onClick={()=>setSeventhAnswer('E')}/>
            <Label htmlFor="option-thirtyfive">Very Much</Label>
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
            <RadioGroupItem value="option-thirtysix" id="option-thirtysix"  onClick={()=>setEigthAnswer('A')}/>
            <Label htmlFor="option-thirtysix">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyseven" id="option-thirtyseven"  onClick={()=>setEigthAnswer('B')}/>
            <Label htmlFor="option-thirtyseven">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtyeigth" id="option-thirtyeigth"  onClick={()=>setEigthAnswer('C')}/>
            <Label htmlFor="option-thirtyeigth">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-thirtynine" id="option-thirtynine"  onClick={()=>setEigthAnswer('D')}/>
            <Label htmlFor="option-thirtynine">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fourty" id="option-fourty"  onClick={()=>setEigthAnswer('E')}/>
            <Label htmlFor="option-fourty">Very Much</Label>
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
            <RadioGroupItem value="option-fourtyone" id="option-fourtyone"  onClick={()=>setNinthAnswer('A')}/>
            <Label htmlFor="option-fourtyone">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtytwo" id="option-fourtytwo"  onClick={()=>setNinthAnswer('B')}/>
            <Label htmlFor="option-fourtytwo">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtythree" id="option-fourtythree"  onClick={()=>setNinthAnswer('C')}/>
            <Label htmlFor="option-fourtythree">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyfour" id="option-fourtyfour"  onClick={()=>setNinthAnswer('D')}/>
            <Label htmlFor="option-fourtyfour">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fourtyfive" id="option-fourtyfive"  onClick={()=>setNinthAnswer('E')}/>
            <Label htmlFor="option-fourtyfive">Very Much</Label>
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
            <RadioGroupItem value="option-fourtysix" id="option-fourtysix"  onClick={()=>setTenthAnswer('A')}/>
            <Label htmlFor="option-fourtysix">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyseven" id="option-fourtyseven"  onClick={()=>setTenthAnswer('B')}/>
            <Label htmlFor="option-fourtyseven">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtyeigth" id="option-fourtyeigth"  onClick={()=>setTenthAnswer('C')}/>
            <Label htmlFor="option-fourtyeigth">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fourtynine" id="option-fourtynine"  onClick={()=>setTenthAnswer('D')}/>
            <Label htmlFor="option-fourtynine">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fifty" id="option-fifty"  onClick={()=>setTenthAnswer('E')}/>
            <Label htmlFor="option-fifty">Very Much</Label>
            </div>
        </RadioGroup>
        </li>     

        {/*Eleventh Question */}
        <li>
         <div className=' flex flex-row gap-2  font-semibold text-lg text-black'>
            <p>{`Q11) `}</p>
            <p>Do you enjoy persuading others to see your point of view? </p>
         </div>
         <RadioGroup className=' flex flex-col ml-6 mt-3 ' color='black' required>
            <div className="flex items-center space-x-2 text-lg">
            <RadioGroupItem value="option-fiftyone" id="option-fiftyone"  onClick={()=>setEleventhAnswer('A')}/>
            <Label htmlFor="option-fiftyone">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftytwo" id="option-fiftytwo"  onClick={()=>setEleventhAnswer('B')}/>
            <Label htmlFor="option-fiftytwo">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftythree" id="option-fiftythree"  onClick={()=>setEleventhAnswer('C')}/>
            <Label htmlFor="option-fiftythree">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyfour" id="option-fiftyfour"  onClick={()=>setEleventhAnswer('D')}/>
            <Label htmlFor="option-fiftyfour">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-fiftyfive" id="option-fiftyfive"  onClick={()=>setEleventhAnswer('E')}/>
            <Label htmlFor="option-fiftyfive">Very Much</Label>
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
            <RadioGroupItem value="option-fiftysix" id="option-fiftysix"  onClick={()=>setTwelvethAnswer('A')}/>
            <Label htmlFor="option-fiftysix">Not at all</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyseven" id="option-fiftyseven"  onClick={()=>setTwelvethAnswer('B')}/>
            <Label htmlFor="option-fiftyseven">A little</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftyeigth" id="option-fiftyeigth"  onClick={()=>setTwelvethAnswer('C')}/>
            <Label htmlFor="option-fiftyeigth">Somewhat</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-fiftynine" id="option-fiftynine"  onClick={()=>setTwelvethAnswer('D')}/>
            <Label htmlFor="option-fiftynine">Quite a bit</Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RadioGroupItem value="option-sixty" id="option-sixty"  onClick={()=>setTwelvethAnswer('E')}/>
            <Label htmlFor="option-sixty">Very Much</Label>
            </div>
        </RadioGroup>
        </li>
      </ol>
      <Button className='w-full mt-5' onClick={()=>createInterestInventory({
        answerOne:firstAnswer ? firstAnswer : 'A',
        answerTwo:secondAnswer ? secondAnswer : 'A',
        answerThree:thirdAnswer ? thirdAnswer : 'A',
        answerFour:fourthAnswer ? fourthAnswer : 'A',
        answerFive:fifthAnswer ? fifthAnswer : 'A',
        answerSix:sixthAnswer  ? sixthAnswer : 'A',
        answerSeven:seventhAnswer ? seventhAnswer : 'A',
        answerEight:eigthAnswer ? eigthAnswer : 'A',
        answerNine:ninthAnswer ? ninthAnswer : 'A',
        answerTen:tenthAnswer ? tenthAnswer : 'A',
        answerEleven:eleventhAnswer ? eleventhAnswer : 'A',
        answerTwelve:twelvethAnswer ? twelvethAnswer : 'A',
      })}>Submit</Button>
    </div>
     
       
  </MaxWidthWrapper>
  )
}

export default TextPageComponent