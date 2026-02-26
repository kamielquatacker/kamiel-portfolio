'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Zoom, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!isFullscreen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen((current) => !current);
    swiperInstance?.zoom.out();
  };

  const zoomIn = () => {
    if (!swiperInstance) {
      return;
    }

    const currentScale = swiperInstance.zoom.scale || 1;
    const nextScale = Math.min(currentScale + 0.4, 4);
    swiperInstance.zoom.in(nextScale);
  };
  const zoomOut = () => {
    if (!swiperInstance) {
      return;
    }

    const currentScale = swiperInstance.zoom.scale || 1;
    const nextScale = Math.max(currentScale - 0.4, 1);

    if (nextScale <= 1) {
      swiperInstance.zoom.out();
      return;
    }

    swiperInstance.zoom.in(nextScale);
  };

  return (
    <div
      className={`project-swiper-shell${isFullscreen ? ' project-swiper-shell--fullscreen' : ''}`}
      role={isFullscreen ? 'dialog' : undefined}
      aria-modal={isFullscreen ? 'true' : undefined}
      aria-label={isFullscreen ? `${title} image viewer` : undefined}
    >
      <div className="project-swiper-controls">
        {isFullscreen && (
          <>
            <button type="button" className="project-swiper-control" onClick={zoomOut} aria-label="Zoom out">
              −
            </button>
            <button type="button" className="project-swiper-control" onClick={zoomIn} aria-label="Zoom in">
              +
            </button>
          </>
        )}
        <button
          type="button"
          className="project-swiper-control"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Open fullscreen'}
        >
          <FontAwesomeIcon icon={isFullscreen ? faXmark : faExpand} aria-hidden="true" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Zoom, Keyboard]}
        className="project-swiper"
        navigation
        zoom={{ maxRatio: 4, minRatio: 1, toggle: true }}
        keyboard={{ enabled: true }}
        slidesPerView={1}
        spaceBetween={0}
        autoHeight={!isFullscreen}
        observer
        observeParents
        updateOnWindowResize
        onSwiper={setSwiperInstance}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <Image
                src={img}
                alt={`${title} ${index + 1}`}
                width={1600}
                height={900}
                sizes="(max-width: 900px) calc(100vw - 48px), 900px"
                className="project-swiper-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}