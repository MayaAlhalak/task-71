
import Client from '../../componant/Client/Client'
import Feature from '../../componant/Feature/Feature'
import Footer from '../../componant/Footer/Footer'
import FooterDown from '../../componant/FooterDown/FooterDown'
import Hero from '../../componant/Hero/Hero'
import NavBar from '../../componant/NavBar/NavBar'
import Plans from '../../componant/Plans/Plans'
import Requirement from '../../componant/Requirement/Requirement'
import Services from '../../componant/Services/Services'

export default function Home() {
  return (
    <>
      <NavBar
      home={true}
      />
      <Hero/>
      <Services/>
      <Requirement/>
      <Plans/>
      <Client/>
      <Feature/>
      <Footer
      foot = {true}
      />
      <FooterDown/>
    </>
  )
}
