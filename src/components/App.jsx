import { useState } from 'react'
import '../App.css'
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting="Saludos!"/>
    </>
  )
}

export default App
