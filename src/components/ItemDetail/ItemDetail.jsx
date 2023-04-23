import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css';
export const ItemDetail = ({ item }) => {

    const onAdd = (contador) => {
        console.log(contador)
        console.log(item)
    }

    return (
        <div>
            
        <section className="container">
            <div className="row row-sell">
                <div className="col-sm-12 col-md-6 sell-img-container">
                    <img className="sell-img" src={item.img}  alt="shop-item"/>
                </div>

                <div className="col-sm-12 col-md-6">
                    {/* Para que quede mas prolijo, tengo que hacer mas componenes asi no sobrecargo este con tantas cosas*/}
                    <div className="sell-aside">
                        <h2> ${item.nombre}</h2>
                        <h3>${item.precio}</h3>
                        <h4>Stock disponible ({item.stock})</h4>
                        <ul className="sell-card-list">
                            <li><img src="../img/shop-credit-card.png" alt="credit-card"/></li>
                            <li><img src="../img/shop-ml.png" alt="mercado-pago"/></li>
                            <li><img src="../img/shop-mc.png" alt="master-card"/></li>
                            <li><img src="../img/shop-visa.png" alt="visa"/></li>
                       
                        </ul>
                        {/* <ul className="sell-shipping-list">
                            <p>Costo del envio</p>
                            <li><img src="../img/shop-shipping.png" alt="shipping-img"/></li>
                            <li><input type="number" name="cp" id="cp"/></li>
                        </ul> */}
                        <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} precio={item.precio} />
                    </div>

                </div>
            </div>
        </section>

    </div>
    )
}

