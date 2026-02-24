'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation]}
      className="project-swiper"
      navigation
      slidesPerView={1}
      spaceBetween={0}
      autoHeight
      observer
      observeParents
      updateOnWindowResize
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img}
            alt={`${title} ${index + 1}`}
            width={1600}
            height={900}
            sizes="(max-width: 900px) calc(100vw - 48px), 900px"
            className="project-swiper-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}