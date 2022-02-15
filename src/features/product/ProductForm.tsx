import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks'
import { product } from './productSlice';
import {
    updateProduct,
    createProduct,
} from './productSlice'
import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const ProductForm = ({action, toggleFunction = null, productData = null}) => {
    
    const [product, setProduct] = useState<product>({
        sku: '', 
        name: '',
        shortDescription: '',
        description: '',
        image: '',
        category: '',
        price: 0,
        brand: '',
        serial: '',
        family: '',
        engine: '',
        supplier: '',
        status: true,
    })

    useEffect(() => {
        if(productData){
            setProduct({
                sku: productData.sku, 
                name: productData.name,
                shortDescription: productData.shortDescription,
                description: productData.description,
                image: productData.image,
                category: productData.category,
                price: productData.price,
                brand: productData.brand,
                serial: productData.serial,
                family: productData.family,
                engine: productData.engine,
                supplier: productData.supplier,
                status: productData.status,
            })
        }
    }, [productData])

    const  dispatch = useAppDispatch()

    const onFieldsChange = event => {
        event.preventDefault()
        const value = event.target.value
        setProduct({
            ...product,
            [event.target.name]: value
        })
    }

    const saveProduct = e =>{
        if (action === 'updateProduct') {
            try {
                dispatch(updateProduct(product))
                toggleFunction(false)
                alert("Updated Successfully!")
            } catch (error) {
                return error.message
            }
            
        }
        if(action === 'createProduct') {
            try {
                dispatch(createProduct(product))
                setProduct({
                    sku: '', 
                    name: '',
                    shortDescription: '',
                    description: '',
                    image: '',
                    category: '',
                    price: 0,
                    brand: '',
                    serial: '',
                    family: '',
                    engine: '',
                    supplier: '',
                    status: true,
                })
                toggleFunction(0)
                alert("Saved successfully!")
            } catch (error) {
                return error.message
            }
            
        }
    } 

    return (
        <div className="bg-white p-4 rounded-md mt-8">
            <h2 className="text-3xl mb-8 text-blue-500">Product</h2>
            <Box 
                component="form"
                className="flex flex-col gap-4"

            >
                <TextField id="sku" name="sku" value={product.sku} onChange={onFieldsChange} label="SKU" variant="outlined" />
                <TextField id="name" name="name" value={product.name} onChange={onFieldsChange} label="Name" variant="outlined" />
                <TextField
                    id="shortDescription"
                    name="shortDescription"
                    value={product.shortDescription} onChange={onFieldsChange}
                    label="Short Description"
                    multiline
                    maxRows={4}
                    variant="outlined"
                />
                <TextField
                    id="description"
                    name="description"
                    value={product.description} onChange={onFieldsChange}
                    label="Multiline"
                    multiline
                    maxRows={4}
                    variant="outlined"
                />
                <TextField id="image" name="image" value={product.image} onChange={onFieldsChange} label="image" variant="outlined" />
                <TextField id="category" name="category" value={product.category} onChange={onFieldsChange} label="Category" variant="outlined" />
                <TextField id="price" name="price" value={product.price} onChange={onFieldsChange} label="Price" variant="outlined" />
                <TextField id="brand" name="brand" value={product.brand} onChange={onFieldsChange} label="Brand" variant="outlined" />
                <TextField id="serial" name="serial" value={product.serial} onChange={onFieldsChange} label="Serial" variant="outlined" />
                <TextField id="family" name="engine" value={product.family} onChange={onFieldsChange} label="Family" variant="outlined" />
                <TextField id="engine" name="engine" value={product.engine} onChange={onFieldsChange} label="Engine" variant="outlined" />
                <TextField id="supplier" name="supplier" value={product.supplier} onChange={onFieldsChange} label="Supplier" variant="outlined" />
                <Button onClick={saveProduct} className="text-blue-400 hover:text-white" variant="contained">Save</Button>
            </Box>
        </div>
    )
}

export default ProductForm