import './CardAbout.css'

import { FaUsb } from "react-icons/fa6";
export default function CardAbout({imgface , name , job}) {
  return (
    <>
      <div className='card5'>
        <img src={imgface} alt="" />
        
        <div className='cardsTitle'>
           <div className='cardsTitle-title'>
              <FaUsb className='usb'/>
              <h3>{name}</h3>
              <p>{job}</p>
           </div>
        </div>
        </div>
    </>
  )
}
