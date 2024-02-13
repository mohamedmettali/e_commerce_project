import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions";
import { Link } from "react-router-dom";
import axios from "axios";

const AddProduct=() => {

const [image, setImage] = useState("")
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState()
const [stockQuantity, setstockQuantity] = useState()
const [uploading, setUploading] = useState(false);

const dispatch = useDispatch()
const navigate= useNavigate()

const add = () => {
    const newProduct = {
image,
name,
description,
price,
stockQuantity
    }
dispatch(addProduct(newProduct))
console.log("new :", newProduct)
alert ("product added")
navigate("/")
}



const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  setUploading(true);
  axios
    .post("/products/", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      setImage(response.data);
      setUploading(false);
    })
    .catch((err) => {
      console.log(err);
      setUploading(false);
    });
};


return (

    <>
  <Form>
  <>
                {image ? (
                  <img
                    src={image}
                    width="100%"
                    style={{ margin: "8px 0" }}
                    height="150px"
                    alt="product"
                  />
                ) : (
                  <div style={{ margin: "8px 0" }}>
                    {!uploading ? "Upload Image For Profile" : "Loading ..."}
                  </div>
                )}
                <div>
                  Select File
                  <input
                    accept="image/*"
                    type="file"
                    onChange={uploadProfileImage}
                  />
                </div>
              </>
      
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
        <Form.Control type="text" placeholder="Price" onChange={(e)=> {setPrice(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>stockQuantity</Form.Label>
        <Form.Control type="text" placeholder="stockQuantity" onChange={(e)=> {setstockQuantity(e.target.value)}} />
      </Form.Group>

      <Button variant="success" onClick={add}>Add Product</Button>

     <Link to ={"/"}>
      <Button variant="danger">Cancel</Button>
      </Link>
    </Form>
    </>
    )
}

export default AddProduct;