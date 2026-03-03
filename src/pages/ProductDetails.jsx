import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const {id} = useParams();
    const products=[
        {id:1,name:'mobile',desc:'with call features'},
        {id:2,name:'laptop',desc:'with gaming features'},
        {id:3,name:'keyboard',desc:'with 4k display'},
    ]
        const product=products.find((p)=>p.id===Number(id));
  return (
    <div>
        <h1>Product Details</h1>
        <h3>Name:{product.name}</h3>
        <p>Description:{product.desc}</p>
    </div>
  )
}

export default ProductDetails
