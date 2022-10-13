import { features } from '../constants/main'
import styles, { layout} from '../style'
import Button from './Button'


const FeatureCard = () => {
  <div>
    
  </div>
}



function Business() {
  return(
    <section id='features' className={layout.section}>
     <div className={layout.sectionInfo}>
       <h2 className={styles.heading2}>
        You do the Business, <br className='sm:block hidden' /> we'll handle the money
       </h2>
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can
         improve your financial life by building crdit, 
         earning rewards and saving money. 
        But with hundreds of credit cards on the market,
       </p>

       <Button styles='mt-10' />
     </div>
     <div className={` ${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard />
      ))}
     </div>

    </section>
  )
}

export default Business