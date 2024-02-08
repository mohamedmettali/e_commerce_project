import Modal from 'react-modal';
import { useState } from "react"
import { updateContact } from '../Redux/actions';
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditProduct = ({el}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [name, setName] = useState(el.name)
    const [description, setDescription] = useState(el.description)
    const [price, setPrice] = useState(el.price)
    const [stockQuantity, setStockQuantity] = useState(el.stockQuantity)

    const dispatch = useDispatch()
  

    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

const updateC = () => {
 
    const updatedProduct = {
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
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" placeholder="full name" onChange={(e)=> {setName(e.target.value)}}
        value={fullName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>description</Form.Label>
        <Form.Control type="description" placeholder="description" onChange={(e)=> {setDescription(e.target.value)}} 
          value={email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="phone number" onChange={(e)=> {setPrice(e.target.value)}}
          value={phoneNumber} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Stock Quantity</Form.Label>
        <Form.Control type="number" placeholder="stockQuantity" onChange={(e)=> {setStockQuantity(e.target.value)}}
          value={birthdate} />
      </Form.Group>

      <Button variant="success" onClick={updateC} >Update Product</Button>

     
    </Form>

    <Button variant="danger" onClick={closeModal}>close</Button>
    </Modal>
  </div>

)


}

export default EditProduct