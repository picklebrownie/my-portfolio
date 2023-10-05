'use client'

import Image from 'next/image'
import Infinity from '../../components/icons/Infinity'
import Calculator from '../../components/icons/Calculator'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function Publications() {
  return (
    <>
      <div className="z-10 min-h-screen bg-gradient-to-b from-teal-600/50 to-teal-600">
        <div className="h-[70vh]" />
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="relative h-screen">
            <Image
              src="/book.svg"
              alt="decorative book"
              fill
              className="pb-4 opacity-75"
            />
          </div>
        </motion.div>
        <Footer />
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="fixed top-0 flex h-screen w-screen items-center justify-center overflow-x-scroll">
          <div>
            <div className="text-shadow-lg relative font-caveat text-5xl text-white md:-ml-8 md:-mt-16 lg:text-8xl">
              Publications
            </div>
            <div className="flex flex-col gap-12 md:max-w-3xl lg:max-w-5xl lg:flex-row">
              <motion.div
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-slate-50 p-8 px-8 shadow-lg md:mt-16 md:pl-12 md:pr-16 lg:px-8">
                  <div className="">
                    <Infinity width={72} height={72} />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-8">
                    <h3 className="font-caveat text-2xl font-semibold lg:w-fit lg:text-center">
                      E-Z Sequence
                    </h3>
                    <p className="text-justify font-antic text-base">
                      I derive the E-Z Sequence and provide a proof of
                      correctness. Applications of the E-Z Sequence include to
                      calculate primes. When the E-Z Sequence is compared to
                      itself at every value of z, we are able to find every
                      natural divisor of every natural number. I wrote this
                      publication while studying the Theory of Computation.
                    </p>
                    <div className="justify-items-center">
                      <a target="_blank" href="/E_Z_Sequence.pdf">
                        <button className="button-teal text w-fit font-caveat text-2xl text-white transition duration-300 ease-in-out hover:scale-110 focus:scale-110">
                          read more
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-slate-50 p-8 px-8 md:mb-16 md:pl-12 md:pr-16 lg:px-8">
                  <div className="">
                    <Calculator width={72} height={72} />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-8">
                    <h3 className="font-caveat text-2xl font-semibold lg:w-fit lg:text-center">
                      Turing Machine to Compute Binary Carry Sequence
                    </h3>
                    <p className="text-justify font-antic text-base">
                      Despite the fact that the Binary Carry sequence appears to
                      be a relevant and valuable sequence, little research has
                      been conducted towards the applications of the sequence to
                      practical mathematical problems. We have created a Turing
                      machine that accurately computes each value of the Binary
                      Carry sequence. We are optimistic that the development of
                      this Turing machine will assist and promote further
                      research on the topic and prompt new discoveries in the
                      math world.
                    </p>
                    <div className="justify-items-center">
                      <a
                        target="_blank"
                        href="/Turing_Machine_to_Compute_Binary_Carry_Sequence.pdf"
                      >
                        <button className="button-teal text w-fit font-caveat text-2xl text-white transition duration-300 ease-in-out hover:scale-110 focus:scale-110">
                          read more
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
