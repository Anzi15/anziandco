"use client"
import React, { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {
  children: ReactNode
}

const TiltWrapper = ({ children }: Props) => {
  return (
    <Tilt perspective={2000000} transitionSpeed={900} className="">
      {/* Only render the children */}
        {children}
    </Tilt>
  )
}

export default TiltWrapper
