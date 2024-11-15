import CardClient from '../CardClient/CardClient'
import './Footer.css'
import image22 from './../../assets/images/ctaThumb.webp'
import photo8 from '../../assets/images/ctaShape2_4.webp'
import imageNav from '../../assets/images/logowhite.svg'
import { BsChevronDoubleRight, BsEnvelopeAt } from 'react-icons/bs'
import imgfooter1 from './../../assets/images/footerThumb1_1.webp'
import imgfooter2 from './../../assets/images/footerThumb1_2.webp'
import { FaInstagram, FaRegCalendarAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { CiLocationOn} from 'react-icons/ci'
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";


export default function Footer({foot}) {
  return (
    <section className={foot ? 'Footer' : 'Footer1'}>
     {foot &&  <CardClient
       position = {false}
       title2 = {'stay conntected with cutting Edge it'}
        photo1 = {image22}
        photo2 = {photo8}
      />}
      {
        !foot && 
       <div className='d-flex'>
           <div className='footer2'>
          <div className='footer2-div'>
            <div className='footer2-icon'><CiLocationOn /></div>
            <div>
              <p>Adress</p>
              <p>5454 Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='footer2-div'>
          <div className='footer2-icon'><BsEnvelopeAt /></div>
            <div>
              <p>send Email</p>
              <p>info @gmail.com</p>
            </div>
          </div>
          <div className='footer2-div'>
          <div className='footer2-icon'><TbPhoneCall /></div>
            <div>
              <p>call emarangrs</p>
              <p>+02687851412</p>
            </div>
          </div>
        </div>
       </div>
      }
      <div className='row'>
        <div className='col-lg-3 col-md-6  div-one'>
            <img src={imageNav} alt="" className='image-footer' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime est vel ab aut facilis maiores, cumque perspiciatis. Eaque amet voluptatum harum quisquam cupiditate consectetur.</p>
            <div className='icon-conect'>
              <div>
              <FaFacebookF />
              </div>
              <div>
              <FaTwitter />

              </div>
              <div>
              <FaYoutube />
              </div>
              <div>
              <FaInstagram />
              </div>
            </div>
        </div>         
        <div className='col-lg-2 col-md-6  div-one'>
        <h4>Quick links</h4>
        <div className='linear'></div>
        <ul>
            <li> <BsChevronDoubleRight />Extech about</li>
            <li> <BsChevronDoubleRight />Extech about</li>
            <li> <BsChevronDoubleRight />Extech about</li>
            <li> <BsChevronDoubleRight />Extech about</li>
            <li> <BsChevronDoubleRight />Extech about</li>
        </ul>
        </div>         
        <div className='col-lg-3 col-md-6  div-one'>
        <h4>Resent bost</h4>
        <div className='linear'></div>
        <div className='text-div'>
            <img src={imgfooter1} alt="" />
            <div >
                <p><FaRegCalendarAlt/>15th april 20252</p>
                <p>top 5 most famous technologe trend in 2024</p>
            </div>
        </div>
        <div>
        <div className='text-div'>
            <img src={imgfooter2} alt="" />
            <div >
                <p> <FaRegCalendarAlt/>15th april 20252</p>
                <p>top 5 most famous technologe trend in 2024</p>
            </div>
        </div>
        </div>
        </div>         
        <div className='col-lg-3 col-md-6   div-one'>
        <h4>contact us</h4>
        <div className='linear'></div>
        <div className='link'>
        <a href="#"> <FaEnvelope />info@exampel.com</a>
        <a href="#"><FaPhoneAlt />+264-5416-4166</a>
        </div>
        <div className='form-input'>
          <input type="text"  placeholder='your email address'  />
          <GoArrowRight />
        </div>
       <div className='check'>
          <input type="checkbox"/>
          <p>i agree to <span>privacy</span> <span> policy</span></p>
       </div>
        </div>         
      </div>
    </section>
  )
}
