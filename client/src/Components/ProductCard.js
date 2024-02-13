import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteProduct, fetchUserImage } from '../Redux/actions';
import EditProduct from './EditProduct';
import {useEffect} from 'react';


const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  const deleteC = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      dispatch(deleteProduct(el._id));
    }
  };


  useEffect(() => {
    if (el._id) {
      // Assuming you have the user's ID available in the Redux state
      dispatch(fetchUserImage(el._id));
    }
  }, [dispatch, el._id]);


  const fullImagePath = `${process.env.REACT_APP_BACKEND_URL}/${el.image}`;


  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>

      {el.image ? (
          <img alt="User Profile" src={fullImagePath} />
        ) : (
          <img alt="User Profile" />
        )}
      <Card.Title>{el.image}</Card.Title>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {el.description} <br />
          <strong>Price:</strong> {el.price} <br />
          <strong>Stock Quantity:</strong> {el.stockQuantity}
        </Card.Text>
        <EditProduct el={el} />
        <Button variant="danger" onClick={deleteC}>Delete product</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;