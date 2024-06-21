'use client'
import { trpc } from '@/app/_trpc/client'
import React from 'react'

const page = () => {
  const {data,isLoading}=trpc.test.useQuery()
  return (
    <div>{data}</div>
  )
}

export default page