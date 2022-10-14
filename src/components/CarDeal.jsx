import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CarDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> 
          in a few easy steps
        </h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          We are put on this earth to do more than just pay bills and die.
          We must work on our vision to impact the world... and do it in style, nothing should hold us back at any cost... 
          is always better then living to only pay bills and die.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CarDeal