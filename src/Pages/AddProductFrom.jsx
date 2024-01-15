import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../GlobalApi/globalapi';

const AddProductForm = ({ Mode }) => {
    const [formData, setFormData] = useState({});
    const [categories, setCategories] = useState([]);
    const [categoryId,setCategoryId]=useState(null)
    const { id } = useParams();
    const navigate=useNavigate()
    useEffect(() => {
        const getCategories = async () => {
            const { data } = await axios.get(`${Api}/c/categories`);
            setCategories(data);
        };

        if (Mode === "edit" && id) {
            const getProduct = async () => {
                const { data } = await axios.get(`${Api}/p/products/${id}`);
                setFormData(data[0]);
            };
            getProduct();
        } else {
            setFormData({});
        }

        getCategories();
    }, [Mode, id]);

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit =async () => {
        formData["category_id"]=categoryId
        if(Mode==="edit"){
            const {data}=await axios.put(`${Api}/p/products/${id}`,formData)
            alert(data)
            navigate("/")
        }
        if(Mode==="add"){
           const {data}=await axios.post(`${Api}/p/products`,formData)
            alert("product added at id "+data.product_id)
            navigate("/")
        }
    };

    return (
        <div style={{ height: "calc(100vh - 500px)", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: "300px", background: "gray", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <label htmlFor="product_name">Product Name</label>
                <input onChange={handleChange} name='product_name' value={formData?.product_name || ''} />
                <p> category : {formData?.category_name || ""} </p>
                <label htmlFor="category_name">Select Category</label>
                <select name='category_name' >
                    {categories?.map((e) => <option onClick={()=>setCategoryId(e.category_id)} key={e.category_id} value={e.category_name} >{e.category_name}</option>)}
                </select>
                <Button onClick={handleSubmit} variant='contained'>Submit</Button>
            </div>
        </div>
    );
};

export default AddProductForm;
