import PromGradRates from '@/components/PromGradRates'
import SchoolPlan from '@/components/SchoolPlan'
import React from 'react'

function page() {
  return (
    <div className='flex items-center pb-24 pt-4'>
      <PromGradRates />
      <SchoolPlan />
    </div>
  )
}

export default page
