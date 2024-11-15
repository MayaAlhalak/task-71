import './CardClient.css'
import imgeback from './../../assets/images/ctaShape2_1.webp'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
export default function CardClient({photo1 ,photo2 , trueImage , title2 , position}) {
  return (
    <>
      <div className= {position ? 'client-part' : 'client-part2'}>
        <img src={photo1} alt="" className= {position != true ? 'hi-image' : ''}/>
        {
          !trueImage && <img src={imgeback} alt='' className='imgeback'/>
        }
        <div>
            {
             trueImage && <div className='d-flex align-items-center justify-conten-start gap-row-3 '>
               <GoArrowLeft /><h5>contacts</h5><GoArrowRight />
              </div>
            }
            <div className='d-flex align-items-center justify-conten-between'>
                <h2>{title2}</h2>
            </div>
        </div>
        <img src={photo2} alt="" className= {position != true ? 'image-line1' : 'image-line'} />
        <button>talk to specialist <GoArrowRight /></button>
      </div>
    </>
  )
}
