import './Services.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import CardServices from './../CardServices/CardServices'
import imgsevrice1 from '../../assets/images/serviceIcon1_1.svg'
import imgsevrice2 from '../../assets/images/serviceIcon1_2.svg'
import imgsevrice3 from '../../assets/images/serviceIcon1_3.svg'
import imgsevrice4 from '../../assets/images/serviceIcon1_4.svg'

export default function Services() {
  return (
    <section className=' services'>
      <div className='d-flex align-items-center justify-conten-start gap-row-3 arrow'><GoArrowLeft /><h5>our services</h5><GoArrowRight /></div>
      <div className='title-icon'>
      <h2>elvating businesses with it ingenuity </h2>
      <div >
        <GoArrowLeft className='services-icon' />
        <GoArrowRight className='services-icon services-icon2 '/>
      </div>
      </div>
     <div className='cardservice'>
     <CardServices 
      show = {true}
      title = {'woo commerce'}
      photo = {imgsevrice2}
      /> 
      <CardServices 
      show = {true}
      title = {'CRM solution'}
      photo = {imgsevrice3}
      /> 
      <CardServices 
      show = {true}
      title = {'Web design'}
      photo = {imgsevrice1}
      /> 
      <CardServices 
      show = {true}
      title = {'Data Guard sentinel'}
      photo = {imgsevrice4}
      />
     </div>
   
    </section>
  )
}
