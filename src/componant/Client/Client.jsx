import './Client.css'
import CardClient from '../CardClient/CardClient';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import CardFeedback from '../CardFeedback/CardFeedback';
import img1 from './../../assets/images/testiThumb3_1.webp'
import img2 from './../../assets/images/testiThumb3_2.webp'
import img3 from './../../assets/images/testiThumb3_3.webp'
import photo6 from '../../assets/images/ctaThumb1_1.webp'
import photo7 from '../../assets/images/heroShape1_2.webp'
import { ImQuotesLeft } from "react-icons/im";
export default function Client() {
  return (
    <section className='client'>
     <CardClient
     position = {true}
     title2 = {'elvating businesses with it ingenuity'}
     trueImage = {true}
     photo1 = {photo6}
     photo2 = {photo7}
     />
      <div>
      <div className='plans'>
            <div className='d-flex align-items-center justify-conten-start gap-row-3 arrow'>
                <GoArrowLeft /><h5>OUR PRICING</h5><GoArrowRight />
            </div>
            <div className='d-flex align-items-center justify-conten-between'>
                <h2>our latses client feedback</h2>
            </div>
        </div> 
      </div>
      <div className='all-CardFeedback'>
      <CardFeedback
      title = {"Kristen Walsin"}
      par = {"web design"}
      photo = {img1}
      icon = {<ImQuotesLeft />}
      />
      <CardFeedback
      className ={'CardFeedback2'}
      title = {"theressa weeb"}
      par = {"tech enthusitast"}
      photo = {img2}
      icon = {<ImQuotesLeft />}
      />
      <CardFeedback
      title = {"Ronald rchard"}
      par = {"web enterprenour"}
      photo = {img3}
      icon = {<ImQuotesLeft />}
      />
      </div>
      <div className='d-flex'>
        <div className='line '>
          <div className='line-blue'></div>
        </div>
      </div>
      

    </section>
  )
}
