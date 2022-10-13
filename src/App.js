 import styles from './style'
import Navbar from './components/Navbar'
import CarDeal from './components/CarDeal' 
import Billing from './components/Billing'
import Business from './components/Business' 
import Clients from './components/Clients'
import  CTA from './components/CTA'
import Stats from './components/Stats' 
import Footer from './components/Footer'
import Hero from './components/Hero';
import Testimonials from './components/Testimonials'
import GetStarted from './components/GetStarted'


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
        <Stats />
        <Business />
        <Billing />
        <CarDeal />
        <Clients />
        <CTA />
        <Footer />
        <Testimonials />
        </div>
      </div>
    </div>



  );
}

export default App;
