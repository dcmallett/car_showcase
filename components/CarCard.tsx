'use client'

import { useState } from "react"
import Image from 'next/image'
import { CarProps } from "@/types"
import { calculateCarRent } from "@/utils"

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car

  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-2xl font-extrabold">
        <span className="self-start text-sm font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-sm font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" alt="car model" fill priority className="object-contain" />
      </div>

      {/*look into refactoring this later  */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-sm">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
        </div>
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="tire" />
              <p className="text-sm">
                {drive.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="gas" />
              <p className="text-sm">
                {city_mpg} MPG
              </p>
            </div>
        </div>
        {/* custom button for modal here */}
      </div>
    </div>

  )
}

export default CarCard
