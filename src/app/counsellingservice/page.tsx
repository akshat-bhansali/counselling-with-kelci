import CarrPlan from '@/components/CarrPlan'
import ClassGuid from '@/components/ClassGuid'
import CrisisPlan from '@/components/CrisisPlan'
import IndiGroup from '@/components/IndiGroup'
import Role from '@/components/Role'
import React from 'react'

function page() {
  return (
    <div>
      <Role />
      <IndiGroup />
      <ClassGuid />
      <CarrPlan />
      <CrisisPlan />
    </div>
  )
}

export default page
