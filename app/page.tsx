'use client'
import Image from 'next/image'
import Bootstrap from '../components/icons/Bootstrap'
import Cake from '../components/icons/Cake'
import Docker from '../components/icons/Docker'
import Git from '../components/icons/Git'
import Javascript from '../components/icons/Javascript'
import Laravel from '../components/icons/Laravel'
import Mysql from '../components/icons/Mysql'
import Next from '../components/icons/Next'
import Php from '../components/icons/Php'
import ReactIcon from '../components/icons/React'
import Tailwind from '../components/icons/Tailwind'
import Vercel from '../components/icons/Vercel'
import Vscode from '../components/icons/Vscode'
import Lightbulb from '../components/icons/Lightbulb'
import DottedFile from '../components/icons/DottedFile'
import Plug from '../components/icons/Plug'
import Application from '../components/icons/Application'
import QuoteIcon from '../components/icons/Quote'

import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const lightbulbAnimationVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0 },
}

function LightbulbAnimation(props: any) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={lightbulbAnimationVariants}
      className="square"
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <Lightbulb width={150} height={150} />
    </motion.div>
  )
}

export default function Home() {
  const lightbulbRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-center">
      <div className="bg-top-right md:max-width-2xl flex w-full flex-col items-center justify-between bg-opacity-50 bg-hanging-plant-mobile bg-contain bg-no-repeat bg-origin-padding md:min-h-screen md:bg-right lg:bg-hanging-plant lg:px-12 xl:px-32">
        <section className="flex flex-col place-items-center items-center justify-between bg-opacity-90 bg-gradient-to-b from-slate-50 to-transparent px-12 pb-32 pt-20 md:min-w-full md:px-0 md:px-24 md:pt-48 lg:bg-transparent lg:from-transparent">
          <h1 className="relative flex pb-24 font-caveat text-6xl md:w-full md:pb-44 md:text-start lg:-ml-12 lg:pb-12 lg:pt-28 lg:text-7xl xl:text-8xl">
            let&apos;s create something
          </h1>

          <div className="flex w-full flex-col items-center justify-between md:flex-row md:gap-24 md:pr-44 lg:items-end lg:justify-start lg:pr-0 xl:gap-40">
            <h2 className="relative mb-44 flex whitespace-nowrap bg-gradient-radial from-slate-50 via-transparent to-transparent pt-8 text-center font-antic text-xl md:mb-0 md:bg-transparent md:from-transparent md:pt-0 md:text-start md:leading-loose">
              Software development is my career. <br />
              People are my passion.
            </h2>

            <button className="button-pink text w-fit font-caveat text-2xl text-white hover:scale-110 focus:scale-110">
              contact me
            </button>
          </div>
        </section>
      </div>

      <section className="relative h-fit w-full md:absolute md:bottom-2 lg:bottom-6 xl:bottom-8">
        <div className="absolute inset-0 flex bg-opacity-70 bg-gradient-radial from-white via-transparent to-transparent">
          {/* background gradient */}
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="relative flex h-fit w-fit animate-marquee gap-4 px-2 opacity-50">
            <Vscode width={72} height={72} className="" />
            <Git width={72} height={72} className="" />
            <Javascript width={72} height={72} className="" />
            <Php width={72} height={72} className="" />
            <Cake width={72} height={72} className="" />
            <Docker width={72} height={72} className="" />
            <Mysql width={72} height={72} className="" />
            <Bootstrap width={72} height={72} className="" />
            <Laravel width={72} height={72} className="" />
            <Tailwind width={72} height={72} className="" />
            <Vercel width={72} height={72} className="" />
            <Next width={72} height={72} className="" />
            <ReactIcon width={72} height={72} className="" />
            <Vscode width={72} height={72} className="" />
            <Git width={72} height={72} className="" />
            <Javascript width={72} height={72} className="" />
            <Php width={72} height={72} className="" />
            <Cake width={72} height={72} className="" />
            <Docker width={72} height={72} className="" />
            <Mysql width={72} height={72} className="" />
            <Bootstrap width={72} height={72} className="" />
            <Laravel width={72} height={72} className="" />
            <Tailwind width={72} height={72} className="" />
            <Vercel width={72} height={72} className="" />
            <Next width={72} height={72} className="" />
            <ReactIcon width={72} height={72} className="" />
          </div>
          <div className="absolute top-0 flex h-fit w-fit animate-marquee2 gap-4 px-2 opacity-50">
            <Vscode width={72} height={72} className="" />
            <Git width={72} height={72} className="" />
            <Javascript width={72} height={72} className="" />
            <Php width={72} height={72} className="" />
            <Cake width={72} height={72} className="" />
            <Docker width={72} height={72} className="" />
            <Mysql width={72} height={72} className="" />
            <Bootstrap width={72} height={72} className="" />
            <Laravel width={72} height={72} className="" />
            <Tailwind width={72} height={72} className="" />
            <Vercel width={72} height={72} className="" />
            <Next width={72} height={72} className="" />
            <ReactIcon width={72} height={72} className="" />
            <Vscode width={72} height={72} className="" />
            <Git width={72} height={72} className="" />
            <Javascript width={72} height={72} className="" />
            <Php width={72} height={72} className="" />
            <Cake width={72} height={72} className="" />
            <Docker width={72} height={72} className="" />
            <Mysql width={72} height={72} className="" />
            <Bootstrap width={72} height={72} className="" />
            <Laravel width={72} height={72} className="" />
            <Tailwind width={72} height={72} className="" />
            <Vercel width={72} height={72} className="" />
            <Next width={72} height={72} className="" />
            <ReactIcon width={72} height={72} className="" />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-between px-8 pb-24 pt-20 lg:gap-6">
        <div className="relative w-fit">
          <LightbulbAnimation className="absolute  -right-6 -z-10 md:right-36 md:top-0" />
          <h2
            className="py-12 font-caveat text-6xl md:leading-10"
            ref={lightbulbRef}
          >
            <span className="md:pr-44">
              Evolve <strong>with</strong> <br />
            </span>
            <span className="md:pl-44">the web</span>
          </h2>
        </div>

        <p className="pb-12 font-antic text-base md:max-w-3xl md:leading-loose">
          Our predecessors used light bulbs and punch cards to pave the way
          towards a beautiful and rich future of secure and cost-effective
          custom web applications. Schedule a consult and we&apos;ll discuss how
          near that future may be for your latest idea or your oldest legacy
          application.
        </p>

        <div className="flex flex-col gap-12 md:max-w-3xl lg:max-w-4xl lg:flex-row">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-slate-50 p-8 px-8 md:flex-row md:items-start md:pl-12 md:pr-16 lg:flex-col lg:items-center lg:px-8">
            <div className="">
              <DottedFile width={72} height={72} />
            </div>
            <div className="flex flex-col items-center justify-between gap-8">
              <h3 className="font-caveat text-2xl font-semibold md:w-full md:text-start lg:w-fit lg:text-center">
                Refactor Legacy PHP
              </h3>
              <p className="font-antic text-base md:w-full md:text-start lg:text-center">
                If your existing web application is outdated or running slow,
                refactoring your code may be the right choice for you. With over
                seven years experience managing and refactoring legacy
                codebases, I can expertly navigate even the messiest of
                codebases.
              </p>
              <div className="md:grid md:w-full md:justify-items-end lg:justify-items-center">
                <button className="button-pink text w-fit font-caveat text-2xl text-white hover:scale-110 focus:scale-110">
                  let&apos;s refactor
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-slate-50 p-8 px-8 md:flex-row md:items-start md:pl-12 md:pr-16 lg:flex-col lg:items-center lg:px-8">
            <div className="">
              <Application width={72} height={72} />
            </div>
            <div className="flex flex-col items-center justify-between gap-8">
              <h3 className="font-caveat text-2xl font-semibold md:w-full md:text-start lg:w-fit lg:text-center">
                Build a Web Application
              </h3>
              <p className="font-antic text-base md:w-full md:text-start lg:text-center">
                So, you&apos;ve got an idea for an app? Partner with me and we
                will turn your idea into reality. You will have total creative
                control as your app is prototyped, developed, and deployed. I
                stay informed with the latest development tools to ensure that
                your app has the cutting edge designs, speeds, and security you
                desire.
              </p>
              <div className="md:grid md:w-full md:justify-items-end lg:justify-items-center">
                <button className="button-purple text w-fit font-caveat text-2xl text-white hover:scale-110 focus:scale-110">
                  let&apos;s create
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-slate-50 p-8 px-8 md:flex-row md:items-start md:pl-12 md:pr-16 lg:flex-col lg:items-center lg:px-8">
            <div className="">
              <Plug width={72} height={72} />
            </div>
            <div className="flex flex-col items-center justify-between gap-8">
              <h3 className="font-caveat text-2xl font-semibold md:w-full md:text-start lg:w-fit lg:text-center">
                Create an API
              </h3>
              <p className="font-antic text-base md:w-full md:text-start lg:text-center">
                APIs enable applications to wok together to perform specific
                tasks by sharing data and executing pre-defined processes. If
                you have data that you need to share with your customers or
                other applications, creating an API may be the right choice for
                you.
              </p>
              <div className="md:grid md:w-full md:justify-items-end lg:justify-items-center">
                <button className="button-blue text w-fit font-caveat text-2xl text-white hover:scale-110 focus:scale-110">
                  let&apos;s innovate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-8 mb-24 flex flex-col items-center justify-between md:w-full md:flex-row md:items-end md:gap-12 md:px-24 lg:max-w-5xl lg:gap-24 lg:px-8">
        <div className="relative w-full">
          <div className="relative flex h-full w-full flex-col items-center px-12 md:px-16">
            <Image
              alt="Artsy photo of books and a vase on a wooded shelf."
              width={250}
              height={150}
              style={{ objectFit: 'contain' }}
              src="/quote-decor.png"
              className="z-10 -mb-1"
            />
          </div>
          <div className="relative mb-12 flex flex-col md:mb-0">
            <div className="flex flex-col gap-4 rounded-[60px] bg-slate-50 p-12">
              <QuoteIcon
                width={84}
                height={84}
                className="absolute left-2 top-0"
              />
              <QuoteIcon
                width={84}
                height={84}
                className="absolute bottom-0 right-2 rotate-180"
              />
              <p className="font-antic text-base">
                Computer Science is no more about computers than astronomy is
                about telescopes.
              </p>
              <span className="font-caveat text-xl">Edsger W. Dijkstra</span>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col">
          <div className="flex flex-col gap-4 rounded-[60px] bg-slate-50 p-12">
            <QuoteIcon
              width={84}
              height={84}
              className="absolute left-2 top-0"
            />
            <QuoteIcon
              width={84}
              height={84}
              className="absolute bottom-0 right-2 rotate-180"
            />
            <p className="font-antic text-base">
              Invention is the most important product of man&apos;s creative
              brain. The ultimate purpose is the complete mastery of mind over
              the material world, the harnessing of human nature to human needs.
            </p>
            <span className="font-caveat text-xl">Nikola Tesla</span>
          </div>
        </div>
      </section>
    </div>
  )
}
