import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`http://127.0.0.1:8000/getItem/${id}`).then(({data})=>{
      setProducts(data)
    }).catch(({response:{data}})=>{
    })
  }
  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', products.name)
    formData.append('price', products.price)
    for (var value of formData.values()) {
      console.log(value); 
   }
   
  
    // await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({data})=>{
    //   navigate("/")
    // }).catch(({response})=>{
    //   if(response.status===422){
    //     setValidationError(response.data.errors)
    //   }else{
    //   }
    // })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Product</h4>
              <hr />
              <div className="form-wrapper">
                <Form onSubmit={updateProduct}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={products.name} onChange={(event)=>{
                              setProducts(products.name = event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                      <Form.Group controlId="Name">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="text" value={products.price} onChange={(event)=>{
                              setProducts(products.price = event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}