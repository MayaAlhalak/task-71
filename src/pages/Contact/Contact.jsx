import ContactInfo from '../../componant/ContactInfo/ContactInfo'
import Footer from '../../componant/Footer/Footer'
import FooterDown from '../../componant/FooterDown/FooterDown'
import HeroAbout from '../../componant/HeroAbout/HeroAbout'
import Map from '../../componant/Map/Map'
import NavBar from '../../componant/NavBar/NavBar'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <NavBar
      home= {false}/>
      <HeroAbout/>
      <ContactInfo/>
      <Map/>
      <Footer/>
      <FooterDown/>
      
    </>
  )
}
