import { Link } from 'react-router-dom'
import './Item.css'
//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt={item.nombre}/>
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.precio}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-primary">Ver Producto</button></Link>
            </div>        
        </div>

    )
}
/*
<div class="card">
    <img src="./assets/img/shop-remera.jpg" class="card-img-top" alt="remera">
    <div class="card-body">
        <h5 class="card-title">Remera "Pilots"</h5>
        <p class="card-text">$ 2300</p>
        <div class="card-btns">
            <button class="btn btn-primary btn-add" data-id="2"><i data-id="2" class="fa-solid fa-cart-plus"></i></button>
        </div>
    </div>
</div>
*/