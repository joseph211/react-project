import React, {Component} from 'react';
import Product from "./Product";

export default class ProductList extends Component{
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
           
                <h1 className="display-3">404</h1>
                <h2>error</h2>
              <h3>page not Found</h3>
              <h2>the requested url <span className="text-danger">{this.props.location.pathname}</span>
                {" "}      was not found
              </h2>
             </div>  
             </div>
            </div>
            )
    }
}