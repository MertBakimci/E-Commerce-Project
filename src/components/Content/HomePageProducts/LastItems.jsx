import { Container, Divider, ProductCard } from "../../../assets/style/style";
import {RiShoppingBasketLine} from 'react-icons/ri';
const LastItems = () => {
    return (
        <Container>
            
            <ProductCard>
                    <h1 className="name">LAPTOP</h1>
                    <Divider className="divider-primary w-full" />
                    <div className="image">
                        <img src="https://images.ctfassets.net/od02wyo8cgm5/6mLHhPkYkIMZrO8ct7HauF/541b2ed65e4fd7909d8e55ba86af0df4/cloud_2-fw19-black_white-m-g1.png" alt="" />
                    </div>
                    <Divider className="divider-primary w-full" />
                    <div className="details">
                        <span>100$</span>
                        <Divider className="divider-primary w-full" />
                        <button>
                            <RiShoppingBasketLine size={48}/>
                        </button>
                    </div>
                </ProductCard>
     
        </Container>
    )
}

export default LastItems;