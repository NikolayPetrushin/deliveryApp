import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import style from "./Shop.module.css";

const Shop = (props) => {
  return (
    <main className={style.main}>
      <MainMenu mainMenuItem={props.state.mainMenuItem} />
      <Outlet />
    </main>
  );
};

export default Shop;
