import { useState } from 'react';
import {
    deleteProduct,
} from './productSlice'
import { useAppDispatch } from '../../app/hooks'
import ProductForm from './ProductForm';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ProductCard = (props) => {
    const [formToggle, setFormToggle] = useState(false)
    const  dispatch = useAppDispatch()

    const formToggleHandler = () => {
        setFormToggle(!formToggle)
    }

    const {
        sku, 
        name, 
        image = null
    } = props.product
    return(
        <>
        {
            formToggle
            ?<ProductForm action="updateProduct" toggleFunction={setFormToggle} productData={props.product} />
            :<Card className="my-8">
                
                {
                    image?
                        <CardMedia 
                            component="img"
                            className="max-h-32 object-contain"
                            image={`images/${image}`}
                        />
                    : <p className="text-center bg-gray-600 p-16 text-white">No picture</p>
                }
                
                <CardContent>
                    <ul>
                        <li>
                            <h3>{name}</h3>
                        </li>
                        <li>
                            <p>{sku}</p>
                        </li>
                    </ul>
                </CardContent>
                <CardActions>
                    <Button onClick={() => dispatch(deleteProduct(sku))} size="small">Delete</Button>
                    <Button onClick={formToggleHandler} size="small">Update</Button>
                </CardActions>
            </Card>
        }
        </>
    )
}

export default ProductCard