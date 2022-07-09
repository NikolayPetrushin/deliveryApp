import style from "./Cart.module.css";
import CartItems from "./CartItems/CartItems";
import Form from "./Form/Form";

const Cart = (props) => {
  return (
    <main>
      <div className={style.main}>
        <Form />
        <CartItems cartItems={props.cartItems} />
      </div>
      <button className={style.btn}>Submit</button>
    </main>
  );
};

export default Cart;
