import HeroAbout from '../../componant/HeroAbout/HeroAbout'
import NavBar from '../../componant/NavBar/NavBar'
import Footer from '../../componant/Footer/Footer'
import FooterDown from '../../componant/FooterDown/FooterDown'
import TeamAbout from '../../componant/TeamAbout/TeamAbout'
import './About.css'

export default function About() {
  return (
    <>
      <NavBar
      home= {false}
      />
      <HeroAbout
      aster= {true}/>
      <TeamAbout/>
      <Footer/>
      <FooterDown/>
    </>
  )
}
