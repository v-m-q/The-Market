import { updateCartProductQuantity } from "../../APIs/cart";
import { useState } from "react";

export default function CartItem({ cartData }) {
  const base_URL = "http://127.0.0.1:8000";

  const [quantity, setQuantity] = useState(cartData.quantity); // Initial quantity state
  const [citemPrice, setcitemPrice] = useState(cartData.product.price*cartData.quantity); // Initial quantity state

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  
  const updateQuantity = (e, cartItemId) => {
    
    setcitemPrice(cartData.product.price*quantity)
      e.preventDefault();
      updateCartProductQuantity(cartItemId, quantity)
        .then(() => {
          alert("Updated to cart successfully");
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
          <span className="icon_close"></span>
        </td>
      </tr>
    </>
  );
}
