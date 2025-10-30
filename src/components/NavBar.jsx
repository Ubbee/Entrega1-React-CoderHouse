import { Link } from "react-router"
import CartWidget from "./cartWidget"
export default function NavBar() {
    return (
        <div className="headerContainer">
            <h1>NavBar</h1>
            <ul className="iconosHeader">
                <Link to="/">Inicio</Link>
                <Link to="/">Productos</Link>
                <Link to="/">Contacto</Link>
                <Link to="/"><CartWidget /></Link>
            </ul>
        </div>
    )
}
