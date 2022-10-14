import { apple, bill, google} from '../assets'
import styles, { layout } from '../style'

function Billing() {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>  
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoice.
        </h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          “I don't know which I hate most my bills or the money I pay them with...” 
          “I don't want to spend the rest of my life paying off loans when I don't even like school to begin with.” 
          “We are put on this earth to do more than just pay bills and die.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple-store' 
           className='w-[128px] h-[42px] object-contain 
           mr-5 cursor-pointer' />
          <img src={google} alt='google-play' 
          className='w-[128px] h-[42px] object-contain 
           cursor-pointer' />

        </div>
      </div>
    </section>
  )
}

export default Billing;