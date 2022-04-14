import { RiShoppingBasketLine } from "react-icons/ri";
import { Divider } from "../../../assets/style/style";


const ProductBoxInner = ({product}) => {
    return (
        <>
         <h1 className="product-name text-center">{product.name}</h1>
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
                 <RiShoppingBasketLine size={34} />
               </button>
             </div>
             </>
    )
}

export default ProductBoxInner;