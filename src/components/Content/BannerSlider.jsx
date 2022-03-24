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
        {name:"For Man",href:"#",img:"http://customizesportsuniforms.com/_admin/pictures/29_banner.jpg"},
        {name:"For Woman",href:"#",img:"https://www.livafluidfashion.com/birlaliva_cms/data_content/page_img/Western-ware-banner2.jpg"},
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
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
    >
    {sliderItems.map((item,index) => (
        <SwiperSlide className="slide-item">
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