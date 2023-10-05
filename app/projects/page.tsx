import MadeUpSalon from './madeupsalon'
import ImaginaryJam from './imaginaryjam'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <>
      <MadeUpSalon />
      <ImaginaryJam />
      <Footer
        textColor="neutral-800"
        iconColor="neutral-800"
        iconHoverColor="neutral-950"
      />
    </>
  )
}
