import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { deleteProduct } from '../Redux/actions';
import EditProduct from './EditProduct';
 

const ProductCard = ({ el }) => {
   
const dispatch = useDispatch()
const deleteC = () => {
const confirmDelete =window.confirm("are you sure?")
if (confirmDelete){
  dispatch(deleteProduct(el._id))
}
}
    return (
      <div>
        
      
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.description}
        {el.price}
        {el.stockQuantity}
        </Card.Text>
        <EditProduct el={el}/>
        <Button variant="danger" onClick={deleteC}>Delete product</Button>
      </Card.Body>
  
      
      </div>
    );
  };
  
  export default ProductCard;