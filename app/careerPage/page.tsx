import React from 'react'
import { MaxWidthWrapper } from '../components/MaxWidthWrapper'
import WorkEnv from '../components/WorkEnv'
import EducationComponent from '../components/EducationComponent'
import Description from '../components/Description'
import Pros from '../components/Pros'
import Cons from '../components/Cons'
import Tags from '../components/Tags'
import ResponsibilityListItem from '../components/ResponsibilityListItem'
import Professor from '../components/careerComponents/Professor'


const page = () => {
  return (
    <MaxWidthWrapper>
      <Professor/>
    </MaxWidthWrapper>
  )
}

export default page