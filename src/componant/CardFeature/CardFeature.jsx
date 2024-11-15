import './CardFeature.css'
import imge12 from './../../assets/images/blogProfile1_2.webp'
import { GoArrowRight } from 'react-icons/go'
export default function CardFeature( {photo11}) {
  return (
    <div className='CardFeature'>
      <img src={photo11} alt=""  className='imge11'/>
      <div className='CardFeature-text'>
        <div className='d-flex align-items-center'>
           <p className='Crad-box1'>uncategorized</p>
           <p className='Crad-box2'>MARCH 14,2024</p>
        </div>
        <h3>best and fastest data server ever</h3>
        <div className='box-info'>
        <div className='d-flex align-items-center'>
        <img src={imge12} alt="" className='image-face1' />
        <div className='title'>
            <h5>admin</h5>
            <p>co-founder</p>
        </div>
      </div>
      <button><GoArrowRight /></button>
        </div>
      </div>
    </div>
  )
}
