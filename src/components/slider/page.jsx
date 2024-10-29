'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  // Sample image data - replace with your actual images
  const images = [
    '/assets/bgtwo.jpg',
    '/assets/bgone.jpg',
    '/assets/bgthree.jpg',
   
  ];

  return (
    <div className="container mx-auto py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-[80%] h-[500px]  object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
