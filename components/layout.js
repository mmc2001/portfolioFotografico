import Portada from '@/components/portada'
import Trabajos from '@/components/trabajos'
import Contacto from '@/components/contacto'
import Timeline from "./timeline"
import Precios from "./precios"
import Carrousel from './carrousel'
import Servicios from './servicios'

export default function Layout (){
  return (
    <>
      <Portada />
      <Timeline />
      <Precios />
      <Carrousel />
      <Contacto />
      <Servicios />
      <Trabajos />
    </>
  )
}

