
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Item from "./Item";
import DetalleProducto from "./DetalleProducto";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
        </Routes>
    )
}
