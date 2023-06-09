import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/carrousel.module.css'


export default function carrousel() {
  
  const router = useRouter()

  const images = [
    '/mujer.jpeg',
    '/hombre1.jpeg',
    '/hombre2.jpeg'
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const goToPreviousCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? images.length - 1 : prevCard - 1));
  };

  const goToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard === images.length - 1 ? 0 : prevCard + 1));
  };

  useEffect(() => {
      AOS.init({ once: true }); 
  }, []);

  if(router.pathname === '/retratos'){
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                <Image className={styles.imagenTarjeta} src={images[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
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
                <p>Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. Est accusantium repudiandae et consequatur eligendi est autem libero.</p>
              </div>
          </div>
      </div>
    )
  } else if (router.pathname === '/eventos'){
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                  <Image className={styles.imagenTarjeta} src={images[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
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
                <h2>Eventos</h2>
                <p>Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. Est accusantium repudiandae et consequatur eligendi est autem libero.</p>
              </div>
          </div>
      </div>
    )
  } else if (router.pathname === '/orlas'){
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                  <Image className={styles.imagenTarjeta} src={images[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
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
                <h2>Orlas</h2>
                <p>Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. Est accusantium repudiandae et consequatur eligendi est autem libero.</p>
              </div>
          </div>
      </div>
    )
  } else if (router.pathname === '/deporte'){
    return (
      <div>
          <div className={styles.contenedor}>  
              <div className={styles.contenedorCarrousel}>
               
                  <Image className={styles.imagenTarjeta} src={images[currentCard]} alt="Tarjeta" width={300} height={200}/>
               
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
                <h2>Deportes</h2>
                <p>Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. Est accusantium repudiandae et consequatur eligendi est autem libero.</p>
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