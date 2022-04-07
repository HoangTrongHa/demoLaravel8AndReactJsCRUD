import React, {Component} from 'react';
import {Link} from "react-router-dom";
import constHttp from "../const";
import { Redirect } from 'react-router';
import { useNavigate } from "react-router-dom";
class CreateItem extends Component {
  constructor(props){
    super(props);
    this.state = {productName: '', productPrice: ''};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(e){
    this.setState({
      productName: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      productPrice: e.target.value
    })
  }
  handleSubmit(e){
    let navigate = useNavigate();
    e.preventDefault();
    const products = {
      name: this.state.productName,
      price: this.state.productPrice
    }
    let uri = `${constHttp.http}/creat-new-item`
    axios.post(uri, products).then((response) => {
      // navigate("../Master", { replace: true });
    });
  }
  render() {
    return (
      <div>
        <h1>Create An Item</h1>
        <h2><Link className="nav-link" to="/">back to home</Link></h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange2} />
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">
                <Link to="/">Add Item</Link>
              </button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateItem;