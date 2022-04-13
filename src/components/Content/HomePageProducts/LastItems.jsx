import {
  Container,
  Divider,
  Flex,
  Header,
  ProductCard,
} from "../../../assets/style/style";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
const LastItems = () => {
  const sliderRef = useRef(null);

  const lastAddedItems = [
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
    <Container className="last-added-items">
       <Flex flexCol className="w-full ">
        <Flex alignCenter className="w-full gap-20 slider-header">
          <Header>Last Items</Header>
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
          modules={[Navigation,A11y]}
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
           {lastAddedItems.map((product, index) => (
            <SwiperSlide key={index} className="product-card">
              <h1 className="name">{product.name}</h1>
              <Divider className="divider-primary w-full" />
              <div className="image">
                <img
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <Divider className="divider-primary w-full" />
              <div className="details">
                <span>{product.price}$</span>
                <Divider className="divider-primary w-full" />
                <button>
                  <RiShoppingBasketLine size={36} />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Divider className="w-full" />
      </Flex>
    </Container>
  );
};

export default LastItems;
