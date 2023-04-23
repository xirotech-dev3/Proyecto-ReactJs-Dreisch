import { Link } from "react-router-dom";
import { CartWidget }  from '../CartWidget/CartWidget.jsx'
import { Categorias } from "./Categorias/Categorias";
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid container-nav">
                <Link className="navbar-brand" to={"/"}>
                    <img className="navbar-logo-img" src="../img/logo.png" alt="Logo"/>
                </Link>
                
                <h2>Grabac Store</h2>

                <CartWidget number={0}/>
            </div>
            <div className="navbar-categorias">
                <Categorias />
            </div>
        </nav>
    )
};
