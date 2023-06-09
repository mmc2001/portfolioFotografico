import React, {useState, useEffect} from 'react'
/* import ModalImage from 'react-modal-image' */
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/trabajos.module.css'

export default function sobreMi() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
      '/retrato.jpeg',
      '/deporte.jpeg',
      '/retrato.jpeg',
      '/retrato.jpeg',
      '/retrato.jpeg',
      '/retrato.jpeg',
      '/retrato.jpeg'
      // Agrega más rutas de imágenes aquí
    ];
  
    const openLightbox = (index) => {
      setPhotoIndex(index);
      setIsOpen(true);
    };

    useEffect(() => {
      AOS.init({ once: true }); 
    }, []);

  return (
    <div className={styles.contenedor} data-aos="fade-up">
        <h2>Trabajos de Ejemplo</h2>
        <div className={styles.galeria}>
          
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index}`}
              className={styles.imagen}
              onClick={() => openLightbox(index)}
            />
          ))}

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
          )}
        </div>
        
    </div>
  )
}
