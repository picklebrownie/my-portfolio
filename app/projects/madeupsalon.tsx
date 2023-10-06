import Image from 'next/image'
import { ScissorsIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Premise-',
    description:
      'A digital journey into a charming small-town salon. Explore this Made-Up Salon through a beautiful and thoughtful UI designed to provide information and invite users to book an appointment.',
    icon: ScissorsIcon,
  },
  {
    name: 'Technologies-',
    description:
      'Built with Next.js, TypeScript, and Tailwind CSS, hosted on Vercel.',
    icon: CheckBadgeIcon,
  },
]

export default function MadeUpSalon() {
  return (
    <div className="relative isolate bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-dancing text-base text-xl font-semibold leading-7 text-yellow-700">
                TypeScript
              </h2>
              <p className="font-arvo mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Made-Up Salon
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="font-dancing inline text-xl font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-yellow-700"
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
                  href="https://github.com/picklebrownie/next-made-up-salon"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="font-cabin rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition  duration-300 ease-in-out hover:scale-110 hover:bg-gray-50 "
                  >
                    Repository
                  </button>
                </a>
                <a href="https://made-up-salon.vercel.app/" target="_blank">
                  <button
                    type="button"
                    className="font-dancing rounded-full bg-yellow-700 px-4 py-2.5 text-lg font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:scale-110 hover:bg-yellow-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700 "
                  >
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <a href="https://made-up-salon.vercel.app/" target="_blank">
            <Image
              src="/made-up-salon.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none transform rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg:transition lg:duration-300 lg:ease-in-out lg:hover:scale-110"
              width={2432}
              height={1442}
            />
          </a>
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
