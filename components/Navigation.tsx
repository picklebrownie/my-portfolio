'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'About Me', href: '#', current: true },
  { name: 'Experience', href: '#', current: false },
  { name: 'Eduaction', href: '#', current: false },
  { name: 'Publications', href: '#', current: false },
  { name: 'Presentations', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="z-20">
        <div
          className={classNames(
            open ? 'left-36' : 'left-4',
            'fixed top-4 transition-all duration-700 ease-in-out z-30'
          )}
        >
          {/* Mobile menu button*/}
          <button
            onClick={() => setOpen(!open)}
            className="relative inline-flex items-center justify-center rounded-none border-0 p-2 text-gray-500 hover:text-gray-900 transition ease-in-out duration-300 outline-none ring-0"
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
            'fixed h-full transition-all ease-in-out w-48 top-0 duration-700 z-20 bg-gradient-to-t from-purple-300 to-purple-50'
          )}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="flex font-caveat text-4xl">Something</div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? 'text-purple-600'
                    : 'text-black hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium font-antic'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="font-antic">Your developer,</div>
            <div className="font-caveat">Kayla</div>
          </div>
        </div>
      </nav>
    </>
  )
}
