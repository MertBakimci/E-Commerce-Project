import { Container,Flex } from "../../assets/style/style";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCreative } from "swiper";
import { Navigation } from "swiper";
const BannerSlider = () => {

    const sliderItems = [
        {name:"For Man",href:"#",img:"http://www.shopatkerala.com/uploads/client_banner/banner_2514.jpg"},
        {name:"For Woman",href:"#",img:"https://i0.wp.com/bhaviniparis.com/wp-content/uploads/2021/10/website-banner-3-1-scaled.jpg?fit=2560%2C877&ssl=1"},
    ]


    return (
        <Container>
           <Swiper
      spaceBetween={50}
      modules={[Navigation,EffectCreative]}
      effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="banner-slider"
      slidesPerView={1}
      navigation={true}
    >
    {sliderItems.map((item,index) => (
        <SwiperSlide className="slide-item ">
            <a href={item.href} key={index}>
            <img src={item.img} alt="" />
            </a>
        </SwiperSlide>
    ))}

    </Swiper>
        </Container>
    )
}

export default BannerSlider; 