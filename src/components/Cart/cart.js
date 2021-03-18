import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCart, increaseCart, decreaseCart} from '../../Redux/action';


class Cart extends Component{

    Remove =(id)=>{
        this.props.removeCart(id);
    }
    increase=(id)=>{
        this.props.increase(id);
    }
    decrease=(id)=>{
        this.props.decrease(id);
    }

    render(){
        let addedItems = this.props.product.length ? 
        (
            this.props.product.map(item=>{
                return(
                    <div className="cartLayout">
                        <li key={item.id}>
                            <div><img className="item-image" src={item.image} alt={item.title}/></div>
                            <div>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <span><button className="q-btn" onClick={()=>this.increase(item.id)}>+</button></span><p><b>{item.quantity}</b></p><span><button className="q-btn" onClick={()=>this.decrease(item.id)}>-</button></span>
                            </div>
                            <button className="remove-btn" onClick={()=>this.Remove(item.id)}>Remove</button>
                        </li>
                    </div>
                )
            })
        ):
        (
            <p>Your Cart is Empty</p>
        )
        console.log(this.props)
        return(
            <div>
                <h3>My Order</h3>
                {addedItems}
            </div>

        )
    }
}
 const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (id) => {
            dispatch(removeCart(id))
        },
        increaseCart: (id) => {
            dispatch(increaseCart(id))
        },
        decreaseCart: (id) => {
            dispatch(decreaseCart(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);