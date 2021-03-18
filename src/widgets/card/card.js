import React from "react";
import "./card.css";
import { addToCart } from '../../Redux/action';
import { connect } from 'react-redux';



class Card extends React.Component  {

  Add = (id) => {
     this.props.addToCart(id);
     console.log('ADD ITEMS',id);
  }




  render(){
  const fetchData = (menu,idMain) => {
    const data = menu.find((item) => {
      console.log('Menu item',item.product)
        return item.id === idMain
    });


    console.log(data);
    if (data) {
      return (
          data.product.map((item)=>{
              return(
                  <div key={item.id} className="container">
                      <div className="image" style={{background: `url(/images/product/${item.image})`,height:'325px',width:'100%',backgroundSize:'contain',backgroundPositionX:'center'}}></div>
                      <div className="card-title">{item.title}</div>
                      <div className="description">{item.body}</div>
                      <div className="price">{item.price}</div>
                      <button onClick={()=>this.Add(item.id)} className="card-btn">Add to Cart</button>
                  </div>
              )
          })
      )
    }
  };

  return (
    <div className="grid">
      {fetchData(this.props.menu, this.props.no)}
    </div>
  );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (id) => {
    dispatch(addToCart(id));
  }
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Card);
