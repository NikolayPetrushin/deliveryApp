import style from "./MenuItem.module.css";

const MenuItemSushi = (props) => {

  const item = props.items.sushi.map((i) => 
    <div key={i.id} className={style.item}>
      <div className={style.image}><img src={i.img} alt="item" /></div>
      <div className={style.namePrice}>
        <p className={style.name}>{i.name}</p>
        <p className={style.price}>Price: {i.price}$</p>
        <div className={style.addCart}>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );

  return <div className={style.menuItem}>{item}</div>;
};

export default MenuItemSushi;
