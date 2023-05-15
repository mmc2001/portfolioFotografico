import Portada from '@/components/portada'
import SobreMi from '@/components/sobreMi'
import Contacto from '@/components/contacto'
import Timeline from "./timeline"
import Precios from "./precios"
import Carrousel from './carrousel'

export default function Layout (){
  return (
    <>
      <Portada />
      <SobreMi />
      <Timeline />
      <Precios />
      <Carrousel />
      <Contacto />
    </>
  )
}

