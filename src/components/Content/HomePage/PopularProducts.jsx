import {
  Container,
  Divider,
  Flex,
  Header,
} from "../../../assets/style/style";


import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import ProductBoxInner from "../ProductBox/ProductBoxInner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/getDatas";
import Loading from "../../Loading";

const PopularProducts = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
const {products} = useSelector((state) => state.getDatas);
useEffect(() => {
 
  setTimeout(() => {
    dispatch(getProducts());
  }, 200);
}, [])

  return (
    <Container className="popular-items">
      <Flex flexCol className="w-full ">
        <Flex alignCenter className="w-full gap-20 slider-header">
          <Header>Popular Items</Header>
          <Divider className="w-full" />
          <Flex className="slider-buttons gap-10">
            <button
              onClick={() => sliderRef.current.swiper.slidePrev()}
              id="swiper-prev"
            >
              <GrFormPrevious size={48} />
            </button>
            
            <button
              onClick={() => sliderRef.current.swiper.slideNext()}
              id="swiper-next"
            >
              <GrFormNext size={48} />
            </button>
          </Flex>
        </Flex>
        <Divider className="w-full" />

       
         {products != null ?

<Swiper
className="w-full swiper-c"
modules={[Navigation]}
spaceBetween={50}
ref={sliderRef}
slidesPerView={4}
autoWidth={true}
slidesPerGroup={1}
speed= {700}
breakpoints={{
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,

  },
  1200: {
    slidesPerView: 3,

  },
  1600: {
    slidesPerView: 4,

  },
  1920: {
    slidesPerView: 4,

  },
}}
>
       {products.length > 0  ?
        
          products.map((product, index) => (
           <SwiperSlide key={index} className="product-card">
          <ProductBoxInner product={product}/>
         </SwiperSlide>  ))
       
       :  <div className="product-card border-0"><Flex justifyCenter alignCenter><h1>There are no products in this category</h1></Flex></div> }
         </Swiper>
       : <Loading/>
         
         }
       
        <Divider className="w-full" />
      </Flex>
    </Container>
  );
};

export default PopularProducts;
