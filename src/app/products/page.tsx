import React from 'react'

const Products = () => {

  const allProducts = [
    {id: 1, name: "High Heels", price: 5000, description: "Elegance meets sophistication", image: "/sandal1.png"},
    {id: 2, name: "Wedge Heels", price: 7000, description: "Super Comfy Wedge", image: "/sandal2.jpg"},
    {id: 3, name: "Flat Elegance", price: 4000, description: "Comfort and style combined", image: "/sandal3.jpg"},
    {id: 4, name: "Black Sandal", price: 5000, description: "Casual comfort for every step", image: "/gents1.jpeg"},
    {id: 5, name: "Brown Shoes", price: 9000, description: "Classic design meets durability", image: "/gents2.jpeg"},
    {id: 6, name: "Black Shoes", price: 8000, description: "Slip into effortless style", image: "/gents3.jpg"},
  ]
  return (
    <div>
      <div className='all-products'>
        {allProducts.map((allProducts) =>(
        <div key={allProducts.id} className='foot-wear'>
          <img src={allProducts.image} alt={allProducts.name} />
          <h3>{allProducts.name}</h3>
          <p>{allProducts.description}</p>
          <div className='price'>${allProducts.price}</div>
          <button>Add to cart</button>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Products