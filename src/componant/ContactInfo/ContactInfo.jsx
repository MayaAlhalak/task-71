import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import './ContactInfo.css'
import imgvideo from './../../assets/images/video.webp'
import { GoArrowRight } from 'react-icons/go'

export default function ContactInfo() {
  return (
    <>
    <div className='two-div'>
        <div className='box-all1'>
            <div className='box-contact'>
                <FaPhoneAlt /> 
                <div>
                    <p>call us 7/24</p>
                    <p>+789-456-4562</p>
                </div>
            </div>
            <div className='box-contact'>
                <FaEnvelope /> 
                <div>
                    <p>call us 7/24</p>
                    <p>+789-456-4562</p>
                </div>
            </div>
            <div className='box-contact'>
                <CiLocationOn /> 
                <div>
                    <p>call us 7/24</p>
                    <p>+789-456-4562</p>
                </div>
            </div>
            <img src={imgvideo} alt="" />
        </div>
        <div className='box-all2'>
            <h3>Ready To Get Started?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem velit illum sequi dolor excepturi. Eligendi eaque quidem dolorem architecto praesentium!</p>
            <form action="">
                <div className='form-input1'>
                    <div className='name'>
                        <label htmlFor="name">your Name <sup>*</sup></label>
                        <input type="text" id='name' />
                    </div>
                    <div className='name'>
                        <label htmlFor="email">your Email <sup>*</sup></label>
                        <input type="text" id='email' />
                    </div>
                </div>
                <div className='form-message'>
                    <label htmlFor="mes">write message <sup>*</sup></label>
                    <input type="message" id='mes' />
                </div>
            </form>
            <button>Send Message <GoArrowRight /> </button>
        </div>
        
    </div>
    <div>
    
    </div>
    </>
  )
}
