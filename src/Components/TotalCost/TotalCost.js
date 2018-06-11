import React, { Component } from 'react';
import "./TotalCoast.css";
class TotalCost extends Component {

    get(){
        console.log (this.props.cart)
    }

    render() {
        return (
            <div>
                <div className="total">
                    <h1 className="totalHead">Total Coast</h1>
                    
                    <div>
                        
                        {this.props.cart.map( selectItem =>(
                            <div className="perItem">
                            <div className="itemName">
                            <p>{selectItem.item_Name}</p> 
                            </div>
                            <div className="itemPrice">
                            <p>{selectItem.price}</p> 
                            </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalCost;