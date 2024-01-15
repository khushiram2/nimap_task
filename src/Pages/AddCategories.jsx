import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../GlobalApi/globalapi'

const AddCategories = ({Mode}) => {
    const [categoryData, setCategoryData] = useState({
        category_name:""
    })
    const navigate=useNavigate()
const {id}=useParams()
    useEffect(() => {
    if(Mode==="edit"){
        const getCategoryById = async () => {
            const {data}=await axios.get(`${Api}/c/categories/${id}`)
            setCategoryData(data[0])
        }
        getCategoryById()
    }
    }, [])

    const handleChange = (e) => {
        setCategoryData({
            [e.target.name]:e.target.value
        })
    }
    

    const handleSubmit = async () => {
        if(Mode==="edit"){
            const {data}=await axios.put(`${Api}/c/categories/${id}`,categoryData)
            alert(data)
            navigate("/")
        }
        if(Mode==="add"){
            await axios.post(`${Api}/c/categories`,categoryData)
            alert("Category added")
            navigate("/")
        }
    }
    
  return (

    <div style={{ height: "calc(100vh - 500px)", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ height: "300px", background: "gray", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <label htmlFor="category_name">Category Name</label>
        <input type="text" value={categoryData?.category_name} name='category_name' onChange={handleChange} />
        <Button variant='contained' onClick={handleSubmit} >Submit</Button>
        </div>
    </div>
  )
}

export default AddCategories