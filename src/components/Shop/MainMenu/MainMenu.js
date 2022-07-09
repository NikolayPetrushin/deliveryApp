import style from './MainMenu.module.css'
import {Link} from 'react-router-dom'

const MainMenu = (props) => {
    const mainMenuItem = props.mainMenuItem.map(i => <Link key={i.id} to={i.link} className={style.menuItem}>{i.menuItem}</Link>)
    return(
        <div className={style.mainMenu }>
            <h2>Shops :</h2>
            {mainMenuItem}
        </div>
    )
}

export default MainMenu