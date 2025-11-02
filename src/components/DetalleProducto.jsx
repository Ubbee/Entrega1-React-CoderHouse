import { Flex } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function DetalleProducto() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(r => r.json())
            .then(data => setProducto(data))
            .catch(console.error);
    }, [id]);

    if (!producto) return <div>Cargando…</div>;

    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.images?.[0]} width={200} />
            <p>{producto.description}</p>
            <p>$ {producto.price}</p>
        </div>
    );
}
