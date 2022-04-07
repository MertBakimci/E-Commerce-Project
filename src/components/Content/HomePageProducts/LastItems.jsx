import {
  Container,
  Divider,
  Flex,
  Header,
  ProductCard,
} from "../../../assets/style/style";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const LastItems = () => {
  return (
    <Container className="last-added-items">
      <Flex flexCol className="w-full ">
        <Flex alignCenter className="w-full gap-20">
          <Header>Last Added Items</Header>
          <Divider className="w-full" />
          <Flex className="slider-buttons gap-10">
            <button id="swiper-prev">
              <GrFormPrevious size={48} />
            </button>
            <button id="swiper-next">
              <GrFormNext size={48} />
            </button>
          </Flex>
        </Flex>
        <Divider className="w-full" />
        <Swiper
        className="w-full swiper-c"
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          prevButton=".swiper-prev"
	nextButton=".swiper-next"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="product-card">
            <h1 className="name">LAPTOP</h1>
            <Divider className="divider-primary w-full" />
            <div className="image">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png"
                alt=""
              />
            </div>
            <Divider className="divider-primary w-full" />
            <div className="details">
              <span>100$</span>
              <Divider className="divider-primary w-full" />
              <button>
                <RiShoppingBasketLine size={36} />
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="product-card">
            <h1 className="name">LAPTOP</h1>
            <Divider className="divider-primary w-full" />
            <div className="image">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png"
                alt=""
              />
            </div>
            <Divider className="divider-primary w-full" />
            <div className="details">
              <span>100$</span>
              <Divider className="divider-primary w-full" />
              <button>
                <RiShoppingBasketLine size={36} />
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="product-card">
            <h1 className="name">LAPTOP</h1>
            <Divider className="divider-primary w-full" />
            <div className="image">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png"
                alt=""
              />
            </div>
            <Divider className="divider-primary w-full" />
            <div className="details">
              <span>100$</span>
              <Divider className="divider-primary w-full" />
              <button>
                <RiShoppingBasketLine size={36} />
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="product-card">
            <h1 className="name">LAPTOP</h1>
            <Divider className="divider-primary w-full" />
            <div className="image">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png"
                alt=""
              />
            </div>
            <Divider className="divider-primary w-full" />
            <div className="details">
              <span>100$</span>
              <Divider className="divider-primary w-full" />
              <button>
                <RiShoppingBasketLine size={36} />
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="product-card">
            <h1 className="name">LAPTOP</h1>
            <Divider className="divider-primary w-full" />
            <div className="image">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png"
                alt=""
              />
            </div>
            <Divider className="divider-primary w-full" />
            <div className="details">
              <span>100$</span>
              <Divider className="divider-primary w-full" />
              <button>
                <RiShoppingBasketLine size={36} />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        <Divider className="w-full" />
      </Flex>
    </Container>
  );
};

export default LastItems;
