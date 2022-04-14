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
import { useRef } from "react";
import ProductBoxInner from "../ProductBox/ProductBoxInner";

const PopularProducts = () => {
  const sliderRef = useRef(null);
  const popularProducts = [
    {
      name: "AYAKKABI",
      category: "men-shoes",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Erkek Sweatshirt",
      category: "men-wear",
      img: "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/http://erp4res.obs.cn-east-3.myhuaweicloud.com/2021-06-30/8450/erp_b7c27952580a7c78271b69e1f1dffa6c_84507345.png",
      price: "249",
    },
    {
      name: "VARSITY Jacket",
      category: "men-wear",
      img: "https://uploads.documents.cimpress.io/v1/uploads/rf-924ad04c-52a1-423d-a4a3-8747529ead55-FrontA~110?tenant=cimpress-cn-uploads",
      price: "129",
    },
    {
      name: "Real Men Wear Pink Hoodie",
      category: "men-wear",
      img: "http://cdn.shopify.com/s/files/1/1248/6583/products/spod-1053307239-2-1_1024x1024.png?v=1602024185",
      price: "29,99",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },
    {
      name: "Laptop",
      category: "technology",
      img: "https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png",
      price: "100",
    },

  ];
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
          {popularProducts.map((product, index) => (
             <SwiperSlide key={index} className="product-card">
            <ProductBoxInner product={product}/>
           </SwiperSlide>
          ))}
        </Swiper>
        <Divider className="w-full" />
      </Flex>
    </Container>
  );
};

export default PopularProducts;
