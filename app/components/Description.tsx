import React from 'react'


interface DescriptionProps {
    title: string;
    description: string;
}

const Description = ({title,description}:DescriptionProps) => {

  return (
    <div>
        <h1 className=' font-semibold text-4xl mb-5'>Science and Research</h1>
        <h2 className=' font-bold text-xl'>{`1.${title}`}</h2>
        <p className=' mt-5 text-lg'>
        <span className=' font-bold'>Description : </span>
        <span className=' font-mono'>
        {description}
        </span>
        </p>
    </div>
  )
}

export default Description