import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Item from "./Item";
import { Flex } from "antd";

export default function ItemListContainer() {
  const params = useParams()

  const [productos, setProductos] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then(data => data.json())
      .then((data) => {
        const result = data.products
        setProductos(result)
      })
  }, []);
  const [value, setValue] = React.useState('horizontal');

  const EstiloBase = {
    width: '25%',
    height: 54
  };

  return (
    <Flex gap="middle" wrap="wrap" className="contenedor">
      {productos.map((producto) => {
        return <Item productos={producto} />
      })}
    </Flex>
  );


}
