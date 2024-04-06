import { removeFromCartData, updateCartProductQuantity } from "../../APIs/cart";
import { useState } from "react";

export default function CartItem({ cartData, chg, data }) {
  const base_URL = "http://127.0.0.1:8000";

  const [quantity, setQuantity] = useState(cartData.quantity); 
  const [citemPrice, setcitemPrice] = useState(cartData.product.price*cartData.quantity); 

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const removeCartItem = (e, ci_id) => {
    e.preventDefault();
    chg(data.filter((item) => item.cartitem_id  !== ci_id));
    removeFromCartData(ci_id)
    .then(() => {
      alert("Removed from cart successfully");
    })
    .catch((err) => alert("error: something wrong happened"));
  };
  
  const updateQuantity = (e, cartItemId) => {
    e.preventDefault();
    
    // ch_cart_tp(cart_price+cartData.product.price*quantity)
    console.log(cartData.product.price*quantity);

    updateCartProductQuantity(cartItemId, quantity)
    .then(() => {
          alert("Updated to cart successfully");
          setcitemPrice(cartData.product.price*quantity)
        })
        .catch((err) => alert("error: Quantity is more than available"));
  };

  return (
    <>
      <tr>
        <td className="cart__product__item">
          <img 
          src={`${base_URL}/${cartData.product.thumbnail}`} 
          width={'140px'} 
          style={{'border-radius': '15px' }}
          alt="" />
          <div className="cart__product__item__title">
            <h6>{cartData.product.name}</h6>
            <div className="rating">
              {/* <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i> */}
            </div>
          </div>
        </td>
        <td className="cart__price">$ {cartData.product.price}</td>
        <td className="">
          <div>
            <input type="number" style={{'width': '3em'}} min={1} max={50} value={quantity} onChange={handleQuantityChange} />
          </div>
        </td>
            <td>
              <button type="button" class="btn btn-success" onClick={(e) => updateQuantity(e, cartData.cartitem_id)} style={{'margin': '8px'}}>Apply</button>
            </td>

        <td className="">
          <div>
            <input type="number" readOnly style={{'width': '4em'}} value={quantity}/>
          </div>
        </td>

        <td className="cart__total">$ {citemPrice}</td>
        <td className="cart__close">
          <span className="icon_close" onClick={(e) => removeCartItem(e, cartData.cartitem_id)}></span>
        </td>
      </tr>
    </>
  );
}
