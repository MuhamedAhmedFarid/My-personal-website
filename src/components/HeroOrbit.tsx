import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export default function HeroOrbit({
  children,
  size,
  rotation,
  orbit = false,
  orbitDuration,
  spin = false,
  spinDuration
}: PropsWithChildren<{ size: number, rotation: number, orbitDuration?: string, orbit?: boolean, spin?: boolean, spinDuration?: string }>) {
  return (
    <div>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className={twMerge(orbit === true && 'animate-spin')} style={{
          animationDuration: orbitDuration
        }}>
          <div
            className='flex justify-start items-start'
            style={{
              transform: `rotate(${rotation}deg)`,
              height: `${size}px`,
              width: `${size}px`
            }}
          >
            <div className={twMerge(spin === true && 'animate-spin')} style={{
              animationDuration: spinDuration
            }}>
              <div
                style={{ transform: `rotate(${rotation * -1}deg)` }}
                className=' inline-flex'>
                {children}

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
