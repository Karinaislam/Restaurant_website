import React, { Component } from 'react';
import "./Menu2.css";
import Header from "../Header/Header";
import Appetizers from "../Appetizers/Appetizers";
import menu_data from "../../Data/manu_data.json";




class Menu2 extends Component {

constructor(props) {
    super(props);
    this.state={
        menu_item: [],
        cart: [],
        cartCount:{}

    }
    this.handelAddtoCart = this.handelAddtoCart.bind(this);
}



componentWillMount(){
    
    this.setState({
        menu_item: menu_data
    })
}

handelAddtoCart(order_item){
   
    var newCart =[...this.state.cart];
    newCart.push(order_item)

    var newCartCount = Object.assign({}, this.state.cartCount);
    var newCount = (newCartCount[order_item] || 0) + 1;
    newCartCount[order_item] = newCount;

    this.setState({
        cart: newCart,
        cartCount: newCartCount,

    });

   var id_array = newCart.map( (elm)=> elm.id);
   var JSONArray = JSON.stringify(id_array)
   
   localStorage.setItem("Storage_id_array", JSONArray );
  // console.log(JSON.parse(localStorage["Storage_id_array"]))
  
}

    render() {
       
        return (
            <div>
                <Header cartLength={this.state.cart.length} />
                <div className="main_content">
               
                <div className="menu2 menu_groups" >
                <a href="#appetizers"> Appetizers</a>
                <a href="#soups">Soups</a>
                <a href="#noodles">Noodles</a>
                <a href="#entrees">Entrees</a>
                <a href="#dessert">Dessert</a>
                <a href="#beverages">Beverages</a>
                </div>
              <div className="menu_discription"><Appetizers data={this.state.menu_item} handelAddtoCart={this.handelAddtoCart}/></div>
                </div>
               
           
                
            </div>
        );
    }
}

export default Menu2;