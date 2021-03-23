import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import '../widgets/menu/menu.css'
import { HomeData } from '../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Menu_container extends Component {
 
componentDidMount(){
   this.props.HomeData();
}
    render(){
        
        console.log(this.props)
      let addedItems =  this.props.product.products.length ?
        (this.props.product.products.map((item)=>{
            return(
                <ul  key={item.id}>
                    
                        <li className="Background"  style={{backgroundImage: `url('/images/home/${item.image}')`}}>
                        <Link style={{textDecoration: 'none'}} to={{
                        pathname: `/menu/${item.id}`
                    }}>
                        <div className="title_1">{item.title}</div>
                        </Link>            
                        </li>
                    
                </ul>    
            )
        })): null
        return(
        <div className="Menu">
            <h3>Our Products</h3>
            <hr style={{margin:'1.8em 12em',border:'1px solid black'}}/>
            <div className="grid">
                {addedItems} 
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return{
        product: state.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({HomeData},dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(Menu_container);