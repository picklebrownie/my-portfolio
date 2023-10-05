'use client'

import M from './icons/M'
import A from './icons/A'
import R from './icons/R'
import Y from './icons/Y'
import V from './icons/V'
import I from './icons/I'
import L from './icons/L'
import L2 from './icons/L2'
import E from './icons/E'
import C from './icons/C'
import O from './icons/O'
import G from './icons/G'
import CardFlip from './components/CardFlip'
import Image from 'next/image'

export default function Education() {
  return (
    <>
      <div className="md:bg-anderson-tower bg-anderson-tower-mobile fixed top-0 z-0 h-screen w-screen flex-col justify-center bg-cover bg-center bg-no-repeat"></div>
      <div className="fixed top-0 z-0 h-screen w-screen flex-col justify-center bg-white/75 bg-cover bg-center bg-no-repeat"></div>
      <div className="flex h-full w-full flex-col justify-center pt-16 lg:mt-0 lg:h-screen">
        <div className="flex flex-col items-center justify-center px-16 sm:flex-row">
          <CardFlip
            CardFront={<M />}
            CardBack={
              <>
                <span className="font-caveat">double major</span>
                <span className="font-antic">Computer Science</span>
                <span className="font-caveat">and</span>
                <span className="font-antic">Mathematics</span>
              </>
            }
          />
          <CardFlip
            CardFront={<A />}
            CardBack={
              <>
                <span className="font-antic">Bonner Scholars</span>
                <span className="font-caveat">member</span>
              </>
            }
          />
          <CardFlip
            CardFront={<R />}
            CardBack={
              <>
                <span className="font-caveat">studied</span>
                <span className="font-antic">software</span>
                <span className="font-antic">development</span>
                <span className="font-antic">lifecyles</span>
              </>
            }
          />
          <CardFlip
            CardFront={<Y />}
            CardBack={
              <>
                <span className="font-antic">Student</span>
                <span className="font-antic">Activities Office</span>
                <span className="font-caveat">member</span>
              </>
            }
          />
          <CardFlip
            CardFront={<V />}
            CardBack={
              <>
                <span className="font-caveat">studied</span>
                <span className="font-antic">PHP</span>
                <span className="font-caveat">and</span>
                <span className="font-antic">SQL</span>
              </>
            }
          />
          <CardFlip
            CardFront={<I />}
            CardBack={
              <>
                <span className="font-caveat">set a</span>
                <span className="font-antic">strong foundation</span>
                <span className="font-caveat">for career in</span>
                <span className="font-antic">software</span>
                <span className="font-antic">development</span>
              </>
            }
          />
          <CardFlip
            CardFront={<L />}
            CardBack={
              <>
                <span className="font-antic">Computer</span>
                <span className="font-antic">Programming</span>
                <span className="font-antic">Team</span>
                <span className="font-caveat">member</span>
              </>
            }
          />
          <CardFlip
            CardFront={<L />}
            CardBack={
              <>
                <span className="font-caveat">soft skills</span>
                <span className="font-antic text-base">adaptability</span>
                <span className="font-antic text-base">networking</span>
                <span className="font-antic text-base">communication</span>
                <span className="font-antic text-base">problem-solving</span>
              </>
            }
          />
          <CardFlip
            CardFront={<E />}
            CardBack={
              <>
                <span className="font-caveat">studied</span>
                <span className="font-antic">C++</span>
                <span className="font-caveat">and</span>
                <span className="font-antic">Java</span>
              </>
            }
          />
        </div>

        <div className="flex flex-col justify-center px-16 sm:flex-row">
          <CardFlip
            CardFront={<C />}
            CardBack={
              <>
                <span className="font-antic">Concert Choir</span>
                <span className="font-caveat">member</span>
              </>
            }
          />
          <CardFlip
            CardFront={<O />}
            CardBack={
              <>
                <span className="font-caveat">studied</span>
                <span className="pb-2 font-antic text-base">
                  mathematical modeling
                </span>
                <span className="pb-2 font-antic text-base">
                  advanced calculus
                </span>
                <span className="pb-2 font-antic text-base">statistics</span>
                <span className="font-antic text-base">
                  mathematical proofing
                </span>
              </>
            }
          />
          <CardFlip
            CardFront={<L />}
            CardBack={
              <>
                <span className="font-antic">Residential</span>
                <span className="font-antic">Housing</span>
                <span className="font-antic">Association</span>
                <span className="font-caveat">member</span>
              </>
            }
          />
          <CardFlip
            CardFront={<L />}
            CardBack={
              <>
                <span className="font-caveat">studied</span>
                <span className="font-antic text-base">algorithm design</span>
                <span className="pb-2 font-antic text-base">and analysis</span>
                <span className="pb-2 font-antic text-base">
                  computer architecture
                </span>
                <span className="font-antic text-base">user interfaces</span>
              </>
            }
          />
          <CardFlip
            CardFront={<E />}
            CardBack={
              <>
                {/* <div className="h-full px-8">
                  <Image
                    alt="AUI Logo."
                    style={{ objectFit: 'contain' }}
                    fill
                    src="/AUI-Logo.png"
                  />
                </div> */}
                <span className="font-caveat">study abroad</span>
                <span className="font-antic">Morocco</span>
              </>
            }
          />
          <CardFlip
            CardFront={<G />}
            CardBack={
              <>
                <span className="font-antic">Student</span>
                <span className="font-antic">Government</span>
                <span className="font-antic">Association</span>
                <span className="font-caveat">member</span>
              </>
            }
          />
          <CardFlip
            CardFront={<E />}
            CardBack={
              <>
                <span className="font-caveat">studied</span>
                <span className="font-antic">Relational</span>
                <span className="font-antic">Database</span>
                <span className="font-antic">Management</span>
                <span className="font-antic">Systems</span>
              </>
            }
          />
        </div>
      </div>
    </>
  )
}
