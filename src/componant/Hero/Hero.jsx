import './Hero.css'
import { GoPulse } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import img1 from "./../../assets/images/heroThumb1_1.webp"
import imageLogo from './../../assets/images/heroShape1_3.webp'
import img2 from '../../assets/images/heroShape1_1.webp'
import brand1 from'../../assets/images/brandLogo1_1.svg'
import brand2 from'../../assets/images/brandLogo1_2.svg'
import brand3 from'../../assets/images/brandLogo1_3.svg'
import brand4 from'../../assets/images/brandLogo1_4.svg'
import brand5 from'../../assets/images/brandLogo1_5.svg'
import allimage from './../../assets/images/profileShape1_1.webp'
import { IoIosSend } from "react-icons/io";
import { ImagesStar } from '../../Data/DataImage';


export default function Hero() {
  return (
    <section className='hero'>
     <div className='hero-container'>
     <div className='part-2'>
       
       <div className='soulation'>
       <IoIosSend />
       <p >soulation </p>
       </div>
       <div className='technology'>
       <IoIosSend className='send-left' />
       <p >technology</p>
       </div>
        
        <img src={img1} alt="" className='img1' />
        <img src={img2} alt="" className='img2' />
      </div>
     <div className='part-1'>
        <p className='text'> <GoPulse />every thing you need to creat a website</p>
        <h1>business innovation with it services expertise</h1>
        <div className='hero-list'>
            <ul>
                <li><GiCheckMark />development and support</li>
                <li><GiCheckMark />discovery and analysis</li>
            </ul>
            <ul>
                <li><GiCheckMark />flexibility and adapility</li>
                <li><GiCheckMark />competitve advantage</li>
            </ul>
        </div>
        <button>get started <HiOutlineArrowSmRight /> </button>
        <div className='all-div'>
          <div className='div-box div-1'>
            <h5>trustipilot</h5>
            <div className='hero-info'>
              <img src={allimage} alt="" />
              <div>
                <div>
                {
                    ImagesStar.slice(0 , 3).map ((item , index)=> {
                      return (
                        <img key={index} src= {item.img} alt='' className='star-image'/>
                      )
                    })
                }
                </div>
                <p>450+ reviews</p>
              </div>
            </div>
            
          </div>
          <div className='div-box'>
            <h5>google</h5>
            <div className='hero-info'>
              <img src={allimage} alt="" />
              <div>
                <div>
                  {
                      ImagesStar.slice(0 ,3).map((item , index)=> {
                        return (
                          <img key={index} src= {item.img} alt='' className='star-image'/>
                        )
                      })
                  }
                </div>
                <p>450+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     </div>
      <div className= 'brands'>
        <div className='div-img'>
            <img  src={imageLogo} alt="" />
        </div>
      </div>
      <div className='hero-image'>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
     
    </section>
  )
}
