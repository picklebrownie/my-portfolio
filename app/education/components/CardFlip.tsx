import { useState } from 'react'
import { motion } from 'framer-motion'
import M from '../icons/M'

const CardFlip = ({
  CardFront,
  CardBack,
}: {
  CardFront: any
  CardBack: any
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    // if (!isAnimating) {
    setIsFlipped(!isFlipped)
    setIsAnimating(true)
    // }
  }

  return (
    <div
      className="flip-card h-[210px] w-[195px] cursor-pointer rounded-md"
      // onClick={handleFlip}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <motion.div
        className="flip-card-inner h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.2, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front h-full w-full">{CardFront}</div>

        <div className="flip-card-back h-full w-full rounded-2xl border-[1px] bg-white bg-cover p-1">
          <div className="h-full w-full rounded-xl bg-black bg-gradient-to-tr from-red-950 to-orange-600 p-1">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white text-lg">
              {CardBack}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CardFlip
