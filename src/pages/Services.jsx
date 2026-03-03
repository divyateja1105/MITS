import React from 'react'
import { Link } from 'react-router-dom'
const Services = () => {
    const products=[
        {id:1,name:'mobile',desc:'with call features'},
        {id:2,name:'laptop',desc:'with gaming features'},
        {id:3,name:'keyboard',desc:'with 4k display'},
    ]
  return (
    <div>
        <h1>Products</h1>
        {products.map((product)=>(
            <div key={product.id}>
            <h3 >{product.name}</h3>
            <Link to={`/services/${product.id}`}>View description</Link>
            </div>
        ))}
    </div>
  )
}

export default Services