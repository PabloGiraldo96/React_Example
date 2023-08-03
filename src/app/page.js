import Image from 'next/image'
import styles from './page.module.css'
import {Inicio} from '../app/Inicio/inicio'
import {Navbar} from '../app/Navbar/navbar'
import {Room} from '../app/Rooms/rooms'
import {FormularioContacto} from './Contactanos/contactanos'
import {Footer} from '../app/Footer/footer'

export default function Home() {
  return (
<>
<Navbar/>
<Inicio/>
<Room
  imgSrc="https://bit.ly/2k1H1t6"
  title="Vía las Palmas"
  description="Penthouse moderno, 330mts construidos"
  price="Desde 720 Millones"
  rate_one="★"
  rate_two="4.84"
  rate_three="(190)"
/>
<Room
  imgSrc="https://t-ec.bstatic.com/images/hotel/max1024x768/669/66941996.jpg"
  title="El Poblado, San Julián"
  description="Apartamento amoblado, 140mts"
  price="Desde 620 Millones"
  rate_one="★"
  rate_two="4.5"
  rate_three="(150)"
/>
<Room
  imgSrc="https://a0.muscache.com/pictures/miso/Hosting-31883725/original/f6463bed-8a14-476e-96a4-2b34773a4f0f.jpeg"
  title="Envigado, Las Brujas"
  description="Apartamento amoblado, 110mts"
  price="Desde 560 Millones"
  rate_one="★"
  rate_two="4.9"
  rate_three="(190)"
/>
<FormularioContacto/>
<Footer/>
</>
  )
}
