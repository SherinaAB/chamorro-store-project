import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ProductCard from './ProductCard';


export default function CategoryPage() {
    const [page ,setPage] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/category/${id}`)
            .then (response => response.json())
            .then (data => setPage(data))
    },[id])

    const productList = page.clothing?.map((item) => (
        <ProductCard key={item.id} item={item}
        />
    ))
// console.log(id)
  return (
    <div>{page.type} {productList}</div>
  )
}
