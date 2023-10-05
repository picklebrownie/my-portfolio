import Image from 'next/image'
import {
  ScissorsIcon,
  CheckBadgeIcon,
  MusicalNoteIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Premise.',
    description:
      'A vibrant landing page with downloadable flyers for an Imaginary Jam - a one time only pop up festival that exists only in our minds.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Technologies Used.',
    description: 'Developed in React, powered by Vite, and hosted on Vercel.',
    icon: CheckBadgeIcon,
  },
]

export default function ImaginaryJam() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-dancing text-base text-xl font-semibold leading-7 text-purple-700">
                JavaScript
              </h2>
              <p className="font-arvo mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Imaginary Jam
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="font-dancing inline text-xl font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-purple-700"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="font-cabin inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-12 flex w-full max-w-xl flex-row justify-start space-x-4">
                <a
                  href="https://github.com/picklebrownie/vite-imaginary-jam"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="font-cabin rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition  duration-300 ease-in-out hover:scale-110 hover:bg-gray-50 "
                  >
                    Repository
                  </button>
                </a>
                <a
                  href="https://vite-imaginary-jam.vercel.app/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="font-dancing rounded-full bg-purple-700 px-4 py-2.5 text-lg font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:scale-110 hover:bg-purple-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 "
                  >
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <a href="https://vite-imaginary-jam.vercel.app/" target="_blank">
              <Image
                src="/imaginary-jam.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none transform rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg:transition lg:duration-300 lg:ease-in-out lg:hover:scale-110"
                width={2432}
                height={1442}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ImaginaryJam2() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}