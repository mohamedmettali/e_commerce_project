import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../Redux/actions';

const ProductDescription = () => {
  const { id } = useParams();
    const products = useSelector(state => state.product);
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch()
  dispatch(getProduct(id))


  useEffect(()=> {
    console.log("Products:", products);
  console.log("ID:", id);
    if (products) {
      setProduct(products); 
      console.log(products)
    }
  },[products, id]);
  
  

  return (
    <div>
    <h3>Description</h3>
    {product ? (
      <p>{product.description}</p>
    ) : (
      <p>No description available</p>
    )}
  </div>
  );
};

export default ProductDescription;