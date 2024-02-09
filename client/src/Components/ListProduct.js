import {getProducts} from "../Redux/actions"
import ProductCard from "./ProductCard";
import { useDispatch,useSelector } from 'react-redux';
import {React,useEffect} from 'react';

const ListProduct = () => {
const dispatch = useDispatch()
const products = useSelector((state)=> state.products.data)
 
useEffect(()=>{
    dispatch(getProducts())
}, [])

return(
<div style={{display: "flex", texWrap: "wrap"}}>
{
products && 
products.map((el)=> <ProductCard el={el}/>)

}
</div>
)
}
export default ListProduct;