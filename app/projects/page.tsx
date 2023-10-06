import MadeUpSalon from './madeupsalon'
import ImaginaryJam from './imaginaryjam'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <>
      <div className="relative isolate overflow-y-hidden pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-dancing text-4xl tracking-tight text-gray-900 sm:text-6xl">
                Portfolio Showcase
              </h1>
              <p className="font-cabin mt-6 text-lg leading-8 text-gray-600">
                Welcome to my portfolio showcase, where I present my ongoing
                work in the world of web development. Each project is a living
                document, continually evolving as I refine and enhance my
                skills. Check out the repository for this site by clicking the
                button below, or visit my GitHub profile to see my open source
                contributions and upcoming projects.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://github.com/picklebrownie/my-portfolio"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="font-cabin rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition  duration-300 ease-in-out hover:scale-110 hover:bg-gray-50 "
                  >
                    Repository
                  </button>
                </a>
                <a href="https://github.com/picklebrownie" target="_blank">
                  <button
                    type="button"
                    className="font-dancing rounded-full bg-gradient-to-tr from-purple-600 to-pink-300 px-6 py-6 text-xl font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:scale-110 hover:bg-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 "
                  >
                    My GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden lg:overflow-visible">
        <div className="overflow-hidden py-24 sm:py-32">
          <MadeUpSalon />
        </div>
        <div
          className="pointer-events-none absolute top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-y-hidden blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
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
      <div className="relative isolate z-0 py-24 sm:py-32">
        <ImaginaryJam />
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute bottom-0 z-20 -mb-48 w-screen">
          <Footer
            textColor="neutral-800"
            iconColor="neutral-800"
            iconHoverColor="neutral-950"
          />
        </div>
      </div>
    </>
  )
}
