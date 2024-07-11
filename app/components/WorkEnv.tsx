import React from 'react'

interface WorkEnvProps {
    settingDescription: string;
    scheduleDescription: string;
    interactionDescription: string;
}

const WorkEnv = ({settingDescription,scheduleDescription,interactionDescription}:WorkEnvProps) => {
  return (
    <div>
        <p className=' mt-5 text-xl font-bold mb-2'> Work Enviornment :</p>
        <ul className=' mt-1 ml-8 list-disc gap-2 font-mono '>
            <li className=' mt-1'>
                <span className=' font-bold'>Settings : </span>
                {settingDescription}
            </li>

            <li className=' mt-1'>
                <span className=' font-bold'>Schedule : </span>
                {scheduleDescription}
            </li>

            <li className=' mt-1'>
                <span className=' font-bold'>Interaction : </span>
                {interactionDescription}
            </li>

        </ul>
    </div>
  )
}

export default WorkEnv