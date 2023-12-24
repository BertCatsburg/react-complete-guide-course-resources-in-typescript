import React, {useContext} from 'react'
import { CartContext} from "../store/shopping-cart-context";
import { CartContextValueInterface} from "../types/types";

interface ProductInterface {
  id: string
  image: string
  title: string
  price: number
  description: string
}
export const Product = ({
  id,
  image,
  title,
  price,
  description,
}: ProductInterface) => {

  const cartCtx: CartContextValueInterface = useContext(CartContext)

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => cartCtx.addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
