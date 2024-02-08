import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { deleteProduct } from '../Redux/actions';
import EditContact from './EditContact';
 

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
        <Card.Title>{el.Name}</Card.Title>
        <Card.Text>
        {el.description}
        {el.price}
        {el.stockQuantity}
        </Card.Text>
        <EditContact el={el}/>
        <Button variant="danger" onClick={deleteC}>Delete contact</Button>
      </Card.Body>
  
      
      </div>
    );
  };
  
  export default ProductCard;