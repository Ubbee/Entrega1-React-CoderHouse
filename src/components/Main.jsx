
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
        </Routes>
    )
}
//https://dummyjson.com/products
