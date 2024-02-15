import Modal from 'react-modal';
import { useState } from "react"
import { get_auth_user, updateProduct } from '../Redux/actions';
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const EditProduct = ({el}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [image, setImage] = useState(el.image)
    const [name, setName] = useState(el.name)
    const [description, setDescription] = useState(el.description)
    const [price, setPrice] = useState(el.price)
    const [stockQuantity, setStockQuantity] = useState(el.stockQuantity)

    const dispatch = useDispatch()
    dispatch(get_auth_user())
  



    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

const updateC = () => {
 
    const updatedProduct = {
        image,
        name,
        description,
        price,
        stockQuantity
    }
    dispatch(updateProduct(el._id, updatedProduct))
  alert("Product updated succefully")  
  closeModal()


}    


return(
    <div>
    <Button variant="success"  onClick={openModal}>update product</Button>
    <Modal
      isOpen={modalIsOpen}
    >
     
      
      <div><h1>update Product</h1></div>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="image"  onChange={(e)=> {setImage(e.target.value)}} 
          value={image}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={(e)=> {setName(e.target.value)}}
        value={name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" onChange={(e)=> {setDescription(e.target.value)}} 
          value={description}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="phone number" onChange={(e)=> {setPrice(e.target.value)}}
          value={price} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Stock Quantity</Form.Label>
        <Form.Control type="text" placeholder="stockQuantity" onChange={(e)=> {setStockQuantity(e.target.value)}}
          value={stockQuantity} />
      </Form.Group>
      
    
      <Button variant="success" onClick={updateC} >Update Product</Button>
    

     
    </Form>

    <Button variant="danger" onClick={closeModal}>close</Button>
    </Modal>
  </div>

)


}

export default EditProduct