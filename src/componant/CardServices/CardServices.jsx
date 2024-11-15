import './CardServices.css'

import { BsChevronDoubleRight } from "react-icons/bs";


export default function CardServices({title , photo , show , true1 ,number}) {
  return (
    <>
        <div className= {show ? 'card-services1' : 'card-services2' }>
            {show && <img src={photo} alt="" />}
            {true1 && <h3 className ='colors'>{number}</h3>}
            <h4>{title}</h4>
            <p> explicabo nemo quas corporis sapiente laborum nesciunt, at esse eligendi. Vel?</p>
            { show && <button>Read More<BsChevronDoubleRight /> </button>}
        </div>
    </>
  )
}
