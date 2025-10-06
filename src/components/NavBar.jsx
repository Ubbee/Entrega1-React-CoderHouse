import CartWidget from "./cartWidget"
export default function NavBar() {
    return (
        <div className="headerContainer">
            <h1>NavBar</h1>
            <ul className="iconosHeader">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li><CartWidget /></li>
            </ul>
        </div>
    )
}
