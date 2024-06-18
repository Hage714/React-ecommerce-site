import React, { useState } from 'react'
import AddToCart from './AddToCart';

const ProductCard = ({product}) => {
const [showCartForm, setShowCartForm] = useState(false);

const handleShowCartForm = () => {
    setShowCartForm(true);
}

  return (
    <div className='col-lg-4 col-sm-6 mb-3 mb-sm-0 mb-lg-2' key={product.id}>
        <div className='card'>
              <img src={product.img} className="card-img-top" alt="..." />
            <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>Available: {product.quantity}</p>
                <p className='card-text'>Price: {product.price}</p>
                <button className='btn btn-primary' onClick={setShowCartForm}>Add to cart</button>
                {showCartForm && <AddToCart />}
            </div>
        </div>
    </div>
  )
}

export default ProductCard
