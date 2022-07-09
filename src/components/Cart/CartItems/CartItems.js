import style from "./CartItems.module.css";

const CartItems = (props) => {
  const cartItem = props.cartItems.map((i) => (
    <div key={i.id} className={style.CartItem}>
      <div className={style.ImageItem}>
        <img src={i.img} alt="item"></img>
      </div>
      <div className={style.NamePriceAmount}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <input type="number" placeholder="1"/>
      </div>
    </div>
  ));

  return <div className={style.CartItems}>{cartItem}</div>;
};

export default CartItems;
