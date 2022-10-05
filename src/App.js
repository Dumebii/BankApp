import styles from './style'
import Navbar from './components'
import CarDeal from './components' 
import Billing from './components'
import Business from './components' 
import Clients from './components'
import  CTA from './components'
import Stats from './components' 
import Footer from './components'
// import Testimonials from './components'
import Hero from './components';


function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Billing />
        <CarDeal />
        <Business />
        <Clients />
        <CTA />
        <Stats />
        <Footer />
     
        </div>
      </div>
    </div>



  );
}

export default App;
