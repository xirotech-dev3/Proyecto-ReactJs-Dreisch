/*
const Categorias = () => {
    return (
        <ul>
            <li className='categoria-item'><a href="/#">Werable</a></li>
            <li className='categoria-item'><a href="/#">Accesorios</a></li>
            <li className='categoria-item'><a href="/#">Decoracion</a></li>            
        </ul>
    )
};
*/
import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="categoria-item" to={"/category/Werable"}><p>Werable</p></Link>
            <Link className='categoria-item' to={"/category/Accesorio"}><p>Accesorio</p></Link>
            <Link className='categoria-item' to={"/category/Decoracion"}><p>Decoracion</p></Link>
        </ul>
    );
}