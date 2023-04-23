import { useCount } from "../../hooks/useCount.js"
import './ItemCount.css';

export const ItemCount = ({ ValInicial, min, max, onAdd, precio }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <div className="card-button">
      <div className="add-btns">
        <button className="btn btn-danger" onClick={minus}>-</button>
        <span className="cantidad">{count}</span>
        <button className="btn btn-success" onClick={sum}>+</button>
      </div>
      <div className="add-btns">
        <button className="btn btn-dark" onClick={reset}>Reset</button>
        <button className="btn btn-light" onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
      <p>Subtotal: {count * precio}</p>
    </div>
  )
}