import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import constHttp from "../const";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [products, setProducts] = useState({})
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`${constHttp.http}/getItem/${id}`).then(({data})=>{
      setProducts(data)
    }).catch(({response:{data}})=>{

    })
  }
  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', products.name)
    formData.append('price', products.price)
    console.log(products);

    await axios.post(`${constHttp.http}/edit-item/${id}`, formData).then(({data})=>{
      navigate("/")
    }).catch(({response})=>{
      if(response.status === 422){
        setValidationError(response.data.errors)
      }else{
      }
    })
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
                            <Form.Control type="text" 
                              defaultValue = {products.name}
                              onChange={(event)=>{
                              products.name = event.target.value
                              setProducts(products)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                      <Form.Group controlId="Price">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="text" 
                              defaultValue = {products.price}
                              onChange={(event)=>{
                              products.price = event.target.value
                              setProducts(products)
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