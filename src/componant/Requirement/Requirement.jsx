import CardServices from '../CardServices/CardServices'
import './Requirement.css'


export default function Requirement() {
  return (
    <section className='req' >
      <iframe  width="560" height="315" src="https://www.youtube.com/embed/JMsNslI8KoY?si=yyKc2JkVmrHZjqpB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className=' requirement cardservice1'>
      <CardServices
        true1 = {true}
        show={false}
        title={'Requirement'}
        number = {'01'}
      />
      <CardServices
          true1 = {true}
          show={false}
          title={'Ui/Ux Design'}
          number = {'02'}  
      />
      <CardServices
          true1 = {true}
          show={false}
          title={'prototype'}
          number = {'03'}
      />
      <CardServices
          true1 = {true}
          show={false}
          title={'Development'}
          number = {'04'}
      />
    </div>
    </section>
  )
}
