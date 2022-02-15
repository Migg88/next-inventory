import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
    getProducts,
    createProduct,
    updateProduct,
} from './productSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm';


const Products = () => {
    const  dispatch = useAppDispatch()
    const products = useAppSelector(getProducts)

    const [index, setIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setIndex(newValue);
    };
    
    return (
        <div className="flex flex-col items-center p-8 text-white">
            <h1 className="text-5xl">Inventory</h1>
            <div className="my-8">
                <div>
                    <Tabs  value={index} onChange={handleChange}  aria-label="Tabs">
                        <Tab label="Products" />
                        <Tab label="Add Product" />
                    </Tabs>
                </div>
                <div 
                    hidden={index !== 0}
                >
                    {
                        products&&
                            products.map(product => (
                                <ProductCard 
                                    key={product.sku} 
                                    product={product}
                                />
                            ))
                    }
                </div>
                <div 
                    hidden={index !== 1}
                >
                   <ProductForm action='createProduct' toggleFunction={setIndex} />
                </div>
                <button onClick={() => dispatch(createProduct({sku: "1", name: "balero"}))}>Send</button>
                <button onClick={() => dispatch(updateProduct({sku: "123", name: "banditaa"}))}>Update</button>
            </div>
        
        </div>
    )
}

export default Products