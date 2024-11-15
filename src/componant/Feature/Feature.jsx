import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import './Feature.css'
import CardFeature from '../CardFeature/CardFeature'
import imge11 from './../../assets/images/blogThumb1_1.webp'
import imge12 from './../../assets/images/blogThumb1_2.webp'
import imge13 from './../../assets/images/blogThumb1_3.webp'

export default function Feature() {
  return (
    <section className='feature'>
      <div className=' arrow arrow-feature'><GoArrowLeft /><h5>Blog&news</h5><GoArrowRight /></div>
      <div className='title-icon '>
        <h2>Feature new and insighte </h2>
        <div>
        <GoArrowLeft  className='services-icon'/>
        <GoArrowRight  className='services-icon services-icon2 ' />
        </div>
      </div>
      <div className='all-card-feature'>
        <CardFeature
        photo11 = {imge13}
        />
        <CardFeature
        photo11 = {imge12}
        />
        <CardFeature
        photo11 = {imge11}
        />
      </div>
      
    </section>
  )
}
