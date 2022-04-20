import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import constHttp from "../const";

export default function DisplayItem() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetchProducts() 
    },[])
    const fetchProducts = async () => {
        await axios.get(`${constHttp.http}/getListItem`).then(({data})=>{
            setProducts(data)
        })
    }
    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/create"}>
                    Create Product
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                products.length > 0 && (
                                    products.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.name}</td>
                                            <td>{row.price}</td>
                                            <td>
                                                <Link to={`/edit/${row.id}`} className='btn btn-success me-2'>
                                                    Edit
                                                </Link>
                                                {/* <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                    Delete
                                                </Button> */}
                                            </td>
                                        </tr>
                                    ))
                                )
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}