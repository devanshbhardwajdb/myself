'use client'
import GalleryCarousel from "@components/GalleryCarousel";

const Gallery = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col min-h-[100vh] h-auto px-[5vw] gap-5 pt-[15vh] bg-[#ffbbcc] page'>
            <GalleryCarousel />
        </div>
    );
};

export default Gallery;
