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
    <Swiper modules={[Navigation]} navigation>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img}
            alt={`${title} ${index + 1}`}
            width={800}
            height={600}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}