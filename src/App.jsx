import { useState } from 'react'
import './App.css'
import Block from "./components/pizzaBlock.jsx"
import pizzaImage from './assets/pizza.png'



function App() {

  return (
 <div className="app-container">
     
      <Block
        title="Пепперони"
        text="Острая салями пепперони, сыр моцарелла, томатный соус"
        imageadress={pizzaImage} // я называю этот прием "если гора не идет к Магамеду, то магамед достает бур"
      />
    </div>

  )
}

export default App

