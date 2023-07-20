import React from 'react'
import ProductCard from './ProductCard'


export default function ProductList({itemList}) {
    // console.log("hello")
    const productList = itemList.map((item) => (
        <ProductCard key={item.id} item={item}/>
    ))

  return (
    <div className="product-list">
        <h2></h2>
        <div>
            {productList}
        </div>
    </div>
  )
}
