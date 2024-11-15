import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import './TeamAbout.css'
import CardAbout from '../CardAbout/CardAbout'
import { Imagelogo } from '../../Data/Datalogo'
import imgface1 from './../../assets/images/04.webp'
import imgface2 from './../../assets/images/05.webp'
import imgface3 from './../../assets/images/06.webp'
import imgface4 from './../../assets/images/07.webp'
import img4 from './../../assets/images/photo_2024.svg'

export default function TeamAbout() {
  return (
    <section className='team'>
      <div className='d-flex align-items-center justify-conten-start gap-row-3 arrow '><GoArrowLeft /><h5>Team Mambers</h5><GoArrowRight /></div>
      <div className='title'>
        <h2>Our Dedicated Team Members </h2>
        <button>AllMembers <GoArrowRight /></button>
      </div>
      <div className='CardAbout'>
        <CardAbout
        imgface = {imgface1}
        name ={'Masirul Islam'}
        job = {'Web Designer'}/>
        <CardAbout
         imgface = {imgface2}
         name ={'Jessica Mardol'}
         job = {'cyber Expert'}/>
        <CardAbout
         imgface = {imgface3}
         name ={'Arnold Hemingway'}
         job = {'Web Expret'}/>
        <CardAbout
         imgface = {imgface4}
         name ={'shikon Haque'}
         job = {'Data Analyst'}/>
      </div>
      <p className='text-line'>1k + Brands trust us</p>
      <div className='div-logo'>
      {
        Imagelogo.map ((item1 , index)=> {
          return (
            <>
            <div className='items'>
            <img key={index} src= {item1.img} alt=''/>
            <p key={index}> {item1.parg}</p>
            </div>
            </>
          )
        })
      }
      </div>
      <div className='div-logo-res'>
        <img src={img4} alt="" />
      </div>
    </section>
  )
}
