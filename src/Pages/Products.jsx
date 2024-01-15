import React, { useCallback, useEffect, useState } from 'react'
import TableComponent from '../Components/TableComponent'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Api from '../GlobalApi/globalapi'

const ProductsPage = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const navigate=useNavigate()

    const  getData=useCallback(async () => {
        const {data}=await axios.get(`http://localhost:2300/p/products?page=${page}`)
        setData(data)
    }
    )


useEffect(()=>{
    getData()
},[page])



const previousPage = () => {
    if(page>1){

        setPage(page-1)
    }else{
        alert("cant go back anymore")
    }
}
const nextPage = () => {
    if(page<11){

        setPage(page+1)
    }else{
        alert("cant go any further")
    }
}


const editProduct = (id) =>{
    navigate(`/edit-product/${id}`)
}


const deleteProduct = async (id) =>{
    const {data}=await axios.delete(`${Api}/p/products/${id}`)
   alert(data)
   getData()
  
}

const editCategory = (id) =>{
    navigate(`/edit-category/${id}`)
}

const deleteCategory =async (id) =>{
    const {data}=await axios.delete(`${Api}/c/categories/${id}`)
    alert(data)
    getData()
   
}



  return (
    <div>
        <TableComponent data={data} editCategory={editCategory} editProduct={editProduct} deleteCategory={deleteCategory} deleteProduct={deleteProduct} />
        <div className='pagination_container'>
        <button onClick={previousPage}>prev</button>
        <button onClick={nextPage} >Next</button>

        </div>
    </div>
  )
}

export default ProductsPage