import { addProductToCart } from "../../APIs/add_to_cart";

export default function CartItem({ cartData }) {
  const base_URL = "http://127.0.0.1:8000";

  function addToCart(e, id) {
    e.preventDefault();
    addProductToCart(id)
      .then(() => {
        alert("Added to cart successfully");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <tr>
        <td class="cart__product__item">
          <img 
          src={`${base_URL}/${cartData.product.thumbnail}`} 
          width={'140px'} 
          style={{'border-radius': '15px' }}
          alt="" />
          <div class="cart__product__item__title">
            <h6>{cartData.product.name}</h6>
            <div class="rating">
              {/* <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i> */}
            </div>
          </div>
        </td>
        <td class="cart__price">$ {cartData.product.price}</td>
        <td class="cart__quantity">
          <div class="pro-qty">
            <input type="text" value="1" />
          </div>
        </td>
        <td class="cart__total">$ 300.0</td>
        <td class="cart__close">
          <span class="icon_close"></span>
        </td>
      </tr>
    </>
  );
}
