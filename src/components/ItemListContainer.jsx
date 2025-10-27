
export default function ItemListContainer() {
  const url = `https://dummyjson.com/products/`
  fetch(url)
    .then(data => data.json())
    .then((data) => {
      const result = data.products
      console.log(result);

      return (
        result.forEach((_, i) => {

          <div >
            <img src={result[i].images} alt="Producto" />
            <h2>{result[i].title}</h2>
            <p >$ {result[i].price}</p>
            <button >Agregar al carrito</button>
          </div>

        })
      );



    })



}
