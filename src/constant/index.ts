import { SwiperOptions } from "swiper/types";

// --- brand slider ---
export const brand_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

//Footer text slider active
export const footer_text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}

// text-slider slider active
export const text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

//brand-slider-2 active
export const brand_slider_two_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// testimonial slide active
export const testimonial_slide_params: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 200,
    autoplay: true,
    pagination: {
        el: ".px-testimonial-dot",
        clickable: true,
    }
};

//------postbox-slider-----//
export const postbox_slider_params: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
        '1400': {
            slidesPerView: 1,
        }
    },
    // Navigation arrows
    navigation: {
        prevEl: '.postbox-arrow-prev',
        nextEl: '.postbox-arrow-next',
    },

}
//------brand-slider-----//
export const text_slider_active: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
//Personal Portfolio Hero Text Slider Active
export const hero_text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
//Personal Portfolio Hero Text Slider Active
export const gallery_image_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
//brand-slider
export const brand_text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 20000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
//portfolio-slider
export const portfolio_slider_params: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    pagination: {
        el: ".px-pd-2-dot",
        clickable: true,
    },
    breakpoints: {
        '1600': { slidesPerView: 3 },
        '1400': { slidesPerView: 3 },
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
}
