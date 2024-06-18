import React, { useState} from 'react'

const AddToCart = () => {
    const [productName, setProductName] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
  return (
    <form>
        <div>
            
            <input type='text' name='productName' className='form-control' hidden />
        </div>
        <div className='mb-2'>
            <label className='form-label'>Quantity</label>
            <input type='number' name='quantity' className='form-control' />
        </div>
        <div className='text-center'>
            <button type='submit' className='btn btn-success btn-sm'>Submit</button>
        </div>
    </form>
  )
}

export default AddToCart
