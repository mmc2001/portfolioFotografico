import Portada from '@/components/portada'
import Trabajos from '@/components/trabajos'
import Contacto from '@/components/contacto'
import Contacto2 from './contacto2'
import Servicios from './servicios'
import SobreNosotros from './sobreNosotros'

export default function Layout (){
  return (
    <>
      <Portada />
      <SobreNosotros />
      <Trabajos />
      <div id='servicios'></div>
      <Servicios />
      {/* <Contacto /> */}
      <Contacto2 />
    </>
  )
}

