import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductCard from '../helper/ProductCard'

const url= 'http://dummyjson.com'

function Products() {
  const[product,setProduct] =  useState([])
  const params = useParams()

  const getProduct = async () =>{
 const res = await axios.get(`${url}/products/category/${params.catName}`)
 console.log('category based product=',res)
 setProduct(res.data.products)
  }

  useEffect(()=>{
    getProduct()
},[])
  
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className='display-3 text-success'>Product</h3>
            </div>
        </div>

        <div className="row">
          {
            product.map((item,index)=>{
              return <ProductCard key={index} {...item} />
            })
          }
        </div>
      
    </div>
  )
}

export default Products
