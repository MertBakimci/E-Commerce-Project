import { Icons } from "../assets/icons";
import {
  BrandName,
  Container,
  Flex,
  FlexButton,
  SearchBar,
} from "../assets/style/style";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/getDatas";

const Navbar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.getDatas);
  let navigate = useNavigate();
  const [ifMobile, setIfMobile] = useState(
    window.innerWidth <= 1000 ? true : false
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIfMobile(window.innerWidth <= 1000 ? true : false);
    });
    dispatch(getCategories());
    console.log(categories)
  }, [dispatch]);



  return (
    <nav>
      <Container>
        <Flex justifyEvenly flexCol className="gap-20">
          <Flex className="w-full" justifyBetween alignCenter>
            <span
              className="cursor-pointer w-full"
              onClick={() => navigate("/")}
            >
              <BrandName className="w-full">SHOPY</BrandName>
            </span>

            <SearchBar className="grayBg">
              <input type="text" />
              <button>
                <Flex justifyCenter alignCenter>
                  <IoSearchOutline size={24} />
                </Flex>
              </button>
            </SearchBar>
            <Flex className="gap-10 w-full" justifyEnd>
              <FlexButton
                className="gap-5 btn-primary"
                justifyCenter
                alignCenter
              >
                <FiUser size={20} />
                <span>SIGN IN</span>
              </FlexButton>
              <FlexButton
                className="gap-5 btn-primary"
                justifyCenter
                alignCenter
              >
                <FiUserPlus size={20} />
                <span>SIGN UP</span>
              </FlexButton>
            </Flex>
          </Flex>

          <Flex justifyCenter alignCenter className="gap-5 nav-links-container">
            {categories  ? 
         "" : categories.map((item, index) => (
            <span
            key= {index}
              className="nav-links cursor-pointer"
              onClick={() => navigate(`/` + item.name)}
            >
              {item.name}
            </span>
          ))    
        }
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
