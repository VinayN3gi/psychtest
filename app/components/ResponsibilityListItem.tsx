import React from 'react'

interface ResponsibilityListItemProps {
    title: string;
    itemList: string[];
}

const ResponsibilityListItem = ({title,itemList}:ResponsibilityListItemProps) => {
  return (
    <div>
        <span className=' font-bold text-lg'>{title}</span>
        <ul className='list-decimal ml-4 text-md font-mono mt-1  gap-2'>
            {itemList.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ResponsibilityListItem