import React, { Component } from 'react';
import Header from "../Header/Header";
import menu_data from "../../Data/manu_data.json";
import "./OrderSummary.css";
import TotalCost from "../TotalCost/TotalCost";
import "../TotalCost/TotalCoast.css";
class OrderSummary extends Component {
constructor(props) {
    super(props);
    this.state={
        cart: [],
    }
}

    
componentDidMount(){
    var selectedIds = this.getItem();
    var orderCart = menu_data.items.filter( item => selectedIds.indexOf(item.id)!==-1);
    console.log(orderCart);

    this.setState({
        cart : orderCart
    })
}

getItem(){
   return JSON.parse(localStorage["Storage_id_array"])
}


total()
{
   var total = this.state.cart.reduce((prev, item) => item.price + prev,0);
   console.log(total);
   return total;
   
}

    render() {
        return (
            <div>
                 <Header />
                 
                 <div className="Main_content">
                 

                 <div className="total">
                    <h1 className="totalHead">Total</h1>
                    
                    <div>
                        
                        {this.state.cart.map( selectItem =>(
                            <div className="perItem">
                            
                            <div className="itemPrice">
                            <p>{selectItem.price}</p> 
                            </div>
                           
                            </div>
                            
                        ))}

                        <div className="itemPrice">
                            <p>Total : {this.total()}</p> 
                            </div>
                    </div>
                </div>





                     <h1 className="OrderHead">Order Summary:</h1>
                     <div className="order_detail">
                     {this.state.cart.map( element =>(
                         <div className="selectedItem">
                         <p>{element.item_Name}</p>
                         <p>{element.description}</p>
                         <p>{element.price}</p>
                         </div>
                     ))}
                     </div>
                 </div>
            </div>
        );
    }
}

export default OrderSummary;