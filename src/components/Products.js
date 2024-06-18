import React from 'react'
import { products } from './products_data'
import ProductCard from './ProductCard';

const Products = () => {
  console.log(products);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />

        })}
      </div>
    </div>


  )
}

export default Products
