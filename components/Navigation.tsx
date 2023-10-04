'use client'

import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { socials } from '../utils/socials'

const navigation = [
  { name: 'About Me', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'Eduaction', href: '#', current: false },
  { name: 'Publications', href: '#', current: false },
  { name: 'Presentations', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export enum ScrollDirection {
  up = 'up',
  down = 'down',
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const threshold = 60
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up)

  useEffect(() => {
    let previousScrollYPosition = window.scrollY

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

    const updateScrollDirection = () => {
      console.log('open', open)
      if (open) {
        console.log('scroll on open', scrollDir)
        return
      }
      const currentScrollYPosition = window.scrollY

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirection.down
          : ScrollDirection.up
        setScrollDir(newScrollDirection)
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0
      }
    }

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    console.log(scrollDir)
  }, [scrollDir])

  return (
    <>
      <nav className="z-20">
        <div
          className={classNames(
            open
              ? 'left-44 top-4'
              : scrollDir === 'up'
              ? 'left-4 top-4'
              : '-top-16 left-4',
            'fixed z-30 scroll-mt-8 transition-all duration-700 ease-in-out'
          )}
        >
          {/* Mobile menu button*/}
          <button
            onClick={() => setOpen(!open)}
            className="relative inline-flex items-center justify-center rounded-none border-0 p-2 text-gray-500 outline-none ring-0 transition duration-300 ease-in-out hover:text-gray-900"
          >
            {/* <span className="absolute" /> */}
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={classNames(
            open ? 'left-0' : '-left-48',
            'fixed top-0 z-20 h-full bg-gradient-to-t from-purple-300 to-purple-50 transition-all duration-700 ease-in-out'
          )}
        >
          <div className="flex h-full flex-col justify-between space-y-1 pb-3 pl-4 pr-8 pt-4">
            <div>
              <div className="pb-2 font-caveat text-4xl">Something</div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-purple-600'
                      : 'text-black hover:text-purple-600',
                    'block rounded-md px-4 py-2 font-antic text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col pl-2">
              <div className="font-antic">Your developer,</div>
              <div className="drop-shadow-purple-600 flex -rotate-6 justify-end pb-8 pr-2 font-caveat text-2xl">
                Kayla
              </div>
              <div className="flex justify-center space-x-4 md:order-2">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-purple-400 hover:text-purple-800"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon
                      className="h-6 w-6 transition duration-300 ease-in-out hover:scale-125"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
