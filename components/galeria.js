import React, {useState, useEffect} from 'react'
import Lightbox from 'react-image-lightbox';
import { useRouter } from 'next/router'
import 'react-image-lightbox/style.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/galeria.module.css'

export default function sobreMi() {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const imagenes1 = [
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-94_iyubzc.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-96_onjfkz.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-97_jagezj.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592324/moyanofotografia/retrato/retrato-149_bjksjg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592322/moyanofotografia/retrato/retrato-135_asmtgv.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592322/moyanofotografia/retrato/retrato-136_fbadme.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592325/moyanofotografia/retrato/retrato-152_afo4y6.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592324/moyanofotografia/retrato/retrato-150_j366k6.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592323/moyanofotografia/retrato/retrato-145_dtiqqp.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592322/moyanofotografia/retrato/retrato-139_qio6zu.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592324/moyanofotografia/retrato/retrato-148_wurp3r.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592320/moyanofotografia/retrato/retrato-125_jvno4g.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592319/moyanofotografia/retrato/retrato-122_r4gvkt.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592319/moyanofotografia/retrato/retrato-121_aheind.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592318/moyanofotografia/retrato/retrato-116_fijvkh.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592316/moyanofotografia/retrato/retrato-111_g7wghz.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592316/moyanofotografia/retrato/retrato-114_xvxhkq.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592312/moyanofotografia/retrato/retrato-87_efjwtx.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-78_xm59so.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-81_jity5v.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592310/moyanofotografia/retrato/retrato-80_wceboq.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592308/moyanofotografia/retrato/retrato-70_dhav3y.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592308/moyanofotografia/retrato/retrato-73_xlkmlo.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592305/moyanofotografia/retrato/retrato-32_vhuslo.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592294/moyanofotografia/retrato/retrato-38_wk3ab0.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592293/moyanofotografia/retrato/retrato-37_gsck2p.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592298/moyanofotografia/retrato/retrato-22_xxt1c9.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592300/moyanofotografia/retrato/retrato-52_z6qffg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592296/moyanofotografia/retrato/retrato-46_g88xop.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592297/moyanofotografia/retrato/retrato-47_cyezj1.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592295/moyanofotografia/retrato/retrato-13_v4vwd5.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592294/moyanofotografia/retrato/retrato-09_o6ddgs.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592295/moyanofotografia/retrato/retrato-15_cqyx3t.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592293/moyanofotografia/retrato/retrato-06_xmx8ff.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592315/moyanofotografia/retrato/retrato-105_xxwavu.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686592314/moyanofotografia/retrato/retrato-101_yhuwkm.jpg'
    ];

    const imagenes2 = [
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672244/moyanofotografia/eventos/boda/boda-14_hnijhg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672244/moyanofotografia/eventos/boda/boda-18_fziu88.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672244/moyanofotografia/eventos/boda/boda-16_cagjhh.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672243/moyanofotografia/eventos/boda/boda-15_hcblxq.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672242/moyanofotografia/eventos/boda/boda-11_d68zcm.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672238/moyanofotografia/eventos/boda/boda-04_hvej4v.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672238/moyanofotografia/eventos/boda/boda-03_wh3u8z.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672240/moyanofotografia/eventos/boda/boda-09_a4spwc.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672211/moyanofotografia/eventos/salmorejotech/salmorejotech-18_r8j4cz.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672210/moyanofotografia/eventos/salmorejotech/salmorejotech-16_xncpw9.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672210/moyanofotografia/eventos/salmorejotech/salmorejotech-15_as0j7c.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-13_ggnxhn.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-12_q5itzr.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-11_h6n3ip.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672208/moyanofotografia/eventos/salmorejotech/salmorejotech-09_nffeyy.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672207/moyanofotografia/eventos/salmorejotech/salmorejotech-03_pqglw2.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672206/moyanofotografia/eventos/salmorejotech/salmorejotech-04_xg7kgs.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672214/moyanofotografia/eventos/salmorejotech/salmorejotech-30_xtimcf.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672213/moyanofotografia/eventos/salmorejotech/salmorejotech-28_hmja09.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-25_t3ltvd.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-23_jjkhyg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672213/moyanofotografia/eventos/salmorejotech/salmorejotech-26_gsqkbb.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-24_axzmzv.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672213/moyanofotografia/eventos/salmorejotech/salmorejotech-27_twqpdk.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-22_szpsld.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672211/moyanofotografia/eventos/salmorejotech/salmorejotech-19_youmba.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672211/moyanofotografia/eventos/salmorejotech/salmorejotech-17_gobgcu.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-14_cnebza.jpg'
    ]

    const imagenes3 = [
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672244/moyanofotografia/eventos/boda/boda-14_hnijhg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672244/moyanofotografia/eventos/boda/boda-18_fziu88.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672244/moyanofotografia/eventos/boda/boda-16_cagjhh.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672243/moyanofotografia/eventos/boda/boda-15_hcblxq.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672242/moyanofotografia/eventos/boda/boda-11_d68zcm.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672238/moyanofotografia/eventos/boda/boda-04_hvej4v.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672238/moyanofotografia/eventos/boda/boda-03_wh3u8z.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672240/moyanofotografia/eventos/boda/boda-09_a4spwc.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672211/moyanofotografia/eventos/salmorejotech/salmorejotech-18_r8j4cz.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672210/moyanofotografia/eventos/salmorejotech/salmorejotech-16_xncpw9.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672210/moyanofotografia/eventos/salmorejotech/salmorejotech-15_as0j7c.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-13_ggnxhn.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-12_q5itzr.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-11_h6n3ip.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672208/moyanofotografia/eventos/salmorejotech/salmorejotech-09_nffeyy.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672207/moyanofotografia/eventos/salmorejotech/salmorejotech-03_pqglw2.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672206/moyanofotografia/eventos/salmorejotech/salmorejotech-04_xg7kgs.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672214/moyanofotografia/eventos/salmorejotech/salmorejotech-30_xtimcf.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672213/moyanofotografia/eventos/salmorejotech/salmorejotech-28_hmja09.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-25_t3ltvd.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-23_jjkhyg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672213/moyanofotografia/eventos/salmorejotech/salmorejotech-26_gsqkbb.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-24_axzmzv.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672213/moyanofotografia/eventos/salmorejotech/salmorejotech-27_twqpdk.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672212/moyanofotografia/eventos/salmorejotech/salmorejotech-22_szpsld.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672211/moyanofotografia/eventos/salmorejotech/salmorejotech-19_youmba.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672211/moyanofotografia/eventos/salmorejotech/salmorejotech-17_gobgcu.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686672209/moyanofotografia/eventos/salmorejotech/salmorejotech-14_cnebza.jpg'
    ]

    const imagenes4 = [
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670626/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-86_zwowuc.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670590/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-46_cmigkc.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670625/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-87_diudke.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670633/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-88_kluzmw.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670626/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-85_d59ns5.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670625/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-83_azxfgs.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670619/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-80_jq6sl0.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670618/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-78_snxiyx.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670617/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-77_c3xqjd.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670617/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-73_i6a9el.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670616/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-79_tb8yp0.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670614/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-74_hohqsb.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670614/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-76_nevlgq.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670609/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-69_jtbwda.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670604/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-62_xmgujd.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670606/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-64_cfypfh.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670601/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-63_jahdku.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670599/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-56_l6mxvr.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670594/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-50_txyd6w.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670593/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-48_fnywyn.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670581/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-30_y97wfa.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670582/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-31_db2v66.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670581/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-32_bdd7lg.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670575/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-20_l42qn6.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670574/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-21_fdca9z.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670571/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-12_f0rfv1.jpg',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670511/moyanofotografia/deporte/cromos/Tom%C3%A1sP%C3%A1ezAranda_s80d54.png',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670509/moyanofotografia/deporte/cromos/Marcos2_fgtb9h.png',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670509/moyanofotografia/deporte/cromos/RafaelS%C3%A1nchez_nehxm4.png',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670507/moyanofotografia/deporte/cromos/AlejandroBlanco_b7c8yh.png',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670507/moyanofotografia/deporte/cromos/JuanPabloOjeda_iiowsz.png',
      'https://res.cloudinary.com/dmy4uufym/image/upload/v1686670509/moyanofotografia/deporte/cromos/Francisco%C3%81lcantara_a4pxtt.png'
    ]
  
    const openLightbox = (index) => {
      setPhotoIndex(index);
      setIsOpen(true);
    };

    useEffect(() => {
      AOS.init({ once: true }); 
    }, []);

  return (
    <div className={styles.contenedor}>
      {router.pathname === '/retratos' ? (
        <div className={styles.galeria}>
          {imagenes1.map((image, index) => (
            <div className={styles.container}>
              <Image
                key={index}
                src={image}
                width={600}
                height={1800}
                alt={`Imagen ${index}`}
                className={styles.imagen}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}

          {isOpen && (
            <Lightbox
              mainSrc={imagenes1[photoIndex]}
              nextSrc={imagenes1[(photoIndex + 1) % imagenes1.length]}
              prevSrc={imagenes1[(photoIndex + imagenes1.length - 1) % imagenes1.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + imagenes1.length - 1) % imagenes1.length)
              }
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagenes1.length)}
            />
          )}
        </div>
      ) : ''}

      {router.pathname === '/eventos' ? (
              <div className={styles.galeria}>
                {imagenes2.map((image, index) => (
                  <div className={styles.container}>
                    <Image
                      key={index}
                      src={image}
                      width={600}
                      height={1800}
                      alt={`Imagen ${index}`}
                      className={styles.imagen}
                      onClick={() => openLightbox(index)}
                    />
                  </div>
                ))}

                {isOpen && (
                  <Lightbox
                    mainSrc={imagenes2[photoIndex]}
                    nextSrc={imagenes2[(photoIndex + 1) % imagenes2.length]}
                    prevSrc={imagenes2[(photoIndex + imagenes2.length - 1) % imagenes2.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex((photoIndex + imagenes2.length - 1) % imagenes2.length)
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagenes2.length)}
                  />
                )}
              </div>
            ) : ''}

      {router.pathname === 'orlas' ? (
              <div className={styles.galeria}>
                {imagenes3.map((image, index) => (
                  <div className={styles.container}>
                    <Image
                      key={index}
                      src={image}
                      width={600}
                      height={1800}
                      alt={`Imagen ${index}`}
                      className={styles.imagen}
                      onClick={() => openLightbox(index)}
                    />
                  </div>
                ))}

                {isOpen && (
                  <Lightbox
                    mainSrc={imagenes3[photoIndex]}
                    nextSrc={imagenes3[(photoIndex + 1) % imagenes3.length]}
                    prevSrc={imagenes3[(photoIndex + imagenes3.length - 1) % imagenes3.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex((photoIndex + imagenes1.length - 1) % imagenes3.length)
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagenes3.length)}
                  />
                )}
              </div>
            ) : ''}

      {router.pathname === '/deporte' ? (
              <div className={styles.galeria}>
                {imagenes4.map((image, index) => (
                  <div className={styles.container}>
                    <Image
                      key={index}
                      src={image}
                      width={600}
                      height={1800}
                      alt={`Imagen ${index}`}
                      className={styles.imagen}
                      onClick={() => openLightbox(index)}
                    />
                  </div>
                ))}

                {isOpen && (
                  <Lightbox
                    mainSrc={imagenes4[photoIndex]}
                    nextSrc={imagenes4[(photoIndex + 1) % imagenes4.length]}
                    prevSrc={imagenes4[(photoIndex + imagenes4.length - 1) % imagenes4.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex((photoIndex + imagenes4.length - 1) % imagenes4.length)
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagenes4.length)}
                  />
                )}
              </div>
            ) : ''}
    </div>
  )
}
