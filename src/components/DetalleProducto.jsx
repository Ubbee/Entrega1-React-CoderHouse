import { Flex } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function DetalleProducto(prop) {
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
{/* <Flex gap="middle">
            <Flex vertical gap="middle">
                <PageTitle title={`${producto.title} - ${formatedPrice}`} />
                <p>{producto.description}</p>
                <Counter handleEjemplo={handleEjemplo} stock={producto.stock} />
                <Button variant="solid" color="primary" onClick={handleAddToCart}>Agregar a carrito</Button>
            </Flex>
            <Flex vertical align="center">
                <Image
                    width={400}
                    src={producto.images[0]}
                />
                <Flex align="center" vertical>
                    <Rate allowHalf defaultValue={producto.rating} disabled tooltips={['pesimo', 'bad', 'normal', 'piola', 'god']} />
                    <p>{producto.rating}</p>
                </Flex>
            </Flex>
        </Flex> */}