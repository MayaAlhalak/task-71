import './CardFeedback.css'
import { ImagesStar } from '../../Data/DataImage'


export default function CardFeedback({title ,par , photo , icon} ) {
  return (
    <>
      <div className='CardFeedback'>
      {
        ImagesStar.map ((item , index)=> {
          return (
            <img key={index} src= {item.img} alt='' className='star-image'/>
          )
        })
      }
      <p>nesciunt corrupti accusantium in aspernatur quas natus? Totam eos ad adipisci asperiores quae obcaecati voluptate deleniti autem?</p>
      <div className='CardFeedback-icon'>
        <div  className='d-flex align-items-center'>
          <img src={photo} alt="" className='image-face' />
          <div className='title'>
              <h5>{title}</h5>
              <p>{par}</p>
          </div>
        </div>
        {icon}
      </div>
      </div>

    </>
  )
}

