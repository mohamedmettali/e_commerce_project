import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions";
import { Link } from "react-router-dom";

const AddProduct=() => {

const [imageURL, setImageURL] = useState("")
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState()
const [stockQuantity, setstockQuantity] = useState()

const dispatch = useDispatch()
const navigate= useNavigate()

const add = () => {
    const newProduct = {
imageURL,
name,
description,
price,
stockQuantity

    }
dispatch(addProduct(newProduct))
alert ("product added")
navigate("/")
}

return (

    <>
  <Form>
       
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" placeholder=" name" onChange={(e)=> {setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=> {setDescription(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" onChange={(e)=> {setPrice(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>stockQuantity</Form.Label>
        <Form.Control type="number" placeholder="birthdate" onChange={(e)=> {setstockQuantity(e.target.value)}} />
      </Form.Group>

      <Button variant="success" onClick={add}>Add Contact</Button>

     <Link to ={"/"}>
      <Button variant="danger">Cancel</Button>
      </Link>
    </Form>
    </>
    )
}

export default AddProduct;