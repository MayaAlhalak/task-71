import './Plans.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import photo1 from '../../assets/images/pricingIcon1_2.svg'
import photo2 from '../../assets/images/pricingShape1_2.webp'
import photo3 from '../../assets/images/pricingShape1_1.webp'
import CardPlans from '../CardPlans/CardPlans';

export default function Plans() {
  return (
    <>
    <section className=' plan'>
        <div className='plans'>
            <div className='d-flex align-items-center justify-conten-start gap-row-3 arrow'>
                <GoArrowLeft /><h5>OUR PRICING</h5><GoArrowRight />
            </div>
            <div className='d-flex align-items-center justify-conten-between'>
                <h2>our awesome pricing plans</h2>
            </div>
        </div>
        <div className='image'>
            <img src={photo2} alt="" />
        </div>
        <div className='all'>
            <div className='btn1'>
                <button className='btn2'>monthly</button>
                <button className='btn3'>yearsly</button>
            </div>
            <img src={photo1} alt="" />
            <p>save 25%</p>
        </div>
        <img src={photo3} className='hand-icon' alt="" />
        <div className='all-card'>
        <CardPlans
        colorBack = {false}
        />
        <CardPlans
        colorBack = {true}
        />
        <CardPlans
        colorBack = {false}
        />
        </div>
       
    </section>

    </>
  )
}
