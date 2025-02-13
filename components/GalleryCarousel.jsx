'use client';

import React from 'react';
import { gallery } from '@utils/gallery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { SwiperSlide, Swiper as SwiperReact } from 'swiper/react';


const GalleryCarousel = () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    };

    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            <SwiperReact {...params} className="flex justify-center items-center w-full h-full ">
                {gallery.map((item) => (
                    <SwiperSlide key={item.id} className="flex flex-col items-center justify-center">
                        <img src={item.photo} alt={item.heading} className="rounded-lg shadow-md max-h-[60vh] object-cover bg-green-400 object-center w-96 h-96" />
                        <h1 className="text-xl text-center text-black font-semibold mt-2">{item.heading}</h1>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next text-[#ffbbcc]"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </SwiperReact>
        </div>
    );
};

export default GalleryCarousel;
