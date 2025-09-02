import React, { useEffect, useRef, useState } from 'react'
import { useDocumentHead } from '../../hooks/useDocumentHead'
import type { VideoSourceProps } from '../../types/video.types';
import { TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from "react-icons/ti";


import './construccion.scss';
import Reloj from '../../components/reloj/ui/Reloj';

const Construccion: React.FC = () => {

  const endDate = '2025-09-29T18:00:00';

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [shouldShowVideo, setShouldShowVideo] = useState<boolean>(false);


  useDocumentHead({
    title: 'Inicio - Desarrollo de Software que Crece con tu Negocio',
    description: 'Metodología en espiral que prioriza la gestión de riesgos y escalabilidad. Fragmentamos proyectos por funcionalidades entregables cada 2 semanas.',
    keywords: 'desarrollo software escalable, metodología espiral, aplicaciones web PYMEs, sistemas información Bogotá',
    ogTitle: 'NodoStudio - Software que Crece con tu Negocio',
    ogDescription: 'Transformamos la incertidumbre en confianza con nuestra metodología única.',
    ogImage: 'https://nodostudio.com.co/images/og-image-home.jpg',
    ogType: 'website',
    canonical: 'https://nodostudio.com.co'
  })

  useEffect(() => {
    const checkVideoSupport = () => {
      const isDesktop = window.innerWidth > 768;
      const hasGoodConnection = !('connection' in navigator) || 
        (navigator as any).connection?.effectiveType === '4g' ||
        (navigator as any).connection?.downlink > 1.5;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setShouldShowVideo(isDesktop && hasGoodConnection && !prefersReducedMotion);
    };

    checkVideoSupport();
    window.addEventListener('resize', checkVideoSupport);
    
    return () => window.removeEventListener('resize', checkVideoSupport);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldShowVideo) return;

    const handleCanPlay = () => setIsVideoLoaded(true);
    const handleError = () => {
      console.warn('Video failed to load, falling back to image');
      setIsVideoLoaded(false);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [shouldShowVideo]);

  const videoSources: VideoSourceProps[]= [ 
    { src: '/videos/hero/nodostudio-hero.webm', type: 'video/web' },
    { src: '/videos/hero/nodostudio-hero.mp4', type: 'video/mp4'}
  ]

  return (
    <section className="container-hero">
      <div className='container-hero-video'>
        { shouldShowVideo ? (
          <>
            <video 
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster='/images/hero/hero-poster.jpg'
              className={`hero-video ${ isVideoLoaded ? 'Loaded' : 'loading' } `}
           >
              {videoSources.map(( source, index) => ( 
                <source key={index} src={source.src} type={source.type} />
              ))}
              <img 
                src="/image/hero/hero-fallback.jpg" 
                alt="NodoStudio - desarrollo de software escalable " 
                className='video-fallback' 
              />
            </video>
            <div className='video-overlay'></div>
          </>
        ):(
          <div className='hero-image-bg' 
          style={{ backgroundImage: 'url(/images/hero/hero-mobile-bg.jpg' }}
          />
        )};
      </div>
      <div className='container-hero-content'>
        <section className='container-hero-content-left'>
          <div className='container-hero-content-info'>
            <div className='container-hero-content-info-title'  >
              <h2>BIENVENIDOS A NODOSTUDIO</h2>
              <p>Desarrollamos software escalable donde los clientes se apropian de su negocio digital</p>
            </div>  
            <div className='container-hero-content-info-cards'>
              <div className='card'>
                <span>Desarrollo de software</span>
                <p>Desarrollamos sistemas robustos utilizando nuestra metodología en espiral patentada. Cada proyecto se construye con visión de futuro, implementando las mejores prácticas de arquitectura de software para garantizar escalabilidad, mantenibilidad y rendimiento óptimo a largo plazo.</p>
              </div>  
              <div className='card'>
                <span> Diseño de sotware </span>
                <p>Creamos experiencias digitales que no solo se ven bien, sino que resuelven problemas reales. Cada interfaz se diseña pensando en la usabilidad, accesibilidad y conversión, garantizando que tus usuarios encuentren exactamente lo que buscan.</p>
              </div>
            </div>

          </div> 
          <div className='container-hero-content-reloj'>
            <p>Esta pagina estará lista en </p>
            <Reloj  targetDate={endDate}/>
          </div>
        </section>
        <div className='container-hero-content-social'>
          <ul>
            <li><TiSocialGithubCircular /></li>
            <li><TiSocialLinkedinCircular /></li>
            <li><TiSocialInstagramCircular /></li>
          </ul>
        </div>  
      </div>
    </section>
  )
}

export default Construccion
