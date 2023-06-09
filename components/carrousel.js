import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/carrousel.module.css'


export default function carrousel() {
  
  const router = useRouter()

  const imagenes1 = [
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-94_iyubzc.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592322/moyanofotografia/retrato/retrato-135_asmtgv.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592319/moyanofotografia/retrato/retrato-122_r4gvkt.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-81_jity5v.jpg'
  ];

  const imagenes2 = [
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-94_iyubzc.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592322/moyanofotografia/retrato/retrato-135_asmtgv.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592319/moyanofotografia/retrato/retrato-122_r4gvkt.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-81_jity5v.jpg'
  ];

  const imagenes3 = [
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-94_iyubzc.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592322/moyanofotografia/retrato/retrato-135_asmtgv.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592319/moyanofotografia/retrato/retrato-122_r4gvkt.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-81_jity5v.jpg'
  ];

  const imagenes4 = [
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670633/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-88_kluzmw.jpg',
    /* 'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670602/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-60_gtfbpy.jpg', */
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592319/moyanofotografia/retrato/retrato-122_r4gvkt.jpg',
    'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-81_jity5v.jpg'
  ];

  if(router.pathname === '/retratos'){
    const [currentCard, setCurrentCard] = useState(0);

    const goToPreviousCard = () => {
      setCurrentCard((prevCard) => (prevCard === 0 ? imagenes1.length - 1 : prevCard - 1));
    };

    const goToNextCard = () => {
      setCurrentCard((prevCard) => (prevCard === imagenes1.length - 1 ? 0 : prevCard + 1));
    };

    useEffect(() => {
        AOS.init({ once: true }); 
    }, []);

    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                <Image className={styles.imagenTarjeta} src={imagenes1[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
                <div className={styles.flechas}>
                  <div className={styles.f_izq} onClick={goToPreviousCard}>
                    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                  </div>
                  <div className={styles.f_drc} onClick={goToNextCard}>
                    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.overlay}></div>
                <h2>Retrato</h2>
                {/* <p>
                  A través de la luz, la composición y la atención al detalle, busco resaltar las expresiones, emociones y personalidades. 
                  Cada retrato es una oportunidad para crear una conexión auténtica y transmitir la esencia de la persona en la imagen. 
                  Me apasiona capturar momentos genuinos y crear imágenes que inspiren y evocan emociones. Con un enfoque creativo y una visión artística
                </p> */}
                <p>
                  Realizamos sesiones individuales, donde capturamos tu esencia y personalidad única. También ofrecemos sesiones para parejas, capturando 
                  la conexión y el amor compartido. Si deseas inmortalizar momentos especiales con tus amigos o familiares, nuestras sesiones en grupo son perfectas 
                  para ti. Además, estamos abiertos a colaboraciones creativas y proyectos especiales. 
                </p>
              </div>
          </div>
      </div>
    )
  } else if (router.pathname === '/eventos'){
    const [currentCard, setCurrentCard] = useState(0);

    const goToPreviousCard = () => {
      setCurrentCard((prevCard) => (prevCard === 0 ? imagenes2.length - 1 : prevCard - 1));
    };

    const goToNextCard = () => {
      setCurrentCard((prevCard) => (prevCard === imagenes2.length - 1 ? 0 : prevCard + 1));
    };

    useEffect(() => {
        AOS.init({ once: true }); 
    }, []);
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                  <Image className={styles.imagenTarjeta} src={imagenes2[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
                <div className={styles.flechas}>
                  <div className={styles.f_izq} onClick={goToPreviousCard}>
                    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                  </div>
                  <div className={styles.f_drc} onClick={goToNextCard}>
                    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                  </div>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.overlay}></div>
                <h2>Eventos</h2>
                <p>
                  Capturando los momentos más especiales y memorables en bodas, eventos de empresa, fiestas y graduaciones. 
                  Con un enfoque creativo y una pasión por contar historias, buscando las emociones, la alegría y la esencia de cada ocasión. 
                  Desde los detalles más pequeños hasta los momentos más significativos. Recuerdos que perdurarán para siempre.
                </p>
              </div>
          </div>
      </div>
    )
  } else if (router.pathname === '/orlas'){
    const [currentCard, setCurrentCard] = useState(0);

    const goToPreviousCard = () => {
      setCurrentCard((prevCard) => (prevCard === 0 ? imagenes3.length - 1 : prevCard - 1));
    };

    const goToNextCard = () => {
      setCurrentCard((prevCard) => (prevCard === imagenes3.length - 1 ? 0 : prevCard + 1));
    };

    useEffect(() => {
        AOS.init({ once: true }); 
    }, []);
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                  <Image className={styles.imagenTarjeta} src={imagenes3[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
                <div className={styles.flechas}>
                  <div className={styles.f_izq} onClick={goToPreviousCard}>
                    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                  </div>
                  <div className={styles.f_drc} onClick={goToNextCard}>
                    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                  </div>
                </div>
              </div>
              <div className={styles.card3}>
                <div className={styles.overlay}></div>
                <h2>Orlas</h2>
                <p>
                  Cada imagen tiene que inmortalizar este gran logro y la emoción que implica. Representar e inmortalizar esos años
                  de duro trabajo, sacrificio y perseverancia. En el evento de graduación, documentaré cada momento significativo, 
                  desde el emocionante momento en el que reciben su diploma y beca hasta las risas y abrazos compartidos con amigos y familiares. 
                </p>
              </div>
          </div>
      </div>
    )
  } else if (router.pathname === '/deporte'){
    const [currentCard, setCurrentCard] = useState(0);

    const goToPreviousCard = () => {
      setCurrentCard((prevCard) => (prevCard === 0 ? imagenes4.length - 1 : prevCard - 1));
    };

    const goToNextCard = () => {
      setCurrentCard((prevCard) => (prevCard === imagenes4.length - 1 ? 0 : prevCard + 1));
    };

    useEffect(() => {
        AOS.init({ once: true }); 
    }, []);
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                  <Image className={styles.imagenTarjeta} src={imagenes4[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
                <div className={styles.flechas}>
                  <div className={styles.f_izq} onClick={goToPreviousCard}>
                    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                  </div>
                  <div className={styles.f_drc} onClick={goToNextCard}>
                    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                  </div>
                </div>
              </div>
              <div className={styles.card4}>
                <div className={styles.overlay}></div>
                <h2>Deportes</h2>
                <p>
                  Capturan la pasión y la emoción de los momentos más intensos en campeonatos, torneos y eventos deportivos. 
                  Momentos únicos de competición y rendimiento excepcional, llenas de energía. Desde los goles decisivos en un partido 
                  de fútbol hasta la velocidad y la destreza de los pilotos en el circuito, mis fotos de deporte transmiten la intensidad 
                  y la adrenalina del momento.
                </p>
              </div>
          </div>
      </div>
    )
  }
}










{/*   FORMA ANTIGUA
<div className={styles.elementoCarrousel} id="tarjeta1">
  <div className={styles.tarjetas}>
    <Image src="/mujer.jpeg" width={518} height={418} alt='persona 1'/>
  </div>
  <div className={styles.flechas}>
    <a href="#tarjeta3">
      <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
    </a>
    <a href="#tarjeta2">
      <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
    </a>
  </div>
</div>
<div className={styles.elementoCarrousel} id="tarjeta2">
<div className={styles.tarjetas}>
  <Image src="/hombre1.jpeg" width={518} height={418} alt='persona 2'/>
</div>
<div className={styles.flechas}>
  <a href="#tarjeta1">
    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
  </a>
  <a href="#tarjeta3">
    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
  </a>
</div>
</div>
<div className={styles.elementoCarrousel} id="tarjeta3">
  <div className={styles.tarjetas}>
    <Image src="/hombre2.jpeg" width={518} height={418} alt='persona 3'/>
  </div>
  <div className={styles.flechas}>
    <a href="#tarjeta2">
      <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
    </a>
    <a href="#tarjeta1">
      <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
    </a>
  </div>
</div>
*/}