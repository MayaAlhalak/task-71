import './HeroAbout.css'
import photo3 from './../../assets/images/line-element.webp'
import { ImageAster } from '../../Data/ImageAster'
import imgs from './../../assets/images/asterisk.svg'

export default function HeroAbout({aster}) {
  return (
    <section className='HeroAbout'>
      <img src={photo3} alt="" className='hero-image1' />
      <div className='box-hero'>
        <div >
          <h2>About us</h2>
          <p>Home &gt; About us</p>
        </div>
      </div>
      { aster &&
      <div className='aster-div'>
      {
        ImageAster.map ((item1 , index)=> {
          return (
            <>
            <div className='items'>
            <img key={index} src= {item1.img} alt=''/>
            <p key={index} > {item1.parg}</p>
            </div>
            </>
          )
        })
      }
      </div>}
      {aster && <div className='aster-div2'>
        <img src={imgs} alt="" />
        <p>cyber security</p>
        <img src={imgs} alt="" />
        </div>}
    </section>
  )
}
