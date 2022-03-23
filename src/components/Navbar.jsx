import { Icons } from "../assets/icons";
import { BrandName, Flex, SearchBar } from "../assets/style/style";
import {IoSearchOutline} from 'react-icons/io5';
import {FiUser,FiUserPlus} from 'react-icons/fi';


const Navbar = () => {
    return (
       <nav>
            <Flex justifyBetween>
            <BrandName>SHOPY</BrandName>
            <SearchBar className="grayBg">
                <input type="text" />
               <button>
               <Flex justifyCenter alignCenter>
               <IoSearchOutline size={24}/>
               </Flex>
               </button>
            </SearchBar>
        </Flex>
       </nav>
    )
}

export default Navbar;