import React, {Component} from 'react';
import Product from "./Product";
import Title from "./Title";


import {ProductConsumer} from '../context';
export default class ProductList extends Component{

    constructor(props){
        super(props);

       
        this.state = {
            suggestions:[],
            text:'',
        };
    
    }
    
     onTextChanged = (e) => {
         const {items}= this.props;
        const value = e.target.value;
        let suggestions = [];
        if(value.length>0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions =items.sort().filter(v=>regex.test(v));
        }
        this.setState(() =>({suggestions,text:value}));
       
}

   suggestionSelected(value){
 this.setState(()=>({
     text:value,
     suggestions:[],
 }

 ))
 }

  renderSuggestions(){
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
               {suggestions.map((item) => <li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
                 </ul> 
        );
    }
    
    
    render(){
        const { text } =this.state;
        return(
           
            <React.Fragment>
             
            
                <div className="py-5"></div>
                <div className="container">

              
                <Title name="ippPhone" title=" products" />  
           
                <div className="row">

                   <ProductConsumer>
                  
                       {value=>{
                    return value.products.map(product =>{
                        return  <Product key ={product.id} product={product}
                        />;
                    } );
                       }}
                       </ProductConsumer>
                      
                       
                  </div>
                  </div>
          
            
         </React.Fragment>
              // <Product />
            
            );
    }
}