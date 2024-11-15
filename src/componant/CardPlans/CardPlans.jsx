import './CardPlans.css'
import photo3 from '../../assets/images/pricingIcon1_1.svg'
import { GiCheckMark } from "react-icons/gi";
import { BsQuestionCircle } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { GrClose } from "react-icons/gr";
export default function CardPlans(colorBack) {
  return (
    <>
     <div className='card-plans' >
     <div className= { colorBack ? 'blue-color' : 'back-color'}>
        <div>
            <h4>Regular plans</h4>
            <p><span>$49</span>/Month</p>
        </div>
        <div>
            <img src= {photo3}alt="" className='icon-cloud' />
        </div>
      </div>
      <ul>
        <li><GiCheckMark/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
        <li><GiCheckMark/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
        <li><GiCheckMark/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
        <li><GiCheckMark/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
        <li><GiCheckMark/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
        <li ><GrClose className='red'/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
        <li><GrClose  className='red'/> 100 GB SSD Strong <BsQuestionCircle className='icon-question'/></li>
      </ul>
      <button className='btn-card' >get started now <GoArrowRight /></button>
     </div>
    </>
  )
}
