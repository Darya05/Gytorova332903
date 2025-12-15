import { useState } from 'react'
import './pizzaBlock.css'


function Block({title, text, imageadress}) {
    const [count, setCount] = useState(0) // счетчик

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addToCart = () => {
    alert(`Добавлено ${count} пицц "${title}" в корзину!`)
    setCount(0) // обнуляем счетчик после добавления
  }
  return (
    <div className="block-container">

      <h2>{title}</h2>
      <p>{text}</p>
      <img src={imageadress} alt={title}></img>
      <div className="controls">
        <div className="counter">
          <button 
            className="counter-btn minus" 
            onClick={decrement}
            disabled={count === 0}
          >
            −
          </button>
          <span className="count">{count}</span>
          <button 
            className="counter-btn plus" 
            onClick={increment}
          >
            +
          </button>
        </div>
        
        <button 
          className="cart-btn"
          onClick={addToCart}
          disabled={count === 0}
        >
          В корзину
        </button>
      </div>
    </div>
  )
}

export default Block
